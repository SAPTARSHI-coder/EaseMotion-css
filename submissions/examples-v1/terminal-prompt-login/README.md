# Terminal Prompt Login Component

## Overview

A terminal-inspired login form that mimics a command-line authentication interface. The component uses a dark developer-themed UI with monospace typography, colour-coded prompt labels, traffic-light window controls, and a blinking caret animation — all built with pure CSS and zero JavaScript.

## Features

- Terminal-style window with red, yellow, and green status dots
- Monospace typography for an authentic CLI feel
- Blinking caret animation on the submit button
- Command-prompt layout (`$`, `user:`, `pass:`)
- Responsive design that adapts to small screens
- Accessible form controls with `<label>` elements and `aria-label` attributes
- `prefers-reduced-motion` support to disable animations

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<form class="lf-term">
  <div class="lf-term-bar"> … </div>
  <div class="lf-term-body"> … </div>
</form>
```

See [demo.html](demo.html) for the complete markup and [style.css](style.css) for all styles.

## Why it fits EaseMotion CSS

- **Human-readable classes** — Every class uses the clear `lf-term` prefix, making the markup self-documenting.
- **Animation-first design** — The blinking caret (`lftBlink`) is a lightweight, CSS-only keyframe animation that follows EaseMotion's motion-centric philosophy.
- **Reusable UI component** — Drop the form into any page; the styles are fully self-contained with no external dependencies.
- **Developer-focused aesthetic** — The dark terminal theme resonates with the developer audience that EaseMotion targets.