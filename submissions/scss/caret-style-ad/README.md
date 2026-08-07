# Caret Style mixin

> Issue: [#63811](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63811)

Keeps the text caret visible on custom-styled inputs, and fixes the `::selection` half-configuration bug.

## Mixins

### `caret-style($color, $select-bg, $select-fg)`

```scss
.input { @include caret-style; }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$color` | `Color \| auto` | `#38bdf8` | Caret colour. |
| `$select-bg` | `Color` | `rgba(56,189,248,0.3)` | Selection background. |
| `$select-fg` | `Color` | `#f1f5f9` | Selection foreground. |

### `caret-contrast($background, $light, $dark)`

Picks a caret that contrasts with the field's own surface.

### `caret-editable($color, $min-height, $placeholder)`

For contenteditable surfaces.

### `caret-hidden`

Suppresses the caret on focusable non-text controls.

## Why it fits EaseMotion

**The caret defaults to the element's `color`,** which is fine until the input is styled. A dark-themed field with light text on a light focus background, a search box that inverts on focus, or a contenteditable with a coloured backdrop can all end up with a caret matching its own background. The user cannot tell where they are typing, or whether the field is focused at all — a total failure of the control, easy to miss because the caret only exists while focused.

**`::selection` is set on both halves, always.** Setting only the background is the common bug: the inherited text colour lands on the new background with no contrast, so selected text *disappears* exactly when the user is trying to read it. Setting both is not optional polish.

The `-moz-selection` prefix is emitted as its own rule rather than grouped with the standard selector — an unrecognised selector inside a list invalidates the **entire** rule, so grouping them would silently break selection styling in every non-Firefox browser.

**`caret-editable` handles a specific contenteditable failure:** an empty contenteditable collapses to zero height, so the caret has nowhere to render and the field looks unfocused even when it is. `min-height` plus an optional `:empty::before` placeholder keeps it visible.

`caret-contrast` uses perceptual luminance rather than lightness, for the same reason a foreground picker must — saturated blue and saturated yellow can share a lightness value while needing opposite carets.

`caret-hidden` exists because a blinking caret in a listbox or segmented control implies typing will do something, which it will not.
