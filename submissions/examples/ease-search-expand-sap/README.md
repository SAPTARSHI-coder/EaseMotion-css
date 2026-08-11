# ease-search-expand-sap

A circular search icon button that expands into a full text input on click, and collapses on outside click.

## Usage
1. Include `style.css`.
2. Add markup with the input placed before the toggle button (see `demo.html`) so it can expand from under the button.
3. Attach the toggle/outside-click listeners from `demo.html`.

## Customization
- `width: 260px` on `.search-expand.active .search-input`: expanded width.
- Transition duration/easing for expand speed.
- Icon swap: replace the inline search `<svg>`.

## Notes
- Input sits behind the toggle button (`z-index: 2` on button) at rest, hidden by `width: 48px` + `opacity: 0`, so the collapsed state looks like a plain icon button.
- Clicking outside the component collapses it and clears the value, keeping the UI tidy.
- Respects `prefers-reduced-motion`: the expand/collapse becomes an instant width change instead of an eased transition.