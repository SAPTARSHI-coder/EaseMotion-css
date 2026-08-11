# Pure CSS Neumorphic Horizontal Roll Accordion

## Description
A highly tactile, pure CSS accordion component featuring a sleek **Horizontal Roll** expansion interaction. Designed explicitly to embody modern **Neumorphic Soft** aesthetics (soft extruded shadows and unified background colors), it requires absolutely **zero JavaScript** to function. State management is handled completely by the robust HTML Radio Button Hack (`<input type="radio">` paired with `<label>`). When triggered, the accordion natively interpolates the CSS Flexbox `flex-basis` property, unrolling the content horizontally at 60fps. It is fully responsive (gracefully collapsing into a vertical stack on mobile screens) and completely keyboard accessible.

## Customization via CSS Properties

The neumorphic shadows, colors, and physics can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--acc-transition-duration` | `0.6s` | The speed of the horizontal flex expansion. |
| `--acc-transition-timing` | `cubic-bezier(0.25, 1, 0.5, 1)` | A smooth deceleration curve for the roll animation. |
| `--neu-bg` | `#e0e5ec` | The unified background color critical for the neumorphic illusion. |
| `--neu-shadow-outset` | `9px 9px 16px rgba(...)` | The dual drop-shadow that creates the "raised" element effect. |
| `--neu-shadow-inset` | `inset 6px 6px 10px rgba(...)` | The dual inset shadow that creates the "pressed" or sunken effect. |

## Usage Guide

To implement this horizontal accordion in your project:
1. Ensure each tab trigger is a `<label>` element with a unique `for="panel-X"` attribute.
2. Place the hidden `<input type="radio" name="neumorphic-accordion" id="panel-X">` directly preceding the trigger `<label>` inside the `.accordion-panel`.
3. **CRITICAL:** Ensure all radio inputs share the exact same `name` attribute (e.g., `name="neumorphic-accordion"`) to enforce mutually exclusive toggle states.
4. The `.horizontal-accordion-container` handles the flex row layout. The `.accordion-panel` defaults to `flex: 0 0 80px`. When checked, the CSS `has()` pseudo-class (or sibling selector logic) changes it to `flex: 1 1 0`, driving the buttery smooth horizontal roll.
5. The `.accordion-tab` visually switches from an outset shadow to an inset shadow when active, simulating a physically pressed button.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is meticulously maintained:
- The hidden radio buttons allow robust semantic grouping and native arrow-key navigation logic.
- `aria-expanded` and semantic `role="button"` attributes are included in the markup template to properly announce the tab state to screen readers.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` triggers to ensure keyboard navigation (Tab, Enter, Space) functions flawlessly for users who do not rely on a mouse.
