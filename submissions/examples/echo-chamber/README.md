# Echo Chamber

An interactive visual Echo Chamber where pointer and keyboard
interactions create expanding ripple echoes.

The component creates the visual feeling of sound without requiring
audio playback.

## Features

- Click-generated echoes
- Expanding ripple rings
- Boundary reflection effect
- Glow trails
- Multiple simultaneous echoes
- Echo counter
- Echo strength control
- Clear functionality
- Space-key interaction
- Responsive design
- Reduced-motion support

## How It Works

Each interaction creates an SVG ellipse at the interaction point.

JavaScript uses `requestAnimationFrame()` to continuously update:

- Ripple radius
- Opacity
- Reflection state
- Active echo count

When the ripple reaches the reflection threshold, a secondary
reflection ripple is created.

## Usage

Open `demo.html` directly in a browser.

Click anywhere inside the chamber to create an echo.

You can also focus the chamber and press `Space` to create an echo
at the center.

Use the **Echo Strength** slider to change the expansion speed.

Use **Clear Echoes** to remove all active ripples.

## Technologies

- HTML5
- CSS3
- JavaScript
- SVG
- `requestAnimationFrame()`

## Accessibility

The component includes:

- Keyboard interaction using `Space`
- `tabindex="0"` for keyboard access
- Descriptive `aria-label`
- `aria-live` for the echo counter
- Decorative SVG marked with `aria-hidden`
- Visible keyboard focus styles
- `prefers-reduced-motion` support

## Why It Fits EaseMotion CSS

Echo Chamber demonstrates how CSS, SVG, and lightweight JavaScript
can work together to create an expressive interactive animation
without requiring an external animation library.

The implementation is self-contained and can be opened directly from
`demo.html`.