 
# Gap Spacing Utilities

Gap spacing utilities: gap-1 through gap-12, plus gap-x and gap-y for axis-specific spacing.

## Files

- demo.html - Interactive demo
- style.css - Gap utilities styles
- README.md - Documentation

## Classes

| Class | Value |
|-------|-------|
| `ease-gap-1` to `ease-gap-12` | 0.25rem to 3rem |
| `ease-gap-x-1` to `ease-gap-x-12` | Horizontal gap |
| `ease-gap-y-1` to `ease-gap-y-12` | Vertical gap |

## Usage

```html
<!-- Full gap -->
<div class="ease-gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- Horizontal gap only -->
<div class="ease-gap-x-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- Vertical gap only -->
<div class="ease-gap-y-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>