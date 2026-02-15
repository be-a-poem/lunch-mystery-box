require('dotenv').config();

const { App } = require('@slack/bolt');
const cron = require('node-cron');
const { pickRandomMenus } = require('./data/menus');
const { pickRandomTheme, generateLabels } = require('./data/themes');
const { renderClosedBox, renderOpenedBox } = require('./data/boxDesigns');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// ── 진행 중인 미스터리 박스 세션 저장소 ──
// key: `${channel}_${ts}` (메시지 고유 식별)
// value: { menus: [...], labels: [...], theme: {...}, opened: { 0: { user, menu }, ... } }
const sessions = new Map();

/**
 * 오늘 날짜 키 생성 (KST 기준)
 */
function getTodayKey() {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

/**
 * 미스터리 박스 메시지 블록 생성
 */
function buildMysteryBoxBlocks(theme, labels, opened = {}) {
  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🍱 오늘의 점심 미스터리 박스!',
        emoji: true,
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `🏷️ 오늘의 테마: *${theme.name}*`,
        },
      ],
    },
    { type: 'divider' },
  ];

  for (let i = 0; i < 4; i++) {
    if (opened[i]) {
      blocks.push(renderOpenedBox(i, labels[i], opened[i].menu));
    } else {
      blocks.push(renderClosedBox(i, labels[i]));
    }

    if (i < 3) {
      blocks.push({ type: 'divider' });
    }
  }

  const openedCount = Object.keys(opened).length;
  if (openedCount === 4) {
    blocks.push({ type: 'divider' });
    blocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '✅ 모든 상자가 열렸습니다! 맛있는 점심 되세요~ 🍽️',
        },
      ],
    });
  } else {
    blocks.push({ type: 'divider' });
    blocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `📊 ${openedCount}/4 상자 열림 — 상자를 눌러 오늘의 점심을 확인하세요!`,
        },
      ],
    });
  }

  return blocks;
}

/**
 * 미스터리 박스 메시지를 채널에 전송
 */
async function sendMysteryBox(channelId) {
  const dateKey = getTodayKey();
  const theme = pickRandomTheme(dateKey);
  const menus = pickRandomMenus(4);

  // 각 메뉴의 간접 키워드 + 테마 템플릿으로 이름표 생성 (스타일 중복 방지)
  const labels = generateLabels(menus, theme);

  const blocks = buildMysteryBoxBlocks(theme, labels);

  const result = await app.client.chat.postMessage({
    channel: channelId,
    text: '🍱 오늘의 점심 미스터리 박스가 도착했습니다!',
    blocks,
  });

  const sessionKey = `${channelId}_${result.ts}`;
  sessions.set(sessionKey, {
    menus,
    labels,
    theme,
    opened: {},
  });

  return result;
}

// ── /lunch 슬래시 커맨드 ──
app.command('/lunch', async ({ command, ack, respond }) => {
  await ack();
  await sendMysteryBox(command.channel_id);
});

// ── 상자 열기 버튼 핸들러 ──
app.action(/^open_box_\d$/, async ({ action, body, ack, client }) => {
  await ack();

  const boxIndex = parseInt(action.action_id.replace('open_box_', ''), 10);
  const channel = body.channel.id;
  const ts = body.message.ts;
  const sessionKey = `${channel}_${ts}`;
  const session = sessions.get(sessionKey);

  if (!session) {
    console.log(`[open_box_${boxIndex}] 세션 없음: ${sessionKey}`);
    return;
  }

  if (session.opened[boxIndex]) {
    return;
  }

  // 즉시 열림 표시 (같은 상자 중복 클릭 방지)
  session.opened[boxIndex] = { menu: session.menus[boxIndex] };

  // 큐 기반 직렬 업데이트 (클릭이 절대 무시되지 않음)
  const doUpdate = async () => {
    const blocks = buildMysteryBoxBlocks(session.theme, session.labels, session.opened);
    await client.chat.update({
      channel,
      ts,
      text: '🍱 오늘의 점심 미스터리 박스!',
      blocks,
    });
    console.log(`[open_box_${boxIndex}] 상자 열림 (${session.menus[boxIndex].name})`);
  };

  session.updateQueue = (session.updateQueue || Promise.resolve())
    .then(doUpdate)
    .catch((error) => {
      console.error(`[open_box_${boxIndex}] 업데이트 실패:`, error.data || error.message);
    });
});

// ── 크론 스케줄링 (평일 오전 9시 KST = UTC 0시) ──
const cronSchedule = process.env.CRON_SCHEDULE || '0 0 * * 1-5';
const lunchChannelId = process.env.LUNCH_CHANNEL_ID;

if (lunchChannelId) {
  cron.schedule(cronSchedule, async () => {
    try {
      await sendMysteryBox(lunchChannelId);
      console.log(`[${new Date().toISOString()}] 미스터리 박스 전송 완료`);
    } catch (error) {
      console.error(`[${new Date().toISOString()}] 미스터리 박스 전송 실패:`, error);
    }
  });
  console.log(`크론 스케줄 등록: ${cronSchedule} → #${lunchChannelId}`);
}

// ── 앱 시작 ──
(async () => {
  await app.start();
  console.log('⚡ 점심 미스터리 박스 봇이 실행 중입니다!');
})();
