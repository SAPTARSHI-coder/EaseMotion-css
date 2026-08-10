# CSS Slide-down Subnav

A pure CSS dropdown menu featuring a smooth slide-down animation, chevron rotation, and a robust "invisible hover bridge" to prevent accidental dismissals, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or sliding animations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with darker backgrounds and elevated dropdown shadows.
- **Component Architecture (Documented in Code)**: 
  - **The Hover Trigger**: The dropdown interaction is attached to the parent list item (`.nav-item:hover`) rather than just the link. This is crucial because it ensures the dropdown remains open as long as the user's mouse is anywhere inside the `<li>` (including over the dropdown itself).
  - **Invisible Hover Bridge**: A common UX failure in CSS dropdowns is when moving the mouse from the nav link down to the menu causes the menu to close because the cursor briefly exits the hover area. We solve this by adding `padding-top: 12px;` to the `.dropdown-wrapper`. This padding acts as an invisible physical bridge, ensuring the mouse never leaves the hoverable area of the parent `.nav-item`.
  - **Animation State**: The dropdown is hidden using `opacity: 0;`, `visibility: hidden;`, and `transform: translateY(10px);`. On hover, we smoothly transition these to `opacity: 1;`, `visibility: visible;`, and `transform: translateY(0);`, creating a slide-and-fade effect. The chevron SVG simultaneously rotates 180 degrees.
- Fully accessible semantic structure. Wraps the navigation in a `<nav>` tag with `aria-label`. Submenus utilize `aria-haspopup` and `aria-expanded` (static fallback). Importantly, the dropdown opens via keyboard navigation thanks to the `:focus-within` pseudo-class applied alongside the `:hover` state. Honors the `prefers-reduced-motion` accessibility standard by disabling the slide transitions for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the "Products" or "Resources" links to view the smooth slide-down animation. Try navigating using only the `Tab` key to verify keyboard accessibility.

## Files
- `demo.html`: The HTML structure containing the semantic nav elements and SVG chevrons.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:hover` and `:focus-within` transition logic.
