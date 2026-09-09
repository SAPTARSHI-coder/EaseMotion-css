# Analog Clock

## What does this do?
A pure CSS analog clock with smoothly rotating hour, minute, and second
hands driven by CSS transforms, a clean tick-mark face with hour numbers,
and an optional digital readout below.

## How is it used?

Drop the `.clock` wrapper into your HTML. Each hand is a `.clock-hand`
div positioned at the clock center and rotated via an inline `transform`
style that JavaScript updates each frame:

    <div class="clock">
      <div class="clock-ticks"> ... </div>
      <div class="clock-hand clock-hand--hour"   id="hand-hour"></div>
      <div class="clock-hand clock-hand--minute" id="hand-minute"></div>
      <div class="clock-hand clock-hand--second" id="hand-second"></div>
      <div class="clock-center"></div>
    </div>

Update the hands with a single JS call:

    document.getElementById('hand-second').style.transform =
      `translateX(-50%) rotate(${sDeg}deg)`;

The CSS handles all sizing, positioning, colors, and the
`transform-origin: bottom center` that makes hands rotate
correctly from the clock center.

## Why is this useful?

Analog clocks are a classic CSS animation showcase — rotating
elements from a fixed origin is exactly what CSS transforms
are designed for. This submission separates the animation layer
(all CSS) from the time logic (minimal vanilla JS), so the
maintainer can standardize the classes and developers can
drop in any time source they like — live time, a countdown,
a timezone converter — without touching the CSS. Fits
EaseMotion CSS's composable, animation-first approach perfectly.