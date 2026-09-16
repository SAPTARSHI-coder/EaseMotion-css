# CSS Hyper Speed Warp Drive

A futuristic hyper-speed warp drive animation created entirely with HTML and CSS. The component uses layered CSS star fields, perspective transforms, glowing gradients, and animations to create the visual effect of travelling through space at extreme speed.

## Features

- Pure HTML and CSS implementation
- No JavaScript required
- Animated multi-layer star field
- CSS perspective effects
- Central glowing warp core
- Neon space aesthetic
- Responsive design
- Smooth CSS animations
- Reduced-motion accessibility support
- Mobile-friendly layout

## Files

- `demo.html` — Component structure and demo markup
- `style.css` — Complete styling, animations, effects, and responsive behavior
- `README.md` — Component documentation

## How It Works

The warp effect is created using multiple CSS layers.

### Star Field

Several `.stars` layers use CSS radial gradients to generate individual stars without external images or assets.

Each layer has a different:

- Star size
- Background size
- Opacity
- Animation speed
- Glow intensity

This creates a sense of depth and motion.

### Perspective Effect

CSS `perspective()` and `rotateX()` transforms create a three-dimensional space effect around the center of the component.

### Warp Core

The central warp core uses layered radial gradients and box shadows to produce a glowing energy effect.

### Animation

The star layers continuously scale outward to simulate travelling rapidly through space.

The warp core simultaneously pulses to create the impression of an active energy source.

## Accessibility

The component supports `prefers-reduced-motion`.

When reduced motion is enabled, decorative animations are disabled while the visual design remains available.

All decorative elements are marked with `aria-hidden="true"` so they do not interfere with assistive technologies.

## Responsive Design

The component adapts to smaller screens using responsive sizing and spacing.

On mobile devices:

- The main container uses more available screen space.
- Typography scales using `clamp()`.
- Content spacing is reduced.
- The interface maintains its central visual focus.

## Browser Compatibility

The component uses modern CSS features including:

- CSS gradients
- CSS animations
- CSS transforms
- CSS perspective
- CSS custom properties
- `backdrop-filter`
- `prefers-reduced-motion`

It is intended for modern browsers.

## Issue

EaseMotion CSS Issue #75227 — CSS Hyper Speed Warp Drive

