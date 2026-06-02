# ease-tooltip

Animated, accessible tooltips built with **100% pure CSS** — no JavaScript. Implements [Issue #627](https://github.com/EaseMotion/EaseMotion-css/issues/627).

## What it does

Wrap any focusable or hoverable control in an `.ease-tooltip` container. Tooltip text comes from `data-tooltip`. The label is rendered with `::after` (bubble) and `::before` (arrow), both absolutely positioned pseudo-elements.

On `:hover` and `:focus-within`, the tooltip **fades in** (`opacity: 0` → `1`) and **slides 4px** into place over **150ms** with `ease` timing — matching EaseMotion’s native motion pattern (fade + subtle directional slide).

## Usage

```html
<!-- Top (default) -->
<span class="ease-tooltip" data-tooltip="Save your work">
  <button type="button" class="ease-btn ease-btn-primary">Save</button>
</span>

<!-- Explicit position -->
<span class="ease-tooltip" data-tooltip="More options" data-position="bottom">
  <button type="button" class="ease-btn ease-btn-primary">Menu</button>
</span>
```

### Attributes

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-tooltip` | any string | — | Text shown in the bubble (`content: attr(data-tooltip)`) |
| `data-position` | `top`, `bottom`, `left`, `right` | `top` | Placement relative to the trigger |

### Position behavior

| Position | Motion on show |
|----------|----------------|
| `top` (default) | Fades in, slides **up** 4px |
| `bottom` | Fades in, slides **down** 4px |
| `left` | Fades in, slides **left** 4px |
| `right` | Fades in, slides **right** 4px |

## Accessibility

- **Keyboard:** Tooltips appear when focus moves inside the wrapper (`:focus-within`), so tabbing to a nested `<button>` or `<a>` reveals the label.
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, only opacity is animated; slide transforms are disabled.

## Files

| File | Purpose |
|------|---------|
| `style.css` | Component styles (copy into your bundle or link directly) |
| `demo.html` | Live preview of all four positions + default |
| `README.md` | This guide |

## Preview

Open `demo.html` in a browser. No build step or server required.

## Tech stack

- HTML5 (`data-*` attributes)
- CSS3 (`::before`, `::after`, `transition`, `attr()`)
- Zero JavaScript
