/**
 * 상자 디자인 모듈
 *
 * GitHub에 업로드된 box-images/split 이미지를 사용합니다.
 * 매 세션마다 랜덤으로 하나의 이미지 세트(같은 원본의 4컷)를 선택합니다.
 */

const BASE_URL =
  'https://raw.githubusercontent.com/be-a-poem/lunch-mystery-box/main/box-images/split';

/**
 * 가중치 기반으로 랜덤 이미지 세트(4장)를 선택
 * - 원본 1~7: 균등 (각 ≈11.4%)
 * - 원본 8, 9: 각 10%
 */
function pickBoxImageSet() {
  const rand = Math.random() * 100;
  let id;
  if (rand < 80) {
    id = Math.floor(Math.random() * 7) + 1;
  } else if (rand < 90) {
    id = 8;
  } else {
    id = 9;
  }
  return [1, 2, 3, 4].map((n) => `${BASE_URL}/${id}_${n}.png`);
}

/**
 * 닫힌 상자 블록 배열을 생성 (이미지 + 버튼)
 * @param {number} index - 상자 인덱스 (0~3)
 * @param {string} label - 이름표 텍스트
 * @param {string} imageUrl - 상자 이미지 URL
 * @returns {object[]} Slack blocks
 */
function renderClosedBox(index, label, imageUrl) {
  return [
    {
      type: 'image',
      image_url: imageUrl,
      alt_text: `미스터리 박스 ${index + 1}`,
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `🎁 *미스터리 박스 ${index + 1}*\n📝 _"${label}"_`,
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: '🎁 열어보기',
          emoji: true,
        },
        action_id: `open_box_${index}`,
        style: 'primary',
      },
    },
  ];
}

/**
 * 열린 상자 블록 배열을 생성 (이미지 + 결과 텍스트)
 * @param {number} index - 상자 인덱스 (0~3)
 * @param {string} label - 이름표 텍스트
 * @param {object} menu - { name, emoji }
 * @param {string} imageUrl - 상자 이미지 URL
 * @returns {object[]} Slack blocks
 */
function renderOpenedBox(index, label, menu, imageUrl) {
  return [
    {
      type: 'image',
      image_url: imageUrl,
      alt_text: `미스터리 박스 ${index + 1} — ${menu.name}`,
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: [
          `🎉 *미스터리 박스 ${index + 1}* — _열림!_`,
          `📝 _"${label}"_`,
          `${menu.emoji} *${menu.name}*`,
        ].join('\n'),
      },
    },
  ];
}

module.exports = { pickBoxImageSet, renderClosedBox, renderOpenedBox };
