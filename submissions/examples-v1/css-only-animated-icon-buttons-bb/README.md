# CSS-Only Animated Icon Buttons

Icon buttons with 10 hover animation effects: rotate, bounce, pulse, shake, flip, glow, fill, scale, slide-up, and ring.

## What does this do?

Provides icon buttons with distinct hover animation effects. Each effect uses CSS transitions and keyframe animations for smooth, performant interactions.

## How is it used?

```html
<button class="icon-btn icon-btn--rotate" aria-label="Refresh">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="23 4 23 10 17 10" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10" />
  </svg>
</button>
```

### Animation effects

```html
<button class="icon-btn icon-btn--rotate">...</button>
<button class="icon-btn icon-btn--bounce">...</button>
<button class="icon-btn icon-btn--pulse">...</button>
<button class="icon-btn icon-btn--shake">...</button>
<button class="icon-btn icon-btn--flip">...</button>
<button class="icon-btn icon-btn--glow">...</button>
<button class="icon-btn icon-btn--fill">...</button>
<button class="icon-btn icon-btn--scale">...</button>
<button class="icon-btn icon-btn--slide-up">...</button>
<button class="icon-btn icon-btn--ring">...</button>
```

### Sizes and colors

```html
<button class="icon-btn icon-btn--sm icon-btn--primary">...</button>
<button class="icon-btn icon-btn--lg icon-btn--danger">...</button>
<button class="icon-btn icon-btn--circle icon-btn--success">...</button>
```

## Why is it useful?

- **10 animation effects** — variety for different interaction contexts
- **Accessible** — `aria-label` for screen readers, `focus-visible` for keyboard
- **Multiple sizes** — small (32px), default (44px), large (56px)
- **Color variants** — primary, danger, success, ghost
- **Reduced motion** — all animations disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for toolbars, action buttons, and navigation
