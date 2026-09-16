# ease-animated-radio-card-select-sap

Selectable option cards built on native radio inputs, where the selected card lifts and gains a highlighted border/ring.

## Usage
Include `style.css`, add `<label>` wrapping a hidden `<input type="radio">` + card content.

## Notes
- Uses the `:has()` relational selector (`label:has(input:checked)`) to style the label based on its child input's state, avoiding the need for a wrapping-element `:checked + label` sibling structure.
- Native radio inputs preserve full keyboard/screen-reader accessibility.
- Respects `prefers-reduced-motion`: the lift transform is removed, border/ring transitions remain.