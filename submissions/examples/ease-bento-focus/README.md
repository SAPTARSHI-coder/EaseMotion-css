# Bento Focus Grid — CSS `:has()` Parent Selector

**Issue:** [#61922](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61922) · Standard Track submission

---

## 1. What does this do?

When a user hovers over **any card** in the bento grid, the CSS `:has()` pseudo-class detects the hover state from the **parent** grid element and instantly applies a **dim + scale-down + grayscale** effect to every sibling card that is *not* being hovered — creating a sharp, focused spotlight on the active card.

The entire focus effect is achieved with **two CSS rules and zero JavaScript**:

```css
/* Dim all non-hovered siblings when any card is hovered */
.bento-grid:has(.bento-card:hover) .bento-card:not(:hover) {
  opacity: 0.4;
  transform: scale(0.96);
  filter: grayscale(80%);
}

/* Lift the hovered card */
.bento-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: #64748b;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}
```

---

## 2. How is it used?

Wrap your cards in `.bento-grid` and give each card the `.bento-card` class. Use the span utility classes to build an asymmetric layout:

```html
<div class="bento-grid">

  <!-- Large hero card — 2 cols × 2 rows -->
  <div class="bento-card col-span-2 row-span-2">
    <span class="card-label">Monthly Revenue</span>
    <p class="card-stat">$142,890</p>
  </div>

  <!-- Standard card -->
  <div class="bento-card">
    <div class="card-icon">👥</div>
    <span class="card-label">Active Users</span>
    <p class="card-stat">84,312</p>
  </div>

  <!-- Wide card — 2 cols -->
  <div class="bento-card col-span-2">
    <div class="card-icon">🔔</div>
    <span class="card-label">Recent Activity</span>
    <!-- activity content -->
  </div>

</div>
```

**Available span utilities:**

| Class | Effect |
|---|---|
| `col-span-2` | Spans 2 columns |
| `col-span-3` | Spans 3 columns |
| `col-span-4` | Spans all 4 columns (full-width) |
| `row-span-2` | Spans 2 rows |

No JavaScript, no event listeners, no state management required.

---

## 3. Why is it useful?

### The old way — JavaScript `mouseenter`/`mouseleave`

Traditionally, achieving "hover one, dim others" required imperative JavaScript:

```js
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(other => {
      if (other !== card) other.classList.add('dimmed');
    });
  });
  card.addEventListener('mouseleave', () => {
    cards.forEach(other => other.classList.remove('dimmed'));
  });
});
```

This approach has real costs:
- **Runtime overhead** — event listeners registered for every card on every page load.
- **State management** — you must track which card is active and sync it to the DOM.
- **Fragile at scale** — adding or removing cards dynamically requires re-registering listeners.
- **JavaScript-dependent** — the entire effect breaks if JS fails or is disabled.

### The new way — CSS `:has()` as a parent selector

The `:has()` pseudo-class allows CSS to **select an element based on its descendants**. This was previously impossible in pure CSS and was called the "parent selector problem."

```css
/* Select .bento-grid if it CONTAINS a hovered .bento-card */
.bento-grid:has(.bento-card:hover) .bento-card:not(:hover) {
  opacity: 0.4;
}
```

This single rule replaces all the JavaScript above because:

- **The browser handles it natively** — hover state tracking is built into the rendering engine, not your application code.
- **It's declarative** — the *relationship* between hover and sibling appearance is expressed in CSS, where it belongs.
- **Zero runtime cost** — no event delegation, no `querySelectorAll`, no classList mutations on every mouse move.
- **Works without JavaScript** — the effect degrades gracefully; cards simply don't dim if `:has()` is unsupported, rather than throwing errors.
- **Automatically stays in sync** — cards added dynamically to the grid get the dimming behavior for free, without re-running setup code.

`:has()` is now **baseline available** in all modern browsers (Chrome 105+, Firefox 121+, Safari 15.4+) and represents a permanent, cleaner alternative to JavaScript-driven hover state management.

---

## Browser Support

| Browser | Minimum version |
|---|---|
| Chrome / Edge | 105+ |
| Firefox | 121+ |
| Safari | 15.4+ |

> **Graceful degradation:** On unsupported browsers, cards simply all stay at full opacity on hover — the layout and content remain fully usable.
