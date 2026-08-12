# 🔊 Echo Chamber

A visual audio-inspired interaction component where clicks and pointer
interactions generate soundless expanding ripples.

The component creates the visual feeling of an echo without requiring
audio playback.

## Features

- 🔊 Click-generated visual echoes
- 🌀 Expanding ripple rings
- ↩️ Boundary reflection
- ✨ Glowing ripple trails
- 🌊 Multiple simultaneous echoes
- 📊 Live echo counter
- 🎚️ Echo strength control
- 🧹 Clear functionality
- ⌨️ Space-bar interaction
- 📱 Responsive layout
- ♿ Keyboard focus support
- Reduced-motion consideration

## Echo Lifecycle

Each interaction:

1. Creates an echo at the pointer position.
2. Expands the primary ripple.
3. Fades the ripple as it grows.
4. Reaches the chamber boundary.
5. Creates a reflected visual ripple.
6. Gradually disappears.

## Technologies

- HTML5
- CSS3
- JavaScript
- SVG
- `requestAnimationFrame`

## Accessibility

The chamber can receive keyboard focus and supports the Space key
for creating an echo.

The implementation also includes:

- Visible `:focus-visible` styling
- Semantic buttons and controls
- Keyboard interaction
- `prefers-reduced-motion` support

## Performance

Animation is handled using `requestAnimationFrame`.

SVG circles are updated directly during the animation loop instead of
creating unnecessary DOM elements on every frame.

CSS transforms and opacity are used where appropriate to keep the
visual effects smooth.

## Usage

Open `demo.html` in a modern browser.

Click anywhere inside the chamber to create an echo.

Press **Space** while the chamber is focused to create an echo at
the center.

Use the **Echo Strength** slider to control the ripple speed and
intensity.

Use **Clear** to remove all active echoes.

## Issue

Implemented for EaseMotion CSS issue #72495.

## License

MIT License.