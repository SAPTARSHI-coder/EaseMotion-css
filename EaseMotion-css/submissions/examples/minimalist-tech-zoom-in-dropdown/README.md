# CSS Zoom-In Dropdown (Minimalist Tech)

A pure CSS dropdown component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a sharp, scaling "Zoom-In" entrance animation, perfect for dense configuration menus.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean, data-dense menu layout, distinct semantic status indicators (Active, Warning, Offline), structured `.menu-group` dividers, and prominent inline action links.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". The entire dropdown is wrapped in `.dropdown-wrapper`. A hidden `<input type="checkbox">` tracks the open/closed state, while the trigger button acts as its `<label>`.
- Clicking anywhere on the trigger toggles the hidden checkbox, which in turn drives the visibility of the adjacent `.dropdown-menu` via the general sibling combinator (`~`).
- **The Zoom-In Animation System**: 
- We avoid `display: none` because it cannot be animated. Instead, the closed menu is managed with `opacity: 0`, `visibility: hidden`, and `pointer-events: none` (to prevent clicking invisible items).
- The initial state of the menu is scaled down (`transform: scale(0.9)`) and slightly offset upwards (`translateY(-10px)`). 
- We define `transform-origin: top center`, which ensures the scaling effect appears to "bloom" directly outwards from the trigger button above it.
- When the checkbox is active, the menu transitions to `scale(1)` and `translateY(0)`. We apply a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. The slight overshoot of this curve gives the zoom a snappy, physical "pop" that feels highly responsive.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the scaling transform is completely disabled. The menu safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "Deploy Configuration" dropdown trigger. Click the trigger to expand the menu. Notice how the menu sharply zooms into view, snapping into full scale with a subtle bounce, while the chevron arrow smoothly rotates 180 degrees.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the crucial checkbox/label relationship for CSS state management, and the complex internal structure for the grouped menu items.
- `style.css`: The styling, minimalist tech design tokens, the `visibility`/`opacity` toggling logic, and the precise `cubic-bezier` transform rules driving the zoom-in scaling effect.
