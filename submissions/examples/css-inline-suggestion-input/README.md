# CSS Inline Suggestion Input (#70925)

Pure CSS input component showing a greyed-out autocomplete suggestion text layered directly inline beneath user input.

## Features
- **Pure CSS Inline Hinting:** Uses overlay position layering and state selectors (`:placeholder-shown` / `:not(:placeholder-shown)`) to toggle grayed-out suggestion text inline without JavaScript.
- **Accessible Layout:** Includes `aria-hidden="true"` on presentation shadow overlays, `aria-describedby` helper associations, and clear focus indicator rings.
- **Zero JavaScript Dependencies:** Relies entirely on native CSS sibling relationships and form state psuedo-classes.
- **Responsive & Accessible:** Fluid structure across screen viewports with full support for `prefers-reduced-motion`.

## Structure
- `style.css` - Layer styling, text overlay alignment, placeholder state dynamics, and focus ring definitions.
- `demo.html` - Interactive demo showcasing the inline autocomplete hint input field.
