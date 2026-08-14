# CSS Glassmorphism Form

A stunning frosted glass aesthetic using CSS `backdrop-filter`, translucent backgrounds, and crisp inner shadow edge lighting.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Colorful Background**: Glassmorphism requires a visually rich background behind it so the blur is actually visible. This component uses two abstract, highly blurred circular shapes (`.bg-shape`) that float continuously behind the form using a CSS keyframe animation.
  - **The Frosted Glass Container**: The main `.glass-form-container` applies the frosted glass effect. It uses `background: rgba(255, 255, 255, 0.1)` for slight opacity and `backdrop-filter: blur(16px)` to blur the colors behind it. 
  - **Edge Lighting Trick**: To simulate realistic 3D glass thickness, an inner shadow (`box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3)`) is applied to the top edge of the container and the button, providing a crisp highlight where light would naturally catch the glass.
  - **Frosted Inputs & Button**: The inputs and button also utilize translucent `rgba()` backgrounds to maintain the glass aesthetic. On focus/hover, they increase their opacity slightly to provide user feedback while remaining translucent.
- Fully accessible semantic structure. Standard `<form>`, `<label>`, and `<input>` associations ensure full screen reader compatibility. Honors the `prefers-reduced-motion` accessibility standard by disabling the floating background shapes for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the frosted glass login form over the animated mesh background.

## Files
- `demo.html`: The HTML structure defining the background shapes and the login form layout.
- `style.css`: The styling, the `backdrop-filter` rules, and the edge lighting inner shadows.
