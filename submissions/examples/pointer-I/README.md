 
# Pointer/Cursor Utilities

Pointer/cursor utilities: pointer (hand cursor), no-pointer (events pass through), and default cursor.

## Files

- demo.html - Interactive demo
- style.css - Pointer utilities styles
- README.md - Documentation

## Classes

| Class | CSS Property |
|-------|--------------|
| `ease-pointer` | `cursor: pointer` |
| `ease-no-pointer` | `pointer-events: none` |
| `ease-cursor-default` | `cursor: default` |

## Usage

```html
<!-- Hand cursor for clickable elements -->
<div class="ease-pointer">Click me</div>

<!-- Disable pointer events (pass-through) -->
<div class="ease-no-pointer">Overlay - clicks go through</div>

<!-- Explicit default cursor -->
<div class="ease-cursor-default">Default cursor</div>