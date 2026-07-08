# Form Autocomplete List

Search input with a live suggestion dropdown and staggered slide-in animations.

## Features

- Filters a list of suggestions as the user types
- Staggered `translateY` + `opacity` entry animation per item
- Keyboard navigation: Arrow keys, Enter to select, Escape to dismiss
- Click outside closes the dropdown
- Custom properties for colors, spacing, and timing

## Custom Properties

| Property          | Default   | Description                    |
| ----------------- | --------- | ------------------------------ |
| `--ac-duration`   | `0.35s`   | Animation duration per item    |
| `--ac-stagger`    | `0.04s`   | Delay between each item        |
| `--ac-bg`         | `#ffffff` | Dropdown background            |
| `--ac-hover-bg`   | `#eef2ff` | Hover/active background        |
| `--ac-text-color` | `#111827` | Text color                     |
| `--ac-radius`     | `8px`     | Border-radius for input/list   |
| `--ac-border`     | `#d1d5db` | Border color                   |

## Usage

Include `style.css` and wrap an input with `#acInput` and a `<ul id="acList">` inside `.ac-wrapper`.
