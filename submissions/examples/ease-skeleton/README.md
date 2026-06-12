# ease-skeleton

Pure CSS skeleton loading animation with shimmer effect.
No JavaScript — only CSS custom properties and @keyframes.

## Usage

```html
<span class="ease-skeleton"></span>
```

## Variants

| Class                        | Description           |
| ---------------------------- | --------------------- |
| `ease-skeleton--circle`      | Circle shape (avatar) |
| `ease-skeleton--rounded`     | Pill shape            |
| `ease-skeleton--rect`        | No border radius      |
| `ease-skeleton--sm/md/lg/xl` | Size variants         |

## CSS Variables

| Variable          | Default | Description       |
| ----------------- | ------- | ----------------- |
| `--ease-base`     | #1e293b | Base color        |
| `--ease-shine`    | #334155 | Shimmer highlight |
| `--ease-radius`   | 6px     | Border radius     |
| `--ease-duration` | 1.5s    | Animation speed   |
| `--ease-width`    | 100%    | Width             |
| `--ease-height`   | 16px    | Height            |

## How it works

`linear-gradient` with `background-size: 200%` creates the shimmer.
`ease-shimmer` keyframe moves `background-position` from -200% to 200%
— pure CSS, zero JavaScript.
