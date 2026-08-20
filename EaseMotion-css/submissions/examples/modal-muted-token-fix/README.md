# Modal Muted Token Fix

## What does this do?

Fixes the modal body text color to reference the correct design token `--ease-color-muted` instead of the undefined `--ease-color-text-muted`.

## How is it used?

In `components/modals.css` line 127, change:

```css
/* Before (broken — token does not exist) */
color: var(--ease-color-text-muted, #4b5563);

/* After (fixed — uses the defined token) */
color: var(--ease-color-muted, #4b5563);
```

No new classes or markup changes are needed. The fix is a single token name correction.

## Why is it useful?

- `--ease-color-text-muted` is not defined anywhere in `core/variables.css`.
- `--ease-color-muted` is defined in three places: `:root` (line 55), `prefers-color-scheme: dark` (line 168), and `[data-theme="dark"]` (line 202).
- Because the token never resolves, the modal body text always uses the hardcoded fallback `#4b5563` and cannot be themed through the design token system.
- This one-line fix restores proper theming support for modal body text.
