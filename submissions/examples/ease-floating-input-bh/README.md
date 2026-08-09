# ease-floating-input Floating Label Material Input

## What does this do?

A clean input component where the placeholder acts as a label that smoothly floats to the top border when focused or filled, using pure CSS with `:focus` and `:not(:placeholder-shown)` pseudo-classes.

## How is it used?

```html
<div class="ease-input-container">
  <input type="text" class="ease-input-field" placeholder=" " id="name">
  <label class="ease-input-label" for="name">Full Name</label>
</div>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-input-container` | Wrapper for the floating input |
| `.ease-input-field` | The input element with placeholder=" " |
| `.ease-input-label` | The floating label |

### Input Variants

| Class | Purpose |
|-------|---------|
| `.ease-input-primary` | Primary color focus state |
| `.ease-input-success` | Success/green focus state |
| `.ease-input-error` | Error/red focus state |

## Why is it useful?

Floating label inputs provide a modern, clean UI that saves vertical space and provides clear visual feedback:

- ✅ Pure CSS, no JavaScript required
- ✅ Smooth floating animation
- ✅ Works with `:focus` and filled state
- ✅ Multiple color variants
- ✅ Accessible with proper label associations
