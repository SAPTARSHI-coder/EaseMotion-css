# Component: ease-heat-map-grid

This submission implements the heat map grid component for GSSoC issue **#43068**.

## Description

An interactive heat map visualization grid with 6 heat levels, clickable cells, and multiple display variants.

## Features

- **6 Heat Levels**: From cool (0) to hot (5)
- **Interactive**: Click cells to toggle values
- **Hover Effects**: Cells scale up on hover with shadow
- **Tooltip Support**: Shows value on hover
- **3 Variants**: Small grid, rounded cells, activity calendar
- **Fade-In Animation**: Cells animate in on load
- **Responsive**: Works on all screen sizes

## Usage

```html
<div class="ease-heat-map">
  <div class="heat-cell level-1">1</div>
  <div class="heat-cell level-2">2</div>
  <div class="heat-cell level-3">3</div>
  <div class="heat-cell level-4">4</div>
  <div class="heat-cell level-5">5</div>
</div>
```

## Heat Levels

| Level | Color | Description |
|-------|-------|-------------|
| 0 | Dark Gray | No activity |
| 1 | Green | Low activity |
| 2 | Lime | Moderate-low |
| 3 | Yellow | Moderate |
| 4 | Orange | High |
| 5 | Red | Very high |

## Variants

### Small Grid
```html
<div class="ease-heat-map heat-map-sm">...</div>
```

### Rounded Cells
```html
<div class="ease-heat-map heat-map-rounded">...</div>
```

### Activity Calendar
```html
<div class="ease-heat-map heat-map-calendar">...</div>
```

## CSS Custom Properties

```css
--heat-0: #1e293b;
--heat-1: #22c55e;
--heat-2: #84cc16;
--heat-3: #eab308;
--heat-4: #f97316;
--heat-5: #ef4444;
```

## Accessibility

- Keyboard accessible cells
- Tooltip support for screen readers
- `prefers-reduced-motion` disables animations

## Acceptance Criteria

- ✅ Interactive heat map grid component
- ✅ 6 heat levels with distinct colors
- ✅ Click-to-toggle cell values
- ✅ Hover effects with scale and shadow
- ✅ Multiple display variants
- ✅ Fade-in animation on load
- ✅ Tooltip support
- ✅ `prefers-reduced-motion` support
