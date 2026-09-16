# Squeeze Footer

A sticky footer that compresses as the user scrolls, revealing navigation links with a parallax-like effect. The footer stays fixed at the bottom and squeezes down in height as the main content scrolls past it.

## Features

- Sticky footer that responds to scroll position
- Height smoothly reduces (squeezes) as user scrolls
- Navigation links fade in sequentially with offset animation
- Parallax-like visual interaction with content
- CSS custom properties for full control

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sf-duration` | `0.3s` | Transition duration for opacity and hover effects |
| `--sf-bg` | `#0f0f1a` | Background color of the footer |
| `--sf-text-color` | `#94a3b8` | Color of secondary text |
| `--sf-link-color` | `#6366f1` | Color of footer links |
| `--sf-radius` | `8px` | Border radius for footer elements |

## Usage

Include `style.css` and use the provided HTML structure. The footer uses `position: fixed` at the bottom, with JavaScript adjusting its height and link opacity based on scroll progress. Content should have sufficient height to trigger the squeeze effect.
