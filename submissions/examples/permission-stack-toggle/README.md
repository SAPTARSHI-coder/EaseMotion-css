# Permission Stack Toggle

## Overview

A modern permission-settings component inspired by mobile OS permission panels. Each row presents a permission with an icon, title, description, and a pill-shaped toggle switch — all driven by pure CSS (hidden checkbox + sibling selectors) with no JavaScript.

## Features

- Mobile settings-inspired UI with dark panel aesthetic
- Interactive toggle switches powered by CSS `:checked` sibling selectors
- Smooth transitions for toggle movement, icon colour, and title brightness
- Keyboard accessible — native checkbox under the hood, visible `focus-visible` ring
- Responsive layout that adapts on small screens
- `prefers-reduced-motion` support to disable all transitions

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<div class="tg-perm">
  <label class="tg-perm-row">
    <input type="checkbox" class="tg-perm-input" checked />
    <span class="tg-perm-icon"> … </span>
    <span class="tg-perm-info">
      <span class="tg-perm-title">Location</span>
      <span class="tg-perm-desc">While using the app</span>
    </span>
    <span class="tg-perm-toggle">
      <span class="tg-perm-thumb"></span>
    </span>
  </label>
</div>
```

See [demo.html](demo.html) for the complete markup and [style.css](style.css) for all styles.

## Why it fits EaseMotion CSS

- **Reusable settings component** — Drop the panel into any page; the styles are fully self-contained with the `tg-perm` prefix.
- **Human-readable class names** — Descriptive naming (`tg-perm-row`, `tg-perm-thumb`, `tg-perm-toggle`) makes the markup self-documenting.
- **Interactive UI pattern** — The toggle switch is a common interaction pattern elevated by smooth, purposeful motion.
- **Animation-first philosophy** — Every state change (toggle slide, icon highlight, background shift) is animated with CSS transitions, aligning with EaseMotion's motion-centric identity.
