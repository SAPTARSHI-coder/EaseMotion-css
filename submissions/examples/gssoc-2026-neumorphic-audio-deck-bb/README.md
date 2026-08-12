# Neumorphic Soft Tactile Audio Deck

A modern Soft-UI Neumorphic audio player component featuring dual inset/extruded depth shadow effects and pure CSS vinyl rotation animation.

## 1. What does this do?
This component renders an interactive tactile audio media deck utilizing CSS box-shadow physics to achieve realistic soft 3D extruded controls and inset track sliders without using images.

## 2. How is it used?
Wrap elements in `.deck-container` and apply Neumorphic soft button classes `.btn-neu` and `.icon-btn-neu`:

```html
<div class="deck-container">
  <button class="btn-neu">Play</button>
  <div class="progress-neu-track">
    <div class="progress-neu-fill"></div>
  </div>
</div>
```

## 3. Why is it useful?
- **Realistic Soft UI**: Implements dual color offset box shadows for soft tactile feedback on desktop and touch devices.
- **High Visual Appeal**: Perfect for music streaming apps, audio settings panels, and podcast widgets.
- **Accessible Motion**: Automatically stops vinyl disk rotation on `prefers-reduced-motion: reduce`.
