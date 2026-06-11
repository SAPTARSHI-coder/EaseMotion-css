# ease-info-color-utils

Submission proposing `.ease-text-info` and `.ease-bg-info` utility classes (plus light/dark variants) for the `--ease-color-info` design token, completing the semantic color utility API alongside success, warning, and danger.

## Token-to-Utility Mapping

| CSS Variable | Utility Class | Usage |
| --- | --- | --- |
| `--ease-color-info` | `.ease-text-info` | Info-colored text (links, icons, labels) |
| `--ease-color-info` | `.ease-bg-info` | Solid info background (badges, buttons) |
| `--ease-color-info-light` | `.ease-text-info-light` | Light info text on dark surfaces |
| `--ease-color-info-light` | `.ease-bg-info-light` | Subtle info panel or alert background |
| `--ease-color-info-dark` | `.ease-text-info-dark` | High-contrast info headings on light backgrounds |
| `--ease-color-info-dark` | `.ease-bg-info-dark` | Deep info accent background |

## Example

```html
<div class="ease-bg-info-light" style="border-left: 4px solid var(--ease-color-info); padding: 1rem;">
  <span class="ease-text-info">ℹ</span>
  <strong class="ease-text-info-dark">Information</strong>
  <p>Your changes were saved successfully.</p>
</div>
```

## Token requirement

`--ease-color-info`, `--ease-color-info-light`, and `--ease-color-info-dark` must be defined on `:root`. They are provided by `core/variables.css` when integrated into the framework. Override them in your own `:root` block to theme the info palette.
