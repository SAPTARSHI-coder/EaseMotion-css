# CSS Wave Progress Fill

A purely CSS-animated liquid progress container. Simulates water sloshing and filling up a container without using SVG paths, HTML Canvas, or JavaScript physics.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Masking Container**: The `.progress-circle` or `.progress-pill` uses `overflow: hidden` to clip the liquid shapes to its boundaries.
  - **The Water Base**: Inside the container, a `.water-fill` `<div>` is colored solid blue. It translates upwards via CSS `@keyframes` from `top: 100%` (empty) to `top: 25%` (75% full) to simulate the container filling over time.
  - **The Rotating Squircle Technique**: To create the illusion of waves, two pseudo-elements (`::before` and `::after`) are attached to the top of the `.water-fill`. Critically, they are given a `border-radius: 40%` (a squircle). Because they are not perfect circles, their edges wobble when rotated. 
  - **The "Air" Mask**: One pseudo-element is translucent white to simulate a wave crest/froth, while the other is the exact color of the container's background (`var(--container-bg)`). As they infinitely rotate (`animation: spinWave linear infinite`), they act as "air" masking out the top of the solid blue water block beneath them. The overlapping wobbles perfectly mimic a sloshing fluid surface.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), dynamically updating the container background and adjusting the opacity of the wave froth for optimal contrast in dark mode.
- Fully accessible semantic structure. The progress indicator text uses `mix-blend-mode: overlay` so it remains visible against both the empty background and the filled liquid. The parent container defines `aria-label` to provide the current progress value to screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the fill translation and the wave rotation entirely, flattening the `border-radius` to `0` to present a static, accessible progress bar for motion-sensitive users.

## Usage
Open `demo.html` in your browser. The wave will automatically fill the containers on page load. Refresh the page to see the animation run again.

## Files
- `demo.html`: The HTML structure defining the container wrappers, text overlays, and the hidden `.water-fill` div.
- `style.css`: The styling, `@keyframes`, and the critical `border-radius: 40%` continuous rotation logic.
