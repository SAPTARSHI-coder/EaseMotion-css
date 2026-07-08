# ease-color-dropper-picker

> Issue #36560 — Color dropper picker tool with hover preview.

A grid of colour swatches that reveal a larger preview tooltip and colour hex label on hover, with a smooth scale transition.

## CSS Custom Properties

| Property           | Default    | Description                              |
| ------------------ | ---------- | ---------------------------------------- |
| `--picker-size`    | `36px`     | Width and height of each colour swatch   |
| `--preview-size`   | `48px`     | Width and height of the hover preview    |
| `--border-color`   | `#45475a`  | Border colour of swatches                |
| `--hover-duration` | `0.25s`    | Duration of hover scale/fade transitions |

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion/css/color-dropper-picker.css" />

<div class="color-dropper-picker">
  <div class="color-swatch" data-color="#f38ba8">
    <div class="preview-tooltip" style="background:#f38ba8"></div>
    <span class="swatch-value">#f38ba8</span>
  </div>
</div>
```

## Animation

Swatches scale to `1.15` on hover. The `.preview-tooltip` scales from `0.85` to `1.0` and fades in. Both transitions use `--hover-duration` with an `ease` timing function.
