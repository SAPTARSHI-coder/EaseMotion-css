# CSS Slide-Up Dropdown (Minimalist Tech)

A pure CSS dropdown menu component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a clean, snappy "Slide-Up" entrance animation.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean panel layouts, precise borders, semantic line-art iconography, and distinct hover states.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#dropdown-trigger`) controls the open/closed state of the dropdown menu.
- The main "Options" button acts as a `<label>` to toggle the checkbox.
- Depending on the checkbox state, CSS sibling selectors (`~`) dynamically update:
  1. The rotation of the chevron icon (`transform: rotate(180deg)`).
  2. The border and focus ring (box-shadow) of the trigger button.
  3. The visibility and animation of the `.dropdown-menu` container.
- **The Slide-Up Entrance Animation**: 
- The `.dropdown-menu` is initially positioned slightly below its final destination and hidden (`opacity: 0`, `transform: translateY(15px)`).
- When triggered, it runs the `menu-slide-up` keyframes animation.
- It transitions from `translateY(15px)` to `translateY(0)` while simultaneously fading in.
- The animation utilizes a custom bouncy easing function (`cubic-bezier(0.175, 0.885, 0.32, 1.1)`) that slightly overshoots the target before settling, providing a satisfying, physical "snap" into place.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translation (sliding up) and bouncy easing are completely disabled. The menu safely falls back to a fast, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "System Menu" dashboard. Click the "Options" button. The dropdown menu will snap into view from slightly below the button, and the chevron icon will rotate. Click the button again to dismiss it. Hover over the menu items to see the distinct tech styling, including a dedicated "danger" state for destructive actions.

## Files
- `demo.html`: The HTML structure for the dropdown component, detailing the crucial pure CSS checkbox hack setup and the nested `ul` structure for the menu items.
- `style.css`: The styling, tech design tokens, hover variants, and the specific `@keyframes` driving the slide-up logic and the custom bouncy `cubic-bezier`.
