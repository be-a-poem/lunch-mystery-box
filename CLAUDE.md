# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Korean lunch menu randomizer ("점심 미스터리 박스") with three distribution channels:
- **Slack Bot** (`app.js`) — Bolt framework + Socket Mode, `/lunch` slash command
- **Web Game** (`game.html`) — standalone single-file browser game, deployed via GitHub Pages as `index.html`
- **Electron Desktop App** (`electron-app/`) — wraps `game.html` into a portable Windows .exe

## Common Commands

### Slack Bot
```bash
node app.js                    # Run Slack bot (requires .env with SLACK_BOT_TOKEN, SLACK_APP_TOKEN, CHANNEL_ID)
```

### Electron App
```bash
cd electron-app
npm start                      # Run Electron app locally
npm run build                  # Build portable .exe (output: electron-app/dist/)
# If build fails with symlink errors, use:
CSC_IDENTITY_AUTO_DISCOVERY=false npx electron-builder --win portable --config.win.signAndEditExecutable=false
```

### No tests or linter configured.

## Architecture

### Three-way file sync
`game.html` is the source of truth. After any change:
1. Copy `game.html` → `index.html` (GitHub Pages)
2. Copy `game.html` → `electron-app/game.html`
3. Rebuild Electron exe if needed

### game.html structure (single-file, ~1450 lines)
Everything is self-contained — CSS, HTML, and JS in one file. No external dependencies except Google Fonts.

**Key systems inside the `<script>` block (in order):**
- **Sound Engine** — Web Audio API procedural synthesis (BGM + SFX), IIFE module `Sound`
- **Mood System** — `moodDefs` (12 visual themes) + `moodMap` (theme name → mood key)
- **Themes** — `themes[]` array with 20 hint template sets, 5 text styles each
- **Menus** — `menus[]` array with 100+ items (name, emoji, direct/indirect keywords)
- **Prank System** — 10% chance to replace a box with a joke result
- **Decoration System** — particle/animation generators per mood
- **Game Logic** — `initGame()` picks theme, menus, labels, creates DOM, wires events

### Slack Bot (`app.js`)
- Uses in-memory `Map` for session state (per `message_ts`)
- Scheduled daily post at 9 AM KST via `node-cron`
- Menu data imported from `data/menus.js`, themes from `data/themes.js`, pranks from `data/pranks.js`

### Data modules (`data/`)
- `menus.js`, `themes.js`, `pranks.js` — shared between Slack bot only (game.html has its own inline copies)
- When adding/modifying menus or themes, update **both** `data/*.js` (for Slack bot) and `game.html` (for web/desktop)

## Conventions

- All UI text is in Korean
- Pixel-art retro aesthetic — CSS uses `box-shadow` borders, `Press Start 2P` font
- Sounds are generated procedurally via Web Audio API oscillators — no audio files
- The game starts muted; BGM plays only after user unmutes
