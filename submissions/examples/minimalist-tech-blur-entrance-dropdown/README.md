# CSS Blur-Entrance Dropdown (Minimalist Tech)

A pure CSS dropdown menu component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a sophisticated "Blur-Entrance" animation, perfect for user profile menus or complex dashboards.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean panel layouts, pill-shaped trigger buttons, semantic line-art iconography, and a dedicated header section for user data.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#profile-dropdown-trigger`) controls the open/closed state of the dropdown menu.
- The main profile button (containing the avatar and username) acts as a `<label>` to toggle the checkbox.
- Depending on the checkbox state, CSS sibling selectors (`~`) dynamically update:
  1. The rotation of the chevron icon (`transform: rotate(180deg)`).
  2. The border and focus ring of the trigger button.
  3. The visibility and animation of the `.dropdown-menu` container.
- **The Blur-Entrance Animation**: 
- The `.dropdown-menu` is initially hidden (`opacity: 0`), slightly scaled down (`scale(0.95)`), and heavily blurred (`filter: blur(8px)`).
- When triggered, it runs the `menu-blur-in` keyframes animation.
- It transitions from `blur(8px)` to `blur(0px)` while simultaneously scaling up to `1` and fading in (`opacity: 1`).
- This creates a highly sophisticated "materializing" effect commonly found in modern operating systems and premium web applications.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the blurring effect and spatial scaling are completely disabled. The menu safely falls back to a fast, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "User Profile" dashboard. Click the pill-shaped profile button. The dropdown menu will smoothly materialize from a blurred state into sharp focus, centered directly beneath the button. Click the button again to dismiss it. Hover over the menu items to see the distinct tech styling, including a dedicated "danger" state for the Sign Out action.

## Files
- `demo.html`: The HTML structure for the dropdown component, detailing the pure CSS checkbox hack setup, the pill button with a custom SVG avatar, and the nested menu list with a header section.
- `style.css`: The styling, tech design tokens, hover variants, and the specific `@keyframes` driving the sophisticated CSS filter blur entrance logic.
