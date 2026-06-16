# .ease-row-gap-* and .ease-col-gap-* Utility Classes

Adds independent `row-gap` and `column-gap` utilities for fine-grained control over grid and flexbox spacing.

## Problem

Existing `.ease-gap-*` sets both `row-gap` and `column-gap` simultaneously. There is no way to control them independently — e.g., a card grid where row spacing should be larger than column spacing.

## Proposed CSS to Add to `core/utilities.css`

```css
.ease-row-gap-0  { row-gap: 0 !important; }
.ease-row-gap-1  { row-gap: var(--ease-space-1) !important; }
.ease-row-gap-2  { row-gap: var(--ease-space-2) !important; }
.ease-row-gap-3  { row-gap: var(--ease-space-3) !important; }
.ease-row-gap-4  { row-gap: var(--ease-space-4) !important; }
.ease-row-gap-6  { row-gap: var(--ease-space-6) !important; }
.ease-row-gap-8  { row-gap: var(--ease-space-8) !important; }
.ease-row-gap-10 { row-gap: var(--ease-space-10) !important; }
.ease-row-gap-12 { row-gap: var(--ease-space-12) !important; }
.ease-row-gap-16 { row-gap: var(--ease-space-16) !important; }

.ease-col-gap-0  { column-gap: 0 !important; }
.ease-col-gap-1  { column-gap: var(--ease-space-1) !important; }
.ease-col-gap-2  { column-gap: var(--ease-space-2) !important; }
.ease-col-gap-3  { column-gap: var(--ease-space-3) !important; }
.ease-col-gap-4  { column-gap: var(--ease-space-4) !important; }
.ease-col-gap-6  { column-gap: var(--ease-space-6) !important; }
.ease-col-gap-8  { column-gap: var(--ease-space-8) !important; }
.ease-col-gap-10 { column-gap: var(--ease-space-10) !important; }
.ease-col-gap-12 { column-gap: var(--ease-space-12) !important; }
.ease-col-gap-16 { column-gap: var(--ease-space-16) !important; }
```

## Usage

```html
<!-- Card grid: generous rows, tight columns -->
<div class="ease-grid ease-grid-cols-3 ease-row-gap-8 ease-col-gap-4">
  <div class="ease-card">Card 1</div>
  <div class="ease-card">Card 2</div>
  <div class="ease-card">Card 3</div>
  <div class="ease-card">Card 4</div>
  <div class="ease-card">Card 5</div>
  <div class="ease-card">Card 6</div>
</div>

<!-- Flex column: wider row gap, no column gap -->
<div class="ease-flex ease-flex-col ease-row-gap-6 ease-col-gap-0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Override with ease-gap then fine-tune axis -->
<div class="ease-gap-4 ease-row-gap-8">
  <!-- row-gap becomes 8, column-gap remains 4 -->
</div>
```

## Benefits
- Matches existing `.ease-gap-*` naming and scale
- Uses `--ease-space-*` tokens (0–16)
- Composes with `.ease-gap-*`, `.ease-grid-*`, `.ease-flex-*`
- Uses `!important` to match EaseMotion utility convention

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — proposed CSS
