# ease-morphing-blob-cursor-sap

A custom cursor follower that smoothly trails the real cursor and morphs into a larger organic blob shape when hovering interactive text.

## Usage
1. Include `style.css`.
2. Add markup: a container (`cursor: none`) with content + a `.blob-follower` div.
3. Attach the mousemove-tracking and hover-morph listeners from `demo.html`.

## Customization
- Follower size/color, and `hover-target` enlarged size/blob shape.
- `mix-blend-mode: difference` gives an inverted-color effect against content underneath — swap for `normal` with an opacity for a simpler glow-style follower.
- Trailing smoothness via the `transition` duration on `transform`.

## Notes
- `cursor: none` on the container hides the native cursor so the custom follower fully replaces it within that region.
- `mix-blend-mode: difference` makes the follower invert colors of whatever it passes over, a common custom-cursor visual technique that keeps it visible against any background.
- Respects `prefers-reduced-motion`: position-tracking transition is removed (the follower jumps directly to cursor position instead of trailing), while shape/size morph transitions remain since they're a small, non-continuous effect rather than persistent motion.