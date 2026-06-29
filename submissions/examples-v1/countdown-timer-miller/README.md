# Countdown Timer Display Component

A responsive countdown timer that displays Days, Hours, Minutes, and Seconds in individual styled boxes — ideal for sales, events, and product launches.

## Files
- `demo.html` - Working demo with a live countdown
- `style.css` - Component styles
- `README.md` - This file

## Usage

```html
<div class="ease-countdown">
  <div class="ease-countdown-unit">
    <span class="ease-countdown-value" id="days">02</span>
    <span class="ease-countdown-label">Days</span>
  </div>
  <div class="ease-countdown-unit">
    <span class="ease-countdown-value" id="hours">23</span>
    <span class="ease-countdown-label">Hours</span>
  </div>
  <div class="ease-countdown-unit">
    <span class="ease-countdown-value" id="minutes">59</span>
    <span class="ease-countdown-label">Minutes</span>
  </div>
  <div class="ease-countdown-unit">
    <span class="ease-countdown-value" id="seconds">59</span>
    <span class="ease-countdown-label">Seconds</span>
  </div>
</div>
```

Add a small JS snippet (included in `demo.html`) to update the values every second, targeting a future date.

## Features
- Box layout per unit (value + label)
- Smooth "tick" animation on each update
- Hover lift effect
- Fully responsive, wraps on small screens
- Tabular numerals to prevent digit shifting
