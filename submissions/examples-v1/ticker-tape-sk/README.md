# Horizontal News Ticker Tape

## What does this do?
A horizontally scrolling ticker/marquee that loops infinitely using a pure CSS `translateX` animation. Content is duplicated in markup so the second copy continues seamlessly when the first scrolls off. Hover pauses the tape.

## How is it used?

```html
<div class="ticker">
  <div class="ticker__label">LIVE</div>
  <div class="ticker__track">
    <!-- duplicate all items for seamless loop -->
    <span class="ticker__item">First headline here</span>
    <span class="ticker__item">Second headline</span>
    <!-- ...then duplicate all items again... -->
    <span class="ticker__item">First headline here</span>
    <span class="ticker__item">Second headline</span>
  </div>
</div>

<!-- Warning variant -->
<div class="ticker ticker--warning ticker--fast">…</div>

<!-- Light variant, slow speed -->
<div class="ticker ticker--light ticker--slow">…</div>
```

CSS custom properties:
```css
--ticker-duration: 30s;   /* speed */
--ticker-gap: 3rem;       /* space between items */
--ticker-accent: #6366f1; /* separator + link hover color */
--ticker-label-bg: #6366f1;
```

Speed modifiers: `.ticker--slow` (50s), `.ticker--fast` (15s).

## Why is it useful?
The seamless loop trick — `translateX(0)` to `translateX(-50%)` with duplicated content — is the CSS-native approach to infinite marquees (the deprecated `<marquee>` element's successor). `animation-play-state: paused` on hover is a single CSS rule. `prefers-reduced-motion` stops the animation for users who prefer no motion.
