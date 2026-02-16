const pranks = [
  {
    id: 'fail_hunger',
    emoji: '💀',
    messages: [
      '꽝! 오늘은 굶는날',
      '메뉴 RNG 실패… 공복 유지 권장',
      '오늘은 단식 챌린지 자동 시작됨',
    ],
  },
  {
    id: 'diet_mode',
    emoji: '💧',
    messages: [
      '다이어트 타임… 물 한잔 추천',
      '오늘 칼로리 절약 DAY (물 가능)',
      '배고픔도 자기관리입니다..',
    ],
  },
  {
    id: 'meeting_cancel',
    emoji: '💼',
    messages: [
      '오늘 점심은 회의입니다ㅠㅠ',
      '갑작스러운 미팅 소환… 식사 취소',
      '일정 충돌 발생 — 점심 자동 스킵',
    ],
  },
  {
    id: 'time_over',
    emoji: '⏰',
    messages: [
      '메뉴 고민하다 점심시간 종료',
      '메뉴선정에 실패하였습니다 time over',
      '저도 결정장애가 왔어요',
    ],
  },
];

/** 장난 확률 (10%) */
const PRANK_CHANCE = 0.10;

/**
 * 장난 이벤트를 랜덤 선택하고 메시지를 하나 뽑아 반환
 * @returns {{ id: string, emoji: string, message: string }}
 */
function pickRandomPrank() {
  const prank = pranks[Math.floor(Math.random() * pranks.length)];
  const message = prank.messages[Math.floor(Math.random() * prank.messages.length)];
  return { id: prank.id, emoji: prank.emoji, message };
}

/**
 * 장난 이벤트 발동 여부를 판단
 * @returns {boolean}
 */
function shouldPrank() {
  return Math.random() < PRANK_CHANCE;
}

module.exports = { pranks, PRANK_CHANCE, pickRandomPrank, shouldPrank };
