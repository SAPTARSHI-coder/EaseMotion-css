# CSS Lava Lamp Background

A purely CSS-animated background simulating a lava lamp using the classic SVG Gooey Filter technique. Achieved without JavaScript or HTML5 Canvas.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The SVG Gooey Filter**: We define an inline SVG filter (`<filter id="gooey">`) containing a `feGaussianBlur` and a `feColorMatrix`. The blur softens the edges of elements, and the color matrix drastically increases the contrast of the alpha channel. When applied to a container via `filter: url('#gooey')`, any child elements (blobs) inside that container will visually melt and merge together when they intersect, perfectly simulating fluid physics.
  - **The Liquid Source**: We create a large, static `.blob-base` positioned at the bottom of the screen. This acts as the "source pool" of lava.
  - **The Floating Blobs**: Multiple `<div>` elements are given border-radiuses to make them circles. CSS `@keyframes` translate them vertically and horizontally along the Y and X axes. As they rise out of the `.blob-base` and intersect with each other, the gooey filter melts their edges together.
  - **The Foreground Overlay**: Crucially, the gooey filter destroys text legibility. Therefore, the `.lava-container` is kept strictly as a background layer (`z-index: 1`), while the `.content-overlay` containing text sits safely above it (`z-index: 100`).
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), shifting the lava color from a vibrant pink to a deep purple.
- Fully accessible semantic structure. The lava container is purely decorative and explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the blob floating animations for motion-sensitive users, freezing them statically at the bottom of the screen.

## Usage
Open `demo.html` in your browser. The background animation will run automatically in an infinite loop.

## Files
- `demo.html`: The HTML structure defining the SVG filter definition, the floating blob divs, and the foreground content.
- `style.css`: The styling, `@keyframes` definitions, and the `filter: url('#gooey')` application.
