# ease-view-morph-card

A zero-dependency UI component that natively morphs a compact card into a full-screen layout using the browser's **View Transitions API** — no Framer Motion, no GSAP, no FLIP math.

---

## 1. What does this do?

`ease-view-morph-card` demonstrates a **shared-element view transition**: a small `300 × 200 px` card seamlessly expands to fill the viewport (anchored at `inset: 2rem`) with a smooth, GPU-accelerated morph of its position, dimensions, and border-radius.

The effect is achieved by assigning a `view-transition-name` to the card element in CSS. When `document.startViewTransition()` is called, the browser:

1. Captures a screenshot of the card in its current (collapsed) state.
2. Runs the DOM update — toggling the `.expanded` CSS class.
3. Captures a screenshot of the card in its new (expanded) state.
4. Cross-fades and interpolates the element's geometry between the two snapshots on the GPU compositor thread — completely outside the JavaScript main thread.

Clicking the card (or pressing **Escape**) reverses the transition, morphing the full-screen layout back into the small card.

---

## 2. How is it used?

### CSS — declare `view-transition-name`

```css
/* Give the morphing element a unique name */
.ease-morph-card {
  view-transition-name: ease-morph-card-1;

  /* Base (collapsed) state */
  width: 300px;
  height: 200px;
  border-radius: 16px;
  background: #1e293b;
  cursor: pointer;
}

/* Expanded (full-screen) state */
.ease-morph-card.expanded {
  position: fixed;
  inset: 2rem;
  width: auto;
  height: auto;
  z-index: 50;
  cursor: default;
}

/* Fine-tune the morph animation duration and easing */
::view-transition-old(ease-morph-card-1),
::view-transition-new(ease-morph-card-1) {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### JavaScript — trigger with `document.startViewTransition`

```js
function morphCard() {
  if (!document.startViewTransition) {
    // Graceful fallback for browsers without View Transitions support
    document.getElementById('morphCard').classList.toggle('expanded');
    return;
  }

  document.startViewTransition(() => {
    document.getElementById('morphCard').classList.toggle('expanded');
    document.body.classList.toggle('has-expanded-card');
  });
}
```

That is all the JavaScript required. The browser calculates and renders the
animation entirely from the CSS `view-transition-name` declaration and the
`::view-transition-old` / `::view-transition-new` pseudo-element rules.

---

## 3. Why is it useful?

### Replaces heavy JS animation libraries

Traditional card-expand animations require one of the following approaches:

| Approach | What it involves |
|---|---|
| **Framer Motion** (`layoutId`) | React-only, ~40 KB runtime, re-renders on every frame |
| **GSAP** | Manual `to()` calls for every property (x, y, width, height, border-radius) |
| **FLIP technique** | Read → Invert → Play coordinate math in JS, `requestAnimationFrame` loops |

All three run on the JavaScript main thread and can be blocked by long tasks,
causing jank on lower-end devices.

### Browser engine takes over

The View Transitions API offloads the entire morph to the browser's compositor:

- **No JS animation loops.** `requestAnimationFrame` is not called.
- **GPU accelerated.** The transition runs on the compositor thread, independent of JS and layout.
- **Automatic geometry interpolation.** The browser interpolates `x`, `y`, `width`, `height`, and `border-radius` between the two captured snapshots without any manual FLIP math.
- **Accessible by default.** Adding `@media (prefers-reduced-motion: reduce)` disables all view-transition animations in a single CSS block.
- **Progressive enhancement.** The `if (!document.startViewTransition)` guard ensures the component still works (without animation) on Safari 17 and Firefox, which do not yet support the SPA View Transitions API.

### Browser support

| Browser | Version |
|---|---|
| Chrome / Chromium | 111+ |
| Edge | 111+ |
| Safari | 18+ |
| Opera | 97+ |
| Firefox | Not yet (polyfill available) |

---

## Files

| File | Purpose |
|---|---|
| `style.css` | Component styles: base card, expanded state, view-transition pseudo-elements, overlay, accessibility |
| `demo.html` | Self-contained interactive demo (links to `style.css`) |
| `README.md` | This file |

---

## Accessibility

- `aria-expanded` is toggled on the card element.
- **Keyboard**: `Enter` / `Space` opens; `Escape` closes.
- `prefers-reduced-motion: reduce` disables all view-transition and CSS animations.
- Focus management: focus moves to the close button when expanded, and returns to the card when collapsed.

## Zero Dependencies

Pure CSS + semantic HTML. The only JavaScript is the two-line `document.startViewTransition()` trigger shown above. No build step, no npm install, no framework required.
