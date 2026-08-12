# Native CSS Floating Dock

A macOS-inspired floating dock built entirely with HTML and CSS.

The dock uses modern CSS features such as `:has()` and sibling combinators to create a responsive hover effect where the hovered icon scales up and its neighboring icons respond smoothly.

## Features

- Pure HTML and CSS
- No JavaScript
- macOS-inspired floating dock design
- Hover scaling animation
- Immediate and second-level neighbor scaling
- Smooth CSS transitions
- Floating glass-style appearance
- Responsive layout for smaller screens
- Keyboard accessible
- Visible focus states
- `prefers-reduced-motion` support

## How It Works

The dock uses CSS selectors to detect the hovered item and style its neighboring elements.

The main interaction is implemented using:

```css
:has()