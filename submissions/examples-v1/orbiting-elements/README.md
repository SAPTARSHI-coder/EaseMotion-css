# Orbiting Elements

## What it does

Creates satellite elements that orbit around a central point. Perfect for loading animations, decorative UI elements, atom models, or planetary system visualizations.

## How to use it

<div class="ease-orbit">
    <div class="ease-orbit-center">★</div>
    <div class="ease-orbit-satellite">●</div>
</div>

## Variants

- ease-orbit-double - Two satellites orbiting together
- ease-orbit-fast - 2x orbital speed (2s orbit)
- ease-orbit-slow - 0.5x orbital speed (8s orbit)
- ease-orbit-wide - Larger orbital radius (280px container)
- ease-orbit-reverse - Counter-clockwise rotation
- ease-orbit-pulse-center - Center element pulses
- ease-orbit-glow - Glow effect on center and satellite
- ease-orbit-3d - 3D perspective orbit

Combine variants:

<div class="ease-orbit ease-orbit-fast ease-orbit-reverse">

## Multiple Satellites

<div class="ease-orbit ease-orbit-double">
    <div class="ease-orbit-center">★</div>
    <div class="ease-orbit-satellite">🔵</div>
    <div class="ease-orbit-satellite-2">🔴</div>
</div>

## Custom Radius

Override the transform-origin for custom distances:

.ease-orbit-custom .ease-orbit-satellite {
    transform-origin: 50% 150px;
}

## Accessibility

Respects prefers-reduced-motion by freezing the orbit at the top position.

## Why it fits EaseMotion CSS

- Pure CSS, zero JavaScript
- Smooth continuous animation
- Multiple composable variants
- Customizable orbital radius
- Works with any emoji or icon