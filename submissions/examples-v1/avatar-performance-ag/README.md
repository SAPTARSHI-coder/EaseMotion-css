# Optimized Avatar Animations

This submission provides an optimized, production-ready example of Avatar animations for the EaseMotion CSS library. The primary goal of these examples is to demonstrate how to build fluid, 60fps animations by strictly adhering to GPU-accelerated CSS properties (`transform` and `opacity`) while entirely avoiding layout-triggering properties.

## ✨ Feature Overview

The implementation showcases four practical UI avatar patterns:
1.  **Hover Lift Effect (`.ease-avatar-lift`)**: A smooth Y-axis lift when hovering a user profile.
2.  **Active Selection Ring (`.ease-avatar-select`)**: A scaling border that appears to indicate selection or active state.
3.  **Notification Pulse (`.ease-avatar-pulse`)**: A continuous pulsing dot indicating online status or unread notifications.
4.  **Avatar Group Expansion (`.ease-avatar-group`)**: A stacked list of avatars that expands horizontally on hover.

## 🚀 Installation & Usage

1.  Copy the contents of `style.css` into your project.
2.  Review `demo.html` for markup patterns.

Example Usage:
```html
<!-- Simple Lift Avatar -->
<div class="ease-avatar ease-avatar-lift">
    <img src="avatar.jpg" alt="User">
</div>

<!-- Avatar with pulsing status -->
<div class="ease-avatar ease-avatar-pulse">
    <img src="avatar.jpg" alt="User">
    <div class="ease-avatar-status"></div>
</div>
```

## ⚡ Performance Optimizations

To guarantee smooth rendering, especially on mobile devices, the following optimizations were applied:

*   **No Layout Shifts**: Removed transitions on `margin`, `padding`, `width`, `height`, and `border`.
*   **GPU Acceleration**: Used `transform: translate3d()` and `transform: scale()` for movement and sizing.
*   **Compositing**: Handled fading and pulses strictly via `opacity`.
*   **Pseudo-elements**: Used `::after` pseudo-elements for rings and pulses. This prevents the need to add extra HTML nodes or animate the physical border of the parent element, which would trigger layout repaints.
*   **Hardware Hints**: Added `transform: translateZ(0)` to the base image and `will-change: transform, opacity` where complex continuous animations exist.

## ♿ Accessibility

The CSS natively respects user system preferences. The `@media (prefers-reduced-motion: reduce)` query is implemented to:
*   Immediately disable all hover transitions (lift, expansion).
*   Halt and hide continuous pulse animations, preserving the static online indicator without the distracting animation.
