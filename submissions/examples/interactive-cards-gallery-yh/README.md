# Interactive 3D Cards Gallery & Code Modal Component

## What does this do?
This component provides a complete, interactive 3D motion cards gallery and documentation modal. It features:
- **3D Flip Card**: Pure CSS 180° rotation revealing the card's back side on hover.
- **Mouse Hover 3D Tracker Card**: A zero-JS 5x5 hover matrix that tilts and tracks cursor movement in real time with 3D parallax.
- **Neon Aurora Glass Depth Card**: Radiant border glow and elevation lift on hover.
- **Interactive Code Viewers**: Tabbed HTML/CSS snippet boxes with one-click copy-to-clipboard functionality.

## How is it used?
Include `style.css` in your project and trigger the modal using the `openCardDocModal()` function:

```html
<!-- Trigger card -->
<article class="interactive-card" onclick="openCardDocModal('flip-card', event)">
  <h2 class="card-title">Animation First</h2>
  <button class="card-btn btn-primary">Explore 3D Flip ↗</button>
</article>
```

To use an individual card (e.g. 3D Flip Card):
```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <p class="title">FLIP CARD</p>
      <p>Hover Me</p>
    </div>
    <div class="flip-card-back">
      <p class="title">BACK SIDE</p>
      <p>180° 3D Rotation</p>
    </div>
  </div>
</div>
```

## Why does it fit EaseMotion CSS?
It embodies EaseMotion CSS's zero-dependency, animation-first philosophy by demonstrating how pure CSS `perspective`, `transform-style: preserve-3d`, `matrix transforms`, and `sibling combinators (~)` can achieve fluid 3D interactive user experiences without heavy JavaScript animation libraries.

## Testing & Preview
Open `demo.html` directly in any web browser (no local server or build step required).
