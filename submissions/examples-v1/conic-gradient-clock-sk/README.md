# Conic Gradient CSS Clock

Analog clock where hands are `conic-gradient()` sectors driven by `@property`-registered angle variables and `steps()` timing.

## Class

`ease-conic-clock` — wraps `.clock-face` with three gradient hand elements.

## How it works

Each hand is a full-size `border-radius: 50%` element whose background is:

```css
background: conic-gradient(color var(--sec), transparent var(--sec));
```

A `mask: radial-gradient(...)` ring clips the gradient to an arc at the correct radius from center, making it look like a hand.

Timing:
- Seconds: `60s steps(60, start)` — one discrete step per second
- Minutes: `3600s steps(60, start)` — one step per minute
- Hours: `43200s steps(720, start)` — one step per 1/720th of 12 hours

A small script offsets the `animation-delay` to the current time on load.

Closes #9607
