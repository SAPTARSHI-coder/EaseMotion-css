# Floating Elevation Toast

A smooth and accessible CSS toast notification featuring a subtle floating elevation effect.

## Features

- Floating elevation visual treatment
- Layered soft shadows
- Smooth hover transitions
- Hardware-accelerated transforms
- Dark mode support using `prefers-color-scheme`
- Responsive design
- Accessible status notification
- Keyboard-friendly close button
- Reduced-motion support
- Pure HTML and Vanilla CSS
- No external dependencies

## Files

- `demo.html` - Toast notification markup
- `style.css` - Complete component styling

## Usage

Open `demo.html` in a modern browser.

No JavaScript, build tools, or external libraries are required.

## Accessibility

The toast uses:

- `role="status"`
- `aria-live="polite"`
- `aria-atomic="true"`
- Accessible close button labeling
- Visible keyboard focus styling
- `prefers-reduced-motion` support

## Styling

The Floating Elevation effect is created using layered CSS `box-shadow` values combined with GPU-friendly `transform: translate3d()` transitions.

The component automatically adapts to the user's preferred color scheme.

## Technologies

- HTML5
- Vanilla CSS