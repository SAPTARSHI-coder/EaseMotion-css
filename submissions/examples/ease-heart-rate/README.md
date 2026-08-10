# CSS Heart Rate Monitor Display (#68568)

## 1. What does this do?
This component renders a glowing, self-drawing EKG heart rate monitor screen entirely using pure CSS and SVG without any JavaScript. It simulates a realistic medical EKG waveform sweep complete with a retro CRT scanline overlay, grid background, and glowing drop-shadow line effect.

## 2. How is it used?
The effect relies on SVG path stroke properties combined with CSS `@keyframes`:
- `stroke-dasharray: 1000` creates dash segments and gaps matching the total path length.
- `stroke-dashoffset: 1000` shifts the start of the visible stroke offset completely out of view initially.
- The `@keyframes ease-ekg-draw` keyframe sequence animates `stroke-dashoffset` from `1000` down to `0`, creating the visual illusion of an EKG line continuously drawing itself across the screen over time.

```css
.ease-ekg-path {
  fill: none;
  stroke: #10b981;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.8));
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ease-ekg-draw 2.5s linear infinite;
}

@keyframes ease-ekg-draw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
```

## 3. Why is it useful?
This approach completely eliminates the need for heavy HTML5 `<canvas>` JavaScript animation loops or external graphics libraries. Offloading line-drawing calculations directly to CSS hardware acceleration shifts rendering burden to the browser's GPU compositor, delivering buttery-smooth 60fps animations, minimal CPU usage, perfect vector scaling, and full accessibility compliance (`prefers-reduced-motion`).
