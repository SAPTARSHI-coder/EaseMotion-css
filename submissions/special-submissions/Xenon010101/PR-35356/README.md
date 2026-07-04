# ease-alert-bar-slide-xk

Notification alert bars that slide in from the left with colour-coded variants (success, warning, error, info) and dismiss functionality.

## How to use

```html
<link rel="stylesheet" href="style.css" />

<div class="alert-bar success" role="alert">
  <span class="alert-icon">&#10003;</span>
  <span class="alert-msg">Your changes have been saved!</span>
  <button class="alert-dismiss" aria-label="Dismiss">&times;</button>
</div>
```

Add `.hide` to dismiss with a slide-out animation. Remove `.hide` to show.

## Variants

- `success` – green accent
- `warning` – amber accent
- `error` – red accent
- `info` – blue accent

## Customisation

```css
:root {
  --ab-duration: .4s;
  --ab-ease: cubic-bezier(.4,0,.2,1);
  --ab-radius: 0;
  --ab-success: #22c55e;
  --ab-warning: #f59e0b;
  --ab-error: #ef4444;
  --ab-info: #3b82f6;
  --ab-text: #fff;
  --ab-bg: #1e293b;
}
```

## Accessibility

- `role="alert"` for screen readers
- `aria-label="Dismiss"` on close buttons
- Animations disabled with `prefers-reduced-motion: reduce`
