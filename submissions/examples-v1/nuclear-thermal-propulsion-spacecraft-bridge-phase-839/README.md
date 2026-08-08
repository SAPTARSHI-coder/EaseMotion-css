# Nuclear Thermal Propulsion Spacecraft Bridge — Phase #839

A pure HTML/CSS sci-fi command-bridge UI showcase, built for the EaseMotion CSS
framework. No JavaScript — every animation, glow, and status indicator is
driven entirely by CSS keyframes and transitions.

## Preview

Open `demo.html` in any modern browser (with `style.css` in the same folder)
to view the bridge console live.

## Components

- **Thrust Vector Output panel** — four animated engine throughput bars with a
  soft pulsing glow, each staggered with a different animation delay.
- **NTP Reactor Core panel** — a dual counter-rotating ring around a breathing
  core glow, representing the reactor's containment field and thermal output.
- **System Status panel** — a console-style list with color-coded status dots:
  green (nominal), orange (elevated), and blinking red for critical alerts.
- **Alert banner** — a warning strip with a slow ambient glow pulse.
- **Starfield background** — a subtly drifting star layer for atmosphere.

## Design notes

- Fully responsive: collapses to a single column below 900px.
- All motion uses GPU-friendly properties (transform, opacity, filter) for
  smooth 60fps animation.
- Color palette defined via CSS custom properties in `:root` for easy theming.

## Files

- `demo.html` — the full single-page showcase markup.
- `style.css` — all styling, layout, and keyframe animations.

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).