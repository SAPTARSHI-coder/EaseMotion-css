
# Pulse Animation Example

A lightweight, reusable pulse animation built with EaseMotion CSS, demonstrated across common UI components: buttons, cards, icons, notifications, and badges.

## Feature Overview

The `.ease-pulse` utility class applies a smooth, looping scale + opacity animation to draw attention to an element — ideal for highlighting calls-to-action, live notifications, or status indicators, without being distracting.

- Pure CSS, no JavaScript required
- Uses `transform` and `opacity` for GPU-accelerated, smooth performance
- Respects `prefers-reduced-motion` for accessibility
- Fully responsive across desktop, tablet, and mobile

## Installation

Copy `style.css` into your project, or copy just the `.ease-pulse` class and its `@keyframes ease-pulse-kf` rule into your existing stylesheet.

```html
<link rel="stylesheet" href="style.css" />
```

## Usage Example

Add the `ease-pulse` class to any element you want to animate:

```html
<button class="btn ease-pulse">Subscribe</button>

<span class="badge ease-pulse">New</span>

<div class="notification ease-pulse">
  You have 3 new messages
</div>
```

## Customization

You can adjust the animation speed or intensity by overriding the animation duration or the keyframe scale:

```css
/* Slower pulse */
.ease-pulse {
  animation-duration: 3s;
}

/* Subtler pulse */
@keyframes ease-pulse-kf {
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
}
```

## Browser Support

Tested and working in Chrome, Firefox, Safari, and Edge.

## Accessibility

The animation is automatically disabled for users with `prefers-reduced-motion: reduce` enabled in their OS/browser settings.