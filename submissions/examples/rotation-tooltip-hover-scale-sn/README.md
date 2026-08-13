# Rotation Tooltip Fade-In & Hover Scale

## What does this do?

This submission introduces a responsive tooltip component that appears with a smooth fade-in, subtle rotation, and hover scale animation. It provides polished micro-interactions while remaining lightweight and framework-independent.

## How is it used?

Wrap the trigger element inside a tooltip container and add a tooltip element.

```html
<div class="tooltip-container">
  <button class="tooltip-trigger">Hover Me</button>
  <span class="tooltip-box top">Tooltip Info</span>
</div>
```

## Why is it useful?

This component aligns with EaseMotion CSS's animation-first philosophy by offering a reusable tooltip with modern transitions, responsive behavior, accessibility support through `prefers-reduced-motion`, and a clean developer experience.