# Corner Bracket Frame Reveal Card

A pure-CSS hover interaction for cards and buttons. On hover, four corner bracket lines (frame corners `┌ ┐ └ ┘`) fade in and scale outward to frame the container boundaries.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <div class="corner-frame-card">
     <h3>Secure Server</h3>
     <p>Hover to reveal the target framing brackets.</p>
   </div>
   ```

## Design Details
- **Absolute Pseudo-Elements:** Places border segments at offsets relative to the parent card using absolute positioning.
- **Offset Interpolation:** On hover, translates the segments from an inner offset (`8px` / `-8px`) out to `0` for an expanding framerate effect.
- **Hardware Acceleration:** Transitions only scale/translate properties to maintain 60FPS rendering performance.
