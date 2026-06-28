# ease-scrollbar-color — Themed Scrollbar Color Utility Classes

Utility classes that apply EaseMotion's brand colors to `scrollbar-color` and the WebKit scrollbar pseudo-elements. `core/utilities.css` already provides `.ease-scrollbar-thin`, `.ease-scrollbar-none`, and `.ease-scrollbar-auto` for width/visibility, but they hardcode a single neutral gray palette with no way to apply brand colors.

## Classes

| Class | Thumb color | Hover color |
|-------|-------------|-------------|
| `.ease-scrollbar-primary` | `--ease-color-primary` | `--ease-color-primary-dark` |
| `.ease-scrollbar-secondary` | `--ease-color-secondary` | `--ease-color-secondary-dark` |
| `.ease-scrollbar-success` | `--ease-color-success` | `--ease-color-success-dark` |
| `.ease-scrollbar-danger` | `--ease-color-danger` | `--ease-color-danger-dark` |

## Usage

```html
<!-- Branded content panel -->
<div class="content-panel ease-scrollbar-primary" style="overflow-y: scroll;">
  ...
</div>

<!-- Destructive dialog with scrollable body -->
<div class="modal-body ease-scrollbar-danger" style="overflow-y: scroll;">
  ...
</div>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-scrollbar-primary` | Default branded scroll containers |
| `.ease-scrollbar-secondary` | Secondary panels, sidebars, drawers |
| `.ease-scrollbar-success` | Success/confirmation modals with scroll |
| `.ease-scrollbar-danger` | Destructive/warning dialogs with scroll |

## Notes

- Track color reuses the same neutral track as `.ease-scrollbar-thin` for visual consistency
- Falls back gracefully via `var(..., fallback)` if `--ease-color-neutral-100` is unavailable
- Firefox renders via native `scrollbar-color`; Chrome/Edge/Safari via WebKit pseudo-elements

## Why it fits EaseMotion CSS

`core/utilities.css` already solves scrollbar width/visibility but only ships one neutral color scheme. These classes extend that system with the framework's existing brand color tokens, completing the scrollbar utility set.

Closes #11584
