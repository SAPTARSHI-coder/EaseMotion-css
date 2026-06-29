# Pseudo-Class :hover State Demo

Demonstrates the :hover pseudo-class with interactive card transitions, using EaseMotion's timing tokens and color palette for smooth hover state feedback across buttons, links, and form elements.

## Features

- Multiple hover effect variants: scale up, float, sink, tilt, outline fill, and skew
- All transitions use EaseMotion timing tokens (`--ease-speed-medium` / `--ease-ease`) for smooth, consistent animations
- Hover state cards with transform and box-shadow transitions using `cubic-bezier(0.34, 1.56, 0.64, 1)` for a bouncy feel
- Navigation links with horizontal slide effect using combined `translateX` and `padding-left` transitions
- Custom checkbox states with background and border color transitions
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Uses `--ease-color-primary`, `--ease-glow-*`, `--ease-radius-md`, `--ease-space-*` tokens throughout

## Usage

```html
<button class="hover-btn hover-btn-scale">Scale Up</button>
<div class="hover-card">
  <div class="hover-card-title">Card Title</div>
  <p class="hover-card-body">Card content goes here.</p>
</div>
```

## Why is it useful?

Hover effects are fundamental to good UX — they provide immediate feedback that an element is interactive. By using EaseMotion's timing token `--ease-ease` and the `--ease-speed-medium` duration, hover transitions feel natural and polished rather than jarring. The `--ease-glow-*` tokens add depth by lighting up interactive elements on hover.
