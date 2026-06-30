# Animation Direction Showcase

## Overview

A demo page showcasing eight directional CSS animations — fade (left, right, up, down) and slide (left, right, up, down). Each animation has its own demo card with a trigger button to replay the effect, plus a code snippet section for easy reference.

## Features

- 4 fade-in directional animations (left, right, up, down)
- 4 slide directional animations (left, right, up, down)
- Individual trigger buttons to replay each animation
- Modern cubic-bezier easing
- Lightweight CSS-only implementation
- Dark theme with glassmorphism cards
- Accessibility support using `prefers-reduced-motion`
- Responsive grid layout

## Use Cases

- Learning and understanding CSS animation directions
- Reference page for choosing the right entrance animation
- Portfolio and landing page development
- Educational material for CSS workshops

## Example Usage

```html
<div class="demo-block anim-fade-in-left">Fade Left</div>
```

## Animation Behavior

1. Fade animations combine opacity (0 → 1) with directional translate offsets (±40px).
2. Slide animations use directional translate (±80px) without opacity changes.
3. All animations use `cubic-bezier(0.25, 1, 0.5, 1)` easing for smooth motion.
4. Trigger button removes and re-adds the animation class to replay.

## Accessibility

This component respects the user's motion preferences through the `prefers-reduced-motion` media query, which disables all animations.

## Browser Compatibility

Compatible with modern browsers supporting:

- CSS Animations
- CSS Transforms
- CSS Keyframes
- Media Queries
- CSS Backdrop Filter

## Acceptance Criteria

- Uses CSS keyframes.
- Smooth and reusable animation.
- Lightweight implementation.
- Accessible design.
- Easy integration into existing projects.
- Consistent with EaseMotion CSS principles.
