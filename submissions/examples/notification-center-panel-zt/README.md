# Notification Center Panel

## Overview

A modern SaaS notification center panel with eight sample alerts, type-specific styling, unread indicators, timestamps, and smooth hover transitions. The component is designed for admin dashboards and works directly from `demo.html` with no JavaScript.

## Features

- Eight notification cards with unique types: success, warning, info, and error
- Unread markers for priority alerts
- Timestamps to show recency
- Hover lift animation for interactive feedback
- Responsive panel layout for desktop and mobile
- Elegant glassmorphism-inspired SaaS aesthetic

## Usage

```html
<link rel="stylesheet" href="style.css">
<main class="notification-panel">
  <header class="panel-header">
    <p class="eyebrow">Notification Center</p>
    <h1>Alerts & updates</h1>
    <p class="panel-copy">Review the latest system notifications with status badges, unread markers, and timestamped activity for a modern dashboard experience.</p>
  </header>

  <section class="notification-list">
    <article class="notification-card notification-success unread">
      <div class="notification-meta">
        <span class="notification-icon">✔</span>
        <div>
          <p class="notification-title">Backup completed</p>
          <p class="notification-time">Just now</p>
        </div>
      </div>
      <p class="notification-copy">All systems are secure. Your nightly backup finished successfully.</p>
    </article>
  </section>
</main>
```

## Why it fits EaseMotion CSS

This component is fully self-contained and built with pure HTML and CSS only, matching EaseMotion CSS goals for reusable, visually polished UI modules. It provides an admin dashboard pattern with responsive layout, smooth motion, and clear notification hierarchy without relying on JavaScript.
