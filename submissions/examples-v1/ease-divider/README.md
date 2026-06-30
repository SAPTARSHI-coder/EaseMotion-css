# ease-divider

## What does this do?

Provides a **divider/separator** component for visually separating content sections with horizontal or vertical rules, supporting solid, dashed, and dotted line styles with optional centered labels.

## How is it used?

```html
<!-- Horizontal divider -->
<hr class="ease-divider" />

<!-- With line style -->
<hr class="ease-divider ease-divider-dashed" />

<!-- With centered label -->
<div class="ease-divider-label ease-divider-label-solid">Section Label</div>

<!-- Vertical divider -->
<span class="ease-divider-vertical ease-divider-solid"></span>
```

### Available Classes

| Class                        | Purpose                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `.ease-divider`              | Horizontal divider (`<hr>`)                                       |
| `.ease-divider-solid`        | Solid line (default, explicit)                                    |
| `.ease-divider-dashed`       | Dashed line                                                       |
| `.ease-divider-dotted`       | Dotted line                                                       |
| `.ease-divider-label`        | Horizontal divider with centered text (uses `::before`/`::after`) |
| `.ease-divider-label-solid`  | Label divider with solid lines                                    |
| `.ease-divider-label-dashed` | Label divider with dashed lines                                   |
| `.ease-divider-label-dotted` | Label divider with dotted lines                                   |
| `.ease-divider-vertical`     | Vertical divider (`inline-block`)                                 |

### Line Styles

| Class                                               | Line  |
| --------------------------------------------------- | ----- |
| `ease-divider-solid` / `ease-divider-label-solid`   | ───   |
| `ease-divider-dashed` / `ease-divider-label-dashed` | ─ ─ ─ |
| `ease-divider-dotted` / `ease-divider-label-dotted` | · · · |

### Use Cases

| Component          | Applied to | Example                                       |
| ------------------ | ---------- | --------------------------------------------- |
| Horizontal divider | `<hr>`     | Section breaks in articles                    |
| Label divider      | `<div>`    | "More Details", form section labels           |
| Vertical divider   | `<span>`   | Between nav links, toolbar items, breadcrumbs |

### Design Tokens Used

| Token                      | Fallback   | Purpose                    |
| -------------------------- | ---------- | -------------------------- |
| `--ease-color-neutral-200` | `#e2e8f0`  | Divider line color         |
| `--ease-color-neutral-400` | `#94a3b8`  | Label text color           |
| `--ease-color-neutral-500` | `#64748b`  | Dark mode label text       |
| `--ease-color-neutral-700` | `#334155`  | Dark mode line color       |
| `--ease-space-4`           | `1rem`     | Label gap, vertical margin |
| `--ease-space-6`           | `1.5rem`   | Divider margin             |
| `--ease-text-sm`           | `0.875rem` | Label font size            |

Fixes #25565
