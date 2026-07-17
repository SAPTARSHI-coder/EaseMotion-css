# Menu Slide Side

A hamburger button that slides a navigation menu in from the left with an overlay backdrop.

## Features

- Slide-in menu using CSS `transform: translateX`
- Fading overlay backdrop
- Toggle via hamburger button or overlay click

## CSS Custom Properties

| Property                    | Default   | Description             |
| --------------------------- | --------- | ----------------------- |
| `--mss-menu-width`          | `280px`   | Width of the side menu  |
| `--mss-transition-duration` | `0.35s`   | Duration of animations  |
| `--mss-menu-bg`             | `#1e1e2e` | Menu background color   |
| `--mss-overlay-color`       | `rgba(0, 0, 0, 0.45)` | Overlay color |

## Usage

Toggle the `.mss-open` class on both the menu and overlay elements to show/hide.
