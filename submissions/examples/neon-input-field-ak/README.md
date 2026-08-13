# Neon Input Field

A fully responsive, CSS-only text input with a floating label and a glowing neon focus effect.

## What does this add?

An interactive input field that glows cyan on focus/hover and animates its label from a placeholder position into a floating label above the input, without any JavaScript.

## How does a developer use it?

```html
<div class="neon-field">
  <input type="text" id="username" class="neon-field__input" placeholder=" " autocomplete="off">
  <label for="username" class="neon-field__label">Username</label>
</div>
```

- `.neon-field` — wrapping container, controls max-width and positioning.
- `.neon-field__input` — the input itself. Keep `placeholder=" "` (a single space) so the `:not(:placeholder-shown)` selector can detect when the field has content.
- `.neon-field__label` — the floating label; must immediately follow the input in the markup as a sibling for the CSS selectors to work.

## Why does it fit EaseMotion CSS?

Zero-dependency, semantic HTML with plain CSS transitions — no JavaScript required for any of the visual behavior (glow, hover, label float). Fully responsive down to narrow viewports via a small media query adjustment.

## Notes

- Swap the glow color by editing the `#0ff0fc` values in `style.css`.
- Works with any input `type` (`text`, `email`, `password`, etc.).
