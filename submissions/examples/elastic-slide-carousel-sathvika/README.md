# CSS Elastic-Slide Carousel

A carousel whose slide transition uses an elastic overshoot easing curve, giving each swipe a springy, bouncy feel.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-carousel-duration` | `0.6s` | Slide transition duration |
| `--ease-carousel-easing` | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Elastic overshoot curve |

## Usage
```html
<div class="ease-carousel">
  <div class="ease-carousel__track" id="track">
    <div class="ease-carousel__slide">Slide 1</div>
    <div class="ease-carousel__slide">Slide 2</div>
  </div>
</div>
```
Minimal JS toggles `transform: translateX()` on the track per dot click; all animation styling lives in CSS.

## Accessibility
Nav dots use `aria-label` per slide. `prefers-reduced-motion` shortens the transition duration significantly.

## Why it fits EaseMotion CSS
Pure CSS elastic-easing transform transition, `ease-` prefixed classes, themeable, zero dependencies beyond a minimal state-toggle script.
