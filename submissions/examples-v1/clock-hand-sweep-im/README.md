# ease-clock-hand-sweep

## What does this do?

Clock hand rotation utility classes — `.ease-clock-second`, `.ease-clock-minute`, `.ease-clock-hour` — using `transform-origin: bottom center` so each hand pivots at the clock's center. Add `--css` modifier variants for pure-CSS infinite rotation (decorative), or set `rotate(Ndeg)` via JS for a functional real-time clock.

## How to use it

### HTML

```html
<div class="clock">
  <div class="ease-clock-hour" id="hourHand"></div>
  <div class="ease-clock-minute" id="minuteHand"></div>
  <div class="ease-clock-second" id="secondHand"></div>
  <div class="clock-center"></div>
</div>
```

### Pure CSS decorative (no JS)

```html
<div class="ease-clock-hour ease-clock-hand--css"></div>
<div class="ease-clock-minute ease-clock-minute--css"></div>
<div class="ease-clock-second ease-clock-second--css"></div>
```

### Functional real-time (JS)

```js
function setClockHands() {
  const now = new Date();
  const s = now.getSeconds();
  const m = now.getMinutes() + s / 60;
  const h = (now.getHours() % 12) + m / 60;

  document.getElementById("secondHand").style.transform =
    `translateX(-50%) rotate(${s * 6}deg)`;
  document.getElementById("minuteHand").style.transform =
    `translateX(-50%) rotate(${m * 6}deg)`;
  document.getElementById("hourHand").style.transform =
    `translateX(-50%) rotate(${h * 30}deg)`;
}

setClockHands();
setInterval(setClockHands, 1000);
```

## CSS animation durations

Accurate real-world durations so the pure-CSS clock stays synchronized:

- **Second hand** — `60s` per revolution
- **Minute hand** — `3600s` (60 minutes) per revolution
- **Hour hand** — `43200s` (12 hours) per revolution

## Why it fits EaseMotion CSS

Clock animations are a foundational CSS transform demo, and the `transform-origin: bottom center` + `rotate(360deg) infinite linear` pattern directly addresses all 3 acceptance criteria. Includes both a pure-CSS decorative variant and a functional JS-driven real-time variant, plus a minimal line-style clock for maximum reusability.
