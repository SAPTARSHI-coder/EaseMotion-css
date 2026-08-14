# CSS-Only Toggle Switch Component

## What does this do?
A fully functional, zero-JavaScript toggle switch that visually replaces
standard checkboxes with a beautifully animated pill-shaped slider, using
native CSS transitions and the `:checked` pseudo-class.

## How is it used?

```html
<label class="ease-toggle">
  <input type="checkbox" class="ease-toggle-input" />
  <span class="ease-toggle-slider"></span>
  Enable Notifications
</label>
```

Customize via theme tokens:

```css
:root {
  --ease-color-primary: #6366f1;
  --ease-text-color: #1e293b;
}
```

## Why is it useful?
EaseMotion CSS currently lacks styled form elements. This toggle switch
aligns with the framework's "animation-first" and "zero-dependency"
philosophy. It requires no JavaScript to maintain its state, uses the
framework's built-in color variables (`--ease-color-primary`), and
includes smooth sliding micro-animations. Fully accessible via native
form semantics, with prefers-reduced-motion support.