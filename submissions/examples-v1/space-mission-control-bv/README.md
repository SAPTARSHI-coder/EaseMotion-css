# Space Mission Control Dashboard

This example showcases a **Space Mission Control Center** built with **EaseMotion CSS**. It demonstrates:

- A deep-space dark theme with starfield background, violet and cyan accent colors.
- CSS-only orbital mechanics visualization with rotating planets and pulsing core.
- Subsystem telemetry readouts with status badges.
- Crew management cards, mission timeline, and CAPCOM communications log.
- Fully responsive from widescreen monitors down to mobile devices.

## Directory Structure

```
/space-mission-control-bv/
│   demo.html   # Interactive demo page
│   style.css   # Custom CSS variables and animations
│   README.md   # This documentation
```

## How to Run

Open `demo.html` in a modern browser. No external dependencies are required.

## Key Features

- **Orbital Animation**: Pure CSS orbiting bodies using `@keyframes` with `translateX` and `rotate`.
- **Starfield Background**: Multi-layer `radial-gradient` stars on `body::before`.
- **Telemetry Dashboard**: Status rows with color-coded badges (nominal/warning/critical).
- **Comms Log**: Monospaced terminal-style log with input field.
- **Mission Timeline**: Horizontal scrollable milestone cards.

Built with **EaseMotion CSS** – a lightweight, utility-first CSS framework for motion-rich interfaces.
