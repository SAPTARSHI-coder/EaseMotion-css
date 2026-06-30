# CSS accent-color Forms

## What does this do?

Demonstrates CSS `accent-color` applied to native form controls — checkboxes, radio buttons, range sliders, progress bars, and switches (`role="switch"`). A color picker lets you dynamically change the accent color in real time.

## How is it used?

```css
:root {
  --accent: #6c63ff;
}

input[type="checkbox"],
input[type="radio"],
input[type="range"],
progress {
  accent-color: var(--accent);
}
```

A JS color input sets `--accent` on the wrapper, and the browser re-themes all native controls instantly without custom CSS overrides.

## Why is it useful?

Before `accent-color`, custom-themed form controls required hiding native inputs and building custom checkboxes/radios with pseudo-elements, SVG, and complex CSS. With `accent-color`, a single property themes all native controls — lighter markup, better accessibility (native focus rings, form validation, keyboard interaction), and consistent behavior across platforms.
