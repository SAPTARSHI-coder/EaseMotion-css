# CSS Analog Clock with Rotating Hands

## What does this do?

A pure CSS analog clock component with smoothly rotating hour, minute,
and second hands. The clock face includes 12 hour tick marks (with
thicker marks at 3, 6, 9, and 12), hour numbers positioned around the
face using CSS custom properties and rotate transforms, a red accent
second hand with a tail below center, a center cap dot, and an optional
digital readout below the face.

## How is it used?

```html
<div class="clock">
  <!-- 12 tick marks using --i: 0..11 -->
  <div class="tick tick-hour" style="--i:0"></div>
  ...

  <!-- 12 numbers using --n: 0..11 -->
  <div class="clock-number" style="--n:0">12</div>
  ...

  <!-- Hands -->
  <div class="clock-hand clock-hand--hour" id="hourHand"></div>
  <div class="clock-hand clock-hand--minute" id="minuteHand"></div>
  <div class="clock-hand clock-hand--second" id="secondHand"></div>

  <div class="clock-center"></div>
</div>
<div class="clock-digital" id="digitalReadout">00:00:00</div>
```

Minimal JS (in `demo.html`) uses `requestAnimationFrame` to compute the
current time and set a `rotate(...)` transform angle inline on each hand
— it only passes the current angle, all sizing, positioning, colors,
tick marks, and rotation mechanics are handled entirely in CSS.

## Why is it useful?

Rotating elements from a fixed transform origin is one of the most
fundamental CSS animation primitives, and an analog clock is the clearest
real-world demonstration of it. This submission cleanly separates the
animation layer (100% CSS — hand dimensions, transform-origin: bottom
center, colors, tick marks, number placement) from the time logic
(minimal vanilla JS that only sets a rotate degree). The maintainer can
standardize the classes and developers can swap in any time source —
live time, a timezone, a countdown — without ever touching the CSS. It
also demonstrates CSS custom properties (`--i`, `--n`) for positioning
repeated elements like tick marks and numbers without duplicating rules.
