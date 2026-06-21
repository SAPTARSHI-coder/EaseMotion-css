# :has() Form States

Demonstrates parent-aware form styling using the CSS `:has()` selector. Validation, focus, and checked states are handled purely in CSS without JavaScript validation classes.

## How it works

- `.field:has(input:focus)` — highlights the label and field border when the input is focused.
- `.field:has(input:invalid:not(:placeholder-shown))` — reveals the error icon and error helper text when validation fails after user interaction.
- `.field:has(input:valid:not(:placeholder-shown))` — reveals the check icon and hides all helpers.
- `.checkbox:has(input:checked)` — adds a background tint and custom checkmark to the entire label row.
- `.field-group--checkbox:has(input:checked)` — clears error styling from a checkbox group once any box is checked.
- `.field-group:has(:focus-visible)` — adds a glow border to the whole group on focus.
- Icons (check/cross) toggle via `opacity` transitions controlled by `:has()`.

## Key features

- Zero JavaScript for state management: all validation visuals use `:has()`.
- Input states covered: default, focus, valid (user), invalid (user), checked.
- Helper text smoothly transitions between default, error, and hidden.
- Custom-styled checkboxes and radios with `:has(input:checked)` parent styling.
- Dark theme with `#0a0f1e` background, `#e2e8f0` text.
- `prefers-reduced-motion` disables all transitions globally.
