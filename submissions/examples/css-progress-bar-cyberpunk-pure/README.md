# Progress Bar: Cyberpunk

A pure CSS, high-voltage progress indicator featuring glowing neon aesthetics, harsh chamfered edges, and CSS glitch text animations.

## Features
- Pure CSS and HTML implementation. Absolutely no JavaScript required for the animations.
- **Component Architecture & Styling Mechanics**: 
  - **Cyberpunk Aesthetics**: Utilizes a stark contrast between `#050505` backgrounds and high-intensity neon colors (`#fcee0a` yellow, `#00f0ff` cyan, `#ff003c` magenta). The background features a subtle cyan grid to emulate a heads-up display.
  - **Chamfered Edges**: The signature angled corners of cyberpunk UI are achieved using `clip-path: polygon(...)`. The track cuts off the top-right and bottom-left corners, and the fill applies a similar clip path to match the angles when it reaches 100%.
  - **Text Glitch Animation**: The `h1` title features a pure CSS glitch effect. It uses `::before` and `::after` pseudo-elements containing identical `data-text` attributes, positioned slightly offset, colored with magenta/cyan `text-shadows`, and animated using complex `clip-path` keyframes to rapidly reveal and hide slices of the text.
  - **Animated Fill Textures**: The progress fill isn't just a solid color. It contains an inner `.cyber-stripes` element that uses a repeating diagonal `linear-gradient`. By animating `background-position`, the stripes appear to continuously flow backwards, giving a sense of high-energy data transfer.
  - **Scanning Laser**: A `.cyber-scanner` `div` sweeps back and forth across the track using an `ease-in-out` animation, emulating a hardware scanning laser.
- Fully accessible semantic structure. The track acts as the progress bar with `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`. Honors the `prefers-reduced-motion` accessibility standard by disabling the intense glitching and scanning animations if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see a glowing, chamfered progress bar with animated diagonal stripes and a scanning laser line, positioned below a glitching text header.

## Files
- `demo.html`: The HTML structure defining the semantic `progressbar` and the decorative cyberpunk elements.
- `style.css`: The styling, the complex `clip-path` glitch keyframes, and the neon `box-shadow` glows.
