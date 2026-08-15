# ease-banner-slide-cycle

An auto-cycling banner component that smoothly transitions through multiple slides with a horizontal slide animation. Slides animate in from the right, pause, and slide out to the left in a continuous loop.

## HTML Structure

```html
<div class="ease-banner">
  <div class="ease-banner-slide">Slide 1</div>
  <div class="ease-banner-slide">Slide 2</div>
  <div class="ease-banner-slide">Slide 3</div>
  ...
</div>
```

The component automatically counts slides up to 8 using `:has()` and `:nth-child()` selectors. Each slide needs no additional markup — just add them as children.

## CSS Variables

| Variable             | Default       | Description                              |
|----------------------|---------------|------------------------------------------|
| `--banner-height`    | `200px`       | Height of the banner container           |
| `--slide-duration`   | `4s`          | Duration each slide is visible           |
| `--transition-timing`| `ease-in-out` | Timing function for the slide transition |

## Example

```html
<div class="ease-banner" style="--banner-height: 160px; --slide-duration: 3s;">
  <div class="ease-banner-slide">A</div>
  <div class="ease-banner-slide">B</div>
  <div class="ease-banner-slide">C</div>
</div>
```
