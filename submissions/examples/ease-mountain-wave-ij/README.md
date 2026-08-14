# Mountain Wave

Three zigzag mountain layers glide sideways at different speeds, producing a parallax horizon.

## How is it used?

Each ridge is a repeating zigzag `background-image` that slides by translating the element `-50%` and looping. Closer layers use shorter durations (faster) and darker colors:

```css
.ridge-back {
  background-image: linear-gradient(135deg, transparent 48%, #5a4a7a 49% 58%, #4a3a64 59%);
  animation: ridge-slide 26s linear infinite;
}

.ridge-front {
  background-image: linear-gradient(135deg, transparent 48%, #241d3d 49% 62%, #171230 63%);
  animation: ridge-slide 11s linear infinite;
}

@keyframes ridge-slide {
  100% {
    transform: translateX(-50%);
  }
}
```

## Why is it useful?

Parallax speed ratios (26s : 18s : 11s) create depth with pure repeating gradients — no SVGs or images. Translating by exactly `-50%` lets a `repeat-x` background loop seamlessly, the same pattern behind endless clouds and wave headers.
