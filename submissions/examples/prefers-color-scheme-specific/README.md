# CSS prefers-color-scheme Light/Dark Specific Adjustments

## What

This example demonstrates light-only and dark-only specific refinements using `prefers-color-scheme` media queries and the `light-dark()` CSS function. UI components adapt with tailored styles for each mode — beyond simple color swapping.

## How

The `@media (prefers-color-scheme: light)` and `@media (prefers-color-scheme: dark)` queries apply mode-specific overrides. The `light-dark()` function provides inline dual-color syntax. Components like cards, badges, buttons, and form inputs get refined shadows, borders, and opacity values that look natural in both themes.

## Why

Using `prefers-color-scheme` with explicit light/dark queries and `light-dark()` allows designers to fine-tune each mode independently, creating a polished user experience. The `light-dark()` function reduces boilerplate by encoding both color values in a single declaration.
