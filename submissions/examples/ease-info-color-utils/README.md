# Ease Info Color Utilities

Demonstrates the proposed info color utility classes based on the semantic info token.

## Classes

| Class | Description |
|---------|-------------|
| `ease-text-info` | Applies the info color to text |
| `ease-bg-info` | Applies the info color to backgrounds |
| `ease-text-info-light` | Applies the light info color to text |
| `ease-bg-info-light` | Applies the light info color to backgrounds |
| `ease-text-info-dark` | Applies the dark info color to text |
| `ease-bg-info-dark` | Applies the dark info color to backgrounds |

## Token Mapping

| Token | Utility |
|--------|---------|
| `--ease-color-info` | `.ease-text-info` |
| `--ease-color-info` | `.ease-bg-info` |
| `--ease-color-info-light` | `.ease-text-info-light` |
| `--ease-color-info-light` | `.ease-bg-info-light` |
| `--ease-color-info-dark` | `.ease-text-info-dark` |
| `--ease-color-info-dark` | `.ease-bg-info-dark` |

## Usage

```html
<p class="ease-text-info">
  Informational message
</p>

<div class="ease-bg-info">
  Info alert
</div>

<span class="ease-bg-info ease-badge">
  Info
</span>
```

## Files

- `demo.html` — Offline demonstration
- `style.css` — Utility class implementations used by the demo
- `README.md` — Documentation

## Notes

This example demonstrates the proposed info color utilities and corresponding semantic color token mappings.
