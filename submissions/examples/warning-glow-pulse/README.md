# Warning Glow Pulse

## 1. What does this do?

Pulses an amber / orange `box-shadow` glow on any element to communicate a **warning state** — attention-grabbing without being alarming.

## 2. How is it used?

Apply one class to the element that should pulse:

```html
<!-- Default intensity -->
<div class="warn-card warning-glow-pulse">Low disk space</div>

<!-- Softer, slower pulse (badges, secondary notices) -->
<span class="warn-badge warning-glow-pulse-subtle">⚠ WARNING</span>

<!-- Brighter, faster pulse (critical expiry, urgent errors) -->
<div class="warn-card warning-glow-pulse-intense">Certificate expiring!</div>
```

Override the amber colour for a different warning hue via the custom property:

```css
.my-element {
  --ease-warning-glow-color: rgba(249, 115, 22, 0.65); /* orange instead of amber */
}
```

## 3. Why is it useful?

EaseMotion CSS already ships `--ease-glow-primary`, `--ease-glow-success`, and `--ease-glow-danger`, but the warning (amber/orange) semantic was missing. This submission closes that gap by:

- **Adding `--ease-warning-glow-color`** — the missing design token, consistent with the existing glow variable naming.
- **Using only `box-shadow`** — hardware-accelerated, no layout shift, zero paint cost.
- **Three intensities in one file** — default / subtle / intense cover the full spectrum of severity without requiring custom keyframes.
- **Respecting `prefers-reduced-motion`** — the animation stops and a static amber ring is shown instead, keeping the warning visible without motion.
- **Token-driven colour** — the keyframe reads `var(--ease-warning-glow-color)`, so a single CSS override changes the hue without touching any animation code.

## Files

| File | Purpose |
|------|---------|
| `style.css` | Keyframe + three utility classes + reduced-motion guard |
| `demo.html` | Self-contained browser demo — open directly, no server needed |
| `README.md` | This file |
