# Animated Settings Toggle

A reusable settings panel featuring smooth, animated toggle switches built entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- Smooth toggle animation
- Animated toggle thumb
- Hover interaction
- Glowing active state
- Keyboard focus support
- Responsive layout
- Reduced-motion support
- No external dependencies

## Preview

The component demonstrates a modern settings panel with multiple interactive toggle switches.

Each switch can be independently enabled or disabled using the native checkbox input.

## How It Works

The toggle uses a visually hidden checkbox as the state controller.

The CSS selector:

```css
input:checked + .toggle-track

detects the checked state and changes the toggle track.

The toggle thumb is moved using CSS transforms:

transform: translateX(24px);

CSS transitions provide the smooth movement and hover effects.

Files
demo.html — Component structure and settings
style.css — Styling, animations and responsive behaviour
README.md — Component documentation
Technologies
HTML5
CSS3
Usage

Open demo.html directly in a browser.

No server, build tool or external dependency is required.

Accessibility

The component uses native checkbox inputs and supports keyboard focus through :focus-visible.

Users who prefer reduced motion are also supported through:

@media (prefers-reduced-motion: reduce)
Responsive Design

The settings panel adapts to smaller screen sizes using CSS media queries, allowing the component to work across desktop, tablet and mobile layouts.

Contribution

Created by Shruti Netake as a pure CSS component for the EaseMotion CSS repository.

Author

Shruti Netake