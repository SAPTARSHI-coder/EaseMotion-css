# Optimized Avatar Animations

This example demonstrates how to implement highly performant and accessible avatar animations using the EaseMotion CSS library. It covers common avatar UI patterns such as profile interactions, active status indicators, and group avatar stacks.

## 🌟 Feature Overview

Avatars are a fundamental part of modern web interfaces. Poorly optimized avatar animations (such as animating `margin`, `width`, or `height`) can cause layout thrashing and stuttering. This example solves this by strictly utilizing GPU-accelerated CSS properties.

**Included Components:**
- **Profile Selection Hover:** Smooth scale effect on hover.
- **Active Status Indicator:** Smooth opacity and color transitions, plus a continuous notification pulse effect.
- **Group Avatars:** An overlapping stack of avatars that expands gracefully on hover without causing reflows.

## 🚀 Installation Instructions

1. Copy the CSS rules from `style.css` into your project's main stylesheet or your specific component styles.
2. Link the `style.css` file directly in your HTML `<head>` if using it standalone:

```html
<link rel="stylesheet" href="path/to/avatar-ag/style.css">
```

## 💻 Usage Examples

### Basic Hover Scale
```html
<div class="ease-avatar-container ease-avatar-hover-scale">
    <img src="avatar.jpg" alt="User" class="ease-avatar">
</div>
```

### Avatar with Pulsing Status
```html
<div class="ease-avatar-container">
    <img src="avatar.jpg" alt="User" class="ease-avatar">
    <span class="ease-status-indicator ease-status-online ease-status-pulse"></span>
</div>
```

### Group Avatars
```html
<div class="ease-avatar-group">
    <div class="ease-avatar-container"><img src="user1.jpg" class="ease-avatar"></div>
    <div class="ease-avatar-container"><img src="user2.jpg" class="ease-avatar"></div>
    <div class="ease-avatar-container"><img src="user3.jpg" class="ease-avatar"></div>
</div>
```

## ⚡ Performance Optimization Techniques Used

This implementation is highly optimized to maintain 60FPS animations:
- **GPU Acceleration**: We exclusively animate `transform` and `opacity` (and `box-shadow` with low impact parameters) avoiding layout-triggering properties entirely.
- **`will-change` Property**: Applied strategically (`will-change: transform, opacity`) to the most dynamic elements like the pulsing indicator to hint the browser to prepare hardware layers.
- **Group Avatar Spreading**: Instead of animating `margin` or `padding` to spread the group on hover, we animate `transform: translateX()`. This ensures siblings are pushed visually without triggering expensive DOM reflows.

## 🌐 Browser Compatibility

These styles are compatible with all modern browsers:
- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)

## ♿ Accessibility Considerations

Animations can be distracting or cause nausea for some users. This module natively supports the `prefers-reduced-motion` media query. 

When a user has "Reduce Motion" enabled in their OS settings:
- The pulsing status indicator animation is completely disabled.
- Hover scaling is disabled.
- Group avatars remain static on hover (or snap to position without transition), ensuring the UI remains usable without motion.
