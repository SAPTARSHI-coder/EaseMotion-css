# Print Safe mixin

> Issue: [#63562](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63562)

Makes dark, animated, truncated UI actually printable.

## Mixins

### `print-safe($expand-text, $show-urls)`

```scss
.report { @include print-safe($show-urls: true); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$expand-text` | `Bool` | `true` | Release line clamps, max-heights and overflow. |
| `$show-urls` | `Bool` | `false` | Print link destinations after the link text. |

### `print-hide` / `print-only`

Hide from print, or show only in print.

### `print-break($where)`

`before` · `after` · `avoid` · `inside-avoid`. Emits both legacy `page-break-*` and modern `break-*`.

### `print-table`

Repeats table headers across pages and keeps rows intact.

### `print-page($margin, $size)`

Page margins via `@page`. Call from the **top level**, not inside a selector.

## Configuration

```scss
@use "print-safe" with ($print-safe-ink: #111, $print-safe-paper: #fff);
```

## Why it fits EaseMotion

Printing a dark-theme app produces a page of dark rectangles and clipped text, and nobody notices until a user tries it. The specific failures:

**Light text on white paper.** Most browsers strip backgrounds when printing but keep foreground colours — so light-grey body text lands on a now-white page and is nearly invisible. Both colour and background are forced.

**Animations captured mid-frame.** An element with an entrance animation can print at `opacity: 0`. Cancelling the animation is not enough on its own — `animation-fill-mode: both` keeps the `from` frame applied after the animation is removed, so `opacity: 1` is forced explicitly alongside `animation: none`.

**Clamped text stays clamped.** A `-webkit-line-clamp` paragraph prints truncated with an ellipsis and the remaining content is simply lost — genuinely destructive on a report.

**Link destinations vanish.** A printed page of "click here" with no URLs is unusable, hence the optional `attr(href)` expansion.

`print-break` emits both the legacy `page-break-*` and modern `break-*` properties because print engine support is genuinely split and neither alone covers the field.

`print-table` relies on `display: table-header-group`, which is what makes a `<thead>` repeat on every page. Without it a long table prints its header once and subsequent pages are unlabelled columns of numbers.
