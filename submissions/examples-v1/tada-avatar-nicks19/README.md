# Tada Avatar (Food Delivery Theme)

A pure CSS avatar component featuring a playful "Tada" animation, commonly found in food delivery or gamified apps to draw attention to driver status, top chefs, or new notifications.

## Features

- **Pure CSS Tada Animation**: Implements the classic "Tada" effect (scale down slightly, rapid left/right rotation while scaled up, and return to normal) entirely via CSS `@keyframes`.
- **Flexible Triggers**: The CSS is structured to allow the animation to trigger on `:hover` (using the `.hover-trigger` class) or to loop infinitely with a delay (using `.ease-animate-infinite`).
- **Integrated Badge**: Includes a structurally integrated notification/status badge positioned at the bottom right, perfect for emojis or status icons.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.

## Usage Example

```html
<!-- Hover Trigger Variant -->
<div class="ease-tada-avatar hover-trigger">
  <img src="avatar.jpg" alt="User Avatar" class="ease-avatar-img">
  <div class="ease-avatar-badge">🛵</div>
</div>

<!-- Infinite Loop Variant -->
<div class="ease-tada-avatar ease-animate-infinite">
  <img src="avatar.jpg" alt="User Avatar" class="ease-avatar-img">
  <div class="ease-avatar-badge">⭐</div>
</div>
```

## Why it fits EaseMotion CSS

- **Playful Interpolation**: The Tada animation relies on precise `scale3d` and `rotate3d` adjustments within tight keyframe percentages, creating a bouncy, energetic feel.
- **Hardware Acceleration**: By using 3D transforms (`scale3d`, `rotate3d`), the browser offloads the animation to the GPU, ensuring smooth performance even when animating infinitely.
- **Component Anatomy**: Demonstrates how to properly structure a composite component (image + absolute badge) so that the entire block animates as a single cohesive unit.
