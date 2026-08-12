# Infinite Auto-Scrolling Marquee

A seamless, infinitely scrolling horizontal marquee created entirely with CSS.

## Preview
Open `demo.html` in your browser. You will see a continuous banner of text sliding from right to left smoothly.

## Implementation
- The `.marquee-content` contains duplicate items to ensure a seamless loop.
- It uses a simple `@keyframes` animation to translate the X position from `0` to `-50%` over a linear duration, constantly repeating.
- The `overflow: hidden` on the container prevents scrollbars.
