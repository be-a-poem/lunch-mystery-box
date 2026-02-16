require('dotenv').config();

const { App } = require('@slack/bolt');
const cron = require('node-cron');
const { pickRandomMenus } = require('./data/menus');
const { pickRandomTheme, generateLabels } = require('./data/themes');

// ── 앱 초기화 ──

const { LogLevel } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
});

// ── 세션 ──

const sessions = new Map();
const NUM = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'];

// ── 블록 생성 ──

function buildBlocks(labels, opened) {
  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: '🎁 오늘의 미스터리 박스!', emoji: true },
    },
  ];

  for (let i = 0; i < 4; i++) {
    if (opened[i]) {
      blocks.push({
        type: 'section',
        text: { type: 'mrkdwn', text: `${NUM[i]} *${opened[i].name}*` },
      });
    } else {
      blocks.push({
        type: 'section',
        text: { type: 'mrkdwn', text: `${NUM[i]} "${labels[i]}"` },
        accessory: {
          type: 'button',
          text: { type: 'plain_text', text: '열어보기', emoji: true },
          action_id: `open_box_${i}`,
          style: 'primary',
        },
      });
    }
  }

  return blocks;
}

// ── 전송 ──

function todayKey() {
  return new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);
}

async function send(channel) {
  const menus = pickRandomMenus(4);
  const labels = generateLabels(menus, pickRandomTheme(todayKey()));
  const opened = {};

  const res = await app.client.chat.postMessage({
    channel,
    text: '오늘의 미스터리 박스!',
    blocks: buildBlocks(labels, opened),
  });

  sessions.set(`${channel}_${res.ts}`, { menus, labels, opened });
}

// ── /lunch ──

app.command('/lunch', async ({ command, ack }) => {
  ack();
  send(command.channel_id).catch(console.error);
});

// ── 상자 열기 ──

app.action(/^open_box_\d$/, async ({ action, body, ack, client }) => {
  ack();

  const idx = Number(action.action_id.at(-1));
  const channel = body.channel.id;
  const ts = body.message.ts;
  const session = sessions.get(`${channel}_${ts}`);

  if (!session || session.opened[idx]) return;

  session.opened[idx] = session.menus[idx];

  client.chat
    .update({
      channel,
      ts,
      text: '오늘의 미스터리 박스!',
      blocks: buildBlocks(session.labels, session.opened),
    })
    .catch((err) => {
      delete session.opened[idx];
      console.error(`[box ${idx}]`, err.data || err.message);
    });
});

// ── 크론 (평일 09:00 KST = 00:00 UTC) ──

const CRON = process.env.CRON_SCHEDULE || '0 0 * * 1-5';
const CH = process.env.LUNCH_CHANNEL_ID;

if (CH) {
  cron.schedule(CRON, () => send(CH).catch(console.error));
  console.log(`크론: ${CRON} → #${CH}`);
}

// ── 시작 ──

(async () => {
  // 소켓 모드 핑/퐁 타임아웃 늘리기 (기본 5초 → 15초)
  if (app.receiver?.client) {
    app.receiver.client.clientPingTimeoutMS = 15000;
    app.receiver.client.serverPingTimeoutMS = 60000;
  }
  console.log('연결 중...');

  // 디버그: WebSocket 이벤트 모니터링
  const client = app.receiver.client;
  client.on('connected', () => console.log('[DEBUG] connected'));
  client.on('connecting', () => console.log('[DEBUG] connecting'));
  client.on('disconnected', () => console.log('[DEBUG] disconnected'));
  client.on('authenticated', () => console.log('[DEBUG] authenticated'));
  client.on('ready', () => console.log('[DEBUG] ready'));
  client.on('error', (e) => console.log('[DEBUG] error:', e.message || e));
  client.on('close', () => console.log('[DEBUG] close'));
  client.on('unable_to_socket_mode_start', (e) => console.log('[DEBUG] unable_to_start:', e));

  await app.start();
  console.log('봇 실행 중');
})();
