# Animated Border Beam

## What it does

Creates a glowing light beam that travels along the border of any element (card, button, image, modal). Perfect for drawing attention to featured content or creating premium visual effects.

## How to use it

Add the class to any element:

<div class="ease-border-beam">
    Your content here
</div>

## Variants

- ease-border-beam-reverse - Beam travels counter-clockwise
- ease-border-beam-fast - 2x speed (1.5s loop)
- ease-border-beam-slow - 0.5x speed (6s loop)
- ease-border-beam-dual - Two beams in opposite directions
- ease-border-beam-pink - Custom pink/magenta color scheme

Combine variants:

<div class="ease-border-beam ease-border-beam-fast ease-border-beam-dual">

## Custom Colors

Override the gradient using CSS variables:

<div class="ease-border-beam" style="--beam-color: #00ff88; --beam-color2: #00ccff;">

## Accessibility

Respects prefers-reduced-motion by disabling the animation and showing a subtle static border.

## Why it fits EaseMotion CSS

- Pure CSS, zero JavaScript
- Performant GPU-accelerated transforms
- Multiple composable variants
- Respects accessibility preferences
- Works on any element with border-radius
