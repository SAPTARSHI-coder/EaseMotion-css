# Slider Thumb

A before/after image comparison slider with a draggable thumb overlay. Drag the circular handle to reveal one image over another with a smooth gradient reveal.

## Features

- Mouse and touch drag interaction
- Circular thumb handle with hover and active scale transitions
- CSS `clip-path` based reveal
- Side labels with blur backdrop
- Fully customizable via CSS custom properties

## Usage

### HTML

```html
<div class="slider" id="slider">
  <div class="slider__after">
    <span class="slider__label slider__label--after">After</span>
  </div>
  <div class="slider__before" id="sliderBefore">
    <span class="slider__label slider__label--before">Before</span>
  </div>
  <div class="slider__thumb" id="sliderThumb">
    <span class="slider__handle">⇔</span>
  </div>
</div>
```

Replace `.slider__before` and `.slider__after` background values with your own images.

### CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--st-duration` | `0.3s` | Transition duration |
| `--st-thumb-color` | `#ffffff` | Thumb handle background |
| `--st-handle-size` | `48px` | Thumb handle diameter |
| `--st-label-bg` | `rgba(0,0,0,0.55)` | Label background |
| `--st-radius` | `16px` | Slider border radius |

## Browser Support

Chrome, Firefox, Safari, Edge (latest 2 major versions).

## License

MIT
