# Dock Icon Magnify

macOS-style dock with hover magnification using CSS `scale` transforms.

## CSS Custom Properties

| Variable          | Default                  | Description                 |
|-------------------|--------------------------|-----------------------------|
| `--icon-size`     | `56px`                   | Base icon size              |
| `--magnify-scale` | `1.8`                    | Scale factor on hover       |
| `--dock-bg`       | `rgba(16, 16, 30, 0.85)`| Dock background with blur   |
| `--hover-duration`| `0.25s`                  | Transition duration         |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="dock">
  <div class="dock-icon" style="background: ...;">
    🎵
    <span class="dock-label">Music</span>
  </div>
</div>
```

Each `.dock-icon` sits in a flex row. Hover triggers `scale(var(--magnify-scale))`. Adjacent icons scale to 40% of the magnification factor via the `+` and `:has()` selectors for a smooth neighbor bump effect.
