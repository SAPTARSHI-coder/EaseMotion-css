# Responsive Breadcrumb: Dark Mode

A highly polished, JavaScript-free breadcrumb navigation component featuring a premium dark mode aesthetic, pure CSS chevron separators, and horizontal scroll responsiveness.

## Features
- Pure CSS and HTML implementation. Responsiveness is handled elegantly through native scrolling rather than complex media query collapsing.
- **Component Architecture & Styling Mechanics**: 
  - **Responsive Scrolling**: On mobile devices, long breadcrumb trails often break layouts or wrap awkwardly. This component utilizes `white-space: nowrap;` on the list items combined with `overflow-x: auto;` on the container. This allows users on smaller screens to simply swipe horizontally to see the full path. Custom Webkit scrollbar styling is included to keep the scrollbar minimal and on-theme.
  - **CSS Chevron Separators**: Instead of using background images, icon fonts, or polluting the HTML with SVG separators, the chevrons (`>`) between links are generated entirely with CSS. The `::after` pseudo-element draws a small square with only top and right borders (`border-top`, `border-right`), which is then rotated 45 degrees (`transform: rotate(45deg)`) to create a perfectly crisp, resolution-independent chevron.
- **Theming**: Configured via CSS Custom Properties. The palette features a sophisticated "Slate" dark theme (Slate 900 background, Slate 800 nav container) with a vibrant Light Blue (`#38bdf8`) hover state. The active/current page features a subtle white text-shadow to make it glow slightly. Because the component is specifically designed as a "Dark Mode" breadcrumb, the dark styling is hardcoded into the root variables.
- Fully accessible semantic structure. Uses `<nav aria-label="Breadcrumb">`, an ordered list `<ol>`, and `aria-current="page"` for proper screen reader context. Includes high-contrast `:focus-visible` outlines for keyboard navigation.

## Usage
Open `demo.html` in your browser. Hover over the links to see the smooth background highlight. To test responsiveness, resize your browser window to a narrow width (e.g., mobile size) and observe how the breadcrumb gracefully handles overflow by allowing horizontal scrolling instead of wrapping or breaking.

## Files
- `demo.html`: The HTML structure defining the semantic breadcrumb list and the SVG home icon.
- `style.css`: The styling, the `overflow-x` responsiveness logic, the CSS-drawn chevrons, and the dark slate theme variables.
