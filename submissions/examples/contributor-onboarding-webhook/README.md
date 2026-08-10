# Contributor Onboarding Slack/Discord Webhook Notification

## Overview

This example demonstrates how an automated onboarding workflow could welcome first-time contributors after their first Pull Request is successfully merged.

The page illustrates a GitHub Actions workflow that detects a contributor's first merged PR and posts a celebratory welcome message to a Discord webhook. It is intended as a documentation/demo example and does not require any backend or server setup.

---

## Features

- Responsive landing page
- Hero section introducing contributor onboarding
- Workflow visualization
- GitHub Actions trigger example
- Discord webhook payload example
- Feature cards
- Benefits section
- Footer
- Pure HTML & CSS implementation
- No build tools required

---

## Folder Structure

```
submissions/
└── examples/
    └── contributor-onboarding-webhook/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## How to Use

1. Open the project folder.
2. Navigate to:

```
submissions/examples/contributor-onboarding-webhook/
```

3. Open:

```
demo.html
```

in any modern web browser.

No installation or build process is required.

---

## Demonstrated Workflow

```
Contributor opens Pull Request
            │
            ▼
Pull Request gets merged
            │
            ▼
GitHub Action runs
            │
            ▼
Checks whether it is the contributor's first merged PR
            │
            ▼
Sends a Discord webhook
            │
            ▼
🎉 Welcome message posted automatically
```

---

## Technologies Used

- HTML5
- CSS3
- Responsive Layout
- GitHub Actions (demonstration)
- Discord Webhook (demonstration)

---

## Browser Compatibility

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Why this fits EaseMotion CSS

This submission follows the EaseMotion CSS philosophy by providing a clean, responsive, copy-paste-ready documentation example built using HTML and CSS. It demonstrates a realistic developer tooling workflow while remaining easy to understand and customize.

---

## Preview

The page includes:

- Hero banner
- Contributor onboarding workflow
- GitHub Action example
- Discord webhook example
- Feature cards
- Benefits section
- Responsive footer

---

## Author

Submitted as an EaseMotion CSS example for GSSoC 2026.
