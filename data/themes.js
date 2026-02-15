const themes = [
  // 1
  { name: '운세풍', templates: [
    { style: 'short', text: '{keyword}의 기운...' },
    { style: 'short', text: '{keyword}. 운명이다.' },
    { style: 'story', text: '점성술사가 수정구슬에서 {keyword}을(를) 보았다' },
    { style: 'story', text: '오래된 점괘서 마지막 장에 {keyword}이(가) 적혀있었다' },
    { style: 'dialogue', text: '"오늘의 운세는... {keyword}이옵니다"' },
    { style: 'dialogue', text: '점쟁이가 속삭인다: "{keyword}을(를) 따르라"' },
    { style: 'exclamation', text: '대길! {keyword}의 기운이 충만하도다!' },
    { style: 'question', text: '{keyword}이(가) 당신의 운명일까?' },
    { style: 'question', text: '이 점괘를 믿겠는가... {keyword}...' },
  ]},
  // 2
  { name: '도발풍', templates: [
    { style: 'short', text: '{keyword}? 겁나면 패스해.' },
    { style: 'short', text: '{keyword}. 도전 or 치킨.' },
    { style: 'story', text: '전설에 따르면 {keyword}에 도전한 자만 살아남았다' },
    { style: 'story', text: '마지막 도전자는 {keyword} 앞에서 무릎을 꿇었다' },
    { style: 'dialogue', text: '"진짜 {keyword} 감당할 수 있어?"' },
    { style: 'dialogue', text: '"어디 한번 {keyword}을(를) 열어볼 테면 열어봐"' },
    { style: 'exclamation', text: '{keyword}에 올인하는 미친 선택!' },
    { style: 'question', text: '{keyword} 앞에서도 도망치지 않을 자신 있나?' },
    { style: 'question', text: '이 문 뒤에 {keyword}이(가) 있다면 열겠는가?' },
  ]},
  // 3
  { name: '감성풍', templates: [
    { style: 'short', text: '{keyword}... 그리운 맛.' },
    { style: 'short', text: '오늘따라 {keyword}.' },
    { style: 'story', text: '비 오는 창가에서 문득 {keyword}이(가) 떠올랐다' },
    { style: 'story', text: '오래된 사진첩을 넘기다 {keyword}의 기억을 만났다' },
    { style: 'dialogue', text: '"있잖아... 오늘 {keyword} 생각이 나"' },
    { style: 'exclamation', text: '{keyword}이(가) 위로해주는 오늘!' },
    { style: 'exclamation', text: '마음이 따뜻해지는 {keyword}의 순간!' },
    { style: 'question', text: '가끔은 {keyword}도 괜찮지 않을까?' },
    { style: 'question', text: '{keyword}이(가) 그리운 건 나뿐일까?' },
  ]},
  // 4
  { name: '힌트풍', templates: [
    { style: 'short', text: '힌트: {keyword}.' },
    { style: 'short', text: '{keyword}... 감 잡았지?' },
    { style: 'story', text: '누군가 메모를 남겼다: "{keyword}"' },
    { style: 'story', text: '풍문으로 들었는데 {keyword}이(가) 핵심이래' },
    { style: 'dialogue', text: '"이것만 알려줄게... {keyword}"' },
    { style: 'exclamation', text: '결정적 단서 발견: {keyword}!' },
    { style: 'question', text: '{keyword}이라는 힌트면 충분하지 않아?' },
    { style: 'question', text: '{keyword}... 뭔지 알 것 같아?' },
  ]},
  // 5
  { name: '날씨풍', templates: [
    { style: 'short', text: '{keyword} 날씨에 딱.' },
    { style: 'short', text: '{keyword} 같은 날.' },
    { style: 'story', text: '구름 사이로 {keyword}의 향이 내려왔다' },
    { style: 'story', text: '오늘 하늘이 {keyword}을(를) 허락한 날이다' },
    { style: 'dialogue', text: '"이 날씨엔 {keyword} 아니면 안 돼"' },
    { style: 'exclamation', text: '{keyword} 기온 급상승! 맛있는 날!' },
    { style: 'question', text: '이런 날엔 {keyword}이(가) 어울리지 않을까?' },
    { style: 'question', text: '{keyword} 분위기인 오늘, 뭘 먹을까?' },
  ]},
  // 6
  { name: '동물풍', templates: [
    { style: 'short', text: '{keyword}... 고양이도 안다.' },
    { style: 'short', text: '{keyword}. 곰도 깨어남.' },
    { style: 'story', text: '겨울잠 자던 곰이 {keyword} 냄새에 눈을 떴다' },
    { style: 'story', text: '숲속 동물들이 {keyword}을(를) 찾아 모여들고 있다' },
    { style: 'dialogue', text: '"멍멍! {keyword} 냄새 난다!"' },
    { style: 'exclamation', text: '호랑이도 반한 {keyword}의 향기!' },
    { style: 'question', text: '강아지 꼬리가 흔들리는 이유가 {keyword} 때문일까?' },
    { style: 'question', text: '{keyword}이라면 동물들도 줄 설 텐데?' },
  ]},
  // 7
  { name: '시간여행풍', templates: [
    { style: 'short', text: '{keyword}... 그 시절의 맛.' },
    { style: 'short', text: '1999년, {keyword}.' },
    { style: 'story', text: '타임머신이 멈춘 곳에서 {keyword}의 향기가 났다' },
    { style: 'story', text: '할머니 부엌에서 {keyword}이(가) 끓고 있었다' },
    { style: 'dialogue', text: '"미래에서 왔는데, {keyword}은(는) 아직도 있나요?"' },
    { style: 'exclamation', text: '추억 속에서 부활한 {keyword}!' },
    { style: 'question', text: '그때 그 {keyword}을(를) 다시 만날 수 있을까?' },
    { style: 'question', text: '100년 뒤에도 {keyword}은(는) 사랑받을까?' },
  ]},
  // 8
  { name: 'RPG풍', templates: [
    { style: 'short', text: '[레어] {keyword}의 검.' },
    { style: 'short', text: '{keyword} 던전 입장.' },
    { style: 'story', text: '어둠 속 보물상자를 열자 {keyword}의 빛이 새어나왔다' },
    { style: 'story', text: '용이 지키고 있던 동굴에서 {keyword}을(를) 발견했다' },
    { style: 'dialogue', text: '"용사여, {keyword}의 힘을 느껴라!"' },
    { style: 'dialogue', text: '"이 아이템은... {keyword}의 축복이 깃들어 있다"' },
    { style: 'exclamation', text: '전설급 드롭! {keyword}의 반지 획득!' },
    { style: 'question', text: '{keyword}의 던전에 입장할 준비가 되었는가?' },
    { style: 'question', text: '보스가 남긴 {keyword}... 집어 들겠는가?' },
  ]},
  // 9
  { name: '자신감풍', templates: [
    { style: 'short', text: '{keyword}. 실화임?' },
    { style: 'short', text: '{keyword} 안 먹으면 후회함.' },
    { style: 'story', text: '먹어본 사람은 모두 {keyword} 앞에서 감탄했다' },
    { style: 'story', text: '전문가 100명 중 99명이 {keyword}을(를) 추천했다' },
    { style: 'dialogue', text: '"아직도 {keyword}을(를) 안 먹어봤다고?"' },
    { style: 'exclamation', text: '{keyword}의 매력을 모르면 인생 손해!' },
    { style: 'question', text: '{keyword}이(가) 최고라는 걸 증명해볼까?' },
    { style: 'question', text: '오늘의 다크호스 {keyword}, 한번 믿어볼래?' },
  ]},
  // 10
  { name: '계절풍', templates: [
    { style: 'short', text: '{keyword}... 계절의 맛.' },
    { style: 'short', text: '이 계절엔 {keyword}.' },
    { style: 'story', text: '창밖에 낙엽이 지고 {keyword}의 계절이 왔다' },
    { style: 'story', text: '첫눈이 내리던 날, {keyword}의 따뜻함을 알았다' },
    { style: 'dialogue', text: '"이 계절엔 {keyword}을(를) 먹어야 제맛이지"' },
    { style: 'exclamation', text: '제철 맞은 {keyword}의 위엄!' },
    { style: 'question', text: '{keyword}이(가) 가장 맛있는 계절은 언제일까?' },
    { style: 'question', text: '이 바람에 {keyword}을(를) 그냥 지나칠 수 있어?' },
  ]},
  // 11
  { name: '영화풍', templates: [
    { style: 'short', text: '{keyword}. 클래식.' },
    { style: 'short', text: '오늘의 캐스팅: {keyword}.' },
    { style: 'story', text: '주인공이 마지막 장면에서 {keyword}을(를) 선택했다' },
    { style: 'story', text: '엔딩 크레딧이 올라가고 {keyword}의 향기만 남았다' },
    { style: 'dialogue', text: '"감독님, 이 장면엔 {keyword}이(가) 필요합니다"' },
    { style: 'exclamation', text: '반전! {keyword}이(가) 진짜 주인공이었다!' },
    { style: 'question', text: '이 영화의 결말이 {keyword}이라면 어떨까?' },
    { style: 'question', text: '{keyword}이(가) 등장하는 장면, 기대되지 않아?' },
  ]},
  // 12
  { name: '응원풍', templates: [
    { style: 'short', text: '{keyword} 먹고 파이팅!' },
    { style: 'short', text: '오늘도 {keyword}으로 힘내!' },
    { style: 'story', text: '지친 하루 끝에 {keyword}이(가) 기다리고 있었다' },
    { style: 'story', text: '힘든 오전을 버틴 당신에게 {keyword}을(를) 선물한다' },
    { style: 'dialogue', text: '"수고했어, 오늘은 {keyword} 먹자"' },
    { style: 'exclamation', text: '{keyword}이(가) 응원하고 있어! 화이팅!' },
    { style: 'question', text: '{keyword} 한 입이면 오후도 거뜬하지 않을까?' },
    { style: 'question', text: '당신이 {keyword}을(를) 받을 자격이 있다는 거 알지?' },
  ]},
  // 13
  { name: '확률풍', templates: [
    { style: 'short', text: '{keyword}일 확률 73.2%.' },
    { style: 'short', text: '{keyword}. 아마도.' },
    { style: 'story', text: '통계학자가 분석한 결과 {keyword}의 만족도가 가장 높았다' },
    { style: 'story', text: '1000번의 시뮬레이션 끝에 {keyword}이(가) 최적해였다' },
    { style: 'dialogue', text: '"확률적으로 {keyword}이(가) 정답이에요"' },
    { style: 'exclamation', text: '대박! {keyword} 당첨 확률 급상승!' },
    { style: 'question', text: '이 안에 {keyword}이(가) 있을까 없을까?' },
    { style: 'question', text: '{keyword}에 베팅한다면 승률은 몇 퍼센트일까?' },
  ]},
  // 14
  { name: '여행풍', templates: [
    { style: 'short', text: '{keyword}의 본고장에서.' },
    { style: 'short', text: '여행지에서 만난 {keyword}.' },
    { style: 'story', text: '골목길을 헤매다 우연히 {keyword}의 향기를 따라갔다' },
    { style: 'story', text: '여행 마지막 날, {keyword}을(를) 만나고 돌아오지 못했다' },
    { style: 'dialogue', text: '"여기까지 왔으면 {keyword}은(는) 먹어봐야지"' },
    { style: 'exclamation', text: '현지인만 아는 {keyword}의 맛!' },
    { style: 'question', text: '이 거리 끝에 {keyword}이(가) 기다리고 있다면?' },
    { style: 'question', text: '{keyword}을(를) 위해 비행기 탈 가치가 있을까?' },
  ]},
  // 15
  { name: '밸런스게임풍', templates: [
    { style: 'short', text: '{keyword}파 집합.' },
    { style: 'short', text: '{keyword} vs 미지의 맛.' },
    { style: 'story', text: '오랜 논쟁 끝에 {keyword}이(가) 최종 승리를 거두었다' },
    { style: 'story', text: '두 진영으로 나뉜 식탁, {keyword}을(를) 외치는 쪽이 우세' },
    { style: 'dialogue', text: '"{keyword} 좋아하는 사람 손!"' },
    { style: 'exclamation', text: '{keyword}을(를) 사랑하는 사람 여기 모여라!' },
    { style: 'question', text: '{keyword} 아니면 뭘 먹을 건데?' },
    { style: 'question', text: '당신은 {keyword}파인가요 아닌가요?' },
  ]},
  // 16
  { name: '영화장르풍', templates: [
    { style: 'short', text: '{keyword}. 로맨스.' },
    { style: 'short', text: '장르: {keyword} 액션.' },
    { style: 'story', text: '스크린에 {keyword}의 클로즈업이 잡혔다' },
    { style: 'story', text: '감독이 "컷!" 외치기 전 {keyword}의 향이 세트장에 퍼졌다' },
    { style: 'dialogue', text: '"이건 {keyword}이(가) 주연인 블록버스터야"' },
    { style: 'exclamation', text: '올해 최고의 맛 영화: {keyword}!' },
    { style: 'question', text: '{keyword} 장르의 결말은 해피엔딩일까?' },
    { style: 'question', text: '이 영화에서 {keyword}은(는) 히어로일까 빌런일까?' },
  ]},
  // 17
  { name: 'MBTI풍', templates: [
    { style: 'short', text: '{keyword}. 당신의 유형.' },
    { style: 'short', text: 'ENFP가 고른 {keyword}.' },
    { style: 'story', text: 'MBTI 분석 결과 {keyword}을(를) 좋아하면 감성적 직관형이래' },
    { style: 'story', text: '16가지 성격 유형 중 {keyword}에 끌리는 타입이 있다' },
    { style: 'dialogue', text: '"너 {keyword} 좋아해? 완전 N형이다"' },
    { style: 'exclamation', text: '{keyword} 선택 = 진정한 P형의 모험!' },
    { style: 'question', text: 'J형이라면 {keyword}을(를) 계획적으로 먹을까?' },
    { style: 'question', text: '{keyword}을(를) 고르면 당신의 MBTI는?' },
  ]},
  // 18
  { name: '혈액형풍', templates: [
    { style: 'short', text: 'A형 감성 {keyword}.' },
    { style: 'short', text: '{keyword}. B형 직감.' },
    { style: 'story', text: 'A형은 꼼꼼하게 {keyword}의 리뷰를 읽고 있었다' },
    { style: 'story', text: 'B형은 아무 생각 없이 {keyword}을(를) 열었고, 천재였다' },
    { style: 'dialogue', text: '"O형이면 그냥 {keyword} 눌러, 대범하게"' },
    { style: 'exclamation', text: 'AB형의 독특한 선택: {keyword}!' },
    { style: 'question', text: '혈액형별 맛 궁합... {keyword}은(는) 몇 형일까?' },
    { style: 'question', text: '{keyword}을(를) 고른 당신, 무슨 혈액형이야?' },
  ]},
  // 19
  { name: '학교풍', templates: [
    { style: 'short', text: '급식에 {keyword} 나온 날.' },
    { style: 'short', text: '{keyword}. 매점 품절.' },
    { style: 'story', text: '점심시간 종이 울리고 {keyword}의 향이 복도에 퍼졌다' },
    { style: 'story', text: '체육 끝나고 먹은 {keyword}은(는) 세상에서 제일 맛있었다' },
    { style: 'dialogue', text: '"야, 오늘 급식 {keyword}이래! 빨리 가자!"' },
    { style: 'exclamation', text: '급식 레전드 등극: {keyword}!' },
    { style: 'question', text: '학교 앞에서 먹던 {keyword}, 기억나지 않아?' },
    { style: 'question', text: '시험 끝나고 먹는 {keyword}이(가) 최고 아닌가?' },
  ]},
  // 20
  { name: '군대풍', templates: [
    { style: 'short', text: '보급품: {keyword}.' },
    { style: 'short', text: '{keyword}. 훈련 끝.' },
    { style: 'story', text: '행군 후 먹은 {keyword}에 눈물이 났다' },
    { style: 'story', text: '전역 전날 밤, 마지막으로 먹은 건 {keyword}이었다' },
    { style: 'dialogue', text: '"이등병! {keyword} 보급 도착했다!"' },
    { style: 'exclamation', text: '특식 공지! {keyword} 나온다!' },
    { style: 'question', text: '군대에서 {keyword}이(가) 나오면 몇 점짜리 하루일까?' },
    { style: 'question', text: '짬밥 몇 년 차여야 {keyword}의 진가를 알까?' },
  ]},
  // 21
  { name: '회사풍', templates: [
    { style: 'short', text: '{keyword}. 팀장님 사심.' },
    { style: 'short', text: '야근 보상: {keyword}.' },
    { style: 'story', text: '회의 중인데 {keyword} 생각만 하고 있었다' },
    { style: 'story', text: '슬랙 알림이 울렸다: "점심 {keyword} 갈 사람?"' },
    { style: 'dialogue', text: '"팀장님이 {keyword} 쏜대! 빨리 가자!"' },
    { style: 'exclamation', text: '워라밸의 핵심은 {keyword}이었다!' },
    { style: 'question', text: '{keyword} 먹으면 오후 회의 버틸 수 있을까?' },
    { style: 'question', text: '월급 빼고 다 좋은 회사에 {keyword}까지 있다면?' },
  ]},
  // 22
  { name: '게임풍', templates: [
    { style: 'short', text: '[SSR] {keyword}.' },
    { style: 'short', text: '{keyword} 스테이지.' },
    { style: 'story', text: '10연차 가챠를 돌렸더니 {keyword}이(가) 등장했다' },
    { style: 'story', text: '최종 보스를 쓰러뜨리고 {keyword}의 보물을 얻었다' },
    { style: 'dialogue', text: '"파티원 모집: {keyword} 레이드 갈 사람!"' },
    { style: 'exclamation', text: '레전더리 드롭! {keyword} 획득!' },
    { style: 'question', text: '{keyword}의 숨겨진 스테이지를 클리어할 수 있을까?' },
    { style: 'question', text: '이 가챠에서 {keyword}이(가) 나올 확률은?' },
  ]},
  // 23
  { name: '무협풍', templates: [
    { style: 'short', text: '{keyword}의 비급.' },
    { style: 'short', text: '무림: {keyword}.' },
    { style: 'story', text: '소림사 주방에서 {keyword}의 비전이 전수되었다' },
    { style: 'story', text: '강호를 떠돌다 {keyword}의 초식을 깨달았다' },
    { style: 'dialogue', text: '"시주, {keyword}의 오의를 전수하겠소"' },
    { style: 'exclamation', text: '{keyword}의 내공이 폭발한다!' },
    { style: 'question', text: '무림맹주도 탐내는 {keyword}을(를) 손에 넣겠는가?' },
    { style: 'question', text: '{keyword}의 검법을 익히면 천하제일이 될 수 있을까?' },
  ]},
  // 24
  { name: '사투리풍', templates: [
    { style: 'short', text: '{keyword} 맛있당께~' },
    { style: 'short', text: '{keyword}. 와 대박이다.' },
    { style: 'story', text: '할매가 {keyword} 해놓고 마당에서 부르고 계셨다' },
    { style: 'story', text: '장날에 {keyword} 사 먹었는데 기가 막혔당게' },
    { style: 'dialogue', text: '"{keyword} 묵으러 가이소!"' },
    { style: 'exclamation', text: '아따 {keyword} 끝내주네잉!' },
    { style: 'question', text: '{keyword} 안 묵어봤어? 와 진짜루?' },
    { style: 'question', text: '이 {keyword}이(가) 맛없으면 내 손에 장을 지지겠다?' },
  ]},
  // 25
  { name: '이모티콘풍', templates: [
    { style: 'short', text: '😋 {keyword} 솔솔~' },
    { style: 'short', text: '🤤 {keyword}...' },
    { style: 'story', text: '😮 어디선가 {keyword}의 향이 흘러왔다' },
    { style: 'story', text: '🥺 {keyword}을(를) 기다리며 하루를 버텼다' },
    { style: 'dialogue', text: '"🤩 오늘 {keyword} 먹는 거 맞지?!"' },
    { style: 'exclamation', text: '🎉 {keyword} 당첨! 축하해!' },
    { style: 'question', text: '🤔 이 상자 안에 {keyword}이(가) 있을까?' },
    { style: 'question', text: '😏 {keyword}이(가) 궁금하지 않아?' },
  ]},
  // 26
  { name: '요일풍', templates: [
    { style: 'short', text: '월요병 약: {keyword}.' },
    { style: 'short', text: '{keyword}. 불금 느낌.' },
    { style: 'story', text: '수요일 점심, {keyword}이(가) 한 주의 정중앙을 지켜줬다' },
    { style: 'story', text: '금요일 오후, {keyword}의 기대감으로 업무를 끝냈다' },
    { style: 'dialogue', text: '"화요일인데 {keyword} 먹으면 기분 전환 되겠다"' },
    { style: 'exclamation', text: '목요일에 {keyword}이라니, 거의 금요일이잖아!' },
    { style: 'question', text: '이 요일에 {keyword}이(가) 어울릴까?' },
    { style: 'question', text: '{keyword}을(를) 먹으면 오늘이 금요일 같지 않을까?' },
  ]},
  // 27
  { name: '색깔풍', templates: [
    { style: 'short', text: '{keyword}빛.' },
    { style: 'short', text: '컬러: {keyword}.' },
    { style: 'story', text: '접시 위에 {keyword}의 색감이 예술처럼 펼쳐졌다' },
    { style: 'story', text: '무지개 끝에서 {keyword}의 빛깔을 발견했다' },
    { style: 'dialogue', text: '"이 색깔은... {keyword}이 틀림없어"' },
    { style: 'exclamation', text: '{keyword}의 색감이 오늘 식탁을 물들인다!' },
    { style: 'question', text: '{keyword}빛 접시의 정체가 궁금하지 않아?' },
    { style: 'question', text: '어떤 색깔의 음식일까? 힌트: {keyword}' },
  ]},
  // 28
  { name: '동화풍', templates: [
    { style: 'short', text: '{keyword}의 마법.' },
    { style: 'short', text: '옛날옛적 {keyword}.' },
    { style: 'story', text: '숲속 오두막에서 마녀가 {keyword}을(를) 끓이고 있었다' },
    { style: 'story', text: '왕자가 {keyword}의 향기를 따라 성을 나섰다' },
    { style: 'dialogue', text: '"거울아 거울아, 오늘의 점심은 {keyword}이니?"' },
    { style: 'exclamation', text: '동화 속에서 튀어나온 {keyword}!' },
    { style: 'question', text: '이 콩나무를 타고 올라가면 {keyword}이(가) 있을까?' },
    { style: 'question', text: '신데렐라가 무도회 대신 {keyword}을(를) 택했다면?' },
  ]},
  // 29
  { name: '뉴스풍', templates: [
    { style: 'short', text: '[속보] {keyword}.' },
    { style: 'short', text: '[단독] {keyword} 포착.' },
    { style: 'story', text: '현장 기자가 {keyword}의 향기를 추적하고 있다' },
    { style: 'story', text: '취재 결과 {keyword}이(가) 오늘의 핵심 이슈로 떠올랐다' },
    { style: 'dialogue', text: '"앵커: 지금 {keyword} 관련 긴급 뉴스입니다"' },
    { style: 'exclamation', text: '호외! 호외! {keyword} 발견!' },
    { style: 'question', text: '{keyword}이(가) 오늘의 헤드라인을 장식할까?' },
    { style: 'question', text: '이 뉴스의 핵심 키워드가 {keyword}이라면?' },
  ]},
  // 30
  { name: '주식풍', templates: [
    { style: 'short', text: '{keyword} 상한가.' },
    { style: 'short', text: '[매수] {keyword}.' },
    { style: 'story', text: '{keyword} 관련주가 장 시작과 동시에 급등했다' },
    { style: 'story', text: '워렌 버핏이 {keyword}에 올인했다는 소문이 돌고 있다' },
    { style: 'dialogue', text: '"이 종목... {keyword} 관련인데, 지금이 매수 타이밍!"' },
    { style: 'exclamation', text: '{keyword} 테마주 폭등! 지금 잡아!' },
    { style: 'question', text: '{keyword}에 투자하면 수익률이 얼마나 될까?' },
    { style: 'question', text: '이 종목의 실체가 {keyword}이라면 사겠어?' },
  ]},
  // 31
  { name: '운동풍', templates: [
    { style: 'short', text: '운동 후엔 {keyword}.' },
    { style: 'short', text: '{keyword}. 단백질 충전.' },
    { style: 'story', text: '마라톤 완주 후 결승선에서 {keyword}이(가) 기다리고 있었다' },
    { style: 'story', text: '헬스장에서 3세트 끝내고 {keyword}을(를) 생각했다' },
    { style: 'dialogue', text: '"PT 끝나면 {keyword} 먹으러 가자!"' },
    { style: 'exclamation', text: '운동 보상 1위: {keyword}!' },
    { style: 'question', text: '{keyword} 한 끼면 오늘 운동한 보람 있지 않아?' },
    { style: 'question', text: '스쿼트 100개 하면 {keyword} 먹어도 될까?' },
  ]},
  // 32
  { name: '음악풍', templates: [
    { style: 'short', text: '{keyword}의 멜로디.' },
    { style: 'short', text: '♪ {keyword} ♪' },
    { style: 'story', text: '이어폰에서 {keyword}의 리듬이 흘러나왔다' },
    { style: 'story', text: '재즈 카페에서 {keyword}의 하모니를 느꼈다' },
    { style: 'dialogue', text: '"이 노래 제목이 뭐야?" "{keyword}"' },
    { style: 'exclamation', text: '{keyword}의 비트가 식탁을 흔든다!' },
    { style: 'question', text: '{keyword}에 어울리는 BGM은 뭘까?' },
    { style: 'question', text: '이 멜로디의 정체가 {keyword}이라면?' },
  ]},
  // 33
  { name: 'SNS풍', templates: [
    { style: 'short', text: '#{keyword} #맛스타그램' },
    { style: 'short', text: '{keyword}. 좋아요 1만개.' },
    { style: 'story', text: '피드를 스크롤하다 {keyword} 사진에 멈췄다' },
    { style: 'story', text: '{keyword} 릴스가 알고리즘 타고 천만 조회를 찍었다' },
    { style: 'dialogue', text: '"이거 {keyword} 아니야? 스토리 올려야지!"' },
    { style: 'exclamation', text: '{keyword} 먹방 영상 실시간 트렌드 1위!' },
    { style: 'question', text: '{keyword} 인증샷 올리면 좋아요 몇 개 받을까?' },
    { style: 'question', text: '팔로워들이 {keyword}을(를) 보면 뭐라 할까?' },
  ]},
  // 34
  { name: '과학풍', templates: [
    { style: 'short', text: '가설: {keyword}.' },
    { style: 'short', text: '{keyword}. 실험 시작.' },
    { style: 'story', text: '연구실에서 {keyword}의 맛 분자를 분석한 결과 완벽했다' },
    { style: 'story', text: '학술지에 "{keyword}이(가) 행복도를 높인다"는 논문이 실렸다' },
    { style: 'dialogue', text: '"이 실험의 변수는 {keyword}입니다"' },
    { style: 'exclamation', text: '유레카! {keyword}의 맛 공식 발견!' },
    { style: 'question', text: '{keyword}의 화학 반응은 어떤 맛을 만들까?' },
    { style: 'question', text: '과학적으로 {keyword}이(가) 최적이라면 반박할 수 있을까?' },
  ]},
  // 35
  { name: '마법풍', templates: [
    { style: 'short', text: '{keyword}의 주문.' },
    { style: 'short', text: '마법진: {keyword}.' },
    { style: 'story', text: '마법사의 솥에서 {keyword}의 연기가 피어올랐다' },
    { style: 'story', text: '고대 마법서에 {keyword}을(를) 소환하는 주문이 적혀있었다' },
    { style: 'dialogue', text: '"지팡이를 흔들며... {keyword}리무스 레비오사!"' },
    { style: 'exclamation', text: '{keyword}의 마법이 발동했다!' },
    { style: 'question', text: '이 상자에 {keyword}의 마법이 깃들어 있다면?' },
    { style: 'question', text: '{keyword}을(를) 소환할 용기가 있는가, 마법사여?' },
  ]},
  // 36
  { name: '우주풍', templates: [
    { style: 'short', text: '{keyword} 성운 발견.' },
    { style: 'short', text: '교신: {keyword}.' },
    { style: 'story', text: '화성 탐사 로버가 {keyword}의 흔적을 발견했다' },
    { style: 'story', text: '은하수 건너편에서 {keyword}의 전파가 포착되었다' },
    { style: 'dialogue', text: '"휴스턴, {keyword} 신호를 수신했습니다"' },
    { style: 'exclamation', text: '블랙홀도 빨아들이지 못하는 {keyword}의 매력!' },
    { style: 'question', text: '외계인이 지구에서 가장 놀란 게 {keyword}이라면?' },
    { style: 'question', text: '{keyword}이(가) 우주에서도 통할까?' },
  ]},
  // 37
  { name: '탐정풍', templates: [
    { style: 'short', text: '단서: {keyword}.' },
    { style: 'short', text: '{keyword}... 수상하다.' },
    { style: 'story', text: '어둠 속에서 {keyword}의 냄새가 흘러왔다' },
    { style: 'story', text: '현장에 남겨진 유일한 증거는 {keyword}의 흔적이었다' },
    { style: 'dialogue', text: '"셜록, 이 사건의 열쇠는 {keyword}입니다"' },
    { style: 'exclamation', text: '사건 해결! 범인의 정체는 {keyword}!' },
    { style: 'question', text: '이 {keyword}의 냄새... 어디서 맡아본 것 같지 않아?' },
    { style: 'question', text: '{keyword}을(를) 따라가면 진실에 다다를 수 있을까?' },
  ]},
  // 38
  { name: '타로카드풍', templates: [
    { style: 'short', text: '{keyword}의 카드.' },
    { style: 'short', text: '역방향: {keyword}.' },
    { style: 'story', text: '카드를 뒤집자 {keyword}의 그림이 빛나고 있었다' },
    { style: 'story', text: '운명의 수레바퀴가 {keyword}에서 멈추었다' },
    { style: 'dialogue', text: '"이 카드가 가리키는 건... {keyword}이에요"' },
    { style: 'exclamation', text: '별의 축복! {keyword}의 카드가 당신을 비춘다!' },
    { style: 'question', text: '{keyword}의 카드를 뽑은 당신, 운명을 받아들이겠는가?' },
    { style: 'question', text: '달의 카드 아래 숨겨진 {keyword}은(는) 무엇일까?' },
  ]},
  // 39
  { name: '심리테스트풍', templates: [
    { style: 'short', text: '{keyword} → 감성형.' },
    { style: 'short', text: '결과: {keyword} 유형.' },
    { style: 'story', text: '심리학자가 분석했다: {keyword}을(를) 고르면 행복도가 높다' },
    { style: 'story', text: '100만 명의 데이터에서 {keyword} 선호자는 낙천적이었다' },
    { style: 'dialogue', text: '"Q: {keyword}을(를) 고른 당신의 성격은..."' },
    { style: 'exclamation', text: '심리 분석 완료: {keyword} = 완벽주의자!' },
    { style: 'question', text: '{keyword}을(를) 고르면 당신은 어떤 유형일까?' },
    { style: 'question', text: '이 선택이 당신의 심리를 보여준다면? 힌트: {keyword}' },
  ]},
  // 40
  { name: 'TV프로풍', templates: [
    { style: 'short', text: '백종원 극찬: {keyword}.' },
    { style: 'short', text: '{keyword}. 수요미식회급.' },
    { style: 'story', text: '냉장고를 열었더니 {keyword}의 재료가 완벽하게 갖춰져 있었다' },
    { style: 'story', text: '{keyword} 한 입에 심사위원 전원이 고개를 끄덕였다' },
    { style: 'dialogue', text: '"사장님, {keyword}의 비법이 뭡니까?"' },
    { style: 'exclamation', text: '골목식당 역대급 반응: {keyword}!' },
    { style: 'question', text: '{keyword}이(가) 방송에 나오면 줄이 어디까지 설까?' },
    { style: 'question', text: '맛있는 녀석들이 {keyword}을(를) 보면 뭐라 할까?' },
  ]},
  // 41
  { name: '개발자풍', templates: [
    { style: 'short', text: 'return {keyword};' },
    { style: 'short', text: '{keyword} // TODO: 먹기' },
    { style: 'story', text: '배포 직전 {keyword}의 향이 서버실에서 감지되었다' },
    { style: 'story', text: '코드리뷰 중 {keyword}에 대한 주석을 발견했다' },
    { style: 'dialogue', text: '"이 버그... {keyword} 먹으면 풀릴 것 같아"' },
    { style: 'exclamation', text: 'Build Successful: {keyword} deployed!' },
    { style: 'question', text: 'if (배고픔 === true) → {keyword}?' },
    { style: 'question', text: '{keyword} === undefined ? 과연 그럴까?' },
  ]},
  // 42
  { name: '시험풍', templates: [
    { style: 'short', text: '정답: {keyword}.' },
    { style: 'short', text: '{keyword}. 만점.' },
    { style: 'story', text: '시험지 마지막 문제의 답이 {keyword}이었다' },
    { style: 'story', text: '수능 끝나고 가장 먼저 생각난 건 {keyword}이었다' },
    { style: 'dialogue', text: '"선생님, 정답이 {keyword}인가요?"' },
    { style: 'exclamation', text: '{keyword} 선택 = 정답률 99%!' },
    { style: 'question', text: '이 문제의 답이 {keyword}이라면 맞출 수 있을까?' },
    { style: 'question', text: '{keyword}을(를) 찍으면 정답일 확률은?' },
  ]},
  // 43
  { name: '택배풍', templates: [
    { style: 'short', text: '[배송중] {keyword}.' },
    { style: 'short', text: '{keyword} 도착 예정.' },
    { style: 'story', text: '현관 앞에 {keyword}이(가) 적힌 택배가 놓여있었다' },
    { style: 'story', text: '송장번호를 추적하니 {keyword}이(가) 배송 중이었다' },
    { style: 'dialogue', text: '"고객님, {keyword} 상품 배송 시작되었습니다"' },
    { style: 'exclamation', text: '로켓배송! {keyword} 오늘 도착!' },
    { style: 'question', text: '이 택배 안에 {keyword}이(가) 들어있다면?' },
    { style: 'question', text: '{keyword}을(를) 주문한 기억이 있으신가요?' },
  ]},
  // 44
  { name: '드라마풍', templates: [
    { style: 'short', text: '{keyword}. 시즌 1.' },
    { style: 'short', text: '클리프행어: {keyword}.' },
    { style: 'story', text: '1회부터 {keyword}이(가) 등장해 시청률을 올렸다' },
    { style: 'story', text: '마지막 회, {keyword}의 반전에 온 나라가 뒤집어졌다' },
    { style: 'dialogue', text: '"이 드라마의 떡밥이 {keyword}이었다니..."' },
    { style: 'exclamation', text: '시즌2 확정! {keyword}의 귀환!' },
    { style: 'question', text: '{keyword}의 스토리는 해피엔딩일까?' },
    { style: 'question', text: '다음 회 예고에서 {keyword}이(가) 나온다면?' },
  ]},
  // 45
  { name: '날짜풍', templates: [
    { style: 'short', text: '기념일: {keyword}.' },
    { style: 'short', text: '{keyword}. 월급날 플렉스.' },
    { style: 'story', text: '캘린더에 {keyword} 먹는 날이라고 메모해뒀다' },
    { style: 'story', text: '특별한 날에만 먹는 {keyword}을(를) 오늘 허락한다' },
    { style: 'dialogue', text: '"오늘 같은 날엔 {keyword} 아니면 안 되지"' },
    { style: 'exclamation', text: '월급날에 {keyword}이라니, 이 사치를 허하라!' },
    { style: 'question', text: '오늘을 {keyword}의 날로 선포해도 될까?' },
    { style: 'question', text: '{keyword}을(를) 먹기에 오늘보다 좋은 날이 있을까?' },
  ]},
  // 46
  { name: '카페풍', templates: [
    { style: 'short', text: '{keyword} 라떼.' },
    { style: 'short', text: '브런치: {keyword}.' },
    { style: 'story', text: '카페 창가에 앉아 {keyword}의 향을 즐기고 있었다' },
    { style: 'story', text: '바리스타가 추천한 오늘의 페어링은 {keyword}이었다' },
    { style: 'dialogue', text: '"아아 말고 오늘은 {keyword} 어때요?"' },
    { style: 'exclamation', text: '카페 사장님도 놀란 {keyword}과(와)의 페어링!' },
    { style: 'question', text: '커피 대신 {keyword}이(가) 오후를 깨워줄 수 있을까?' },
    { style: 'question', text: '{keyword}과(와) 어울리는 음료는 뭘까?' },
  ]},
  // 47
  { name: '자동차풍', templates: [
    { style: 'short', text: '{keyword} 터보.' },
    { style: 'short', text: '풀악셀: {keyword}.' },
    { style: 'story', text: '시속 200km로 달리다 {keyword}의 향기에 브레이크를 밟았다' },
    { style: 'story', text: '내비게이션이 {keyword}을(를) 목적지로 안내하고 있다' },
    { style: 'dialogue', text: '"이 엔진 소리... {keyword}급 파워!"' },
    { style: 'exclamation', text: 'SUV처럼 든든한 {keyword}의 포만감!' },
    { style: 'question', text: '{keyword}의 가속력은 몇 초 안에 만족감을 줄까?' },
    { style: 'question', text: '오늘의 드라이브 목적지가 {keyword}이라면?' },
  ]},
  // 48
  { name: '꽃풍', templates: [
    { style: 'short', text: '{keyword}이(가) 피다.' },
    { style: 'short', text: '{keyword}의 향기.' },
    { style: 'story', text: '벚꽃잎이 떨어지는 길에서 {keyword}의 향이 바람에 실려왔다' },
    { style: 'story', text: '정원의 장미가 {keyword}을(를) 향해 고개를 돌렸다' },
    { style: 'dialogue', text: '"이 꽃다발 속에 {keyword}이(가) 숨어있어"' },
    { style: 'exclamation', text: '해바라기처럼 환한 {keyword}의 매력!' },
    { style: 'question', text: '{keyword}의 향기를 따라가면 무엇을 만날까?' },
    { style: 'question', text: '꽃보다 아름다운 {keyword}이(가) 있다면 믿겠어?' },
  ]},
  // 49
  { name: '별자리풍', templates: [
    { style: 'short', text: '오늘의 별: {keyword}.' },
    { style: 'short', text: '{keyword} 자리.' },
    { style: 'story', text: '밤하늘의 별이 {keyword}의 모양으로 빛나고 있었다' },
    { style: 'story', text: '점성술사가 별자리 차트에서 {keyword}을(를) 읽어냈다' },
    { style: 'dialogue', text: '"당신의 별자리가 {keyword}을(를) 가리키고 있어요"' },
    { style: 'exclamation', text: '별자리 운세 대박! {keyword}의 날!' },
    { style: 'question', text: '오늘 당신의 별이 {keyword}을(를) 추천한다면?' },
    { style: 'question', text: '{keyword} 별자리의 운세는 어떨까?' },
  ]},
  // 50
  { name: '보드게임풍', templates: [
    { style: 'short', text: '주사위: {keyword}.' },
    { style: 'short', text: '{keyword} 칸 도착.' },
    { style: 'story', text: '주사위를 굴렸더니 {keyword}이(가) 적힌 칸에 멈췄다' },
    { style: 'story', text: '찬스 카드를 뒤집자 {keyword}이(가) 적혀있었다' },
    { style: 'dialogue', text: '"내 턴! {keyword} 칸으로 이동!"' },
    { style: 'exclamation', text: '보너스 턴에서 {keyword} 발견!' },
    { style: 'question', text: '이 주사위가 {keyword}에 멈출 확률은?' },
    { style: 'question', text: '{keyword} 카드를 사용하시겠습니까?' },
  ]},
  // 51
  { name: '슈퍼히어로풍', templates: [
    { style: 'short', text: '{keyword} 파워.' },
    { style: 'short', text: '히어로의 {keyword}.' },
    { style: 'story', text: '히어로가 세계를 구한 뒤 첫 식사로 {keyword}을(를) 택했다' },
    { style: 'story', text: '{keyword}의 에너지로 슈트에 전력이 충전되었다' },
    { style: 'dialogue', text: '"이 능력은... {keyword}에서 나오는 거였어!"' },
    { style: 'exclamation', text: '{keyword}의 힘으로 세계를 구한다!' },
    { style: 'question', text: '히어로도 점심엔 {keyword}을(를) 먹을까?' },
    { style: 'question', text: '{keyword}이(가) 슈퍼파워의 비밀이라면?' },
  ]},
  // 52
  { name: '옛날풍', templates: [
    { style: 'short', text: '{keyword}. 그때 그 시절.' },
    { style: 'short', text: '추억의 {keyword}.' },
    { style: 'story', text: '골목 어귀에서 {keyword}을(를) 팔던 아저씨가 생각난다' },
    { style: 'story', text: '학교 끝나고 500원 들고 달려갔던 {keyword}의 기억' },
    { style: 'dialogue', text: '"엄마, 나 {keyword} 사 먹어도 돼?"' },
    { style: 'exclamation', text: '시장 골목에서 부활한 {keyword}의 맛!' },
    { style: 'question', text: '그 시절 {keyword}의 맛을 아직 기억하고 있어?' },
    { style: 'question', text: '{keyword}을(를) 먹으면 어린 시절로 돌아갈 수 있을까?' },
  ]},
  // 53
  { name: '패션풍', templates: [
    { style: 'short', text: '{keyword}. 트렌드.' },
    { style: 'short', text: '이번 시즌: {keyword}.' },
    { style: 'story', text: '파리 컬렉션에서 {keyword}이(가) 런웨이를 걸었다' },
    { style: 'story', text: '보그 편집장이 올해의 맛으로 {keyword}을(를) 선정했다' },
    { style: 'dialogue', text: '"이건 {keyword} 컬렉션이야, 한정판!"' },
    { style: 'exclamation', text: '올해 F/W 트렌드: {keyword}!' },
    { style: 'question', text: '{keyword}이(가) 올 시즌 핫 아이템이라면?' },
    { style: 'question', text: '스트릿 푸드계의 명품 {keyword}, 입어볼래?' },
  ]},
  // 54
  { name: '공포풍', templates: [
    { style: 'short', text: '{keyword}... 뒤를 봐.' },
    { style: 'short', text: '문 뒤에서 {keyword}.' },
    { style: 'story', text: '자정이 되자 부엌에서 {keyword}의 냄새가 스멀스멀 올라왔다' },
    { style: 'story', text: '아무도 없는 식당에서 {keyword}이(가) 혼자 끓고 있었다' },
    { style: 'dialogue', text: '"저기... {keyword} 냄새 나는 거 나만 느끼는 거야?"' },
    { style: 'exclamation', text: '소름끼치게 맛있는 {keyword}의 저주!' },
    { style: 'question', text: '이 어둠 속에서 {keyword}을(를) 열 용기가 있는가?' },
    { style: 'question', text: '{keyword}의 정체를 알게 되면... 후회하지 않을까?' },
  ]},
  // 55
  { name: '수학풍', templates: [
    { style: 'short', text: 'x = {keyword}.' },
    { style: 'short', text: '{keyword}².' },
    { style: 'story', text: '방정식을 풀었더니 해가 {keyword}이었다' },
    { style: 'story', text: '피보나치 수열의 끝에서 {keyword}을(를) 발견했다' },
    { style: 'dialogue', text: '"이 공식에 {keyword}을(를) 대입하면 완벽해"' },
    { style: 'exclamation', text: '{keyword} + 밥 = 완벽한 해!' },
    { style: 'question', text: '{keyword}이(가) 정답인 확률은 몇 퍼센트일까?' },
    { style: 'question', text: '이 수열의 다음 값이 {keyword}이라면?' },
  ]},
  // 56
  { name: '날씨예보풍', templates: [
    { style: 'short', text: '{keyword} 지수 높음.' },
    { style: 'short', text: '예보: {keyword}.' },
    { style: 'story', text: '기상청 분석 결과 오늘 {keyword} 지수가 역대 최고치를 기록했다' },
    { style: 'story', text: '레이더에 {keyword}의 구름이 몰려오고 있다' },
    { style: 'dialogue', text: '"시청자 여러분, 오늘 {keyword} 특보입니다"' },
    { style: 'exclamation', text: '{keyword} 경보 발령! 맛있음 주의!' },
    { style: 'question', text: '{keyword} 전선이 다가오는데 대비는 되었나요?' },
    { style: 'question', text: '오늘 {keyword} 확률이 높은데 우산 대신 뭘 챙길까?' },
  ]},
  // 57
  { name: '축구풍', templates: [
    { style: 'short', text: '골! {keyword}!' },
    { style: 'short', text: '{keyword} 어시스트.' },
    { style: 'story', text: '후반 추가시간, {keyword}의 결정적인 한 골이 터졌다' },
    { style: 'story', text: '감독이 교체 카드로 {keyword}을(를) 투입했다' },
    { style: 'dialogue', text: '"해설: {keyword}이(가) 멋진 드리블을 보여주고 있습니다!"' },
    { style: 'exclamation', text: 'MVP는 {keyword}! 경기장이 들썩인다!' },
    { style: 'question', text: '{keyword}이(가) 결승골의 주인공이 될까?' },
    { style: 'question', text: '이 경기에서 {keyword} 없이 이길 수 있을까?' },
  ]},
  // 58
  { name: '역사풍', templates: [
    { style: 'short', text: '고문서: {keyword}.' },
    { style: 'short', text: '{keyword}. 국보급.' },
    { style: 'story', text: '왕의 식탁에 {keyword}이(가) 올라오자 온 궁이 감탄했다' },
    { style: 'story', text: '실록에 기록된 {keyword}의 비밀 레시피를 해독했다' },
    { style: 'dialogue', text: '"전하, {keyword}의 수라를 올리옵니다"' },
    { style: 'exclamation', text: '역사적 발견! {keyword}의 원조 레시피!' },
    { style: 'question', text: '500년 전에도 {keyword}은(는) 맛있었을까?' },
    { style: 'question', text: '{keyword}이(가) 역사를 바꿨다면 어떻게 바뀌었을까?' },
  ]},
  // 59
  { name: '직급풍', templates: [
    { style: 'short', text: '사원 추천: {keyword}.' },
    { style: 'short', text: '{keyword}. 부장님 단골.' },
    { style: 'story', text: '신입사원이 {keyword}을(를) 추천하자 팀 전체가 동의했다' },
    { style: 'story', text: '과장님의 10년 단골 메뉴가 {keyword}이라는 소문이 돌았다' },
    { style: 'dialogue', text: '"대리님, 오늘 {keyword} 어떠세요?"' },
    { style: 'exclamation', text: '임원 회의에도 등장한 {keyword}의 위엄!' },
    { style: 'question', text: '{keyword}을(를) 고르면 승진할 수 있을까?' },
    { style: 'question', text: '인턴부터 임원까지 모두가 좋아하는 {keyword}?' },
  ]},
  // 60
  { name: '감정풍', templates: [
    { style: 'short', text: '{keyword}. 행복.' },
    { style: 'short', text: '위로: {keyword}.' },
    { style: 'story', text: '힘든 하루 끝에 {keyword}을(를) 한 입 먹고 눈물이 났다' },
    { style: 'story', text: '{keyword}의 따뜻함이 얼어붙은 마음을 녹였다' },
    { style: 'dialogue', text: '"오늘 기분 어때?" "... {keyword} 먹으면 나을 것 같아"' },
    { style: 'exclamation', text: '{keyword} 한 입에 행복 100% 충전!' },
    { style: 'question', text: '{keyword}이(가) 위로가 될 수 있을까?' },
    { style: 'question', text: '설렘 가득한 {keyword}, 열어볼 용기가 있어?' },
  ]},
  // 61
  { name: '포켓몬풍', templates: [
    { style: 'short', text: '야생의 {keyword}!' },
    { style: 'short', text: '{keyword} 포획.' },
    { style: 'story', text: '풀숲을 걷다 야생의 {keyword}이(가) 나타났다' },
    { style: 'story', text: '잠만보가 {keyword}의 향기에 눈을 떴다' },
    { style: 'dialogue', text: '"가자, 피카츄! {keyword}을(를) 잡아라!"' },
    { style: 'exclamation', text: '{keyword} 포획 성공! 도감에 등록!' },
    { style: 'question', text: '이 몬스터볼 안에 {keyword}이(가) 있다면?' },
    { style: 'question', text: '{keyword}의 타입은 불? 물? 풀?' },
  ]},
  // 62
  { name: '디즈니풍', templates: [
    { style: 'short', text: '{keyword}의 꿈.' },
    { style: 'short', text: '마법의 {keyword}.' },
    { style: 'story', text: '마법의 양탄자가 {keyword}이(가) 있는 곳으로 날아갔다' },
    { style: 'story', text: '유리구두 대신 {keyword}을(를) 남기고 사라졌다' },
    { style: 'dialogue', text: '"렛잇고~ {keyword}은(는) 포기 못 해~"' },
    { style: 'exclamation', text: '엘사도 녹는 {keyword}의 맛!' },
    { style: 'question', text: '알라딘의 세 번째 소원이 {keyword}이었다면?' },
    { style: 'question', text: '{keyword}이(가) 동화 속에서 튀어나온다면?' },
  ]},
  // 63
  { name: '직업풍', templates: [
    { style: 'short', text: '셰프 추천: {keyword}.' },
    { style: 'short', text: '{keyword}. 의사 인증.' },
    { style: 'story', text: '3성 셰프가 퇴근 후 혼자 먹는 메뉴가 {keyword}이었다' },
    { style: 'story', text: '소방관이 화재 진압 후 가장 먼저 찾는 건 {keyword}이다' },
    { style: 'dialogue', text: '"환자분, {keyword} 드셔도 됩니다. 오히려 좋아요"' },
    { style: 'exclamation', text: '프로의 선택은 역시 {keyword}!' },
    { style: 'question', text: '전문가들이 모두 {keyword}을(를) 추천하는 이유가 뭘까?' },
    { style: 'question', text: '{keyword}이(가) 직업병을 치료할 수 있다면?' },
  ]},
  // 64
  { name: '교통수단풍', templates: [
    { style: 'short', text: '{keyword}행 급행.' },
    { style: 'short', text: '탑승: {keyword}.' },
    { style: 'story', text: 'KTX 창밖으로 {keyword}의 간판이 스쳐 지나갔다' },
    { style: 'story', text: '비행기 퍼스트클래스 기내식에 {keyword}이(가) 올라왔다' },
    { style: 'dialogue', text: '"기장입니다. 목적지 {keyword}에 곧 도착합니다"' },
    { style: 'exclamation', text: '{keyword}급 속도로 만족감 도착!' },
    { style: 'question', text: '{keyword}을(를) 위해 몇 정거장을 더 갈 수 있을까?' },
    { style: 'question', text: '이 열차의 종착역이 {keyword}이라면 타겠어?' },
  ]},
  // 65
  { name: '대학풍', templates: [
    { style: 'short', text: '학식: {keyword}.' },
    { style: 'short', text: '{keyword}. 정문 맛집.' },
    { style: 'story', text: '학식에 {keyword} 나온 날은 1교시도 출석한다' },
    { style: 'story', text: '야간 자율학습 끝나고 학교 앞 {keyword}이(가) 유일한 낙이었다' },
    { style: 'dialogue', text: '"동기야, {keyword} 먹으러 정문 앞 갈래?"' },
    { style: 'exclamation', text: '학식 역대급 메뉴: {keyword} 등장!' },
    { style: 'question', text: '도서관 앞에서 풍기는 이 {keyword} 향기의 정체는?' },
    { style: 'question', text: '{keyword}이(가) 학식에 나오면 학점이 올라갈까?' },
  ]},
  // 66
  { name: '로또풍', templates: [
    { style: 'short', text: '1등: {keyword}!' },
    { style: 'short', text: '{keyword} 당첨.' },
    { style: 'story', text: '복권을 긁었더니 {keyword}이(가) 세 줄 맞았다' },
    { style: 'story', text: '당첨 번호를 확인하니 {keyword}의 숫자가 빛나고 있었다' },
    { style: 'dialogue', text: '"축하합니다! 당첨 상품은 {keyword}입니다!"' },
    { style: 'exclamation', text: '잭팟! {keyword} 대박 터졌다!' },
    { style: 'question', text: '이 번호가 {keyword}과(와) 관련이 있다면?' },
    { style: 'question', text: '{keyword} 당첨이라면 인생 역전 아닌가?' },
  ]},
  // 67
  { name: '계급풍', templates: [
    { style: 'short', text: '왕의 {keyword}.' },
    { style: 'short', text: '{keyword}. 귀족 전용.' },
    { style: 'story', text: '왕의 만찬에 {keyword}이(가) 메인으로 올라왔다' },
    { style: 'story', text: '기사가 전투 전 {keyword}을(를) 먹고 용기를 얻었다' },
    { style: 'dialogue', text: '"폐하, {keyword}의 만찬을 준비하였사옵니다"' },
    { style: 'exclamation', text: '{keyword}은(는) 귀족만의 특권이었다!' },
    { style: 'question', text: '농부의 {keyword}이(가) 왕의 식탁보다 맛있을까?' },
    { style: 'question', text: '{keyword}을(를) 먹으면 왕이 된 기분일까?' },
  ]},
  // 68
  { name: '원소풍', templates: [
    { style: 'short', text: '불: {keyword}.' },
    { style: 'short', text: '{keyword}의 기운.' },
    { style: 'story', text: '불의 정령이 {keyword}을(를) 단련하여 최고의 맛을 만들었다' },
    { style: 'story', text: '바다의 기운이 {keyword} 속에 깃들어 있다' },
    { style: 'dialogue', text: '"대지의 원소여, {keyword}에 힘을 불어넣어라"' },
    { style: 'exclamation', text: '{keyword}에 바람의 원소가 깃들었다!' },
    { style: 'question', text: '{keyword}은(는) 불, 물, 흙, 바람 중 어떤 원소일까?' },
    { style: 'question', text: '네 가지 원소가 합쳐지면 {keyword}이(가) 될까?' },
  ]},
  // 69
  { name: '집순이풍', templates: [
    { style: 'short', text: '{keyword} 배달.' },
    { style: 'short', text: '이불 속 {keyword}.' },
    { style: 'story', text: '이불 밖은 위험해, 그래서 {keyword}을(를) 배달시켰다' },
    { style: 'story', text: '넷플릭스 3화째 보다가 {keyword} 먹방이 떠올랐다' },
    { style: 'dialogue', text: '"오늘 나가기 싫으니까 {keyword} 시키자"' },
    { style: 'exclamation', text: '방구석에서 즐기는 {keyword}의 행복!' },
    { style: 'question', text: '{keyword}을(를) 위해 이불 밖으로 나갈 가치가 있을까?' },
    { style: 'question', text: '{keyword} 먹방 보다가 진짜 시킬까 말까?' },
  ]},
  // 70
  { name: '건강풍', templates: [
    { style: 'short', text: '{keyword} 충전.' },
    { style: 'short', text: '비타민: {keyword}.' },
    { style: 'story', text: '의사가 매일 {keyword}을(를) 먹는 이유가 밝혀졌다' },
    { style: 'story', text: '건강 다큐에서 {keyword}이(가) 슈퍼푸드로 선정되었다' },
    { style: 'dialogue', text: '"매일 {keyword} 먹으면 건강해진다더라"' },
    { style: 'exclamation', text: '{keyword}이(가) 몸에 좋다는 연구 결과 발표!' },
    { style: 'question', text: '{keyword}을(를) 먹으면 오늘 하루가 건강해질까?' },
    { style: 'question', text: '건강을 위해 {keyword}을(를) 선택하는 게 맞을까?' },
  ]},
  // 71
  { name: '미술풍', templates: [
    { style: 'short', text: '{keyword}의 스케치.' },
    { style: 'short', text: '작품명: {keyword}.' },
    { style: 'story', text: '피카소가 {keyword}을(를) 보고 영감을 받아 걸작을 그렸다' },
    { style: 'story', text: '갤러리 한가운데에 {keyword}의 설치 작품이 전시되어 있었다' },
    { style: 'dialogue', text: '"이 그림 속 음식은... {keyword}이 아닌가요?"' },
    { style: 'exclamation', text: '고흐의 열정으로 탄생한 {keyword}!' },
    { style: 'question', text: '{keyword}을(를) 캔버스에 담으면 어떤 색일까?' },
    { style: 'question', text: '이 작품의 제목이 {keyword}이라면 어떤 맛일까?' },
  ]},
  // 72
  { name: '문학풍', templates: [
    { style: 'short', text: '{keyword}. 한 줄의 시.' },
    { style: 'short', text: '제목: {keyword}.' },
    { style: 'story', text: '소설 속 주인공이 마지막 장면에서 {keyword}을(를) 먹고 있었다' },
    { style: 'story', text: '시인이 {keyword}을(를) 읊으며 가을을 노래했다' },
    { style: 'dialogue', text: '"이 수필의 마지막 문장은 {keyword}으로 끝나더라"' },
    { style: 'exclamation', text: '한 편의 시 같은 {keyword}의 여운!' },
    { style: 'question', text: '{keyword}을(를) 한 문장으로 표현한다면?' },
    { style: 'question', text: '이 이야기의 결말이 {keyword}이라면 해피엔딩일까?' },
  ]},
  // 73
  { name: '기상캐스터풍', templates: [
    { style: 'short', text: '{keyword} 맑음.' },
    { style: 'short', text: '특보: {keyword}.' },
    { style: 'story', text: '기상캐스터가 전국 {keyword} 지수를 발표하고 있다' },
    { style: 'story', text: '위성사진에 {keyword}의 구름이 한반도를 뒤덮고 있었다' },
    { style: 'dialogue', text: '"시청자 여러분, 오늘 {keyword} 지수 매우 높겠습니다"' },
    { style: 'exclamation', text: '미각 쾌청! {keyword} 최적의 날!' },
    { style: 'question', text: '오늘의 {keyword} 전선... 대비하셨나요?' },
    { style: 'question', text: '{keyword} 체감 지수가 올라가고 있는데 느끼시나요?' },
  ]},
  // 74
  { name: '부동산풍', templates: [
    { style: 'short', text: '역세권: {keyword}.' },
    { style: 'short', text: '{keyword} 프리미엄.' },
    { style: 'story', text: '{keyword} 맛집 근처 부동산 시세가 급등하고 있다' },
    { style: 'story', text: '분양 안내문에 "{keyword} 도보 3분"이라고 적혀있었다' },
    { style: 'dialogue', text: '"이 동네 최고 입지 조건은 {keyword} 맛집이에요"' },
    { style: 'exclamation', text: '{keyword} 원조 맛집 앞 땅값 상한가!' },
    { style: 'question', text: '{keyword} 때문에 이사 갈 가치가 있을까?' },
    { style: 'question', text: '이 매물의 숨은 장점이 {keyword}이라면?' },
  ]},
  // 75
  { name: '여름휴가풍', templates: [
    { style: 'short', text: '바캉스: {keyword}.' },
    { style: 'short', text: '{keyword}. 파도 소리.' },
    { style: 'story', text: '파라솔 아래 누워 {keyword}의 향기를 즐기고 있었다' },
    { style: 'story', text: '계곡물에 발 담그고 {keyword}을(를) 한 입 먹는 행복' },
    { style: 'dialogue', text: '"야, 수영하고 나서 {keyword} 먹자!"' },
    { style: 'exclamation', text: '여기가 휴양지인 이유: {keyword}!' },
    { style: 'question', text: '바다 보면서 {keyword}을(를) 먹으면 어떤 기분일까?' },
    { style: 'question', text: '{keyword}이(가) 있으면 여기가 발리 아닌가?' },
  ]},
  // 76
  { name: '겨울방학풍', templates: [
    { style: 'short', text: '눈 오는 날 {keyword}.' },
    { style: 'short', text: '{keyword}. 이불 속.' },
    { style: 'story', text: '핫초코를 마시다 {keyword}의 향이 창문 너머에서 흘러왔다' },
    { style: 'story', text: '난로 앞에서 {keyword}을(를) 먹으며 겨울을 보냈다' },
    { style: 'dialogue', text: '"밖에 눈 온다! 빨리 {keyword} 먹으러 가자!"' },
    { style: 'exclamation', text: '눈 내리는 날 최고의 메뉴: {keyword}!' },
    { style: 'question', text: '이 추위에 {keyword}만큼 따뜻한 게 있을까?' },
    { style: 'question', text: '눈사람을 만들고 {keyword}을(를) 먹으면 완벽한 하루 아닐까?' },
  ]},
  // 77
  { name: '스포츠풍', templates: [
    { style: 'short', text: '{keyword}. 경기 시작.' },
    { style: 'short', text: '치어: {keyword}!' },
    { style: 'story', text: '야구장에서 7회 말에 {keyword}을(를) 먹는 게 전통이었다' },
    { style: 'story', text: '하프타임에 {keyword}을(를) 먹고 후반전을 뛰었다' },
    { style: 'dialogue', text: '"감독님, {keyword} 먹으면 체력 회복됩니다!"' },
    { style: 'exclamation', text: '경기장을 뒤흔드는 {keyword}의 파워!' },
    { style: 'question', text: '{keyword}을(를) 먹으면 경기력이 올라갈까?' },
    { style: 'question', text: '이 경기의 승패를 가를 {keyword}의 비밀은?' },
  ]},
  // 78
  { name: '조선시대풍', templates: [
    { style: 'short', text: '전하, {keyword}.' },
    { style: 'short', text: '{keyword}. 어명이다.' },
    { style: 'story', text: '어의가 {keyword}을(를) 처방하자 전하의 용안이 밝아졌다' },
    { style: 'story', text: '상궁이 몰래 챙겨온 {keyword}에 종전마마가 미소 지었다' },
    { style: 'dialogue', text: '"마마, {keyword}의 수라를 올리옵니다"' },
    { style: 'exclamation', text: '궁중 비법! {keyword}의 비밀 전수!' },
    { style: 'question', text: '전하가 {keyword}을(를) 내리시면 받겠는가?' },
    { style: 'question', text: '{keyword}이(가) 궁중에서 사라진 이유는 무엇일까?' },
  ]},
  // 79
  { name: 'SF풍', templates: [
    { style: 'short', text: '2099년: {keyword}.' },
    { style: 'short', text: 'AI 추천: {keyword}.' },
    { style: 'story', text: 'AI가 빅데이터를 분석한 결과 최적의 메뉴는 {keyword}이었다' },
    { style: 'story', text: '2099년에도 살아남은 유일한 레시피가 {keyword}이었다' },
    { style: 'dialogue', text: '"시스템: {keyword} 호환성 100%. 섭취를 권장합니다"' },
    { style: 'exclamation', text: '미래에서 온 {keyword}의 기술력!' },
    { style: 'question', text: '로봇이 만든 {keyword}이(가) 사람보다 맛있을까?' },
    { style: 'question', text: '{keyword}이(가) 인류의 마지막 레시피라면?' },
  ]},
  // 80
  { name: '추리풍', templates: [
    { style: 'short', text: '용의자: {keyword}.' },
    { style: 'short', text: '{keyword}... 범행 동기.' },
    { style: 'story', text: '밀실에서 발견된 유일한 증거는 {keyword}의 흔적이었다' },
    { style: 'story', text: '탐정이 {keyword}의 냄새를 따라 사건의 현장에 도착했다' },
    { style: 'dialogue', text: '"이 사건의 핵심 증거물은... {keyword}입니다"' },
    { style: 'exclamation', text: '사건 해결! 진범은 {keyword}이었다!' },
    { style: 'question', text: '알리바이: 그때 {keyword}을(를) 먹고 있었다... 사실일까?' },
    { style: 'question', text: '{keyword}의 흔적이 범인을 가리킨다면?' },
  ]},
  // 81
  { name: '유튜브풍', templates: [
    { style: 'short', text: '[조회수 1M] {keyword}.' },
    { style: 'short', text: '{keyword} 먹방.' },
    { style: 'story', text: '유튜버가 {keyword}을(를) 먹자 실시간 채팅이 폭발했다' },
    { style: 'story', text: '알고리즘이 {keyword} 영상을 추천하기 시작했다' },
    { style: 'dialogue', text: '"구독자 여러분 안녕하세요~ 오늘은 {keyword}입니다!"' },
    { style: 'exclamation', text: '{keyword} 리뷰 영상 조회수 폭발!' },
    { style: 'question', text: '{keyword} 썸네일 보고도 안 누를 수 있어?' },
    { style: 'question', text: '구독자들이 가장 보고 싶어하는 {keyword} 먹방, 찍어볼까?' },
  ]},
  // 82
  { name: '웹툰풍', templates: [
    { style: 'short', text: '{keyword}. 침 삼킴.' },
    { style: 'short', text: '먹방씬: {keyword}.' },
    { style: 'story', text: '주인공이 {keyword}을(를) 먹는 장면에서 독자 반응이 난리났다' },
    { style: 'story', text: '작가가 {keyword}을(를) 그리다 본인이 배달을 시켰다' },
    { style: 'dialogue', text: '"이 웹툰 보면 {keyword} 먹고 싶어지는 게 함정..."' },
    { style: 'exclamation', text: '{keyword} 등장에 독자 평점 9.9!' },
    { style: 'question', text: '이 회차의 떡밥이 {keyword}이라면 다음 주가 기대되지 않아?' },
    { style: 'question', text: '{keyword}을(를) 이렇게 맛있게 그린 작가 누구야?' },
  ]},
  // 83
  { name: '편의점풍', templates: [
    { style: 'short', text: '[1+1] {keyword}.' },
    { style: 'short', text: '신상: {keyword}.' },
    { style: 'story', text: '편의점 냉장고를 열자 {keyword}의 신상품이 눈에 들어왔다' },
    { style: 'story', text: '새벽 2시 편의점에서 {keyword}을(를) 발견한 행운' },
    { style: 'dialogue', text: '"이거 {keyword} 신상이래! 사 먹어볼까?"' },
    { style: 'exclamation', text: '{keyword} 한정판 출시! 지금 아니면 없다!' },
    { style: 'question', text: '이 편의점에 {keyword}이(가) 아직 남아있을까?' },
    { style: 'question', text: '{keyword} 1+1이면 안 살 이유가 있을까?' },
  ]},
  // 84
  { name: '카톡풍', templates: [
    { style: 'short', text: '1 {keyword}.' },
    { style: 'short', text: '{keyword} 읽씹 불가.' },
    { style: 'story', text: '단톡방에 {keyword} 사진이 올라오자 회신 폭발' },
    { style: 'story', text: '프사를 {keyword}으로 바꿨더니 좋아요가 쏟아졌다' },
    { style: 'dialogue', text: '"{keyword} 먹으러 갈 사람? 🙋🙋🙋"' },
    { style: 'exclamation', text: '{keyword} 카톡 울리면 무조건 확인!' },
    { style: 'question', text: '{keyword} 사진 보내면 읽씹 당할까 답장이 올까?' },
    { style: 'question', text: '단톡방에 {keyword} 올리면 반응이 어떨까?' },
  ]},
  // 85
  { name: '동물원풍', templates: [
    { style: 'short', text: '판다: {keyword}.' },
    { style: 'short', text: '{keyword}에 사자 순해짐.' },
    { style: 'story', text: '판다가 대나무 대신 {keyword}을(를) 집어들었다' },
    { style: 'story', text: '펭귄이 남극에서 {keyword}의 꿈을 꾸고 있었다' },
    { style: 'dialogue', text: '"사육사님, 이 동물이 {keyword}만 먹으려고 해요"' },
    { style: 'exclamation', text: '{keyword} 앞에서 코끼리도 줄을 선다!' },
    { style: 'question', text: '{keyword} 냄새에 동물원이 술렁이는 이유가 뭘까?' },
    { style: 'question', text: '동물도 {keyword}을(를) 좋아할까?' },
  ]},
  // 86
  { name: '놀이공원풍', templates: [
    { style: 'short', text: '{keyword} 롤러코스터.' },
    { style: 'short', text: '놀이기구: {keyword}.' },
    { style: 'story', text: '대관람차 꼭대기에서 {keyword}의 향이 올라왔다' },
    { style: 'story', text: '롤러코스터를 타고 {keyword}의 세계로 급하강했다' },
    { style: 'dialogue', text: '"다음 어트랙션은 {keyword}이야! 줄 서자!"' },
    { style: 'exclamation', text: '{keyword} 맛의 자이로드롭!' },
    { style: 'question', text: '이 놀이기구 끝에 {keyword}이(가) 기다리고 있다면?' },
    { style: 'question', text: '{keyword} 맛의 롤러코스터, 탑승하시겠습니까?' },
  ]},
  // 87
  { name: '지하철풍', templates: [
    { style: 'short', text: '{keyword}역 도착.' },
    { style: 'short', text: '급행: {keyword}.' },
    { style: 'story', text: '환승역에서 {keyword}의 향이 맛집으로 이끌었다' },
    { style: 'story', text: '{keyword}행 열차가 잠시 후 도착합니다' },
    { style: 'dialogue', text: '"다음 역은 {keyword}, {keyword}역입니다"' },
    { style: 'exclamation', text: '{keyword} 급행열차 출발!' },
    { style: 'question', text: '{keyword}역에서 내리면 뭐가 기다리고 있을까?' },
    { style: 'question', text: '이 노선의 종점이 {keyword}이라면 끝까지 탈래?' },
  ]},
  // 88
  { name: '삼국지풍', templates: [
    { style: 'short', text: '{keyword}의 계략.' },
    { style: 'short', text: '무장: {keyword}.' },
    { style: 'story', text: '제갈량이 {keyword}으로 적군을 유인하는 계략을 세웠다' },
    { style: 'story', text: '관우가 {keyword} 앞에서 칼을 내려놓았다는 전설이 있다' },
    { style: 'dialogue', text: '"주공, {keyword}의 진을 치시옵소서"' },
    { style: 'exclamation', text: '{keyword}의 의리! 삼형제도 감동!' },
    { style: 'question', text: '적벽대전에서 {keyword}이(가) 승패를 갈랐다면?' },
    { style: 'question', text: '{keyword}을(를) 손에 넣은 자가 천하를 얻을 수 있을까?' },
  ]},
  // 89
  { name: '음료풍', templates: [
    { style: 'short', text: '{keyword} + 콜라.' },
    { style: 'short', text: '페어링: {keyword}.' },
    { style: 'story', text: '소믈리에가 {keyword}에 어울리는 음료를 고민하고 있었다' },
    { style: 'story', text: '맥주 한 잔을 앞에 두고 {keyword}을(를) 기다리고 있었다' },
    { style: 'dialogue', text: '"이건 {keyword}이랑 먹어야 제맛이야"' },
    { style: 'exclamation', text: '환상의 조합: {keyword}과(와) 맥주!' },
    { style: 'question', text: '{keyword}과(와) 가장 잘 어울리는 음료는 뭘까?' },
    { style: 'question', text: '따뜻한 차 vs 차가운 콜라, {keyword}엔 뭐가 맞을까?' },
  ]},
  // 90
  { name: '지도풍', templates: [
    { style: 'short', text: '핫플: {keyword}.' },
    { style: 'short', text: '{keyword}의 성지.' },
    { style: 'story', text: '지도 앱을 켜니 {keyword}의 별점 4.9 맛집이 떠올랐다' },
    { style: 'story', text: '골목길 끝에 {keyword}이(가) 있다는 소문을 따라갔다' },
    { style: 'dialogue', text: '"네비에 {keyword} 검색해봐, 여기서 가깝대"' },
    { style: 'exclamation', text: '{keyword}의 성지 발견! 여기가 맞습니다!' },
    { style: 'question', text: '이 골목 끝에 {keyword}이(가) 있다는 소문, 사실일까?' },
    { style: 'question', text: '{keyword}을(를) 위해 30분 걸어갈 가치가 있을까?' },
  ]},
  // 91
  { name: '가위바위보풍', templates: [
    { style: 'short', text: '가위바위{keyword}!' },
    { style: 'short', text: '{keyword} 안 내면 진다.' },
    { style: 'story', text: '가위바위보에서 이긴 사람이 {keyword}을(를) 차지했다' },
    { style: 'story', text: '묵찌빠 끝에 {keyword}의 주인이 결정되었다' },
    { style: 'dialogue', text: '"안 내면 지는 거야! 하나 둘 셋, {keyword}!"' },
    { style: 'exclamation', text: '{keyword} 쟁탈전! 이긴 자가 먹는다!' },
    { style: 'question', text: '{keyword}을(를) 위해 가위바위보 할 준비 됐어?' },
    { style: 'question', text: '이 승부에서 {keyword}의 주인이 누가 될까?' },
  ]},
  // 92
  { name: '별점풍', templates: [
    { style: 'short', text: '★★★★★ {keyword}.' },
    { style: 'short', text: '{keyword}. 평점 4.9.' },
    { style: 'story', text: '3000개의 리뷰를 읽었는데 모두 {keyword}을(를) 극찬했다' },
    { style: 'story', text: '미슐랭 가이드에 {keyword}이(가) 별 세 개로 올라왔다' },
    { style: 'dialogue', text: '"이거 리뷰 보니까 {keyword} 진짜 맛있대!"' },
    { style: 'exclamation', text: '단골만 아는 {keyword}의 비밀!' },
    { style: 'question', text: '{keyword}의 별점이 만점인 이유가 뭘까?' },
    { style: 'question', text: '{keyword} 먹어보고 별점 몇 개 줄 거야?' },
  ]},
  // 93
  { name: '방탈출풍', templates: [
    { style: 'short', text: '제한시간: {keyword}.' },
    { style: 'short', text: '밀실: {keyword}.' },
    { style: 'story', text: '밀실의 문을 열자 {keyword}의 냄새가 가득 차 있었다' },
    { style: 'story', text: '마지막 힌트를 풀었더니 자물쇠 속에서 {keyword}이(가) 나왔다' },
    { style: 'dialogue', text: '"게임마스터: 힌트는... {keyword}입니다"' },
    { style: 'exclamation', text: '탈출 성공! 보상은 {keyword}!' },
    { style: 'question', text: '이 자물쇠의 비밀번호가 {keyword}과(와) 관련 있다면?' },
    { style: 'question', text: '{keyword} 냄새가 나는 이 밀실... 탈출할 수 있을까?' },
  ]},
  // 94
  { name: '결혼식풍', templates: [
    { style: 'short', text: '축하: {keyword}.' },
    { style: 'short', text: '뷔페: {keyword}.' },
    { style: 'story', text: '결혼식 뷔페에서 {keyword}을(를) 먹고 축의금이 아깝지 않았다' },
    { style: 'story', text: '하객들 사이에서 "{keyword}이(가) 제일 맛있었다"는 소문이 돌았다' },
    { style: 'dialogue', text: '"이 결혼식은 {keyword}이(가) 나오는 곳만 간다!"' },
    { style: 'exclamation', text: '축의금값을 하는 {keyword} 등장!' },
    { style: 'question', text: '{keyword}이(가) 있는 뷔페에 안 갈 이유가 있을까?' },
    { style: 'question', text: '축의금 5만원과 {keyword}, 어느 쪽이 가치 있을까?' },
  ]},
  // 95
  { name: '전래동화풍', templates: [
    { style: 'short', text: '도깨비방망이: {keyword}.' },
    { style: 'short', text: '{keyword} 뚝딱!' },
    { style: 'story', text: '혹부리 영감이 노래를 부르자 도깨비가 {keyword}을(를) 내놓았다' },
    { style: 'story', text: '금도끼 은도끼 대신 {keyword}을(를) 꺼내주었다' },
    { style: 'dialogue', text: '"떡 하나 주면 안 잡아먹지~ {keyword} 줌!"' },
    { style: 'exclamation', text: '도깨비 방망이로 {keyword}을(를) 뚝딱!' },
    { style: 'question', text: '이 콩나무를 타면 {keyword}이(가) 있는 성에 갈 수 있을까?' },
    { style: 'question', text: '은혜 갚은 까치가 가져온 게 {keyword}이라면?' },
  ]},
  // 96
  { name: '날씨앱풍', templates: [
    { style: 'short', text: '{keyword} 지수: 높음.' },
    { style: 'short', text: '체감: {keyword}.' },
    { style: 'story', text: '날씨앱 알림: "오늘 {keyword} 지수가 역대 최고입니다"' },
    { style: 'story', text: '습도 0% 바삭함, 체감 온도는 {keyword}급으로 따뜻함' },
    { style: 'dialogue', text: '"앱이 {keyword} 먹기 좋은 날씨래!"' },
    { style: 'exclamation', text: '미세먼지 없는 {keyword} 쾌청일!' },
    { style: 'question', text: '{keyword} 예보가 맞다면 우산 대신 뭘 챙겨야 할까?' },
    { style: 'question', text: '날씨앱이 {keyword}을(를) 추천하는 날이 있다면?' },
  ]},
  // 97
  { name: '미니게임풍', templates: [
    { style: 'short', text: 'START: {keyword}.' },
    { style: 'short', text: '{keyword} 스테이지.' },
    { style: 'story', text: '보너스 라운드에 진입하자 {keyword}이(가) 떨어지기 시작했다' },
    { style: 'story', text: '최고 점수를 달성했더니 {keyword}이(가) 보상으로 나왔다' },
    { style: 'dialogue', text: '"PLAYER 1, {keyword} 스테이지 준비!"' },
    { style: 'exclamation', text: 'NEW RECORD! {keyword} 하이스코어!' },
    { style: 'question', text: '이 게임의 히든 보스가 {keyword}이라면 이길 수 있을까?' },
    { style: 'question', text: '{keyword} 아이템을 얻으면 클리어할 수 있을까?' },
  ]},
  // 98
  { name: '캠핑풍', templates: [
    { style: 'short', text: '모닥불 옆 {keyword}.' },
    { style: 'short', text: '{keyword}. 별 아래.' },
    { style: 'story', text: '텐트를 치고 모닥불 옆에서 {keyword}의 향기를 맡았다' },
    { style: 'story', text: '별이 쏟아지는 밤, {keyword}과(와) 함께한 저녁이 완벽했다' },
    { style: 'dialogue', text: '"장작불에 {keyword} 해 먹자! 이게 진짜 캠핑이지"' },
    { style: 'exclamation', text: '자연 속에서 먹는 {keyword}의 감성!' },
    { style: 'question', text: '캠프파이어 옆에서 {keyword}을(를) 먹으면 어떤 기분일까?' },
    { style: 'question', text: '{keyword}이(가) 있으면 1박 2일이 더 행복하지 않을까?' },
  ]},
  // 99
  { name: '경매풍', templates: [
    { style: 'short', text: '시작가: {keyword}.' },
    { style: 'short', text: '낙찰: {keyword}!' },
    { style: 'story', text: '경매가 시작되자 {keyword}에 입찰이 몰렸다' },
    { style: 'story', text: '마지막 순간 {keyword}이(가) 역대 최고가에 낙찰되었다' },
    { style: 'dialogue', text: '"여기 {keyword}에 경합이 붙었습니다! 더 높은 분?"' },
    { style: 'exclamation', text: '역대급 경매! {keyword} 낙찰!' },
    { style: 'question', text: '{keyword}에 얼마까지 써볼 생각이야?' },
    { style: 'question', text: '이 경매의 숨은 진주가 {keyword}이라면?' },
  ]},
  // 100
  { name: '문자풍', templates: [
    { style: 'short', text: '[광고] {keyword} 특가!' },
    { style: 'short', text: '[알림] {keyword} 출시.' },
    { style: 'story', text: '스팸 문자인 줄 알았는데 {keyword}의 진짜 초대장이었다' },
    { style: 'story', text: '문자함을 열자 {keyword}이(가) 당신을 기다리고 있었다' },
    { style: 'dialogue', text: '"[카카오] {keyword} 쿠폰이 도착했습니다"' },
    { style: 'exclamation', text: '[긴급] {keyword} 한정 수량! 서두르세요!' },
    { style: 'question', text: '이 문자의 정체가 {keyword}이라면 열어볼래?' },
    { style: 'question', text: '[미확인] {keyword} 알림... 확인하시겠습니까?' },
  ]},
];

const STYLES = ['short', 'story', 'dialogue', 'exclamation', 'question'];

/**
 * 테마를 랜덤으로 하나 선택
 * dateKey를 넘기면 같은 날에는 같은 테마가 나오도록 시드 기반 선택
 */
function pickRandomTheme(dateKey) {
  if (dateKey) {
    const seed = dateKey.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return themes[seed % themes.length];
  }
  return themes[Math.floor(Math.random() * themes.length)];
}

/**
 * 4개 메뉴와 테마를 받아, 스타일이 겹치지 않는 이름표 4개를 생성
 * - 간접 키워드(indirect)를 사용하여 적당히 애매한 힌트 생성
 * - 각 이름표는 서로 다른 스타일 카테고리에서 뽑힘
 *
 * @param {object[]} menus - 메뉴 4개 배열
 * @param {object} theme - 선택된 테마
 * @returns {string[]} 생성된 이름표 4개
 */
function generateLabels(menus, theme) {
  // 테마의 템플릿을 스타일별로 그룹핑
  const byStyle = {};
  for (const t of theme.templates) {
    if (!byStyle[t.style]) byStyle[t.style] = [];
    byStyle[t.style].push(t);
  }

  // 사용 가능한 스타일 카테고리를 셔플
  const availableStyles = STYLES.filter((s) => byStyle[s] && byStyle[s].length > 0);
  const shuffled = [...availableStyles].sort(() => Math.random() - 0.5);

  // 4개 스타일 배정 (5개 중 4개 선택, 부족하면 순환)
  const pickedStyles = [];
  for (let i = 0; i < 4; i++) {
    pickedStyles.push(shuffled[i % shuffled.length]);
  }

  return menus.map((menu, i) => {
    const style = pickedStyles[i];
    const templates = byStyle[style];
    const template = templates[Math.floor(Math.random() * templates.length)];

    // 간접 키워드 사용
    const indirect = menu.keywords.indirect;
    const keyword = indirect[Math.floor(Math.random() * indirect.length)];

    return template.text.replace('{keyword}', keyword);
  });
}

/**
 * 메뉴의 직접 키워드를 반환 (상자 열린 후 힌트 해설용)
 * @param {object} menu - 메뉴 객체
 * @returns {string} 직접 키워드들을 합친 문자열
 */
function getDirectHint(menu) {
  return menu.keywords.direct.join(' · ');
}

module.exports = { themes, pickRandomTheme, generateLabels, getDirectHint };
