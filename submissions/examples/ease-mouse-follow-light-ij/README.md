# Mouse Follow Light

A spotlight/glow effect that follows the mouse cursor across the element surface using a `radial-gradient` positioned via `--mfl-x` and `--mfl-y` custom properties.

## Features

- Light follows cursor position in real time
- Uses CSS `radial-gradient` with `circle at` positioning
- Smooth interpolation via `transition`
- Center resets on mouse leave
- Customizable glow color, size, and timing via `:root` variables

## Usage

JS sets `--mfl-x` and `--mfl-y` (in percentage) on `.mfl-card`. CSS renders a `radial-gradient(circle at var(--mfl-x) var(--mfl-y), ...)` for the background.
