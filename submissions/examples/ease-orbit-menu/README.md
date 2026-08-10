# ease-orbit-menu

A zero-JavaScript radial/circular menu built with native CSS `sin()` and `cos()` trigonometric functions.

---

## 1. What does this do?

This component positions menu items in a perfect circle around a central hub by computing each item's X and Y offsets using **CSS trigonometric math functions**:

```css
transform: translate(
  calc(cos(var(--angle)) * var(--radius)),
  calc(sin(var(--angle)) * var(--radius))
);
```

The CSS engine evaluates `sin()` and `cos()` natively at paint time. The radius and all positioning logic live entirely in CSS — no JavaScript `Math.sin`, `Math.cos`, `getBoundingClientRect()`, or DOM scripting of any kind is involved.

Each orbiting item receives its angular position as a single custom property (`--angle`) passed via an inline style attribute in HTML. The wrapper controls the shared `--radius` variable. When the wrapper is hovered, `--radius` updates and every item smoothly transitions to its new position simultaneously — again, with zero JS.

---

## 2. How is it used?

Apply `class="orbit-wrapper"` to the container, `class="orbit-center"` to the hub, and `class="orbit-item"` to each satellite. Pass each item's angle via an inline `--angle` custom property:

```html
<!-- Wrapper: sets shared --radius variable -->
<div class="orbit-wrapper">

  <!-- Central hub -->
  <div class="orbit-center">Hub</div>

  <!-- Orbiting items — each gets a unique --angle -->
  <div class="orbit-item" style="--angle: 0deg;">🏠</div>
  <div class="orbit-item" style="--angle: 60deg;">🔍</div>
  <div class="orbit-item" style="--angle: 120deg;">⚙️</div>
  <div class="orbit-item" style="--angle: 180deg;">🔔</div>
  <div class="orbit-item" style="--angle: 240deg;">💬</div>
  <div class="orbit-item" style="--angle: 300deg;">👤</div>

</div>
```

To add or remove items, simply change the number of `orbit-item` divs and distribute angles evenly (360° ÷ N items). No JavaScript array maps, no `querySelectorAll` loops.

**Customisation via CSS variables:**

| Variable | Default | Effect |
|---|---|---|
| `--angle` | (required per item) | Angular position in degrees |
| `--radius` | `140px` | Orbit radius (increase for larger circles) |

---

## 3. Why is it useful?

### Performance: GPU-composited transforms, no JS layout thrash

Traditional radial menus require JavaScript to run a loop like:

```js
// Old approach — layout logic in JavaScript
items.forEach((el, i) => {
  const angle = (i / items.length) * 2 * Math.PI;
  el.style.left = Math.cos(angle) * radius + 'px';
  el.style.top  = Math.sin(angle) * radius + 'px';
});
```

This forces the browser to read layout geometry, compute coordinates, and write back to the DOM — a classic layout-thrash cycle that can cause jank. The CSS `sin()`/`cos()` approach removes JavaScript from the critical path entirely. The browser resolves the math during its own style recalculation pass, applies the `transform` on the **compositor thread**, and never touches the main-thread layout.

### Developer Experience: one property, zero scripts

Adding a 7th item requires one line of HTML:

```html
<div class="orbit-item" style="--angle: 51.4deg;">⭐</div>
```

No JavaScript file to edit, no re-initialisation, no module to import. A designer can add items directly in a CMS or static HTML template.

### Fits EaseMotion CSS's philosophy

EaseMotion CSS is built on the principle that animation and layout logic belong in stylesheets, not scripts. The `sin()`/`cos()` orbit pattern is a direct embodiment of this: spatial math that was historically only expressible in JavaScript is now native to CSS, delivering a smaller bundle, better separation of concerns, and smoother composited animations.

---

## Browser Support

`sin()` and `cos()` in CSS are part of **CSS Values Level 4 Trigonometric Functions** (Baseline 2023).

| Browser | First supported version |
|---|---|
| Chrome / Edge | 111+ |
| Firefox | 108+ |
| Safari | 15.4+ |

---

## Files

- `demo.html` — self-contained, open directly in any modern browser
- `style.css` — full component stylesheet with extensive inline comments
- `README.md` — this file
