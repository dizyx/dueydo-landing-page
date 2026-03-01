# Dueydo Landing Page

**Workspace:** dizyx
**Status:** planning
**Runtime:** Bun (never Node.js)

Landing page and marketing site for Dueydo — private secure chat for friends with Signal-level E2EE. "Coming soon" launch page at dueydo.com.

## Project Definition

- **Dashboard:** https://nockerl.dizyx.com/projects/dueydo-landing-page
- **Dueydo main project:** https://nockerl.dizyx.com/projects/dueydo (chat app, separate repo)

## What Dueydo Is

Dueydo is a private secure chat app built on three pillars:
1. **Security** — Signal Protocol E2EE, zero-knowledge server
2. **Privacy** — Minimal metadata, self-hosted option, no tracking
3. **Rich Experience** — Threading, stories, ephemeral media

The landing page is the public face — explains what Dueydo is, why it exists, and collects interest while the app is being built.

## Domain Structure

- **dueydo.com** — This landing page (static, Bunny CDN)
- **api.dueydo.com** — Chat app backend (future)
- **app.dueydo.com** — Chat app frontend (future, or same domain)

## Tech Stack

- **Framework:** Astro 5 (static site generation)
- **Styling:** Tailwind CSS 4
- **Runtime:** Bun
- **Deploy:** Docker + Coolify on Hetzner Server 1 → Bunny CDN
- **DNS:** Bunny DNS (nameservers already on Bunny for dizyx.com pattern)
- **Images/Assets:** Bunny Storage + CDN (needs investigation — may need separate zone from dizyx)

## Reference Implementation

The dizyx landing page uses the same tech stack and deploy pipeline:
- Repo: ~/dizyx/projects/dizyx-landing-page/repos/dizyx-landing-page/
- Uses Astro 5 + Tailwind CSS 4
- Deployed via Coolify → Bunny CDN
- Study this for the deploy pattern, Coolify config, and Bunny CDN setup

## Design Direction

TBD — needs design exploration. Key pages:
- **Home** — Hero, value proposition, "coming soon" signup
- **About** — Why Dueydo exists, the three pillars (security, privacy, rich experience)
- **Features** — What makes it different from Signal/WhatsApp/Telegram

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build
```

**CRITICAL:** Gateway server has NODE_ENV=production and PORT=3500. Always override:
```bash
NODE_ENV=development PORT=4200 bun run dev
```

## Git Workflow

Conventional commits:
```
feat:     New feature
fix:      Bug fix
refactor: Code restructuring
docs:     Documentation
test:     Adding tests
chore:    Maintenance
```

Co-author line:
```
Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```
