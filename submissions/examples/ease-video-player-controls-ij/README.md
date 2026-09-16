# Video Player Controls Component Sandbox

## Overview
A simulated video player UI with animated controls that fade in/out on mouse movement. Includes play/pause, progress bar with scrub interaction, volume slider with mute, fullscreen toggle, and keyboard shortcuts (Space/K = play/pause, F = fullscreen, M = mute).

## Sandbox Configuration Files
- `demo.html` — Standalone presentation with Inter font, heading, video preview area, and a full set of interactive controls with simulated playback.
- `style.css` — Scoped custom properties, opacity + translateY transition on the controls overlay, width animation on the progress fill, and custom slider thumb styling.

## Key Layout Mechanics
1. **Custom Properties Driven:** All visual knobs (`--vpc-duration`, `--vpc-controls-bg`, `--vpc-btn-color`, `--vpc-progress-color`, `--vpc-radius`) are exposed as `:root` variables.
2. **Controls Auto-Hide:** Controls fade in on `mouseenter`/`mousemove` and auto-hide after 2.5 seconds of inactivity when playing.
3. **Progress Scrubbing:** Clicking the progress track sets `progress` and updates the fill width and thumb position; thumb appears on track hover for visual scrubbing feedback.
