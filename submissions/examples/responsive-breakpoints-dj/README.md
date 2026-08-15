# Responsive Viewport Breakpoint Animation Overrides

## What does this do?
This feature introduces responsive screen-size modifiers (breakpoints) that allow developers to scale down, redirect, or completely deactivate CSS animations based on viewport width (e.g. tablet, mobile, desktop).

## How is it used?
Prepend responsive breakpoint prefixes directly onto EaseMotion class names in your markup:

```html
<!-- Fades in on mobile, but slides up on desktops (768px and up) -->
<div class="em-animated em-fade-in md:em-slide-up-100">
  <h3>Responsive Target Grid Card</h3>
</div>
```

Or disable motion elements specifically on mobile screens using the motion reducer class:

```html
<!-- Animates infinitely on desktop, but stops entirely on mobile (<768px) -->
<div class="em-animated em-spin-infinite em-mobile-none">
  <img src="spinner.svg" alt="Spinner">
</div>
```

## Why is it useful?
Animations designed for large desktop monitors can feel overly aggressive, slow down rendering speeds, or break layouts on smaller handheld viewports (e.g. causing horizontal scrolling). 

This utility addresses that by offering:
- **Tailwind-like responsive syntax** which is highly familiar, human-readable, and easy to compose.
- **Pinpoint motion control** allowing designers to reduce cognitive friction and layout shift on mobile viewports.
- **Deactivation support** (`.em-mobile-none`) that provides an easy, low-overhead accessibility layer for users on smaller viewport sizes without requiring any JavaScript.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser and resize the window to watch the active animation styles update in real-time.

## Contribution Notes
- Class naming was handled by the contributor (`md:em-slide-up-100`, `em-mobile-none`, etc.).
- Maintainer will rename to `ease-*` convention before merging.
