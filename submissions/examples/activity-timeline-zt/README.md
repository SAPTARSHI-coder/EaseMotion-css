# Activity Timeline

## Overview

A modern SaaS-style admin activity timeline showcasing recent team events in a vertical feed. This component includes deployment, comment, task completion, and payment activity types with avatar placeholders, timestamps, descriptions, hover motion, and a polished accent line.

## Why it fits EaseMotion CSS

This submission is built with pure HTML and CSS only, and it presents a self-contained dashboard module suitable for an admin or analytics interface. The responsive layout, hover states, and structured timeline entries align with EaseMotion CSS principles for clean, reusable UI patterns.

## Usage example

```html
<link rel="stylesheet" href="style.css">
<main class="timeline-panel">
  <header class="panel-header">
    <p class="eyebrow">Activity Timeline</p>
    <h1>Recent team activity</h1>
    <p class="panel-copy">A vertical activity feed for deployments, comments, task progress, and payments.</p>
  </header>

  <div class="timeline">
    <span class="timeline-line"></span>

    <article class="timeline-item timeline-deployment">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="item-row">
          <div class="avatar">DV</div>
          <div>
            <p class="item-title">Deployment finished</p>
            <p class="item-time">Today · 09:28 AM</p>
          </div>
        </div>
        <p class="item-copy">A new release for the dashboard service was deployed to production.</p>
      </div>
    </article>
  </div>
</main>
```

## Customization options

- Change the accent and timeline colors by editing `--line`, `--accent`, and marker colors in `style.css`.
- Adjust the card background or glass effect using `--surface` and `--surface-strong`.
- Tweak spacing and radius for `.timeline-card`, `.timeline-panel`, and `.item-row` to match your dashboard style.
- Swap the avatar placeholder letters in the markup for initials or icons.
- Refine typography with custom font families and text sizes in `.panel-header h1`, `.item-title`, and `.item-copy`.
