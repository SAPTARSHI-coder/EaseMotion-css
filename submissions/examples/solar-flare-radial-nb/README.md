# Solar Flare Radial

A lightweight, pure HTML and CSS micro interaction that delivers a warm radial solar flare effect from the center of interactive UI elements.

## Overview

Solar Flare Radial is designed for premium interface motion across buttons, cards, navigation items, status badges, and feature highlights. The interaction is subtle, centered, and powered by performant transforms, opacity, and blur effects.

## Features

- Warm radial glow expanding from the center
- Soft light burst layer with subtle scale enhancement
- Accessible `:focus-visible` styling for keyboard users
- Compact pressed state for active feedback
- Dark-mode friendly design with a light-mode fallback
- `prefers-reduced-motion` support
- Pure HTML and vanilla CSS only

## Visual behavior

The flare appears on hover and keyboard focus. Two pseudo-elements produce the glow and wash layers, while the base component scales gently and keeps content readable.

## Usage

1. Copy `demo.html` and `style.css` into your project folder.
2. Link `style.css` from the page.
3. Apply the `solar-flare-base` class to the interactive component.
4. Use semantic elements such as `<button>` or `<a>` for controls.

### HTML example

```html
<button class="solar-flare-base ease-btn" type="button">
  Launch Mission
</button>
```

### Feature highlight example

```html
<a class="solar-flare-base solar-feature-link ease-btn" href="#">
  View details
</a>
```

## CSS custom properties

The component is configured with reusable custom properties:

- `--solar-flare-duration` — animation duration for hover / focus transitions
- `--solar-flare-easing` — easing curve for smooth motion
- `--solar-flare-scale` — scale value for the interactive state
- `--solar-flare-opacity` — flare layer opacity during active interaction
- `--solar-flare-blur` — blur amount for glow layers
- `--solar-flare-radius` — border radius for the component
- `--solar-flare-spread` — glow spread size for the hover shadow
- `--solar-flare-shadow` — base shadow style used across hover states

## EaseMotion classes used

This showcase uses EaseMotion-style utility classes:

- `ease-card`
- `ease-btn`
- `ease-hover-scale`
- `ease-fade-in`
- `ease-slide-up`

These classes are used where they fit naturally and help demonstrate how the Solar Flare Radial styling complements the existing framework.

## Accessibility

- Uses semantic interactive elements: `<button>` and `<a>`.
- Supports `:focus-visible` for keyboard navigation.
- Text remains readable during flare animation.
- The effect does not rely on hover alone.

## Reduced-motion behavior

When `prefers-reduced-motion: reduce` is active, animations and transitions are minimized. The flare effect remains visible in a reduced form while avoiding motion-heavy scaling.

## Responsive behavior

The showcase is responsive across mobile, tablet, and desktop:

- Uses a fluid grid with `auto-fit` and `minmax`
- Adjusts spacing and font sizes for smaller screens
- Keeps no horizontal overflow
- Touch-friendly hit areas and button spacing

## Performance considerations

The animation is designed for high performance by prioritizing:

- `transform`
- `opacity`
- `filter`
- `box-shadow`

No JavaScript, canvas, or external animation libraries are used.

## Browser compatibility

This example is compatible with modern browsers that support CSS custom properties, `prefers-reduced-motion`, and `:focus-visible`.

## Customization guide

To adapt the flare for your own design, adjust the custom properties in `style.css`:

- `--flare-color` and `--flare-soft` for warm tone
- `--solar-flare-duration` and `--solar-flare-easing` for motion feel
- `--solar-flare-scale` for stronger or softer scale effects
- `--solar-flare-blur` for a wider glow
- `--solar-flare-radius` for more rounded components

For a lighter UI, override the page palette and keep the flare hue warm and soft.
