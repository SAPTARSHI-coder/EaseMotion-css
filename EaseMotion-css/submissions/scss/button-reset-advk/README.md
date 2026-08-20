# button-reset-advk

A Sass mixin that strips a `<button>`'s user-agent chrome down to an
unstyled interactive base, while deliberately leaving the default
`:focus-visible` outline intact.

## Usage

```scss
@use 'button-reset' as *;

.icon-button {
  @include button-reset;
  padding: 0.5rem;
  border-radius: 999px;

  &:hover { background: rgba(0, 0, 0, 0.06); }
}
```

## Why is it useful?

The typical button-reset snippet also zeroes out `outline: none`, on the
assumption that the author will always remember to add back a visible focus
style. In practice that follow-up step gets skipped often enough that
"reset a button" and "remove keyboard focus visibility" end up correlated
bugs across a codebase. This mixin resets everything else — appearance,
border, margin, padding, background, font inheritance, text alignment,
cursor — but leaves the browser's own `:focus-visible` ring in place, so a
button styled with this mixin and nothing else is still keyboard-navigable
without an extra rule.

`font: inherit` and `color: inherit` matter specifically for buttons nested
inside styled text (a link-styled button inside a paragraph, for example) —
without them the button reverts to the platform's default button font,
which usually doesn't match the surrounding copy.
