# ease-tag — Chip/Tag Component

## What does this do?
A reusable chip/tag component for filter tags, skill labels, status pills, and category chips. Includes color variants, size variants, outline style, removable × button, status dot, and clickable/selected states.

## Usage

```html
<!-- Basic tag -->
<span class="ease-tag">React</span>

<!-- Color variants -->
<span class="ease-tag ease-tag-success">Active</span>
<span class="ease-tag ease-tag-danger">Error</span>
<span class="ease-tag ease-tag-warning">Pending</span>
<span class="ease-tag ease-tag-info">Info</span>
<span class="ease-tag ease-tag-neutral">Draft</span>

<!-- Outline -->
<span class="ease-tag ease-tag-primary ease-tag-outline">Outlined</span>

<!-- Sizes -->
<span class="ease-tag ease-tag-sm">Small</span>
<span class="ease-tag ease-tag-lg">Large</span>

<!-- Removable -->
<span class="ease-tag ease-tag-primary">
  TypeScript
  <button class="ease-tag-btn" aria-label="Remove">×</button>
</span>

<!-- With status dot -->
<span class="ease-tag ease-tag-success">
  <span class="ease-tag-dot"></span>
  Online
</span>

<!-- Clickable / filter -->
<span class="ease-tag ease-tag-primary ease-tag-clickable">Frontend</span>
```

## Variants

| Class | Description |
|---|---|
| `ease-tag-primary/success/danger/warning/info/pink/neutral` | Color variants |
| `ease-tag-outline` | Border only, transparent bg |
| `ease-tag-sm / ease-tag-lg` | Size variants |
| `ease-tag-btn` | Remove × button inside tag |
| `ease-tag-dot` | Status indicator dot |
| `ease-tag-clickable` | Hover + active interaction |
| `ease-tag-selected` | Selected/active ring state |
| `ease-tag-removing` | Exit animation (add via JS) |

## Why it fits EaseMotion CSS?
The remove animation (`ease-tag-removing`) is animation-first — scale + opacity + max-width collapse. All variants compose via single class names. Human-readable throughout. Respects `prefers-reduced-motion`.
