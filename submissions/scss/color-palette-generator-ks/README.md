# Color Palette Generator — SCSS helper mixin

Color palette generator mixins and functions that produce a full 50–900 CSS custom-property scale from a single base color, with automatic contrast-text selection for accessible theming.

## What it does

Color palette generator mixins and functions that produce a full 50–900 CSS custom-property scale from a single base color, with automatic contrast-text selection for accessible theming.

## Parameters

### `ease-contrast($color)`
- `$color` — the background color to evaluate for contrast.

### `ease-lighten($color, $amount)`
- `$color` — base color.
- `$amount` — percentage to lighten (default `20%`).

### `ease-darken($color, $amount)`
- `$color` — base color.
- `$amount` — percentage to darken (default `20%`).

### `ease-color-variants($name, $base-color)`
- `$name` — CSS variable prefix (e.g. `"primary"` → `--ease-primary-50` … `--ease-primary-900`).
- `$base-color` — the 500-step reference color from which the full scale is generated.

### `ease-semantic-colors($primary, $success, $danger, $warning, $info)`
- Five base colors, one per semantic role. Calls `ease-color-variants` for each.

## Files

- `_color-palette-generator.scss` — the mixin partial

## Usage

```scss
@use "./color-palette-generator" as *;

// Generate a full scale for a single color
:root {
  @include ease-color-variants("brand", #6c63ff);
}

// Or generate scales for all five semantic roles at once
:root {
  @include ease-semantic-colors(#6c63ff, #22c55e, #ef4444, #f59e0b, #3b82f6);
}

// Use the generated tokens
.btn-primary {
  background: var(--ease-primary-500);
  color: var(--ease-primary-contrast);
}

// Use the functions directly in SCSS
.card {
  background: ease-lighten(#6c63ff, 80%);
  color: ease-contrast(#6c63ff);
}
```

## Notes

- Clean SCSS compilation without warnings.
- Uses modern Sass module syntax (`@use "sass:color"`, `@use "sass:math"`) — no deprecated global functions.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- `ease-contrast()` uses the W3C relative-luminance formula to pick `#000` or `#fff`, ensuring WCAG-readable text on any background.
- Extends the existing `color-palette-generator-ag` submission by adding a WCAG-aware contrast function (`ease-contrast`) and a semantic multi-role mixin (`ease-semantic-colors`) that generates primary/success/danger/warning/info scales in a single call.

Closes #30320
