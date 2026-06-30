# Animation: Text Reveal Slide

## Overview

Text Reveal Slide is a modern entrance animation that combines a smooth fade-in, upward slide motion, and subtle scaling effect. The animation is designed to draw attention to important content without being distracting.

Elements begin slightly below their final position with reduced opacity and scale, then smoothly transition into place using a natural easing curve.

## Features

- Smooth fade-in effect
- Upward slide transition
- Subtle scale enhancement
- Lightweight CSS-only implementation
- Modern cubic-bezier easing
- Accessibility support with reduced-motion preference
- Reusable across different UI components

## Use Cases

- Hero section headings
- Landing page content
- Section titles
- Feature cards
- Call-to-action content
- Portfolio websites
- Product showcases

## Example Usage

```html
<h1 class="text-reveal-slide">Welcome to EaseMotion CSS</h1>
```

## Animation Behavior

1. Starts with opacity set to 0.
2. Begins slightly below the final position.
3. Uses a subtle scale effect for smoother appearance.
4. Gradually becomes fully visible.
5. Settles into its final position with natural motion.

## Accessibility

The animation includes support for users who prefer reduced motion through the `prefers-reduced-motion` media query.

## Browser Compatibility

Compatible with all modern browsers supporting:

- CSS Animations
- CSS Transforms
- CSS Keyframes
- Media Queries

## Acceptance Criteria

- Uses CSS keyframes.
- Smooth and visually appealing motion.
- Lightweight and reusable.
- Accessible implementation.
- Easy integration into existing projects.
- Consistent with EaseMotion CSS animation philosophy.
