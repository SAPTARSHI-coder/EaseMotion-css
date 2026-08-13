# Location Pin Drop

Animated map pins that drop in from above with a spring-like bounce settle. A ripple radiates on landing. Click any pin to re-drop it.

## Features

- Pins drop and bounce into place with a cubic-bezier spring curve
- Ripple effect emanates from each pin on landing
- Pin colour transitions from red to green when landed
- Click any pin to replay the drop animation
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lpd-duration` | `0.6s` | Drop and ripple animation duration |
| `--lpd-pin-color` | `#ef4444` | Pin icon colour before landing |
| `--lpd-shadow` | `rgba(0,0,0,0.4)` | Drop shadow colour for the pin |
| `--lpd-ripple-color` | `rgba(239,68,68,0.35)` | Ripple ring colour |
| `--lpd-land-color` | `#22c55e` | Pin colour after landing |

## Usage

Include `style.css`. Place `lpd-pin` elements inside `lpd-map` with percentage-based `top`/`left` positioning. The JavaScript in `demo.html` handles the drop/land toggle on click.
