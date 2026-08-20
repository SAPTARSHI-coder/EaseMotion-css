# CSS Glitch-Flicker Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It features two distinct visual warning states: a chromatic aberration "glitch" effect for degraded systems, and a harsh, uneven "flicker" effect for critical/offline systems.

## Features
- Pure CSS and HTML (No JavaScript required).
- **Glitch Effect (`.glitch-badge`)**: Uses `::before` and `::after` pseudo-elements inheriting text via a `data-text` attribute. These layers are animated using `@keyframes` with `clip-path` slicing and red/blue `text-shadow` offsets to simulate a digital glitch.
- **Flicker Effect (`.flicker-badge`)**: Uses a complex `@keyframes` sequence that erratically toggles `opacity` and background/border colors to simulate a failing neon light or corrupted connection.
- Clean, data-focused aesthetic designed for dashboards and status pages, utilizing monospace typography (`JetBrains Mono`).
- Fully responsive layout utilizing flexbox.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (animations are disabled and opacity is locked to 1).

## Usage
Open `demo.html` in your browser. You will see a list of system services with corresponding status badges. The "DEGRADED" badge will continuously glitch with RGB separation, while the "OFFLINE" badge will randomly flicker in and out. 

## Files
- `demo.html`: The HTML structure for the status dashboard and the badges, utilizing the `data-text` attribute for the glitch component.
- `style.css`: The styling, flexbox layouts, and complex CSS `@keyframes` logic for the glitch `clip-path` calculations and flicker timing.
