# Visibility Utilities (ssx)

## What does this do?

Provides a complete set of pure-CSS utility classes for controlling element visibility — including `visibility`, `display`, accessibility-friendly screen-reader-only, opacity-based fading, responsive show/hide, and hover-to-reveal patterns.

## How is it used?

Apply any utility class directly to an element to control how it appears (or hides) in the UI:

```html
<!-- Visibility vs display -->
<div class="is-visible">Visible</div>
<div class="is-hidden">Hidden (still occupies space)</div>
<div class="is-none">Removed from layout entirely</div>

<!-- Screen-reader-only (accessibility) -->
<button>
  ❤️
  <span class="sr-only">Add to favorites</span>
</button>

<!-- Opacity-based fading -->
<div class="opacity-100">Fully visible</div>
<div class="opacity-50">Half faded</div>
<div class="opacity-0">Fully transparent</div>

<!-- Responsive visibility (breakpoint: 768px) -->
<div class="hide-on-mobile">Visible only on desktop</div>
<div class="hide-on-desktop">Visible only on mobile</div>

<!-- Hover-to-reveal -->
<div class="hover-card">
  <span class="hover-label">Hover me</span>
  <span class="hover-reveal">Hidden content revealed!</span>
</div>
```

Available classes:

- **Visibility / Display:** `is-visible`, `is-hidden`, `is-none`
- **Accessibility:** `sr-only`
- **Opacity:** `opacity-100`, `opacity-75`, `opacity-50`, `opacity-25`, `opacity-0`
- **Responsive:** `hide-on-mobile`, `hide-on-desktop`
- **Hover Reveal:** `hover-card`, `hover-reveal`

## Why is it useful?

Visibility control is one of the most fundamental needs in any UI — toggling modals, conditional content, accessibility-only labels, responsive layouts, and interactive reveals. Instead of repeatedly writing inline styles like `style="display: none"` or `style="opacity: 0.5"`, these utility classes make visibility intent declarative and consistent. The included `sr-only` class also promotes accessibility best practices — making content available to screen readers while keeping it visually hidden. This aligns perfectly with EaseMotion CSS's philosophy of minimal, expressive, and reusable styling utilities that improve both developer experience and end-user accessibility.