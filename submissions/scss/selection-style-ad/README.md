# Selection Style mixin

> Issue: [#63812](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63812)

`::selection` styling with build-time contrast checking.

## Mixins

### `selection-style($bg, $fg, $over, $check)`

```scss
.article { @include selection-style(rgba(56, 189, 248, 0.32), #f8fafc, $over: #0b1120); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$bg` | `Color` | `rgba(56,189,248,0.32)` | Selection background. |
| `$fg` | `Color` | `#f8fafc` | Selection foreground. |
| `$over` | `Color` | `null` | Page background. **Required** for the check when `$bg` is translucent. |
| `$check` | `Bool` | `true` | Emit a contrast warning. |

### `selection-global($bg, $fg, $over)` — document-wide
### `selection-none` — suppress selection on drag surfaces

## Why it fits EaseMotion

Two things go wrong with selection styling, and both produce text the user cannot read at exactly the moment they are trying to read it.

**Only the background is set.** The text keeps its inherited colour, which may have no contrast against the new background. Brand-blue selection over blue links is the classic case. This mixin requires both halves.

**Both are set but never checked.** Selection colours are picked to look attractive against the *page*, not for legibility of the selected text — and nobody runs a contrast checker on a transient state. The ratio is computed at build time and warns below AA.

**Translucent backgrounds have to be composited before checking.** A `rgba(…, 0.32)` selection sits over the page, so measuring contrast against the raw `$bg` overstates it badly. Passing `$over` flattens the pair first; without it the mixin says so explicitly rather than reporting a meaningless number.

Getting that flattening right needed care: mixing a translucent colour directly leaves the result translucent, so the check silently never runs. The alpha is stripped first and the compositing is carried by the mix *weight*.

**`text-shadow: none` in the selection rules** is the detail that still looks broken after the colours are right — text shadows survive selection and smear against the new background.

The `-moz-selection` prefix is emitted as its own rule, never grouped: an unrecognised selector in a list invalidates the **entire** rule, so grouping breaks selection styling in every non-Firefox browser.

`selection-none` pairs `user-select: none` with a transparent selection background, which is more targeted than putting `user-select: none` on a whole subtree and blocking text the user may legitimately want to copy.
