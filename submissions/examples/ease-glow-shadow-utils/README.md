# ease-glow-shadow-utils

Submission proposing `.ease-glow-*` utility classes that expose the semantic glow shadow tokens from `core/variables.css` as static and hover `box-shadow` effects.

## Class Reference

| Class                        | Token                   | Glow Color                        |
| ---------------------------- | ----------------------- | --------------------------------- |
| `.ease-glow-primary`         | `--ease-glow-primary`   | Purple `rgba(108, 99, 255, 0.45)` |
| `.ease-glow-secondary`       | `--ease-glow-secondary` | Slate `rgba(100, 116, 139, 0.45)` |
| `.ease-glow-success`         | `--ease-glow-success`   | Green `rgba(16, 185, 129, 0.45)`  |
| `.ease-glow-danger`          | `--ease-glow-danger`    | Red `rgba(239, 68, 68, 0.45)`     |
| `.ease-glow-info`            | `--ease-glow-info`      | Blue `rgba(59, 130, 246, 0.45)`   |
| `.ease-glow-primary-hover`   | `--ease-glow-primary`   | Purple glow on `:hover`           |
| `.ease-glow-secondary-hover` | `--ease-glow-secondary` | Slate glow on `:hover`            |
| `.ease-glow-success-hover`   | `--ease-glow-success`   | Green glow on `:hover`            |
| `.ease-glow-danger-hover`    | `--ease-glow-danger`    | Red glow on `:hover`              |
| `.ease-glow-info-hover`      | `--ease-glow-info`      | Blue glow on `:hover`             |

Combine hover variants with `.ease-glow-transition` for a smooth glow appearance instead of an abrupt snap.

## Example

```html
<button
  type="button"
  class="ease-glow-primary-hover ease-glow-transition"
  style="background-color: #6c63ff; color: #fff; padding: 0.75rem 1.25rem; border: none; border-radius: 0.5rem;"
>
  Hover for glow
</button>
```

## Token requirement

The `--ease-glow-*` custom properties must be defined on `:root`. They are provided by `core/variables.css` when integrated into the framework, or can be declared locally in your own `:root` block for standalone use.
