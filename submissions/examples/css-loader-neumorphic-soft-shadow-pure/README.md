# CSS Loader: Neumorphic Soft Shadow

A minimalist, accessible loader utilizing neumorphic soft UI design principles with perfectly balanced inset and drop shadows.

## Features
- Pure CSS and HTML implementation without any JavaScript.
- **Component Architecture**: 
  - **The Neumorphic Extrusion**: The `.neumorphic-container` shares the exact same background color as the `body`. The illusion of physical extrusion is created using two layered `box-shadow`s: a white/light shadow cast to the top-left, and a dark shadow cast to the bottom-right.
  - **The Grooved Track**: The `.neu-loader-track` uses `inset` box shadows to invert the lighting logic. This makes it look like a physical groove carved deeply into the plastic surface of the container.
  - **The Dynamic Playhead**: Inside the track sits the `.neu-loader-head`. This uses a bright accent color to contrast against the monochrome UI. It utilizes a `cubic-bezier` keyframe animation to slide back and forth, dynamically stretching its `width` as it accelerates through the center of the track to simulate motion blur and elasticity.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), cleanly transitioning the shadow colors from bright white/gray to deep charcoal/black, maintaining the extrusion illusion perfectly in dark mode.
- Fully accessible semantic structure. The loader track is hidden from screen readers using `aria-hidden="true"`, and the container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by statically centering the playhead and stopping the text pulse for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the neumorphic loading animation.

## Files
- `demo.html`: The HTML structure defining the container, track, and playhead elements.
- `style.css`: The styling, the `inset` and extrusion `box-shadow` logic, and the elastic keyframe animation.
