# ease-date-countdown-timer-ij

Date countdown timer with flip-card animation.

## CSS Custom Properties

| Property            | Default  | Description               |
|--------------------|----------|---------------------------|
| `--flip-card-size`  | 80px     | Width of each flip card   |
| `--flip-bg`         | #1e293b  | Flip card background      |
| `--flip-color`      | #e2e8f0  | Flip card text color      |
| `--flip-duration`   | 0.6s     | Flip animation duration   |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css">

<div class="countdown">
  <div class="flip-unit">
    <div class="flip-card">
      <span class="flip-value">00</span>
    </div>
    <span class="flip-label">Days</span>
  </div>
  <!-- repeat for Hours, Minutes, Seconds -->
</div>
```

Add `.flip` class to `.flip-card` to trigger the flip animation when the displayed value changes.
