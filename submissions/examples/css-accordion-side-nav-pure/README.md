# CSS Accordion Side Nav

A left sidebar navigation menu featuring smoothly animated, exclusive accordion expansion built entirely with modern HTML and CSS Grid.

## Features
- Pure CSS and HTML implementation without any JavaScript logic or event listeners.
- **Component Architecture**: 
  - **Native Exclusive Accordions**: The component uses the native HTML `<details>` and `<summary>` elements for semantic expand/collapse functionality. By grouping multiple `<details>` tags with the identical `name="sidebar-group"` attribute, modern browsers automatically enforce an exclusive "accordion" behavior where only one menu can be open at a time.
  - **Smooth Height Animation**: Historically, animating height from `0` to `auto` in CSS was impossible. This component utilizes the modern CSS Grid technique to achieve smooth height transitions. The nested `.nav-group-content` wrapper is set to `display: grid; grid-template-rows: 0fr`. When the parent `<details>` tag receives the `[open]` attribute, it transitions to `grid-template-rows: 1fr`. 
  - **Hidden Overflow**: For the grid animation to work properly, the inner nested list (`.nav-nested-list`) must have `min-height: 0` and `overflow: hidden`.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the background, borders, hover states, and active text colors.
- Fully accessible semantic structure. Because it relies on the native HTML `<details>` specification, it automatically inherits Focus Management, keyboard navigation (Space/Enter to toggle), and proper accessibility tree exposure. Honors the `prefers-reduced-motion` accessibility standard by disabling the accordion and chevron animations for motion-sensitive users.

## Usage
Open `demo.html` in your modern browser (Chrome 120+, Safari 17.4+ for exclusive accordion `name` support). Click the group headers to see the smooth, exclusive height animations.

## Files
- `demo.html`: The HTML structure defining the `<details name="...">` groups and SVG icons.
- `style.css`: The styling, hover states, and the `grid-template-rows` animation trick.
