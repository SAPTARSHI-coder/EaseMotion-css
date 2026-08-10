# Multi-Select Dropdown with Checkboxes

A dropdown that allows selecting multiple options via checkboxes. Selected values are displayed as removable tags below the trigger button. Clicking a tag removes its value and unchecks the corresponding checkbox. Clicking outside closes the dropdown.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Click the trigger to open the dropdown, check items, and see them appear as tags. Click a tag's ✕ to remove it.

## Accessibility notes

Each option is a native `<input type="checkbox">` wrapped in a `<label>` for accessible click targets. The trigger is a `<button>`.
