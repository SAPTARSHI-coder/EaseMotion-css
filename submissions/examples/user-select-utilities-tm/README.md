# User Select Text Control

Demonstrates user-select: none, auto, text, and all — essential for protecting UI text, enabling copy-only regions, and improving accessibility on interactive elements.

## Features

- user-select: none — prevents accidental text selection on buttons and icons
- user-select: text — explicit copyable region in a protected UI
- user-select: all — double-click selects the entire paragraph
- ::selection color customization using --ease-selection-color
- Clipboard feedback via CSS :focus-within and ::after pseudo-elements

## Usage

```html
<div class="demo-card">
  <!-- Apply the feature class to any element -->
</div>
```

## Why is it useful?

This submission uses EaseMotion's CSS custom properties — specifically the `color-danger, color-success, space-4, radius-md, shadow-md` tokens — to ensure the demo is fully themeable and consistent with the rest of the framework. The implementation includes dark mode via `prefers-color-scheme: dark` and respects `prefers-reduced-motion` for accessibility.
