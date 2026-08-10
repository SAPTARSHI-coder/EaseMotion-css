# Interactive Map Pin

A stylised map interface with animated pins that drop on load and reveal info popups on click.

## Features

- Pins drop and bounce into place with a staggered animation on page load
- Click a pin to show an info popup with a scale + opacity transition
- Hover state scales the pin icon
- Staggered animation delays for a sequenced reveal
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--imp-duration` | `0.5s` | Transition and animation duration |
| `--imp-pin-color` | `#ef4444` | Accent colour for pins |
| `--imp-pin-size` | `40px` | Font size of the pin icon |
| `--imp-popup-bg` | `#1e293b` | Background colour of info popups |
| `--imp-popup-shadow` | `rgba(0,0,0,0.5)` | Box shadow colour for popups |
| `--imp-radius` | `8px` | Border radius for the map and popups |

## Usage

Include `style.css` and `script.js`. Place `imp-pin` elements inside `imp-map` with percentage-based `top`/`left` positioning. Each pin requires a `data-location` attribute; an optional `data-desc` provides the popup body text.
