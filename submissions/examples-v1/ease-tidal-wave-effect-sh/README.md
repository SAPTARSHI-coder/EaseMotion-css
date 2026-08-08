# Ease Tidal Wave Effect

An animated tidal wave fill effect, useful for progress indicators, loaders, or stat cards.

## What does this do?
Displays two overlapping SVG waves that continuously drift in a loop at the bottom of a circular card, creating a "filling liquid" tidal wave animation behind the content.

## How is it used?
Open `demo.html` in your browser — the waves animate continuously behind the "72% Storage Used" text.

```html
<div class="ease-tidal-card">
  <div class="ease-tidal-content">
    <h2>72%</h2>
    <p>Storage Used</p>
  </div>
  <div class="ease-tidal-wave-container">
    <svg class="ease-tidal-wave ease-tidal-wave-back" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
    </svg>
    <svg class="ease-tidal-wave ease-tidal-wave-front" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,70 C300,10 900,130 1200,70 L1200,120 L0,120 Z"></path>
    </svg>
  </div>
</div>
```

## Why is it useful?
Adds a fun, lightweight, pure-CSS/SVG animated fill effect for progress or stat displays, fitting EaseMotion's animation-first, no-dependency philosophy.
