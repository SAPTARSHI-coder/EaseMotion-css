# Holographic Flicker Tabs

Pure HTML and Vanilla CSS implementation for issue #73559.

## Features

- Holographic gradient active state
- Controlled flicker animation
- Native radio controls
- Responsive layout
- Visible focus state
- Reduced-motion support
- No JavaScript dependencies

## Implementation

The selected tab receives a multicolor gradient and a short stepped animation. The content panels are selected using CSS sibling selectors.

## Accessibility

Native radio controls provide keyboard selection. Motion is disabled when `prefers-reduced-motion` is enabled.

## Usage

Open `demo.html` directly in a modern browser.
