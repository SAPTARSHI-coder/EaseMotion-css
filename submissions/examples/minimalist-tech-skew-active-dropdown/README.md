# CSS Skew-Active Dropdown (Minimalist Tech)

A pure CSS dropdown component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a sharp, diagonal "Skew-Active" entrance animation, giving it a dynamic, cybernetic feel.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean panel layout, prominent right-aligned status badges, structured `.menu-group` dividers, and prominent inline action links.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". The entire dropdown is wrapped in `.dropdown-wrapper`. A hidden `<input type="checkbox">` tracks the open/closed state, while the trigger button acts as its `<label>`.
- Clicking anywhere on the trigger toggles the hidden checkbox, which in turn drives the visibility of the adjacent `.dropdown-menu` via the general sibling combinator (`~`).
- **The Skew-Active Animation System**: 
- We avoid `display: none` because it cannot be animated. Instead, the closed menu is managed with `opacity: 0`, `visibility: hidden`, and `pointer-events: none` (to prevent clicking invisible items).
- The initial state of the menu is heavily distorted (`transform: skewX(-10deg)`) and offset diagonally (`translate(-10px, -20px)`). 
- We set `transform-origin: top left`, ensuring the skew effect appears to sweep aggressively outward and downward from the trigger button.
- When the checkbox is active, the menu snaps to un-skewed and flat (`skewX(0deg) translate(0, 0)`). We apply a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. The overshoot of this curve gives the skew a physical "whip" effect as it locks into its final position.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the skewing transform is completely disabled. The menu safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "Filter Traffic" dropdown trigger. Click the trigger to expand the menu. Notice how the menu aggressively sweeps into view along a diagonal skewed axis, snapping perfectly flat with a subtle bounce, while the chevron arrow smoothly rotates 180 degrees.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the crucial checkbox/label relationship for CSS state management, and the internal structure for right-aligned status badges.
- `style.css`: The styling, minimalist tech design tokens, the `visibility`/`opacity` toggling logic, and the specific `skewX` transform rules driving the sweeping entrance effect.
