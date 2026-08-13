# CSS Elastic-Slide Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a snappy "Elastic-Slide" horizontal entrance animation for the interior content.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean panel layout, subtle status indicator dots, inline monospace configuration code blocks, and dynamic border highlighting on active items.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". Each accordion item contains a hidden `<input type="checkbox">` (`.accordion-toggle`) and a `<label>` (`.accordion-header`) that toggles it.
- Because we use checkboxes (rather than radio buttons), users can open multiple accordion panels simultaneously, which is often preferred in technical data dashboards.
- **The Elastic-Slide Animation System**: 
- **The Vertical Space Engine**: Animating `height: auto` is historically difficult in pure CSS. We solve this using a modern CSS Grid trick. The `.accordion-content` wrapper transitions from `grid-template-rows: 0fr` to `1fr`. This securely handles the vertical space expansion without hardcoding pixel values.
- **The Horizontal Snap (Content)**: Once the panel begins expanding, the interior elements (`.text-block`, `.config-row`, `.action-btn`) trigger a secondary `@keyframes` animation (`content-elastic-slide`). 
- These elements start pushed to the right (`transform: translateX(40px)`) and invisible. 
- They slide into their baseline positions using a highly bouncy easing curve (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`). Because the bezier curve exceeds `1.0`, the elements mathematically overshoot their target and snap back, creating an energetic, "elastic" feel.
- We utilize slightly staggered `animation-delay` values on the inner elements (e.g., `0.1s`, `0.15s`, `0.2s`) so they whip into view sequentially, enhancing the polished aesthetic.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the grid height transition, chevron rotation, and horizontal elastic snap animations are completely disabled. The accordion safely falls back to an instant layout toggle.

## Usage
Open `demo.html` in your browser. You will see a mock "Data Integrations" accordion interface. Click on any header to expand the panel. Notice how the container smoothly expands its vertical space while the inner content elements sequentially snap into place from the right with a physical, elastic bounce.

## Files
- `demo.html`: The HTML structure for the accordion, detailing the crucial checkbox/label relationship for CSS state management, and the DOM structure for the inner configuration rows.
- `style.css`: The styling, minimalist tech design tokens, the CSS Grid height transition trick, and the precise `cubic-bezier` logic driving the elastic horizontal slide animation.
