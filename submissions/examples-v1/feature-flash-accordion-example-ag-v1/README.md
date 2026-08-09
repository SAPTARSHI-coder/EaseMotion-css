# Flash Accordion Example

## Description
This is a standard HTML/CSS/JS example demonstrating an accordion where the content pane reveals itself with an attention-seeking "flash" animation. It uses keyframes to rapidly shift the opacity and background color, guiding the user's eye to the newly revealed content.

## Files
- `demo.html`: Contains the markup and vanilla JavaScript to toggle ARIA attributes and classes.
- `style.css`: Contains the structural styling and the `@keyframes ease-flash-accordion-enter-ag` animation.

## How It Works
When a user clicks an accordion header:
1. The JS script removes the `open-ag` class from other items and adds it to the targeted content pane.
2. The CSS triggers the `ease-flash-accordion-enter-ag` keyframes on the `.open-ag` class.
3. The animation pulses the opacity (`0 -> 1 -> 0.5 -> 1`) and flashes a subtle yellow background color, bringing focus directly to the opened text.

## Accessibility Considerations
- Uses `aria-expanded` on the header buttons and `aria-hidden` on the content panes to ensure screen readers understand the state.
- Focus is naturally managed as buttons receive standard focus rings.
- **Reduced Motion**: Disables the flashing opacity and color shifts entirely via `@media (prefers-reduced-motion: reduce)`, instantly revealing the text instead.
