# CSS Floating Toolbar

A lightweight floating text-formatting toolbar created using HTML and CSS.

## Features

- Pure CSS animation
- Floating toolbar UI
- Bold, italic, underline and highlight controls
- Smooth entrance animation
- Hover and keyboard focus states
- Responsive layout
- Accessible toolbar semantics
- Reduced-motion support
- No external libraries

## Files

- `demo.html` – Demo page and toolbar markup
- `style.css` – Styling and animations

## How It Works

The toolbar starts hidden using:

- `opacity: 0`
- `visibility: hidden`
- `transform`

When the content area is hovered or the component receives keyboard focus,
CSS transitions reveal the toolbar.

## Accessibility

The toolbar uses:

- `role="toolbar"`
- `aria-label`
- Accessible button labels
- Visible keyboard focus states
- `prefers-reduced-motion` support

## Usage

Open `demo.html` in any modern browser.

No build tools or dependencies are required.

## Browser Compatibility

The component uses standard HTML and CSS features supported by modern browsers.

## Issue

Implemented for:

CSS Floating Toolbar – EaseMotion CSS

## License

This contribution follows the license and contribution guidelines of the
EaseMotion CSS repository.