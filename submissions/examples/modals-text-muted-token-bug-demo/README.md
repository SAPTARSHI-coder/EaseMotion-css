# Modals Text Muted Token Bug Demo

## What does this do?

Demonstrates that the modal component in `components/modals.css` references the undefined CSS variable `--ease-color-text-muted`. The body text references a token that doesn't exist.

## How is it used?

Open `demo.html` in a browser. Click the override buttons to change `--ease-color-muted` — the modal body text won't respond because it references the non-existent `--ease-color-text-muted` token instead.

## Why is it useful?

Users customizing color schemes via CSS variable overrides will find the modal body text unresponsive. The fallback `#4b5563` doesn't match any color in the design system palette.

The fix should be applied to `components/modals.css` line 127:
```css
color: var(--ease-color-muted, #64748b);
```
