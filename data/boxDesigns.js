/**
 * 상자 디자인 모듈
 *
 * 현재는 이모지 + 텍스트 조합으로 상자를 표현합니다.
 * 나중에 이미지(image_url 블록)로 교체하려면
 * renderClosedBox / renderOpenedBox만 수정하면 됩니다.
 */

const boxStyles = [
  { closed: '🎁', opened: '🎉', color: '#E74C3C' },
  { closed: '🎀', opened: '🎊', color: '#3498DB' },
  { closed: '📦', opened: '✨', color: '#2ECC71' },
  { closed: '🧧', opened: '🏆', color: '#F39C12' },
];

/**
 * 닫힌 상자 블록을 생성 (Slack Block Kit 형식)
 * @param {number} index - 상자 인덱스 (0~3)
 * @param {string} label - 이름표 텍스트
 * @returns {object} Slack section block
 */
function renderClosedBox(index, label) {
  const style = boxStyles[index % boxStyles.length];
  return {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `${style.closed} *미스터리 박스 ${index + 1}*\n📝 _"${label}"_`,
    },
    accessory: {
      type: 'button',
      text: {
        type: 'plain_text',
        text: `${style.closed} 열어보기`,
        emoji: true,
      },
      action_id: `open_box_${index}`,
      style: 'primary',
    },
  };
}

/**
 * 열린 상자 블록을 생성 (Slack Block Kit 형식)
 * @param {number} index - 상자 인덱스 (0~3)
 * @param {string} label - 이름표 텍스트
 * @param {object} menu - { name, emoji }
 * @returns {object} Slack section block
 */
function renderOpenedBox(index, label, menu) {
  const style = boxStyles[index % boxStyles.length];
  return {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: [
        `${style.opened} *미스터리 박스 ${index + 1}* — _열림!_`,
        `📝 _"${label}"_`,
        `${menu.emoji} *${menu.name}*`,
      ].join('\n'),
    },
  };
}

module.exports = { boxStyles, renderClosedBox, renderOpenedBox };
