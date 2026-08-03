# Countdown Timer Boxes

### What does this do?

It shows a countdown display with separate flip style tiles for days, hours, minutes, and seconds, where the seconds tile has a subtle pulse.

### How is it used?

```html
<div class="countdown">
  <div class="cd-unit"><span class="cd-num">02</span><span class="cd-label">Days</span></div>
  <div class="cd-unit is-live"><span class="cd-num">09</span><span class="cd-label">Seconds</span></div>
</div>
```

Each unit is a tile with a center seam drawn by a pseudo element. Add `is-live` to the unit you want to pulse. The values are set in the markup and updated by the host app.

### Why is it useful?

Countdown timers create urgency on launches, sales, and events. This presents the time units in styled tiles with a gentle pulse, using only CSS with no images. The display uses a `timer` role, and the pulse is disabled under `prefers-reduced-motion: reduce`.
