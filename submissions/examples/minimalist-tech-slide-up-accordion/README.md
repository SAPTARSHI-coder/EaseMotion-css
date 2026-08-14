# CSS Slide-Up Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a smooth, modern "Slide-Up" entrance animation for the interior content.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean, decoupled panel layout, sharp `Inter` typography, subtle hover states, and dynamic border highlighting on active items.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". Each accordion item contains a hidden `<input type="checkbox">` (`.accordion-toggle`) and a `<label>` (`.accordion-header`) that toggles it.
- Because we use checkboxes (rather than radio buttons), users can open multiple accordion panels simultaneously, which is often preferred in technical configuration interfaces.
- **The Slide-Up & Expansion Animations**: 
- **Smooth Height Expansion**: Animating `height: auto` is historically difficult in pure CSS. We solve this using a modern CSS Grid trick. The `.accordion-content` is set to `display: grid; grid-template-rows: 0fr;`. When the checkbox is toggled, we transition it to `grid-template-rows: 1fr;`. This provides a perfectly smooth, hardware-accelerated height expansion without hardcoding pixel values.
- **Content Slide-Up**: Once the panel begins expanding, the interior text and elements (`.text-block`, `.code-block`) trigger a secondary `@keyframes` animation (`content-slide-up`). This animation fades the elements in from `opacity: 0` while translating them upwards (`translateY(20px)` to `0`). A slight `animation-delay: 0.1s` ensures the slide-up happens *as* the box is opening, creating a highly polished, layered effect.
- **Dynamic Styling**: When active, the chevron icon rotates 180 degrees, the header icon highlights blue, and the entire accordion item border glows blue.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the grid height transition, chevron rotation, and content slide-up animations are completely disabled, safely falling back to an instant toggle.

## Usage
Open `demo.html` in your browser. You will see a mock "System Configuration" accordion. Click on any header to expand the panel. Notice how the container smoothly expands while the inner content elegantly slides up and fades into place a split-second later.

## Files
- `demo.html`: The HTML structure for the accordion, detailing the crucial checkbox/label relationship for CSS state management.
- `style.css`: The styling, minimalist tech design tokens, the modern CSS Grid height transition trick, and the `@keyframes` driving the interior content slide-up logic.
