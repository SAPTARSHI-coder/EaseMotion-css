# CSS Micro-interaction Collection

A comprehensive library of 20 pure CSS micro-interactions for common UI states (like `:hover` and `:active`), built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required).
- **20 Unique Animations**: Includes Pulse, Bounce, Shake, Wiggle, Heartbeat, Flip Y, Flip X, Bell Ring, Float, Sink, Skew Fwd, Skew Bwd, Spin, Morph, Glow, Push (Active), Pop (Active), Underline Expand, Squeeze, and Rubberband.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--element-bg`, `--tile-bg`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Implementation (Documented in Code)**: 
  - Each interaction uses a specific CSS class (e.g., `.interact-pulse`, `.interact-shake`).
  - The effects are triggered on `:hover` or `:active` states.
  - Complex animations (like Shake, Rubberband, Heartbeat) utilize custom `@keyframes` with specific `cubic-bezier` timing functions for natural, bouncy physics.
  - Simple interactions (like Skew, Float, Morph) utilize standard CSS `transform` transitions.
- Fully accessible with `prefers-reduced-motion` support. All transitions and animations are completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the tiles to see the `:hover` micro-interactions play out. For the Push and Pop tiles, click them to see the `:active` state.

## Files
- `demo.html`: The HTML structure containing the grid of 20 interaction tiles.
- `style.css`: The styling, CSS Custom Property theming blocks, and the 20 distinct `@keyframes` and `transform` logic sets.
