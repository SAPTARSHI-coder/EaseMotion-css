# Countdown Timer / Count-up Numerical Display Component

1. **What does this do?** Provides a countdown timer (days/hours/minutes/seconds to a target date) and an animated count-up numerical display (animates from 0 to target value). Supports pause/resume/stop for countdowns, IntersectionObserver for scroll-triggered count-ups, flip animation on digit change, expired state with pulse, configurable prefix/suffix/decimals, and `aria-live` accessibility.

2. **How is it used?** Add the HTML structure with `data-target` attributes, include style.css, and call the JS initialization which auto-detects all countdown and count-up elements.

```html
<!-- Countdown -->
<div class="countdown" data-target="2027-01-01T00:00:00" aria-live="polite">
  <div class="countdown-unit">
    <span class="countdown-value" data-unit="days">00</span>
    <span class="countdown-label">Days</span>
  </div>
  <span class="countdown-separator">:</span>
  <div class="countdown-unit">
    <span class="countdown-value" data-unit="hours">00</span>
    <span class="countdown-label">Hours</span>
  </div>
  <span class="countdown-separator">:</span>
  <div class="countdown-unit">
    <span class="countdown-value" data-unit="minutes">00</span>
    <span class="countdown-label">Minutes</span>
  </div>
  <span class="countdown-separator">:</span>
  <div class="countdown-unit">
    <span class="countdown-value" data-unit="seconds">00</span>
    <span class="countdown-label">Seconds</span>
  </div>
</div>

<!-- Count-up (auto-starts on page load) -->
<div class="countup" data-target="12500" data-duration="2000" data-prefix="$" data-suffix="+">
  <span class="countup-value">$0+</span>
  <span class="countup-label">Revenue</span>
</div>

<!-- Count-up (starts on scroll into view) -->
<div class="countup" data-target="50000" data-duration="3000" data-suffix="+" data-observe="true">
  <span class="countup-value">0+</span>
  <span class="countup-label">Lines of Code</span>
</div>
```

```js
// Programmatic controls
pauseCountdown('flash-sale');   // Toggle pause/resume
resetCountdown('flash-sale');   // Reset to initial target
stopCountdown('flash-sale');    // Stop and show expired state
```

3. **Why is it useful?** Countdown timers are used for flash sales, event start times, and session timeouts; count-up displays are used for statistics, achievement counters, and animated metrics — combining both in one component with scroll-triggered animation, pause/resume, expired state, flip animation, and accessibility support eliminates the need for multiple libraries.

### Attributes Reference

| Attribute | Element | Description |
|---|---|---|
| `data-target` | `.countdown` | ISO date string target |
| `data-target` | `.countup` | Target number to count up to |
| `data-duration` | `.countup` | Animation duration in ms (default 2000) |
| `data-prefix` | `.countup` | Text before number (e.g. "$") |
| `data-suffix` | `.countup` | Text after number (e.g. "+", "%") |
| `data-decimals` | `.countup` | Decimal places (default 0) |
| `data-observe` | `.countup` | "true" to start on scroll into view |

### CSS Custom Properties

`--cd-color`, `--cd-label-color`, `--cd-sep-color`, `--cd-expired`, `--cd-ring`, `--cu-color`, `--cu-label-color`

Fixes #16389
