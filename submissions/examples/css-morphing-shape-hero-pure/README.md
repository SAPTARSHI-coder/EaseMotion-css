# CSS Morphing Shape Hero

A responsive, modern hero section layout featuring a large, organic morphing blob shape as a primary visual element. Built entirely in CSS without SVG or JavaScript.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Hero Layout**: Utilizes CSS Grid (`grid-template-columns: 1fr 1fr`) to create a responsive, side-by-side layout on desktop. On smaller screens (`max-width: 900px`), the grid stack collapses to a single column, automatically reordering the morphing visual to sit neatly below the text content.
  - **The Morphing Blob**: The core visual element `.morphing-blob` uses an advanced 8-value `border-radius` trick. Standard CSS `border-radius` uses 4 values to create symmetrical corners. By passing 8 values separated by a slash (`/`), you independently control the horizontal and vertical radii of each corner (e.g., `border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%`). 
  - **The Animation**: An infinite, alternating `@keyframes` block smoothly transitions the blob between wildly different, asymmetrical border-radius values, creating a fluid, organic morphing effect. This is paired with a secondary `.floating-orb` using a simple `translateY` animation to add depth to the scene.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the text colors and button backgrounds while preserving the vibrant Indigo/Pink gradient of the central morphing blob.
- Fully accessible semantic structure. Uses `<header>`, `<h1>`, and appropriate button tags. The entire morphing visual container `.hero-visual` is purely decorative and is explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the morphing and floating `@keyframes` entirely for motion-sensitive users, locking the blob into a static but visually interesting organic shape.

## Usage
Open `demo.html` in your browser. The hero section will render and the background blob will begin morphing automatically. Resize the browser to see the CSS Grid responsive collapse.

## Files
- `demo.html`: The HTML structure defining the responsive grid, the typography, and the decorative visual elements.
- `style.css`: The styling, the CSS Grid responsive breakpoints, and the 8-value `border-radius` keyframe animations.
