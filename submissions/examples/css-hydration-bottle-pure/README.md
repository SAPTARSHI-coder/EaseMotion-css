# CSS Hydration Bottle

A daily hydration tracker featuring a continuously undulating liquid fill animation, built entirely with CSS shapes and keyframes without relying on SVG filters or JavaScript.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Bottle Geometry**: Constructed using standard CSS `border` properties and `border-radius`. The main body uses inset `box-shadow` properties to simulate the 3D refraction and thickness of glass, complemented by `backdrop-filter: blur(4px)` for a frosted effect.
  - **The Liquid Level Animation**: The blue water container (`.water-level`) uses a basic CSS keyframe animation (`@keyframes fill-up`) to animate its height from 0% up to 85%, simulating the daily hydration progress.
  - **The Wave Illusion Trick**: To create the continuously undulating liquid surface without heavy SVG physics, this component uses a classic pure CSS trick. Two massive, slightly rounded squares (`border-radius: 40%`) are absolutely positioned at the very top of the `.water-level` container. One square is semi-transparent blue (the wave peak), and the other exactly matches the page background color to mask out the empty space. By continuously rotating these large squares (`@keyframes spin`), the slightly irregular bottom curves dip in and out of the blue liquid, creating a flawless 2D wave illusion.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the frosted glass shadows and the masking wave color to match the dark background seamlessly.
- Fully accessible semantic structure. The container uses `aria-label` to provide context to screen readers, treating the animation as a single decorative status indicator. Honors the `prefers-reduced-motion` accessibility standard by freezing the water level and disabling the spinning wave masking for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the hydration bottle filling up with the animated wave effect.

## Files
- `demo.html`: The HTML structure defining the bottle geometry and hydration markers.
- `style.css`: The styling, the inset shadows, and the rotating rounded-square wave illusion.
