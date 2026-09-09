# Marquee — Vertical and Pause-on-Focus

## What does this do?
Adds two marquee variants:
- `.ease-marquee-vertical` — scrolls items top-to-bottom
- `.ease-marquee-pause-on-focus` — pauses the animation when the
  marquee receives keyboard focus, in addition to hover

## How is it used?
Apply the variant alongside `.ease-marquee`:

    <div class="ease-marquee ease-marquee-vertical">
      <div class="ease-marquee-track">
        <div>Item 1</div>
        <div>Item 2</div>
        ...
      </div>
    </div>

    <div class="ease-marquee ease-marquee-pause-on-focus" tabindex="0">
      <div class="ease-marquee-track">...</div>
    </div>

## Why is it useful?
Vertical marquees are common for stock tickers, news feeds, and
chat-style displays. Pause-on-focus is a real accessibility win
for keyboard users who land on the marquee via Tab.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser. Tab into the second marquee to
see pause-on-focus.

## Contribution Notes
- Pure CSS addition
- Respects `prefers-reduced-motion` via the existing marquee
  reduced-motion block
