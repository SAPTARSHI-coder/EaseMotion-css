# Pure CSS Floating Orbit Accordion

## Description
A beautifully animated, pure CSS accordion component featuring a mesmerizing "Floating Orbit" interaction. Styled to fit seamlessly into modern **Glassmorphism UI** environments, this component requires absolutely **zero JavaScript**. State management is handled entirely by the HTML Radio Button Hack (`<input type="radio">` and `<label>`), ensuring mutually exclusive accordion behavior. It is fully responsive, keyboard accessible, and intelligently switches between light and dark modes based on system preferences while maintaining its glass aesthetics.

## Customization via CSS Properties

The orbit animation speed, easing, and glass aesthetics can be finely tuned by overriding the following CSS variables inside the `:root` scope or on the `.accordion-container`:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--acc-transition-duration` | `0.5s` | The speed at which the accordion content expands. |
| `--acc-orbit-speed` | `3s` | The time it takes for the satellite dot to complete one full 360-degree orbit. |
| `--acc-orbit-color` | `#38bdf8` | The glowing accent color of the orbital center and satellite. |
| `--acc-glass-bg` | `rgba(255, 255, 255, 0.1)` | The semi-transparent background color establishing the glass effect. |
| `--acc-glass-blur` | `16px` | The intensity of the backdrop filter blur applied to the cards. |

## Usage Guide

To implement this accordion in your project:
1. Include the abstract `.bg-blob` elements in your background to give the glass panels something colorful to blur and refract.
2. Ensure each accordion item contains a hidden `<input type="radio">`.
3. Give all radios in the same group the exact same `name` attribute (e.g., `name="glass-accordion"`) so they act as a mutually exclusive accordion group.
4. The content wrapper uses a modern CSS `grid-template-rows: 0fr -> 1fr` hack to natively animate the height from 0 to auto.
5. The `.orbit-satellite` utilizes a CSS `@keyframes` animation (`rotate(0deg)` to `rotate(360deg)`) that is triggered cleanly via the sibling selector when the radio input is checked.

*See `demo.html` for the complete markup structure, including the necessary orbital HTML nodes.*

## Accessibility
Despite being purely CSS driven and heavily stylized, semantic accessibility remains fully intact:
- The hidden radio buttons maintain native grouping and state logic.
- ARIA states (`aria-expanded`, `aria-hidden`) are included in the markup template.
- `tabindex="0"` and inline `onkeydown` handlers are attached to the `<label>` elements so users navigating via keyboard (Tab key) can open items identically to clicking them.
