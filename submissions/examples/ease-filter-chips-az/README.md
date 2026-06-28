# Filter Chips

Horizontal filter chips bar with active/inactive states, counts, closeable chips, outline variant, and size options.

## Usage

```html
<div class="ease-filter-chips-az">
  <button class="ease-filter-chip-az">All</button>
  <button class="ease-filter-chip-az --active">Design</button>
  <button class="ease-filter-chip-az">Development</button>
</div>
```

## Variants

- **`--active`**: Selected state with primary color
- **`--outline`**: Bordered chip without fill
- **`--sm`**, **`--lg`**: On the container for size
- **Count badge**: `.ease-filter-chip-count-az` inside chip
- **Close button**: `.ease-filter-chip-close-az` inside chip

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-*` | spacing |
| `--ease-radius-md` | 8px |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-neutral-*` | grays |
| `--ease-font-sans` | system-ui |
