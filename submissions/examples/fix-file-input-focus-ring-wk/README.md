# File Input Focus-Visible Keyboard Focus

## What does this do?

This submission fixes a rogue focus style rule (`.ease-input:focus`) that was applied inside the file input section. The rogue rule overrode the standard `:focus-visible` behavior, incorrectly displaying focus outlines on mouse clicks for all inputs, and used hardcoded colors instead of CSS custom properties. This fix restricts focus outlines exclusively to keyboard navigation using `:focus-visible` and supports custom themes and dark mode by leveraging CSS variables.

## How is it used?

Apply the class `.ease-input` on form elements (such as standard and file inputs):

```html
<input type="file" class="ease-input" />
```

## Why is it useful?

It keeps the focused elements visually consistent with EaseMotion's accessibility guideline (showing focus rings only on Tab key interaction, not mouse clicks) and preserves theme customizability (e.g., dark mode support) instead of relying on hardcoded hex colors.
