# Ease Data Filter Chips

## What does this do?
Animated filter chip components with add/remove transitions. Chips slide in with scale+fade, slide out with shrink+fade, and support count badges and remove buttons on hover. Active chips are highlighted with a border fill style.

## How is it used?
```html
<div class="ease-filter-chips">
  <span class="ease-filter-chip is-active" data-chip="design">
    Design
    <span class="ease-filter-chip__count">12</span>
    <span class="ease-filter-chip__remove" data-remove>✕</span>
  </span>
</div>
```
Toggle `is-active` for selection state. Add `ease-filter-chip--entering` / `--exiting` to animate chips in/out. The demo includes a full JS example with add/remove/clear controls.

## CSS Custom Properties
| Prop | Default | Description |
|------|---------|-------------|
| `--chip-bg` | `#334155` | Chip background color |
| `--chip-color` | `#cbd5e1` | Chip text color |
| `--chip-hover-bg` | `#475569` | Chip hover background |
| `--transition-speed` | `0.25s` | Animation duration for add/remove/hover |

## Why is it useful?
Filter chips are a standard UI pattern for data filtering, used in tables, search results, and dashboards. The animated add/remove gives clear feedback when filters are toggled, and the hover-reveal remove button keeps the interface clean.
