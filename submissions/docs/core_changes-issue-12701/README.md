# Tag/Chip Component

Compact pill-shaped tags for keywords, categories, filter selections, and multi-select inputs.

## Classes

| Class | Purpose |
|-------|---------|
| `ease-tag` | Base tag/chip pill |
| `ease-tag-primary` | Primary color |
| `ease-tag-success` | Success color |
| `ease-tag-warning` | Warning color |
| `ease-tag-danger` | Danger color |
| `ease-tag-info` | Info color |
| `ease-tag-outline` | Border-only variant (works with color classes) |
| `ease-tag-sm` | Small size |
| `ease-tag-lg` | Large size |
| `ease-tag-selected` | Selected state with focus ring |
| `ease-tag-removable` | Adds padding for close button |
| `ease-tag-close` | Close button styling |
| `ease-tag-group` | Flex-wrapped tag container |
| `ease-tag-clickable` | Pointer cursor + brightness hover |

## Usage

```html
<!-- Basic tag -->
<span class="ease-tag ease-tag-primary">Primary</span>

<!-- Outline variant -->
<span class="ease-tag ease-tag-outline ease-tag-success">Success</span>

<!-- Selected state -->
<span class="ease-tag ease-tag-outline ease-tag-primary ease-tag-selected">Selected</span>

<!-- Removable tag -->
<span class="ease-tag ease-tag-warning ease-tag-removable">
  Warning
  <button class="ease-tag-close" onclick="this.parentElement.remove()">&times;</button>
</span>

<!-- Tag group -->
<div class="ease-tag-group">
  <span class="ease-tag ease-tag-primary">CSS</span>
  <span class="ease-tag ease-tag-success">HTML</span>
</div>
```

## Affected Files

| File | Change |
|------|--------|
| `components/tag.css` | New component stylesheet |

Fixes #12701
