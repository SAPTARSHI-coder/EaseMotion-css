# Echo Chamber

An interactive visual Echo Chamber where pointer and keyboard interactions
create expanding ripple echoes.

The component creates the visual feeling of sound without using audio.

## Features

- Click-generated echoes
- Expanding ripple rings
- Visual boundary reflections
- Glow trails
- Multiple simultaneous echoes
- Live echo counter
- Echo strength control
- Clear functionality
- Keyboard interaction with Space
- Responsive layout
- Reduced-motion support

## How It Works

Each interaction creates an SVG ellipse at the interaction point.

JavaScript uses `requestAnimationFrame()` to continuously update:

- Ripple radius
- Opacity
- Reflection state
- Active echo count

The ripple gradually expands while becoming transparent.

When an echo reaches the reflection threshold, a secondary dashed
reflection ripple is created.

## Usage

Open `demo.html` directly in a browser.

Click anywhere inside the chamber to create an echo.

You can also focus the chamber and press `Space` to create an echo at
the center.

Use the Echo Strength slider to change the expansion speed.

Use **Clear Echoes** to remove all active ripples.

## Technologies

- HTML5
- CSS3
- JavaScript
- SVG
- `requestAnimationFrame()`
- CSS transforms and animations

## Accessibility

The component includes:

- `role="application"` on the interactive chamber
- `aria-label` describing the interaction
- `role="status"` and `aria-live` for the echo counter
- Keyboard interaction through `Space`
- Visible keyboard focus styles
- Decorative SVG marked with `aria-hidden`
- `prefers-reduced-motion` support

## Why It Fits EaseMotion CSS

Echo Chamber demonstrates how CSS, SVG, and lightweight JavaScript can
work together to create an expressive interactive animation without
requiring an external animation library.

The implementation remains self-contained and can be opened directly
from `demo.html`.