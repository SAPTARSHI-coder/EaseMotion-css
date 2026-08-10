# CSS Rotating Gear Menu (#70834)

A pure CSS expandable settings menu triggered by a gear button that smoothly rotates on state change without JavaScript.

## Features
- **Pure CSS Toggle State:** Utilizes the CSS Checkbox Hack (`:checked` pseudo-class with sibling combinators) for opening/closing the menu.
- **Smooth Gear Rotation:** Animates the SVG gear icon using `transform: rotate(180deg)` with custom cubic-bezier spring curves.
- **Accordion Height Expansion:** Employs CSS Grid `grid-template-rows: 0fr` to `1fr` transition for height expansion without hardcoded max-height limits.
- **Accessibility & Responsiveness:** Includes proper `aria-*` state controls, keyboard accessibility via `<label>`/`<input>`, and `@media (prefers-reduced-motion: reduce)` fallbacks.

## File Hierarchy
- `style.css` - Accordion grid transition, gear rotation, checkbox state control, and theme styling.
- `demo.html` - Semantic card markup featuring the gear menu mechanism.
- `README.md` - Component documentation and implementation specs.
