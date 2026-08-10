# CSS `anchor-size()` — Responsive Anchored Elements

A showcase of the CSS `anchor-size()` function for dynamically sizing
positioned elements relative to their anchor. Tooltips, popups,
and dropdowns that match their trigger's dimensions automatically —
no JavaScript, no `getBoundingClientRect()`, zero resize observers.

## What `anchor-size()` does

`anchor-size()` reads the width or height of an anchor element and
returns it as a CSS length value. It can be used anywhere a length
is accepted (`calc()`, `clamp()`, `min()`, `max()`).

```css
.trigger { anchor-name: --btn; }

.tooltip {
  position: fixed;
  position-anchor: --btn;
  position-area: bottom;
  width: anchor-size(width);  /* matches trigger width */
}
```

This is part of the CSS Anchor Positioning spec (2024) alongside
`anchor()`, `position-anchor`, and `position-area`.

## Demo sections

| # | What it shows |
|---|---------------|
| **1** | Tooltip that matches the trigger's width via `anchor-size(width)` |
| **2** | Right-side popup with independent sizing but anchor-positioned |
| **3** | Dropdown menu that inherits the trigger's width automatically |
| **4** | Multi-anchor setup — positioned to one, sized from another |
| **5** | `clamp()` with `anchor-size(width)` for min/max constraints |
| **6** | `inset-area: bottom span-right` combined with `anchor-size(width)` |

## Browser support

- Chrome 125+
- Edge 125+
- Opera 111+

Firefox and Safari are implementing anchor positioning behind flags.
A `@supports not (anchor-name: --a)` fallback is included.

## Why it fits EaseMotion CSS

- **Pure CSS** — zero JavaScript for sizing or positioning.
- **Genuinely missing** — `anchor-size()` has zero dedicated demos
  in `submissions/examples/` (only one usage in `examples-v1/` as
  a side effect of a command center component).
- **Modern CSS** — part of the CSS Anchor Positioning Level 1 spec
  that's shipping to the web platform.
- **Production-ready** — semantic HTML, accessible, responsive.

## Accessibility

- `@media (prefers-color-scheme: dark)` full dark theme.
- `@media (prefers-contrast: high)` strengthened borders.
- `@media (forced-colors: active)` system color overrides.
- `@media print` stripped decorative styles.

## Files

- `demo.html` — six demo sections with live code examples.
- `style.css` — all anchor declarations and theming.
- `README.md` — this file.
