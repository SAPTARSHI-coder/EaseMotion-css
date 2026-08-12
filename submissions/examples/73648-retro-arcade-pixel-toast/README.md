# Retro Arcade Pixel Toast

A pure HTML and Vanilla CSS toast notification inspired by retro arcade interfaces.

## Features

- Retro arcade pixel-inspired visual style
- Neon cyan and magenta accents
- Pixel-style hard shadows
- CSS grid background
- Smooth hover transitions
- Accessible `role="status"` notification
- Keyboard-friendly close button
- Dark-mode friendly design
- Responsive layout
- `prefers-reduced-motion` support
- No JavaScript or external dependencies

## Files

- `demo.html` - Toast component markup
- `style.css` - Complete component styling

## Usage

Open `demo.html` in any modern browser.

No build tools or external libraries are required.

## Accessibility

The notification uses `role="status"` and `aria-live="polite"` so assistive technologies can announce its content.

The close button includes an accessible `aria-label` and visible keyboard focus styling.

Reduced-motion preferences are respected through `prefers-reduced-motion`.

## Customization

The primary colors can be changed through the CSS custom properties in `:root`:

```css
:root {
  --accent: #00f5d4;
  --accent-secondary: #ff3cac;
}