# CSS Rotate-Fade Carousel

A carousel where each slide rotates in on the Y-axis (like a page turn) while fading in, using CSS `perspective` and `rotateY`.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-carousel-duration` | `0.5s` | Slide transition duration |
| `--ease-carousel-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |

## Usage
```html
<div class="ease-carousel">
  <div class="ease-carousel__slide ease-carousel__slide--active">Slide 1</div>
  <div class="ease-carousel__slide">Slide 2</div>
</div>
```
Minimal JS toggles the `ease-carousel__slide--active` class per dot click; all animation is CSS.

## Accessibility
Nav dots use `aria-label` per slide. `prefers-reduced-motion` shortens the transition duration significantly.

## Why it fits EaseMotion CSS
Pure CSS 3D `rotateY` + opacity transition, `ease-` prefixed classes, themeable.
