# Interactive 3D Cube Gallery (`ease-3d-cube-gallery-ssh`)

A fully interactive 3D rotating cube gallery built with **pure HTML + CSS** — no JavaScript, no external libraries, no CDN.

---

## 1. What does this do?

It renders a six-faced 3D cube whose visible face can be switched by clicking navigation buttons — state is managed entirely with hidden radio inputs and the CSS sibling combinator (`~`).

---

## 2. How is it used?

The structure uses hidden radio buttons that control the cube's rotation via `:checked` + sibling selectors, and `<label>` elements as the visible navigation buttons.

```html
<div class="cube-gallery">
  <!-- Hidden radios manage state -->
  <input type="radio" name="cube-face" id="face-front" checked />
  <input type="radio" name="cube-face" id="face-back" />
  <input type="radio" name="cube-face" id="face-right" />
  <input type="radio" name="cube-face" id="face-left" />
  <input type="radio" name="cube-face" id="face-top" />
  <input type="radio" name="cube-face" id="face-bottom" />

  <div class="cube-scene">
    <div class="cube">
      <div class="cube-face cube-face--front">1</div>
      <div class="cube-face cube-face--back">2</div>
      <div class="cube-face cube-face--right">3</div>
      <div class="cube-face cube-face--left">4</div>
      <div class="cube-face cube-face--top">5</div>
      <div class="cube-face cube-face--bottom">6</div>
    </div>
  </div>

  <nav class="cube-nav">
    <label for="face-front">Front</label>
    <label for="face-back">Back</label>
    <label for="face-right">Right</label>
    <label for="face-left">Left</label>
    <label for="face-top">Top</label>
    <label for="face-bottom">Bottom</label>
  </nav>
</div>
```

Each face can hold **any content** — numbers, text, images, or even nested HTML. Just open `demo.html` in any modern browser and click the buttons to rotate the cube.

---

## 3. Why is it useful?

This submission fits EaseMotion CSS's philosophy because it:

- **Pure CSS animation** — no JavaScript needed, perfectly aligned with the framework's CSS-first approach.
- **Smooth 3D transitions** — uses `transform-style: preserve-3d`, `perspective`, and `cubic-bezier` easing for fluid, professional motion.
- **Reusable & content-agnostic** — the cube faces are blank canvases; developers can drop in images, cards, or testimonials.
- **Accessible** — respects `prefers-reduced-motion` for users with motion sensitivity, and uses semantic `<label>` controls for keyboard/screen-reader compatibility.
- **Responsive** — adapts the cube size and depth for smaller viewports via a media query.
- **Self-contained** — no dependencies, no build step, works by simply opening the HTML file.

It demonstrates the power of the radio-button state-management pattern, a foundational CSS technique that EaseMotion CSS can showcase for interactive components.

---

## Browser Support

Works on all modern browsers that support CSS 3D transforms:

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## Author

Submitted by **@soumyasekharshee265-ux** as part of issue [#19990](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/19990).
