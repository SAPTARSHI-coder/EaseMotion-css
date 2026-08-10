# Animated Items Dropdown

A dropdown select component with staggered entrance animations for list items.

## Features

- Items slide in and fade sequentially on open
- Animation delay staggered via `--dd-item-stagger` variable
- Reopening triggers the animation again
- Closes on option select or outside click

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--dd-items-duration` | `0.4s` | Duration of each item's entrance animation |
| `--dd-item-stagger` | `0.06s` | Delay between successive items |
| `--dd-bg` | `#ffffff` | Background color |
| `--dd-hover-bg` | `#f3f4f6` | Item hover background |
| `--dd-text-color` | `#1f2937` | Text color |
| `--dd-radius` | `8px` | Border radius |
| `--dd-border` | `#d1d5db` | Border color |
