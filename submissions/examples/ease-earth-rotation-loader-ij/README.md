# Ease Earth Rotation Loader

## What does this do?
A CSS-only spinning globe loader with continent shapes, a specular highlight, and a pulsing shadow. The globe rotates continuously with a radial gradient ocean and colored landmasses. Supports size variants via modifier classes.

## How is it used?
```html
<div class="ease-earth-loader">
  <div class="ease-earth-loader__globe">
    <div class="ease-earth-loader__highlight"></div>
    <div class="ease-earth-loader__land ease-earth-loader__land--1"></div>
    <!-- more land masses -->
  </div>
  <div class="ease-earth-loader__shadow"></div>
  <div class="ease-earth-loader__label">LOADING</div>
</div>
```
Use `ease-earth-loader--sm` / `--lg` for size variants, `--fast` / `--slow` for speed variants. Override CSS vars inline for custom colors.

## CSS Custom Properties
| Prop | Default | Description |
|------|---------|-------------|
| `--loader-size` | `120px` | Diameter of the globe |
| `--globe-color` | `#1e3a5f` | Ocean/base globe color |
| `--land-color` | `#22c55e` | Landmass color |
| `--spin-duration` | `4s` | One full rotation duration |

## Why is it useful?
A globe loader is a visually appealing alternative to standard spinners, suitable for travel apps, map interfaces, or global-themed loading states. The pure CSS approach means no JavaScript or image assets are required.
