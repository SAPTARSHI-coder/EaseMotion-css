# Glow Image SCSS Mixin

## Description
This SCSS mixin provides a visually striking "Glow Entrance" animation. Designed specifically for images (especially transparent PNGs or SVGs), it fades the image in while scaling it up slightly and emitting a bright, pulsating drop-shadow glow that settles into a soft ambient glow.

## Usage

```scss
@use 'glow-image' as *;

.my-hero-illustration {
  @include ease-glow-image-mixin-ag(rgba(16, 185, 129, 0.7), 1.2s);
}
```

## Parameters
- `$glow-color`: The color of the drop-shadow glow (default: `rgba(59, 130, 246, 0.6)`).
- `$duration`: The length of the entrance animation (default: `1s`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by replacing the scale and pulsating glow animation with a simple opacity fade-in. It maintains the final static drop-shadow for design consistency.
