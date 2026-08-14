# CSS Snowman

A festive snowman built entirely using CSS borders, pseudo-elements, and box-shadows.

## Features
- Pure CSS and HTML implementation without any images, SVGs, or JavaScript.
- **Component Architecture**: 
  - **The Body**: Constructed from three overlapping circular `div` elements representing the bottom, middle, and head. Inset `box-shadow` properties are used to give the flat circles a 3D spherical appearance.
  - **The Carrot Nose**: Rendered entirely using CSS borders. By setting `width` and `height` to 0 and applying a colored `border-left` with transparent top and bottom borders, a perfect triangle is formed.
  - **The Hat & Scarf**: Layered using absolute positioning and `z-index`. The hat features a distinct brim, band, and top. The scarf includes a tail that animatedly blows in the wind.
  - **Animations**: The snowman features a gentle breathing animation (using `scaleY` and `scaleX` on the main container), a pulsating floor shadow, blinking coal eyes, and a blowing scarf tail.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the winter background and the shadow colors for a night-time scene.
- Fully accessible semantic structure. The container uses `aria-label` to provide context to screen readers, treating the entire component as a single decorative element. Honors the `prefers-reduced-motion` accessibility standard by disabling the breathing, blinking, and wind animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the animated snowman scene.

## Files
- `demo.html`: The HTML structure defining the various body parts and accessories.
- `style.css`: The styling, the border-triangle geometry, the 3D inset shadows, and the keyframe animations.
