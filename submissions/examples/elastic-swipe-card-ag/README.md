# ease-swipe-card-ag

> Elastic Drag-to-Dismiss & Directional Swipe Gesture Cards for EaseMotion CSS.

---

## 1. What does this do?

Provides a touch- and mouse-draggable card stack featuring elastic resistance physics, spring snap-back easing curves, and directional swipe-out keyframes (`ease-swipe-out-left`, `ease-swipe-out-right`, `ease-swipe-out-up`).

---

## 2. How is it used?

Add the `ease-swipe-card` class to any card container inside a `.card-stack` parent element:

```html
<div class="card-stack">
  <div class="ease-swipe-card" data-index="0">
    <div class="card-badge badge-like">LIKE</div>
    <div class="card-badge badge-dismiss">DISMISS</div>
    <div class="card-details">
      <h2>Card Title</h2>
      <p>Card description text goes here.</p>
    </div>
  </div>
</div>
```

### Motion Modifiers & Keyframes

Apply direction-based swipe keyframes dynamically or via classes:

```css
/* Directional Swipe Keyframes */
.ease-swipe-out-left {
  animation: ease-swipe-left 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.ease-swipe-out-right {
  animation: ease-swipe-right 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Elastic Snap Back Easing Token */
.ease-swipe-card.is-snapping {
  transition: transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### CSS Custom Properties / Tokens

Override motion tokens and design variables:

```css
.card-stack {
  --ease-swipe-threshold: 120px;
  --ease-swipe-duration: 350ms;
  --ease-elastic-snap-timing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-card-bg: rgba(30, 41, 59, 0.85);
}
```

---

## 3. Why is it useful?

Swipe-to-dismiss and stack cards are essential interaction patterns for mobile applications, ecommerce quick-views, decision cards, and notification feeds.

By combining physical elastic resistance, real-time rotation dampening, and spring snap-back keyframes with standard keyboard accessibility (`ArrowLeft` / `ArrowRight`), this submission provides a zero-dependency, smooth tactile component that aligns directly with EaseMotion CSS's human-readable design language.

---

## 🛠️ Tech Stack & Dependencies

- **HTML5**: Pointer Events (`pointerdown`, `pointermove`, `pointerup`) for unified touch and mouse support.
- **CSS3**: Keyframe animations, CSS variables, `backdrop-filter`, 3D perspective transforms.
- **Zero External Dependencies**: Works out-of-the-box in modern web browsers.
