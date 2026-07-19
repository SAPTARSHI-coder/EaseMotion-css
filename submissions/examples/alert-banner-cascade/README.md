# Alert Banner

A dismissible alert banner component with slide animations, severity variants (success, warning, error, info), and different sizes.

## What does this do?

This creates alert banner components with slide-in/out animations using CSS `@keyframes`, severity variants with distinct color schemes and gradients, icon styling, dismiss buttons, and multiple size variants.

## How is it used?

```html
<div class="alert-banner alert-banner--success" role="status">
  <span class="alert-banner__icon">✓</span>
  <div class="alert-banner__content">
    <strong>Success!</strong>
    <p>Your changes have been saved successfully.</p>
  </div>
  <button class="alert-banner__close" aria-label="Dismiss success alert">×</button>
</div>

<!-- Severity variants -->
<div class="alert-banner alert-banner--warning">...</div>
<div class="alert-banner alert-banner--error">...</div>
<div class="alert-banner alert-banner--info">...</div>

<!-- Size variants -->
<div class="alert-banner alert-banner--sm">...</div>
<div class="alert-banner alert-banner--lg">...</div>
```

The slide-out animation uses CSS `@keyframes`:

```css
@keyframes alert-slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-16px) scale(0.98);
  }
}
```

## Why is it useful?

Alert banners are essential for displaying important messages to users (system notifications, errors, warnings). Different severity levels with color coding provide clear communication of message importance. Dismiss animations provide better UX by giving visual feedback when closing alerts. Multiple size variants make it versatile for different design contexts. The CSS-first approach using `@keyframes` for animations and gradient backgrounds for severity levels demonstrates practical notification patterns. This component is lightweight and performant, making it suitable for modern web applications where user feedback is important.
