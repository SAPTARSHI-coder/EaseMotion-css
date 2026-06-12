# Retro Terminal Card

## Overview

A retro terminal-style status card that resembles a classic command-line window displaying successful installation and build output. Built entirely with pure CSS — no JavaScript, no external dependencies.

## Features

- Retro terminal appearance with dark background and green border glow
- Traffic-light window controls (red, yellow, green dots)
- Monospace typography for authentic CLI feel
- Blinking block cursor animation (`termBlink`)
- Dimmed prompt symbols with green command text and white success output
- Lightweight and self-contained
- Responsive design that scales on mobile
- `prefers-reduced-motion` support for accessibility

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<div class="card-term">
  <div class="card-term-bar">…</div>
  <div class="card-term-body">…</div>
</div>
```

See [demo.html](demo.html) for the complete markup and [style.css](style.css) for all styles.

## Why it fits EaseMotion CSS

- **Reusable component** — Drop the card into any page; styles are fully self-contained with the `card-term` prefix.
- **Animation-first** — The blinking cursor (`termBlink`) is a lightweight CSS-only keyframe animation that aligns with EaseMotion's motion-centric philosophy.
- **Developer-focused design** — The retro terminal aesthetic resonates with the developer audience that EaseMotion targets.
- **Human-readable classes** — Every class uses the descriptive `card-term` prefix, making the markup self-documenting and easy to understand.
