# CSS Shimmer Sweep Modal (Responsive Dashboard Layouts)

A sleek, pure CSS animated modal component optimized for dense analytical dashboard interfaces. It pairs an elastic scale entry with a high-performance, hardware-accelerated linear shimmer light-sweep overlay that runs across the component viewport entirely with zero JavaScript runtime overhead.

## Features
- **Specular Shimmer Sweep Effect:** Leverages a 45-degree linear-gradient background mask running via hardware-bound positional offsets to create a gloss overlay.
- **Pure CSS State Management:** Tracks view toggle triggers cleanly via an accessible hidden checkbox state controller mapping (`:checked` combinators).
- **Responsive & Accessible Dashboard Profile:** Adheres to accessibility requirements with manual key bindings (`tabindex="0"`) and fluid responsive scaling layouts.

## Custom Properties
Configure parameters directly inside `style.css`:
- `--modal-entry-speed`: Speed of the fade and scale modal arrival loop (default: `0.4s`).
- `--shimmer-sweep-duration`: Cycle duration of the specular gleam animation (default: `1.5s`).
- `--shimmer-color`: Hues making up the gloss linear gradient structure (default: `rgba(255, 255, 255, 0.12)`).