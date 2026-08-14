# 3D Typographic Spiral Ribbon

An interactive 3D helix of text — each letter of a word is positioned along a vertical spiral using `rotateY` + `translateZ`, inside a `perspective` container with `transform-style: preserve-3d`. The ribbon auto-rotates continuously, and the user can click-drag to spin it manually.

## How it works

Each letter gets its own transform combining a vertical offset, a rotation angle around the Y axis, and a fixed `translateZ` radius:

```js
el.style.transform =
  `translateY(${yOffset}px) rotateY(${angle}deg) translateZ(${RADIUS}px)`;
```

The parent `.spiral-ribbon` then rotates as a whole via a CSS `animation`, carrying every letter around the Y axis together:

```css
.spiral-ribbon {
  transform-style: preserve-3d;
  animation: ease-kf-spiral-spin 14s linear infinite;
}
```

Dragging pauses the CSS animation (`animation-play-state: paused`) and applies a manual `rotateY()` driven by pointer movement instead.

## How is it used?

Change the `WORD` constant in `script.js` to spiral any word, and adjust `RADIUS`/`VERTICAL_STEP` to control how tight or wide the helix is.

## Why is this useful?

A distinctive hero/landing-page centerpiece or loading state — more visually memorable than a flat marquee or simple fade, while staying lightweight (no canvas, no WebGL, no 3D library).

## Tech Stack

- HTML
- CSS (3D transforms, `perspective`, `preserve-3d`)
- Vanilla JS (pointer events for drag-to-rotate)

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)` to stop the continuous auto-rotation for users who prefer reduced motion. Manual drag interaction still works since it's a deliberate user action, not an autoplaying animation.

## Preview

Open `demo.html` directly in your browser. Click and drag horizontally on the stage to spin the ribbon.

## Why it fits EaseMotion CSS

Follows the existing 3D transform convention from `core/animations.css`'s `.ease-flip-3d` (`perspective` + `preserve-3d` + `ease-kf-` prefixed keyframes), extending it into a fully interactive typographic centerpiece using the framework's existing color tokens.

Closes #11756
