# Animated Countdown Timer

## What does this do?

A pure CSS animated countdown timer with smooth slide-flip digit transitions,
a blinking colon separator, and an automatic "Time's up!" message on completion.

## How is it used?

Add the `.countdown` wrapper with `.countdown-segment` blocks for hours,
minutes, and seconds. Each digit is a `.countdown-digit` box containing
a `.digit-top` and `.digit-bottom` span:

    <div class="countdown">
      <div class="countdown-segment">
        <div class="countdown-digits">
          <div class="countdown-digit" id="hours-tens">
            <span class="digit-top"></span>
            <span class="digit-bottom"></span>
          </div>
        </div>
        <div class="countdown-label">Hours</div>
      </div>
    </div>

Trigger the flip by toggling the `.flip` class on any `.countdown-digit`
via JavaScript when the digit value changes. The CSS handles the rest.

## Why is this useful?

Countdown timers are needed everywhere — product launches, flash sales,
event pages, booking deadlines — but most implementations rely on
heavy animation libraries. This submission provides the animation layer
only: the slide-flip transition between digits is entirely CSS-driven.
Developers supply their own timer logic and simply toggle `.flip` on
each digit change. This keeps the component lightweight, composable,
and aligned with EaseMotion CSS's animation-first philosophy.
