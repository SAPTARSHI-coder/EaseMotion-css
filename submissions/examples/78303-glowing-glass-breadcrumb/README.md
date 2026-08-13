# Glowing Breadcrumb with Glassmorphism Styling

A responsive breadcrumb component built with pure HTML and CSS.

## Features

- Glassmorphism interface
- Subtle neon glow effects
- Responsive breadcrumb layout
- Interactive hover effects
- Animated current-page indicator
- Floating location status card
- Keyboard focus states
- Reduced-motion accessibility support
- No JavaScript dependency

## Files

- `demo.html` — component markup and demo
- `style.css` — complete component styling and responsive behavior

## Usage

Open `demo.html` directly in a browser.

The breadcrumb labels and links can be customized
according to the host application's navigation structure.

## Responsive Behavior

On desktop, breadcrumb items appear in a horizontal layout.

On smaller screens, the breadcrumb automatically wraps
into a compact grid layout and the current page remains
clearly highlighted.

## Accessibility

The component uses:

- Semantic `<nav>` and `<ol>` elements
- `aria-label="Breadcrumb"`
- `aria-current="page"`
- Visible keyboard focus states
- `prefers-reduced-motion` support