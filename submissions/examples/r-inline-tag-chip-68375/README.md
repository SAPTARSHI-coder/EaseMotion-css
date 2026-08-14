# CSS Inline Tag / Chip

A responsive pure CSS inline tag and chip component with removable controls
and multiple color variants.

## Features

- Pure HTML and CSS
- Pill-shaped inline tags
- Remove button for each tag
- Blue, purple, green, orange, and pink variants
- Responsive wrapping layout
- Hover interaction
- Keyboard-accessible remove buttons
- Visible `:focus-visible` states
- `prefers-reduced-motion` support
- Forced-colors support
- No external dependencies

## Files

- `demo.html` — Component markup and demo
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Open `demo.html` directly in a modern browser.

The example demonstrates several tag variants:

- Design
- Development
- Accessibility
- Animation
- CSS

Each chip includes a button with an accessible label for removing the tag.

## Accessibility

The component uses:

- Semantic `<button>` elements for remove controls
- Descriptive `aria-label` values
- `:focus-visible` styles for keyboard users
- Responsive layout
- `prefers-reduced-motion` support
- `forced-colors` support

The remove buttons are keyboard accessible using the standard Tab
navigation.

## Browser Support

Works in modern browsers supporting CSS flexbox, transitions, media queries,
and standard accessibility features.