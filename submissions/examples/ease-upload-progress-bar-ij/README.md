# Upload Progress Bar Component Sandbox

## Overview
A simulated file upload progress bar component with animated striped fill, variable speed per file, and a completion checkmark. Supports multiple simultaneous file upload progress tracking.

## Sandbox Configuration Files
- `demo.html` — Standalone presentation with Inter font, heading, three file upload entries with progress bars, and a "Simulate Upload" button.
- `style.css` — Scoped custom properties, gradient stripe animation via `@keyframes upb-stripes`, width transition driven by `--upb-progress`, and a completion state that swaps to a green solid fill with checkmark.

## Key Layout Mechanics
1. **Custom Properties Driven:** All visual knobs (`--upb-duration`, `--upb-bar-color`, `--upb-track-bg`, `--upb-stripe-color`, `--upb-complete-color`) are exposed as `:root` variables.
2. **Variable Speed Simulation:** JavaScript drives each bar independently with randomized increments and per-file timing intervals.
3. **Completion State:** When a bar reaches 100%, it transitions to `--upb-complete-color`, removes stripes, and appends a checkmark element.
