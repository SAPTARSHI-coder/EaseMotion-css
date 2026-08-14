# Info Card Slide Reveal

Information cards that slide in from off-screen with staggered entrance animations. Cards can enter from the left, right, or bottom direction.

## Features

- Scroll-triggered reveal via `IntersectionObserver`
- Configurable entrance direction per card using `data-direction`
- Staggered delays for a cascading effect
- Replay button to reset and re-trigger the animation
- Respects `prefers-reduced-motion`

## CSS Custom Properties

| Property              | Default                           | Description                    |
|-----------------------|-----------------------------------|--------------------------------|
| `--info-duration`     | `0.6s`                            | Duration of the slide animation|
| `--info-stagger`      | `0.15s`                           | Delay between each card        |
| `--info-card-bg`      | `#ffffff`                         | Card background color          |
| `--info-shadow`       | `0 8px 30px rgba(0,0,0,0.08)`    | Card box-shadow                |
| `--info-radius`       | `14px`                            | Card border radius             |
| `--info-text-color`   | `#1e293b`                         | Card text color                |

## Usage

```html
<div class="info-card" data-direction="left">
  <span class="card-icon">🚀</span>
  <h2>Title</h2>
  <p>Description text.</p>
</div>
```

Use `data-direction="left"`, `"right"`, or `"bottom"` to control the entrance direction. Add the `visible` class to trigger the slide-in.
