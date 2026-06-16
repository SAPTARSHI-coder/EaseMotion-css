# Floating Notification Stack

## What it does

This component displays a stack of floating notification cards for SaaS dashboards. It includes success, warning, error, and info variants, layered card depth, hover lift behavior, and glassmorphism-inspired styling.

## How to use it

Open `demo.html` directly in your browser. The component is self-contained and only requires the matching `style.css` file in the same folder.

Example structure:

```html
<link rel="stylesheet" href="style.css">
<main class="stack-panel">
  <section class="stack-view">
    <article class="notification-card notification-info">
      <p class="notification-label">System update available</p>
      <p class="notification-text">A new security patch is ready to deploy.</p>
      <span class="notification-time">2 min ago</span>
    </article>
  </section>
</main>
```

## Why it fits EaseMotion CSS

This submission uses only HTML and CSS with no JavaScript or external dependencies. It offers a polished, reusable dashboard notification pattern with responsive layout, elegant motion, and modern SaaS aesthetics, consistent with EaseMotion CSS goals for presentable UI components.
