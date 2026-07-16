# A11y ARIA Fix — Animated Components

## What does this do?
Adds complete accessibility attributes to animated components: `aria-hidden="true"` on decorative animations, `aria-label` on interactive elements, `role="status"` with `aria-live` on dynamic content, skip links for keyboard navigation, and a global `prefers-reduced-motion` kill switch.

## How is it used?
```html
<!-- Decorative animation: screen readers skip it -->
<div class="deco-ring" aria-hidden="true" role="presentation"></div>

<!-- Live status region: announced to screen readers when content changes -->
<div class="status-badge" role="status" aria-live="polite" aria-atomic="true">
  <span class="status-dot" aria-hidden="true"></span>
  System Online
</div>

<!-- Interactive button with label -->
<button class="a11y-btn" aria-label="Play animation demo">▶ Play</button>

<!-- Skip link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

## Why is it useful?
Animated components without ARIA attributes are invisible or confusing to screen reader users, and animations without `prefers-reduced-motion` support can trigger motion sickness for users with vestibular disorders. This submission provides a complete, copy-paste pattern for making every EaseMotion CSS animated component WCAG 2.1 AA compliant.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9829
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
