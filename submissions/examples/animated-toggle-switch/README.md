# Animated Toggle Switch

## What does this do?
A CSS-only animated toggle switch component built on a hidden checkbox input, with smooth knob transitions, three size variants, and a disabled state.

## How is it used?
```html
<label class="ease-toggle">
  <input type="checkbox" class="ease-toggle-input" checked>
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
</label>

<!-- Size variants -->
<label class="ease-toggle ease-toggle-sm">...</label>
<label class="ease-toggle ease-toggle-lg">...</label>

<!-- Disabled state -->
<label class="ease-toggle disabled">
  <input type="checkbox" class="ease-toggle-input" disabled>
  ...
</label>
```
Wrap a hidden checkbox with `.ease-toggle` + `.ease-toggle-input`, a `.ease-toggle-track` background, and a `.ease-toggle-thumb` knob. Add `checked` to the input for the on state. Use `.ease-toggle-sm` / `.ease-toggle-lg` for size variants and `.disabled` for the disabled state.

## Why is it useful for EaseMotion CSS?
Animated toggle switches are a high-demand UI pattern used in settings pages, forms, and dashboards. This component provides a pure CSS solution with smooth motion, accessible keyboard interaction, and consistent theming — fitting EaseMotion CSS's animation-first philosophy.
