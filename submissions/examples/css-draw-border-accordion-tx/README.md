# Pure CSS Draw-Border Accordion

## Description
A highly technical, pure CSS accordion component featuring a sophisticated "Draw-Border Line" interaction. Styled to fit seamlessly into **Minimalist Tech** interfaces (like developer docs or terminal-style UI), it requires absolutely **zero JavaScript**. State management is handled entirely by the HTML Radio Button Hack (`<input type="radio">` and `<label>`), ensuring mutually exclusive accordion behavior. It is fully responsive, keyboard accessible, and intelligently switches between light and dark modes based on system preferences.

## Customization via CSS Properties

The animation curve, speed, and aesthetics can be finely tuned by overriding the following CSS variables inside the `:root` scope or on the `.accordion-container`:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--acc-transition-duration` | `0.4s` | The speed at which the content expands and the border line draws. |
| `--acc-transition-timing` | `cubic-bezier(0.16, 1, 0.3, 1)` | A sharp, technical easing curve for snapping motion. |
| `--acc-border-color` | `#334155` | The default border and tag color (Dark Mode). |
| `--acc-border-active` | `#3b82f6` | The accent color used when the accordion is open and the line draws. |
| `--acc-line-thickness` | `2px` | The thickness of the animated bottom border line. |

## Usage Guide

To implement this accordion in your project:
1. Ensure each accordion item contains a hidden `<input type="radio">`.
2. Give all radios in the same group the exact same `name` attribute (e.g., `name="tech-accordion"`) so they act as a mutually exclusive accordion. 
   *(Note: Change to `type="checkbox"` if you want multiple items open simultaneously).*
3. The content wrapper uses a modern CSS `grid-template-rows: 0fr -> 1fr` hack to natively animate the height from 0 to auto without needing JavaScript.
4. The `.draw-border-line` is an absolute positioned element that animates its `width` from `0%` to `100%` dynamically based on the radio checked state.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being pure CSS, accessibility is flawless:
- The hidden radio buttons maintain native semantic grouping.
- ARIA states (`aria-expanded`, `aria-hidden`) are included in the template markup.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` elements so that users navigating via the Tab key can open items identically to clicking them.
