# 3D Sidebar - Dark Mode

A responsive 3D-inspired sidebar and dashboard interface with light and dark mode support.

## Features

- 3D-inspired sidebar depth
- Responsive desktop and mobile layouts
- Dark/light mode toggle
- Theme persistence with `localStorage`
- Mobile sidebar navigation
- Dashboard statistics
- Activity chart
- Recent projects section
- Recent messages section
- Accessible labels and focus states
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` - Complete sidebar and dashboard markup
- `style.css` - Responsive 3D styling and themes

## Usage

Open `demo.html` in a modern browser.

Use the menu button on smaller screens to open or close the sidebar.

Use the Dark Mode control in the sidebar to switch themes.

The selected theme is stored with `localStorage`.

## Responsive Behavior

On smaller screens:

- The sidebar slides in from the left.
- A mobile menu button becomes visible.
- Dashboard cards stack vertically.
- Charts and panels adapt to the available width.

## Accessibility

The component uses semantic navigation markup, accessible labels, visible keyboard focus states, and `prefers-reduced-motion` support.