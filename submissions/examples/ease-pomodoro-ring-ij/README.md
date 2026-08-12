# Pomodoro Ring

A focus timer with an SVG progress ring that drains as the session runs, plus a pulsing countdown.

## How is it used?

Drive the ring from a dash offset and flip the `running` class on the card:

```html
<div class="pomodoro running">
  <svg class="ring"><circle class="ring-track"></circle><circle class="ring-progress"></circle></svg>
  <span class="time">25:00</span>
  <button class="btn start">Start</button>
</div>
```

When `.running` is present the ring gains a glow via `drop-shadow`, the `.time` text pulses with `timePulse`, and the script eases `stroke-dashoffset` each second.

## Why is it useful?

Circular progress is one of the most reused motion patterns in productivity and dashboard UIs. This component shows an accessible, lightweight approach — SVG + CSS `transition` on `stroke-dashoffset` — and pairs it with a state class, matching EaseMotion's readable-class, composable design language.
