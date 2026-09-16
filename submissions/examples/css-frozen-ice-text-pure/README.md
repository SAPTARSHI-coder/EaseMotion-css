# CSS Frozen Ice Text

A pure CSS typography effect simulating text freezing over, complete with expanding, staggered ice crystals. Built entirely without JavaScript or Canvas.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Frozen Text Base**: The main text utilizes a `-webkit-background-clip: text` paired with an icy linear gradient (`--ice-light` to `--ice-dark`) to create the base frozen look. A standard CSS `@keyframes` animation scales the text slightly and increases its opacity/drop-shadow to simulate the act of "freezing over".
  - **The Frost Overlay**: A pseudo-element (`::after`) is generated with the exact same text content via `content: attr(data-text)`. It overlays a subtle SVG noise pattern (encoded as a data URI) to give the text surface a micro-texture resembling frost or condensation.
  - **The Expanding Crystals**: Behind the text, multiple absolutely positioned `<span>` elements act as ice shards. They are sliced into sharp geometric triangles using `clip-path: polygon(...)`. A custom `cubic-bezier` keyframe animates them from `transform: scale(0)` to `scale(1)`. Their `animation-delay` properties are staggered to create an organic, sequential growth pattern bursting outward from the text.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The icy effect visually pops best on a dark background, so the root theme defaults to deep slate colors, but accommodates light themes gracefully.
- Fully accessible semantic structure. The main text is standard HTML text inside an `<h2>`. The decorative shards and frost overlays are explicitly hidden from screen readers via `aria-hidden="true"` and `color: transparent`. Honors the `prefers-reduced-motion` accessibility standard by disabling the freezing keyframes for motion-sensitive users, rendering the text fully frozen immediately upon load.

## Usage
Open `demo.html` in your browser. The freezing animation triggers automatically upon page load. Refresh the page to replay the effect.

## Files
- `demo.html`: The HTML structure defining the core text wrapper and the staggered crystal spans.
- `style.css`: The styling, the SVG noise overlay, the `clip-path` crystal definitions, and the freezing `@keyframes`.
