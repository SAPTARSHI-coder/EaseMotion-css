# CSS Skeleton Loader

Pure CSS animated skeleton screen components for EaseMotion CSS.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- Card skeleton -->
<div class="ease-skeleton ease-skeleton--card">
  <div class="ease-skeleton__img ease-skeleton--shimmer"></div>
  <div class="ease-skeleton__body">
    <div class="ease-skeleton__text ease-skeleton--shimmer" style="width:70%"></div>
    <div class="ease-skeleton__text ease-skeleton--shimmer" style="width:90%"></div>
  </div>
</div>

<!-- Profile skeleton -->
<div class="ease-skeleton ease-skeleton--profile">
  <div class="ease-skeleton__circle ease-skeleton--shimmer"></div>
  <div class="ease-skeleton__info">
    <div class="ease-skeleton__text ease-skeleton--shimmer" style="width:50%"></div>
  </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-skeleton` | Base wrapper |
| `.ease-skeleton--shimmer` | Shimmer animation modifier |
| `.ease-skeleton--card` | Card layout (image + body) |
| `.ease-skeleton--profile` | Profile row (avatar + info) |
| `.ease-skeleton--text-block` | Paragraph text block |
| `.ease-skeleton__img` | Image placeholder |
| `.ease-skeleton__circle` | Circle avatar placeholder |
| `.ease-skeleton__text` | Text line placeholder |
| `.ease-skeleton__body` | Card body wrapper |
| `.ease-skeleton__info` | Profile info column |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-sk-base` | `#e8e8f0` | Base background color |
| `--ease-sk-shine` | `#f4f4ff` | Shimmer highlight color |
| `--ease-sk-radius` | `8px` | Border radius |
| `--ease-sk-speed` | `1.6s` | Animation duration |
| `--ease-sk-shadow` | box-shadow | Card shadow |

## Dark Mode

Automatic via `prefers-color-scheme: dark`.

Closes #67717
