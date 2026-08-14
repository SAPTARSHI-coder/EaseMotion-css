# ✈ Ease Airport Departure Screen

A retro split-flap style airport departure board component, built with pure HTML, CSS, and a small vanilla JS snippet for the live clock and character-flip animation.

## Features

- Classic airport-board look — dark panel, amber/cyan monospace text
- Live-updating clock in the header
- Split-flap style character reveal animation for destination names
- Status badges with distinct colors and states: **On Time**, **Boarding**, **Delayed**, **Cancelled**, **Departed**
- Pulse animation on urgent statuses (`Boarding`, `Delayed`) to draw attention
- Fully responsive — collapses into a stacked card layout on small screens
- No external dependencies — just `style.css` and vanilla JS

## Usage

1. Include `style.css` in your project.
2. Copy the `.ease-departure-screen` markup structure from `demo.html`.
3. Add or edit `.eds-row` blocks for each flight, one per row.
4. For a destination name, set the flip animation via:

```html
<span class="eds-flip" data-flip-text="London (LHR)"></span>
```

5. Include the small JS snippet at the bottom of `demo.html` to power the clock and the flip-in animation. It automatically finds all `.eds-flip` elements on the page and builds the animated characters.

## Status classes

| Class                      | Meaning   | Color  |
|-----------------------------|-----------|--------|
| `eds-status--ontime`        | On Time   | Green  |
| `eds-status--boarding`      | Boarding  | Cyan (pulses) |
| `eds-status--delayed`       | Delayed   | Amber (pulses) |
| `eds-status--cancelled`     | Cancelled | Red (strikethrough) |
| `eds-status--landed`        | Departed  | Grey   |

## Customization

All colors are exposed as CSS custom properties on `.ease-departure-screen`, so you can theme the board without touching the rest of the CSS:

```css
.ease-departure-screen {
  --board-bg: #0b0f14;
  --text-amber: #ffb100;
  --text-cyan: #4dd8e6;
  --status-ontime: #3ddc84;
  --status-delayed: #ffb100;
  --status-boarding: #4dd8e6;
  --status-cancelled: #ff4d4d;
}
```

## Files

- `demo.html` — working demo with sample flight data
- `style.css` — all component styles
- `README.md` — this file

## Preview

Open `demo.html` in any browser to see the live clock and flip-in animation in action.