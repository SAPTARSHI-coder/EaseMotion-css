# CSS Solar Charging Bar

A sci-fi inspired solar panel progress bar featuring dynamic sunshine glowing animations and CSS grid cell rendering.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Photovoltaic Grid Surface**: The underlying solar panel (`.solar-surface`) is constructed without any images or SVGs. It uses a base dark blue color overlaid with multiple `repeating-linear-gradient` definitions. These gradients draw a precise grid of thin, bright blue lines to simulate the conductive silver traces found on real solar cells.
  - **The Sunshine Charge Fill**: The `.solar-charge-fill` element acts as the progress bar itself. It uses an absolute position over the grid. An `@keyframes` animation gradually scales its `width` from 0% to 100%. 
  - **The Glowing Trail**: To simulate a surge of solar energy, the fill element uses a complex `linear-gradient` (creating a hot white/yellow 'core' at the leading edge, and a fading yellow trail behind it). Crucially, a heavy `box-shadow` is added to the leading edge, and `mix-blend-mode: screen` is applied. This blend mode forces the yellow glow to interact intensely with the blue solar grid underneath it, creating a highly convincing, bright sci-fi charging effect.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), subtly darkening the metallic frame and background colors.
- Fully accessible semantic structure. The decorative charging fill is hidden from screen readers using `aria-hidden="true"`, and the container includes an `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by freezing the charge fill at a static 75% width for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the solar panel charging animation.

## Files
- `demo.html`: The HTML structure defining the metallic frame, the grid surface, and the charge fill element.
- `style.css`: The styling, the `repeating-linear-gradient` grid logic, and the `mix-blend-mode` glowing animation.
