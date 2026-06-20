# Animated Notification Dot &amp; Pulse Badge

## What does this do?
CSS-only animated notification components: an 8px danger-colored dot indicator with pulse animation, a count badge with spring pulse on `.is-updated`, a zoom-in entrance animation, and four-corner position modifiers.

## How is it used?
```html
<!-- Notification dot with pulse -->
<div class="icon-wrapper">
  <span class="ease-badge-dot pulse"></span>
</div>

<!-- Fast pulse variant -->
<span class="ease-badge-dot pulse-fast"></span>

<!-- Count badge with pulse trigger -->
<span class="ease-badge-notification is-updated">3</span>

<!-- Entrance animation -->
<span class="ease-badge-notification ease-badge-enter">New</span>

<!-- Position modifiers -->
<span class="ease-badge-dot ease-badge-top-left"></span>
<span class="ease-badge-dot ease-badge-bottom-right"></span>
```

## Why is it useful for EaseMotion CSS?
Notification indicators are an essential UI pattern for messaging, alerts, shopping carts, and nav bars. The pulse and entrance animations provide clear visual feedback for state changes, aligning with EaseMotion CSS's animation-first philosophy while remaining accessible with reduced-motion support.
