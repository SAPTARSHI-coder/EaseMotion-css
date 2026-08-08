# Atmospheric Carbon Capture Grid Analytics — Phase #809

A pure HTML/CSS analytics dashboard showcase, built for the EaseMotion CSS
framework. No JavaScript — every chart, gauge, and status indicator is
animated entirely with CSS keyframes and transitions.

## Preview

Open `demo.html` in any modern browser (with `style.css` in the same folder)
to view the dashboard live.

## Components

- **Stat cards row** — four KPI cards (CO₂ captured, active nodes, grid
  efficiency, storage capacity) with a subtle lift-and-glow effect on hover.
- **Weekly capture bar chart** — six CSS-only bars that grow in on load and
  gently pulse in brightness afterward, each staggered with its own
  animation delay.
- **Annual target gauge** — a circular conic-gradient ring that sweeps in
  on load to show progress toward the yearly capture target.
- **Capture node grid** — a 12-node status grid with color-coded indicators
  (green = nominal, amber = maintenance, red = offline). Offline nodes blink
  and the whole grid has a soft ambient flicker for a "live telemetry" feel.
- **Live feed pill** — a pulsing dot in the header indicating the dashboard
  is receiving live data.

## Design notes

- Fully responsive: the stat row and main grid both collapse to fewer
  columns on tablet and mobile widths via CSS Grid media queries.
- Background uses a layered grid-line pattern for a technical, data-console
  feel without any images.
- All motion relies on GPU-friendly properties (transform, opacity, filter)
  to stay smooth at 60fps.
- Color palette (green/lime/amber/red) is defined as CSS custom properties
  in `:root` for easy theming.

## Files

- `demo.html` — the full single-page dashboard markup.
- `style.css` — all styling, layout, and keyframe animations.

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).