# Developer Profile Card — EaseMotion CSS

A modern, interactive developer profile card with avatar, tech stack badges, contribution stats, social links, and a CTA button.

## Features

- **Avatar** — inline SVG with animated gradient ring
- **Name, role, bio** — with "Available" status badge
- **Tech stack badges** — 6 hoverable skill tags
- **Stats** — Repos, Stars, PRs (animated count)
- **Social links** — GitHub, Twitter/X, LinkedIn, Dribbble with hover accent fill
- **Cover banner** — gradient header above the avatar
- **3D hover tilt** — subtle `rotateX` lift on card hover
- **Dark / Light mode** toggle with persistence
- **Fully responsive** — mobile-first design

## Usage

Open `demo.html` in a browser. Click the theme toggle (🌙/☀️) to switch modes.

## File Structure

```
ease-dev-profile-1164/
├── demo.html       — Main demo page
├── style.css       — Component styling
└── README.md       — This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-dev-card` | Card wrapper with 3D perspective |
| `.ease-dev-card-inner` | Card body with hover lift + tilt |
| `.ease-dev-cover` | Gradient cover banner |
| `.ease-dev-avatar` | Avatar wrapper with SVG + ring |
| `.ease-dev-ring` | Spinning gradient border ring |
| `.ease-dev-info` | Name, role, bio container |
| `.ease-dev-status` | "Available" badge |
| `.ease-dev-tech` | Flex container for skill tags |
| `.ease-dev-tag` | Individual tech badge |
| `.ease-dev-stats` | Stats row wrapper |
| `.ease-dev-stat` | Single stat block |
| `.ease-dev-social` | Social links row |
| `.ease-dev-social-link` | Individual social icon button |
| `.ease-dev-cta` | Call-to-action button |
