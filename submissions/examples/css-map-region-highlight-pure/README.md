# CSS Map Region Highlight

A pure CSS interactive SVG map. Hover over the regions to see color transitions and localized SVG tooltips, achieved completely without JavaScript event listeners or DOM manipulation.

## Features
- Pure CSS and SVG implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Group Hover Target**: The SVG map is constructed using `<g class="map-region">` tags. Inside each group is the actual map region (`<path>`) and its corresponding tooltip (`<g class="region-tooltip">`). By placing the `:hover` pseudo-class on the parent `<g>`, we can simultaneously trigger styles on both the path and the tooltip within it.
  - **The Inline SVG Tooltip**: Instead of trying to calculate absolute coordinates for a standard HTML `<div>` tooltip (which normally requires JavaScript), the tooltip is drawn directly inside the SVG coordinate system using `<rect>` and `<text>`. It is positioned using the `transform="translate(x, y)"` attribute.
  - **The CSS Reveal**: The CSS defines `.region-tooltip` with `opacity: 0`. When the parent group is hovered (`.map-region:hover .region-tooltip`), the opacity transitions to `1`. `pointer-events: none` is applied to the tooltip to ensure it doesn't accidentally trigger mouse-out events if the cursor moves over it.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark slate base map with vibrant blue highlight colors.
- Fully accessible semantic structure. Standard SVG best practices apply. Honors the `prefers-reduced-motion` accessibility standard by disabling the region hover scaling animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Move your mouse over the four arbitrary regions (North, South, East, West) to see the regions highlight and the perfectly positioned tooltips fade into view.

## Files
- `demo.html`: The inline SVG structure defining the path coordinate data and the embedded tooltip elements.
- `style.css`: The styling, `.map-region:hover` descendant selector logic, and the theming variables.
