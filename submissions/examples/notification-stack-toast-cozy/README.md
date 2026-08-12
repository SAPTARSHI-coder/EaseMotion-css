# Notification Stack Toast (Cascade Slide)

A beautiful, interactive CSS-only animation for stacked toast notifications. As multiple toasts appear, they slide in sequentially with a staggered cascading delay.

## How does a developer use it?

Include the `.ease-toast-container` wrapper and place your `.ease-toast` elements inside. The CSS utilizes the `:nth-child` selector to automatically stagger the entrance animations.

```html
<div class="ease-toast-container">
    <div class="ease-toast">
        <strong>Success</strong>
        <p>Your changes have been saved.</p>
    </div>
    <div class="ease-toast">
        <strong>Warning</strong>
        <p>Please check your connection.</p>
    </div>
</div>
```

### Cascade Limitation & Manual Indexing
By default, the pure CSS cascade automatically handles up to **10 toasts** via `:nth-child` targeting. 

If you plan to dynamically spawn more than 10 toasts sequentially without clearing them, you can bypass this cap by injecting a `--toast-index` variable inline. The CSS will automatically calculate the delay based on the index:

```html
<div class="ease-toast" style="--toast-index: 12;">
    <!-- Delay is calculated as (12 * 0.15s) -->
</div>
```

## Customization

The component exposes CSS custom properties (variables) that allow you to easily customize its look and feel:

```css
:root {
  --toast-bg: var(--ease-color-bg, #ffffff);
  --toast-text: var(--ease-color-text, #1e293b);
  --toast-border: var(--ease-color-border, #e2e8f0);
  --toast-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --toast-radius: 0.5rem;
  --toast-gap: 1rem;
  --toast-duration: 0.6s;
}
```

## Why does it fit EaseMotion CSS?
It emphasizes smooth, animation-first UI interactions using pure CSS `@keyframes`. The cascading effect provides delightful micro-interactions without relying on heavy JavaScript timeline libraries, fitting perfectly with EaseMotion's philosophy of accessible and performant animations.
