# Neon Glow Button Animation

## Overview

A showcase of modern neon glow button animations using only HTML and CSS. Each button emits a soft neon glow on hover with smooth transitions, plus animated breathing glow variants and a ghost outline style — no JavaScript required.

## Features

* Four color variants: indigo, pink, teal, amber
* Hover-activated neon glow via box-shadow expansion
* Breathing glow animation on select variants
* Ghost outline variant with subtle hover tint
* Smooth hover scale lift and active press
* Monospace usage snippet section
* Responsive layout
* Reduced-motion accessibility

## Variants

| Variant | Border | Hover Glow |
|---------|--------|------------|
| Indigo | `rgba(99, 102, 241, 0.2)` | Violet glow ring |
| Pink | `rgba(236, 72, 153, 0.2)` | Pink glow ring |
| Teal | `rgba(20, 184, 166, 0.2)` | Teal glow ring |
| Amber | `rgba(245, 158, 11, 0.2)` | Amber glow ring |

## Example Usage

```html
<button class="neon-btn indigo">Indigo</button>
<button class="neon-btn pink breathe-pink">Pulse</button>
<button class="neon-btn ghost">Ghost</button>
```

## Animation Behavior

1. Hover: border-color brightens, box-shadow expands from zero to a wide neon glow, button lifts with scale(1.04).
2. Active: button scales down to 0.96 for a press effect.
3. Breathing variants: box-shadow oscillates via a `breathe` keyframe on a 2.4s loop.

## Accessibility

The component respects `prefers-reduced-motion` by disabling the breathe animation and all button transitions. Color is not the sole indicator of state — hover is also indicated by border brightness and scale.

## Browser Compatibility

Compatible with modern browsers supporting CSS Animations, Transforms, Box-shadow, Transitions, and Media Queries.

## Acceptance Criteria

* Uses CSS keyframes.
* Smooth and reusable animation.
* Lightweight implementation.
* Accessible design.
* Easy integration into existing projects.
* Consistent with EaseMotion CSS principles.

Fixes #19166
