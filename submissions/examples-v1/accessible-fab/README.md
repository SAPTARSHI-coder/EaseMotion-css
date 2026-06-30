# Accessible FAB (Floating Action Button)

## What does this do?

A keyboard-accessible floating action button component built with native `<button>` / `<a>` elements, supporting `aria-label`, `:focus-visible` focus indicators, primary/secondary color variants, size modifiers, extended label mode, and a speed dial pattern.

## How is it used?

```html
<!-- Primary FAB with aria-label -->
<div class="ease-fab ease-fab-primary">
  <button aria-label="Add new item">+</button>
</div>

<!-- Secondary FAB -->
<div class="ease-fab ease-fab-secondary">
  <button aria-label="Edit settings">&#9998;</button>
</div>

<!-- Size variants -->
<div class="ease-fab ease-fab-primary ease-fab-sm">...</div>
<div class="ease-fab ease-fab-primary ease-fab-lg">...</div>

<!-- Extended FAB with text label -->
<div class="ease-fab ease-fab-primary ease-fab-extended">
  <button aria-label="Compose message">&#9993; Compose</button>
</div>

<!-- As a link -->
<div class="ease-fab ease-fab-primary">
  <a href="#top" aria-label="Navigate to top">&#8593;</a>
</div>

<!-- Position via utility classes -->
<div
  class="ease-fab ease-fab-primary"
  style="position:absolute; bottom:1rem; right:1rem;"
>
  <button aria-label="Add">+</button>
</div>
```

Wrap a `<button>` or `<a>` inside `.ease-fab`. Always include `aria-label` for screen readers. Use `.ease-fab-primary` or `.ease-fab-secondary` for the color variant, `.ease-fab-sm` / `.ease-fab-lg` for size, and `.ease-fab-extended` for a text label. The button has a minimum 44&times;44px touch target (WCAG 2.5.5) and visible `:focus-visible` outline.

## Why is it useful for EaseMotion CSS?

FABs are a high-demand UI pattern for primary actions in modern web apps. This component ensures WCAG 2.1 Keyboard (2.1.1) and Target Size (2.5.5) compliance, filling an accessibility gap in the framework while maintaining EaseMotion CSS's animation-first design with smooth hover and active transitions.
