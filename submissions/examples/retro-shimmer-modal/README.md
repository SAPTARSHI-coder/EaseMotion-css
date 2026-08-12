# Retro Terminal Shimmer Pulse Modal

A lightweight, high-performance, pure CSS animated modal component styled to capture retro CRT terminal aesthetics. 

## Features
* **Zero JavaScript Overhead:** Toggled entirely with native CSS `:target` pseudo-selectors.
* **Shimmer & Pulse Fluidity:** Combines an oblique lighting shimmer sweep overlay with an ambient neon green glow pulse loop.
* **Custom Customization Pipeline:** Built with clean, accessible CSS Custom Properties at `:root` for effortless timing adjustments.

## Parameters Exposed via CSS Variables
Modify these values directly inside `style.css` to tweak performance:
* `--modal-pulse-duration`: Alternating glow transition cycle speed (Default: `2s`).
* `--modal-shimmer-duration`: Linear linear sweeping overlay transition cycle speed (Default: `2.5s`).
* `--modal-scale-start`: Elastic modifier scale prior to opening transition (Default: `0.85`).