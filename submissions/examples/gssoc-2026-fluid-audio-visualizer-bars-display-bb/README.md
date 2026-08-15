# Fluid Audio Visualizer Bars Display

An interactive audio frequency spectrum visualizer component featuring neon gradient equalizer bars and track metadata display.

## 1. What does this do?
This component renders an animated audio spectrum analyzer with 12 fluid frequency bars, track album artwork, artist credentials, and playback timecode status.

## 2. How is it used?
Link `style.css` and use `.audio-card`:

```html
<link rel="stylesheet" href="style.css">

<div class="audio-card" tabindex="0">
  <div class="spectrum-bars">
    <div class="bar" style="--d: 0.1s; --h: 75%"></div>
  </div>
</div>
```

## 3. Why is it useful?
It provides music streaming applications, podcasts, and audio editing Web apps with a responsive, GPU-accelerated equalizer UI component without external JS dependencies.
