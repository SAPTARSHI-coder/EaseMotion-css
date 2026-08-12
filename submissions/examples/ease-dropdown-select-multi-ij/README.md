# Ease Dropdown Select Multi

## What does this do?
A multi-select dropdown that renders selected items as removable pill/tag badges. Features a fade+scale expand animation on the menu, animated checkmarks on options, and pill enter animation. Supports pill removal both via clicking the pill's X button or unchecking in the dropdown.

## How is it used?
```html
<div class="ease-multi-dropdown" style="--pill-bg:#6366f1">
  <div class="ease-multi-dropdown__trigger" data-trigger>...</div>
  <div class="ease-multi-dropdown__menu" data-menu>...</div>
</div>
```
Toggle the `is-open` class on the container to show/hide. Manage selected state via `is-selected` on options and insert pill elements into `[data-pills]`. The demo includes a complete vanilla JS implementation.

## CSS Custom Properties
| Prop | Default | Description |
|------|---------|-------------|
| `--dropdown-bg` | `#1e293b` | Background of trigger and menu |
| `--pill-bg` | `#6366f1` | Pill/tag background color |
| `--pill-color` | `#ffffff` | Pill text color |
| `--expand-duration` | `0.3s` | Dropdown expand animation speed |

## Why is it useful?
Multi-select with pill tags is a common form pattern for filters, tag pickers, and skill selectors. The pill display gives immediate visual feedback of what's selected while the dropdown remains accessible for adding/removing options.
