# Elastic Scale Button

## What does this do?
A button that elastically scales up with a springy bounce on hover, tap, and keyboard focus, using pure CSS (`transform: scale()` + a cubic-bezier overshoot curve — no JavaScript required for the animation itself).

## How is it used?
```html
<link rel="stylesheet" href="style.css">

<!-- Primary -->
<button type="button" class="elastic-scale-btn elastic-scale-btn--primary">
  Get Started
</button>

<!-- Secondary (outline) -->
<button type="button" class="elastic-scale-btn elastic-scale-btn--secondary">
  Learn More
</button>

<!-- Icon-only (requires aria-label) -->
<button type="button" class="elastic-scale-btn elastic-scale-btn--icon" aria-label="Add to favorites">
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="..."/>
  </svg>
</button>

<!-- Disabled -->
<button type="button" class="elastic-scale-btn elastic-scale-btn--primary" disabled>
  Unavailable
</button>
```

Theming is done entirely through CSS custom properties (`--scale-btn-bg`, `--scale-btn-scale-peak`, `--scale-btn-duration`, `--scale-btn-easing`, etc.) — override them on `:root` or a scoped container to retheme without touching the animation logic. Dark mode is supported via a `.dark` class on `<body>` or automatically via `prefers-color-scheme`.

## Why is it useful?
It gives EaseMotion CSS a ready-to-use, dependency-free micro-interaction that's common in modern UI (CTAs, icon actions) without requiring a JS animation library. It's accessible by default — `:focus-visible` gets the same elastic feedback as `:hover`, disabled buttons are excluded from the animation, and `prefers-reduced-motion` is respected — which fits EaseMotion's philosophy of expressive-but-considerate motion.

## Accessibility notes
- Icon-only buttons require a descriptive `aria-label` (shown in the demo).
- Keyboard users get the same bounce feedback as mouse users via `:focus-visible`, with a visible focus ring (not suppressed).
- `disabled` buttons are excluded from the transform/transition so they don't animate.
- Respects `prefers-reduced-motion: reduce` by disabling the scale transform while keeping the color-change feedback.

## Files
- `demo.html` — self-contained demo, opens directly in a browser, no server/CDN/framework needed.
- `style.css` — raw CSS for the component (class names are left as-is per contribution guidelines; the maintainer will remap to the `ease-*` convention on integration).
