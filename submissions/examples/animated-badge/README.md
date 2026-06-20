# Animated Notification Badge

## What does this do?
A CSS-only animated notification badge component with a circular dot badge, count badge with pulse animation on update, entrance zoom effect, and four-corner position modifiers.

## How is it used?
```html
<!-- Notification dot (pulsing) -->
<div class="icon-wrapper">
  <span class="ease-badge-dot pulse"></span>
</div>

<!-- Count badge with pulse on update -->
<span class="ease-badge-notification is-updated">3</span>

<!-- Entrance animation -->
<span class="ease-badge-notification ease-badge-enter">New</span>

<!-- Position modifiers -->
<span class="ease-badge-dot top-left"></span>
<span class="ease-badge-dot bottom-right"></span>
```
Wrap icons in a `position: relative` container. Add `.ease-badge-dot` for a small red indicator, or `.ease-badge-notification` for a count badge. Toggle `.is-updated` to trigger the pulse animation. Use `.ease-badge-enter` for a zoom-in entrance. Position modifiers: `top-left`, `top-right` (default), `bottom-left`, `bottom-right`.

## Why is it useful for EaseMotion CSS?
Notification badges are a high-demand UI pattern for nav bars, messaging UIs, shopping carts, and alert systems. The pulse animation provides clear visual feedback for state changes, aligning with EaseMotion CSS's animation-first philosophy while remaining accessible with reduced-motion support.
