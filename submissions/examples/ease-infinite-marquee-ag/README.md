# Infinite Auto-Scrolling Marquee

An infinitely auto-scrolling marquee powered purely by CSS animations, without any JavaScript.

## Preview

Open `demo.html` in your browser to see the marquee scroll seamlessly. Hover over it to pause the animation.

## Implementation Details

- **No JavaScript:** The scrolling is powered entirely by a CSS `@keyframes` animation.
- **Seamless Loop:** The content inside the marquee is duplicated. The animation translates the container leftwards by exactly `50%` of its total width. Once it reaches the halfway point (where the duplicate content perfectly aligns with the starting position of the original), it instantly snaps back to `0%`, creating an invisible, infinite loop.
- **Hover Pause:** Uses `animation-play-state: paused` on `:hover` so users can easily read the passing content.
