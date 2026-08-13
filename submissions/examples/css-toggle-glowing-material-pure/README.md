# Glowing Material Design Toggle

A highly polished, pure CSS toggle switch (checkbox) built on Material Design principles, enhanced with dynamic neon glow effects.

## Features
- **Material Easing**: Utilizes the standard Material Design curve `cubic-bezier(0.4, 0, 0.2, 1)` for all slider animations, providing a snappy, tactile feel.
- **Glowing Active State**: When toggled on, the track emits a colored drop-shadow (glow) utilizing CSS `box-shadow`.
- **Multiple Color Themes**: Includes pre-built classes (`glow-blue`, `glow-red`, `glow-green`) that instantly apply different active colors and corresponding glow effects.
- **Ripple Effect Interaction**: Features a CSS-only material ripple effect when the toggle is clicked (using the `:active` pseudo-class and a scaling `::after` element).
- **Accessibility**: Built on top of a native `<input type="checkbox">` ensuring it remains semantic, focusable (`:focus-visible`), and compatible with screen readers.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Roboto` font is loaded in your `<head>`. Apply the desired color class (e.g. `glow-blue`) to the `.toggle-track` span.
