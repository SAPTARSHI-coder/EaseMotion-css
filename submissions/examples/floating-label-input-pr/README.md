# Animated Floating Label Input Component

## What does this do?
A Material-style floating label input. When the input is empty and blurred,
the label appears inside as placeholder text. On focus or when content is
typed, the label smoothly animates above the field.

## How is it used?

```html
<div class="ease-floating-label">
  <input type="text" id="name" placeholder=" " />
  <label for="name">Full Name</label>
</div>
```

> **Note:** `placeholder=" "` (single space) is required for
> `:not(:placeholder-shown)` to detect the filled state.

## Why is it useful?
Floating label inputs are widely used in modern forms for a clean,
space-efficient design. Pure CSS, no JS required, with full
prefers-reduced-motion support.