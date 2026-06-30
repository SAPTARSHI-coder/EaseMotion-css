# Confetti Rain

## What does this do?

A full-page confetti burst that rains down colourful shapes — squares,
rectangles, circles, and ribbons — each falling with a randomised
position, speed, drift, spin, size, and colour, driven entirely by
CSS keyframes and custom properties.

## How is it used?

Add a `.confetti-container` fixed to the viewport. Each piece is a
`.confetti-piece` div with a shape variant class. All randomisation
is passed in as CSS custom properties via inline styles — the CSS
animation reads them directly:

    <div class="confetti-container">
      <div class="confetti-piece confetti-square"
           style="
             --x-start: 42vw;
             --x-drift: -80px;
             --color: #e63946;
             --duration: 3.2s;
             --delay: 0.4s;
             --size: 11px;
             --rotate-start: 45deg;
             --rotate-end: 720deg;
             --opacity: 0.9;
           ">
      </div>
    </div>

Available shape classes:

- `.confetti-square` — equal-sided square
- `.confetti-rectangle` — wide flat rectangle
- `.confetti-circle` — round dot
- `.confetti-ribbon` — long thin streamer

A small JS helper (included in `demo.html`) generates 120 pieces on
load and again on button click, then removes each piece from the DOM
after its animation completes to keep things clean.

## Why is this useful?

Celebration moments — form submissions, achievements, purchases,
onboarding completions — need visual feedback that feels rewarding.
Most confetti implementations reach for canvas libraries or heavy
JS packages. This submission keeps the entire animation in CSS:
one `@keyframes confetti-fall` rule handles every piece regardless
of its random values, because all variance is injected as custom
properties. The JS is purely a piece factory — it sets custom
properties and appends divs, nothing more. That clean separation
makes this a natural fit for EaseMotion CSS's composable,
animation-first approach: drop in the CSS, generate the pieces
however you like.
