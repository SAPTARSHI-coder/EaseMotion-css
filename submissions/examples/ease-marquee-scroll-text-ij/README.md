# Marquee Scroll Text

Text scrolls horizontally like a marquee infinitely. Supports forward and reverse directions, with a pause toggle.

## Features

- Infinite horizontal scroll via `@keyframes mstScroll`
- Forward and reverse direction via `.mst-reverse`
- Pause/play toggle with `.mst-paused` class
- Pure CSS, tiny JS only for toggle interaction
- Customizable speed via `--mst-duration`

## Usage

Wrap two identical `.mst-text` spans inside `.mst-track` inside `.mst-marquee`. The track scrolls by `-50%` to create a seamless loop. Add `.mst-reverse` for opposite direction and `.mst-paused` to stop.

```css
.mst-track {
  animation: mstScroll 20s linear infinite;
}
@keyframes mstScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
