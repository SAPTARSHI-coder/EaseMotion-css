# Gap Property for Flexbox

Demonstrates the CSS `gap` property for flexbox and grid layouts. Shows gap at different sizes, column-gap, row-gap, and grid gap.

## Features

- Gap sizes from `--ease-space-1` (4px) to `--ease-space-6` (24px)
- `column-gap` and `row-gap` for unequal spacing
- Flexbox gap vs CSS Grid gap side-by-side
- Dark mode and reduced-motion safe

## Design Tokens Used

- `--ease-color-primary` / `--ease-color-secondary` / `--ease-color-info` — gradient fills
- `--ease-color-success` / `--ease-color-warning` / `--ease-color-danger` — additional fills
- `--ease-radius-*` — rounded elements
- `--ease-shadow-sm` / `--ease-shadow-md` — card elevation
- `--ease-font-sans` / `--ease-font-mono` — fonts
- `--ease-space-*` — gap values

## Usage

```css
.card-row { display: flex; flex-wrap: wrap; gap: var(--ease-space-4); }
.grid-layout { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--ease-space-3); }
```
