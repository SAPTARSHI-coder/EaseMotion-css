# Glassmorphic Music Visualizer Deck (GSSoC 2026)

## 1. What does this do?
The **Glassmorphic Music Visualizer Deck** is an interactive audio player widget with real-time spectrum frequency visualizer bar animations (`@keyframes bounce`), a spinning 3D vinyl disc record, dynamic progress tracker, and frosted glass backdrop blur UI.

## 2. How is it used?
Link the stylesheet into your HTML header:
```html
<link rel="stylesheet" href="style.css">
```
Structure your HTML using the `.deck-card`, `.vinyl-disc`, `.visualizer-bars`, and `.controls` components:
```html
<div class="deck-card">
  <div class="vinyl-disc spinning">...</div>
  <div class="visualizer-bars">
    <span class="bar bar-1"></span> ...
  </div>
</div>
```

## 3. Why is it useful?
- **Zero JS Dependency**: Visualizer frequencies and spinning vinyl animation operate purely via CSS Keyframes.
- **Glassmorphism Aesthetic**: Modern frosted glass blur interface built for web applications, media players, and landing pages.
- **Responsive Layout**: Designed to fit elegantly across mobile devices and desktop sidebars.
