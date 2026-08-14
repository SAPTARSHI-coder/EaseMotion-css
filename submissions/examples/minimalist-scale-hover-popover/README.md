# CSS Scale-Hover Popover (Minimalist Tech)

A pure CSS interactive popover component designed for Minimalist Tech Layouts. It features a highly responsive, snappy "Scale-Hover" animation that mimics natural, physical expansion from a trigger point.

## Features
- Pure CSS and HTML (No JavaScript required for interactions).
- **The Scale Effect**: The `.popover-content` card is initially scaled down aggressively (`transform: scale(0.6)`). Crucially, the `transform-origin: bottom center;` property is set. This ensures that when the element scales up to `1` on hover, it expands outward from the trigger button below it, rather than expanding from its own center. This creates a much more grounded and physically logical animation.
- A custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition timing function is used to create an elastic, bouncy "pop" as the element reaches full size.
- **Micro-interactions**: The trigger button itself features subtle hover states, including a slight upward nudge (`translateY(-2px)`) and an icon rotation (`transform: rotate(90deg)`), adding polish to the interaction.
- The internal `.action-item` links utilize an `:active` state transform (`scale(0.98)`) to provide tactile feedback when clicked.
- Clean, structured aesthetic utilizing the `Inter` font and minimalist SVG iconography.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the trigger animations are disabled, and the popover's spatial scaling is entirely stripped. The transforms are locked to their final state, gracefully falling back to a safe, immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a "Quick Actions" dashboard area featuring a plus icon button. Hover over the button. Watch as the icon rotates slightly, and the context menu rapidly pops up, scaling outward from the button itself with an elastic bounce.

## Files
- `demo.html`: The HTML structure for the layout, detailing the nested positioning of the trigger button and the popover content within the relative `.popover-container`.
- `style.css`: The styling, micro-interactions, `transform-origin` logic, and the custom `cubic-bezier` transition driving the scale mechanics.
