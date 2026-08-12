# Reduced Motion Toolkit

## What does this do?
A two-layer `prefers-reduced-motion` solution addressing #8721:

1. **Global safety net** — a framework-wide `@media (prefers-reduced-motion: reduce)` rule on `*`, matching the issue's suggested solution exactly, catching any animation/transition that an individual component might not guard itself.
2. **`.ease-motion-safe` opt-in wrapper** — for sections where even an instant transform-jump is unwanted (parallax, tilt, magnetic-hover effects where the resting `transform` itself is part of the visual), this fully removes `animation`, `transition`, and `transform`.

Includes a live in-page **motion simulator toggle** so reviewers can see the before/after without changing OS-level accessibility settings, plus a **coverage audit** of existing `core/`/`components/` files.

## The fix

### Layer 1 — Global safety net (`core/base.css`)
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    transition-delay: 0s !important;
  }

  html {
    scroll-behavior: auto;
  }
}
```

### Layer 2 — Opt-in `.ease-motion-safe` wrapper
```css
@media (prefers-reduced-motion: reduce) {
  .ease-motion-safe,
  .ease-motion-safe *,
  .ease-motion-safe *::before,
  .ease-motion-safe *::after {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    scroll-behavior: auto !important;
  }
}
```

## How to use it
```html
<!-- Layer 1 applies automatically, framework-wide — no class needed -->
<div class="ease-pulse">...</div>

<!-- Layer 2: wrap sections where instant transform-jumps are unwanted -->
<section class="ease-motion-safe">
  <div class="magnetic-hover-card">...</div>
</section>
```

## Coverage audit
A review of `core/` and `components/` found most files (`animations.css`, `buttons.css`, `cards.css`, `chip.css`, `ease-marquee.css`, `footer.css`, `masonry.css`, `modals.css`, `scroll-progress.css`, `sidebar.css`, `tooltips.css`) **already have** a `prefers-reduced-motion` block. `core/base.css` has only a partial `scroll-behavior` reset. `navbar.css`, `badges.css`, `loaders.css`, and `tabs.css` have **no block at all** — flagged in the demo's audit table for future contributors to address per-component, while Layer 1 of this submission provides an immediate global catch-all for exactly these gaps.

## Why it fits EaseMotion CSS
Directly addresses #8721's WCAG 2.1 SC 2.3.1 compliance request with the exact suggested global-reset pattern, plus a more thorough opt-in wrapper for transform-heavy effects, a live demo toggle (since `prefers-reduced-motion` can't otherwise be demonstrated without changing OS settings), and a documented audit so future component additions know what's already covered.
