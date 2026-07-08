# Archive Fold

An interactive folder component that opens with a 3D fold animation. Flaps rotate open to reveal files that slide out with staggered timing.

## Features

- 3D folder flap rotation using `rotateX`
- Staggered file reveal with `translateY` + `opacity`
- Reversible close animation
- Customizable label

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--af-duration` | `0.5s` | Animation duration |
| `--af-folder-color` | `#f59e0b` | Folder body color |
| `--af-flap-color` | `#fbbf24` | Folder flap color |
| `--af-file-color` | `#fef3c7` | File item background |
| `--af-label-color` | `#ffffff` | Label text color |
| `--af-radius` | `8px` | Border radius |

## Usage

```html
<div class="af-folder">
  <div class="af-folder-front">
    <div class="af-flap"></div>
    <div class="af-label">Projects</div>
  </div>
  <div class="af-folder-body">
    <div class="af-file" style="--i:0;">file.pdf</div>
  </div>
</div>
```

Toggle the `open` class to animate.
