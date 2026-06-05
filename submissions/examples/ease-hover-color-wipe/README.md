# Ease Hover Color Wipe

`ease-hover-color-wipe` changes text color through a left-to-right gradient sweep on hover. It uses `background-clip: text`, animated `background-position`, and CSS variables for the start and end colors.

## Usage

```html
<a class="ease-hover-color-wipe" href="#"> Hover color wipe </a>
```

## Custom Properties

| Variable               | Default        | Purpose               |
| ---------------------- | -------------- | --------------------- |
| `--ease-wipe-from`     | `currentColor` | Starting text color.  |
| `--ease-wipe-to`       | `#14b8a6`      | Revealed hover color. |
| `--ease-wipe-duration` | `420ms`        | Sweep duration.       |

The class works on headings, links, buttons, and inline text. It also supports keyboard focus and includes a reduced-motion fallback.
