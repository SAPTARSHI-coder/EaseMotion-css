# Ease Scale Sn

## What does this do?

A CSS-only scale animation utility with entry animations (scale-up and scale-down on page load) and hover scale effects, all with configurable origin and scale amount.

## How is it used?

```html
<!-- Entry animations (play on load) -->
<div class="animate-scale-up">Scales from 0 to 1</div>
<div class="animate-scale-down">Scales from 1.2 to 1</div>

<!-- Hover scale effects -->
<div class="hover-scale-up">Scales to 1.1x on hover</div>
<div class="hover-scale-down">Scales to 0.9x on hover</div>

<!-- Custom origin and amount -->
<div class="animate-scale-up" style="--scale-origin: bottom left">
  Origin: bottom-left
</div>
<div class="hover-scale-up" style="--scale-amount: 1.3">
  Custom 1.3x on hover
</div>
```

Customize via CSS custom properties:

- `--scale-origin` — transform-origin (default: `center`)
- `--scale-amount` — hover scale factor (default: `1.1` / `0.9`)

Speed modifier classes: `.scale-fast` (0.2s), `.scale-slow` (1s)

## Why is it useful?

Scale animations are crucial for interactive elements like cards, buttons, and images to provide visual feedback. This implementation is zero-dependency CSS-only, respects `prefers-reduced-motion`, and disables hover on mobile for touch-friendly UX.
