# 🍱 점심 미스터리 박스 봇

슬랙에서 매일 점심 메뉴를 미스터리 박스 형태로 추천해주는 봇입니다.

## 기능

- `/lunch` 슬래시 커맨드로 미스터리 박스 호출
- 매일 평일 오전 9시 자동 전송 (크론)
- 4개의 미스터리 상자에 랜덤 메뉴 배정
- 매일 바뀌는 이름표 테마 (15종)
- 버튼 클릭으로 상자 오픈 — 누가 열었는지 표시

## 설치 및 실행

### 1. 패키지 설치

```bash
npm install
```

### 2. Slack 앱 설정

[Slack API](https://api.slack.com/apps)에서 앱을 생성하고 아래를 설정합니다.

**Socket Mode** 활성화 후 App-Level Token 발급 (`connections:write` 스코프)

**Bot Token Scopes:**
- `chat:write` — 메시지 전송
- `commands` — 슬래시 커맨드

**Slash Command:**
- Command: `/lunch`
- Description: 점심 미스터리 박스 열기
- Usage Hint: (비워두기)

**Interactivity:** 활성화 (Socket Mode 사용 시 별도 URL 불필요)

### 3. 환경변수 설정

```bash
cp .env.example .env
```

`.env` 파일을 열어 토큰과 채널 ID를 입력합니다.

| 변수 | 설명 |
|---|---|
| `SLACK_BOT_TOKEN` | Bot User OAuth Token (`xoxb-...`) |
| `SLACK_SIGNING_SECRET` | App의 Signing Secret |
| `SLACK_APP_TOKEN` | App-Level Token (`xapp-...`) |
| `LUNCH_CHANNEL_ID` | 자동 메시지를 보낼 채널 ID |
| `CRON_SCHEDULE` | 크론 표현식 (기본: `0 0 * * 1-5` = UTC 0시 = KST 9시) |

### 4. 실행

```bash
node app.js
```

## 파일 구조

```
lunch-mystery-box/
├── app.js              # 메인 앱 (Bolt + 크론)
├── data/
│   ├── menus.js        # 메뉴 데이터 (100개)
│   ├── themes.js       # 이름표 테마 (15종)
│   └── boxDesigns.js   # 상자 디자인 (이모지/이미지)
├── .env.example        # 환경변수 템플릿
├── package.json
└── README.md
```

## 커스터마이징

### 메뉴 추가
`data/menus.js`의 `menus` 배열에 `{ name: '메뉴명', emoji: '🍜' }` 형태로 추가합니다.

### 테마 추가
`data/themes.js`의 `themes` 배열에 `{ name: '테마명', labels: ['라벨1', '라벨2', '라벨3', '라벨4'] }` 형태로 추가합니다.

### 상자 디자인을 이미지로 교체
`data/boxDesigns.js`의 `renderClosedBox`와 `renderOpenedBox` 함수에서 반환하는 블록을 Slack의 `image` 블록으로 교체하면 됩니다.
