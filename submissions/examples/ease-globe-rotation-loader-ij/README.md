# Globe Rotation Loader (#36688)

A spinning globe loader with rotating continent silhouettes and a pulsing "Loading…" label. Built entirely with CSS.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--loader-size` | `100px` | Width and height of the globe |
| `--globe-color` | `#4facfe` | Primary globe color |
| `--continent-color` | `#00f2fe` | Color of the continent shapes |
| `--spin-duration` | `4s` | Duration of one full rotation |

## Usage

```html
<div class="globe-loader">
  <div class="globe-loader__sphere"></div>
  <div class="globe-loader__continents">…</div>
  <div class="globe-loader__shadow"></div>
</div>
```

The globe spins continuously via CSS animation.
