# Feature Sway Select Mixin (SB)

## Overview

A reusable SCSS mixin that applies a subtle sway animation when a `<select>` element gains keyboard or mouse focus.

## Features

- Reusable SCSS mixin
- Customizable animation duration
- Smooth sway animation
- Accessible focus styling
- Supports `prefers-reduced-motion`

## Usage

```scss
@use "ease-motion" as *;

.my-select {
  @include feature-sway-select-mixin-mixin-sb(0.5s);
}
```

## Accessibility

- Uses `:focus` and `:focus-visible`
- Honors `prefers-reduced-motion: reduce`
- Includes a visible focus ring

## Files

- `_sway-select-mixin.scss`
- `README.md`