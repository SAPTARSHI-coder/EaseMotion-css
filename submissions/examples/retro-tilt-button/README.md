# Retro Terminal Tilt Hover Button

A zero-dependency, pure-CSS animated button showcasing interactive pseudo-3D tilting, custom-built for Retro CRT Terminal layouts. 

## Features
* **Pure CSS Execution:** Achieves complete 3D directional tilting, scale mechanics, and matrix shifts without single line of JavaScript overhead.
* **Highly Customizable:** Exposes standard CSS Custom Properties (`--tilt-scale`, `--tilt-duration`, `--tilt-deg-x`, etc.) directly at the `:root` level for effortless integration tweaking.
* **A11y Compliant:** Supports robust keyboard navigation (`:focus-visible` state parameters mapped concurrently alongside hover animations) and leverages semantic semantic markup with ARIA accessibility handles.

## Project Structure
```text
retro-tilt-button/
├── demo.html   # Component container deployment environment
├── style.css   # Main stylesheet holding animation engine & CRT shaders
└── README.md   # Documentation