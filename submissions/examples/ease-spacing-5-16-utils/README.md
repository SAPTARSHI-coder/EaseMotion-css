# ease-spacing-5-16-utils

Submission proposing gap, padding, and margin utility classes for spacing scale steps **5** and **16**, filling gaps in the token-to-utility mapping in `core/utilities.css`.

## Complete Spacing Scale

| Step | Token | Value | Utility Classes | Status |
| --- | --- | --- | --- | --- |
| 1 | `--ease-space-1` | 0.25rem | `.ease-gap-1`, `.ease-padding-1`, `.ease-margin-1` | existing |
| 2 | `--ease-space-2` | 0.5rem | `.ease-gap-2`, `.ease-padding-2`, `.ease-margin-2` | existing |
| 3 | `--ease-space-3` | 0.75rem | `.ease-gap-3`, `.ease-padding-3`, `.ease-margin-3` | existing |
| 4 | `--ease-space-4` | 1rem | `.ease-gap-4`, `.ease-padding-4`, `.ease-margin-4` | existing |
| 5 | `--ease-space-5` | 1.25rem | `.ease-gap-5`, `.ease-padding-5`, `.ease-margin-5` | **added by this submission** |
| 6 | `--ease-space-6` | 1.5rem | `.ease-gap-6`, `.ease-padding-6`, `.ease-margin-6` | existing |
| 8 | `--ease-space-8` | 2rem | `.ease-gap-8`, `.ease-padding-8`, `.ease-margin-8` | existing |
| 10 | `--ease-space-10` | 2.5rem | `.ease-gap-10`, `.ease-padding-10` | existing |
| 12 | `--ease-space-12` | 3rem | `.ease-padding-12` | existing |
| 16 | `--ease-space-16` | 4rem | `.ease-gap-16`, `.ease-padding-16`, `.ease-margin-16` | **added by this submission** |

## Example

```html
<div class="ease-flex ease-gap-5" style="display: flex;">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

## Token requirement

These utilities require `--ease-space-5` and `--ease-space-16` to be defined on `:root`. They are provided by `core/variables.css` when integrated into the framework, or can be declared locally for standalone demos.
