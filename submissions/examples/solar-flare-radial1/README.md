# Solar Flare Radial

A smooth and performant pure CSS text animation inspired by the radiant energy of a solar flare.

## Features

- Pure HTML and CSS
- No JavaScript or external dependencies
- Radial solar-flare glow effect
- Animated radial rays
- Responsive typography
- Dark-mode friendly design
- GPU-friendly transform and opacity animations
- Accessible reduced-motion support with `prefers-reduced-motion`

## How It Works

The effect combines:

- CSS radial gradients for the central solar glow
- `repeating-conic-gradient()` for the radial flare rays
- Layered `text-shadow` effects for luminous text
- CSS keyframes for smooth pulsing and rotation
- `will-change` for frequently animated properties
- `prefers-reduced-motion` to disable animations for users who request reduced motion

## Usage

Open `demo.html` in any modern browser.

No build tools or dependencies are required.

## Browser Support

Works in modern browsers that support:

- CSS gradients
- CSS animations
- `text-shadow`
- `mask-image`
- `prefers-reduced-motion`

## Accessibility

The animation respects the user's motion preference through:

```css
@media (prefers-reduced-motion: reduce)