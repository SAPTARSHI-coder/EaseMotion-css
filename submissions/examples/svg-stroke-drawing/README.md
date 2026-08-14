# CSS SVG Stroke Drawing Animation

This directory contains a standalone, advanced CSS-only example showcasing how to build a **progressive SVG stroke drawing animation** using inline SVG vectors, CSS custom variables, keyframe stroke transformations, and a pure CSS interactive replay state hack.

---

## 🌟 What This Demo Demonstrates

1. **Progressive Stroke Drawing**:
   A visual reveal effect where vector lines are drawn onto the screen dynamically, mimicking hand-drawn vector art.
2. **Sequential Delay Staggering**:
   Triggering separate SVG path drawing animations in a strict time order (outer frame first, then geometric curves, then central core) to guide visual flow.
3. **Pure CSS Checkbox Replay Hack**:
   Using a hidden checkbox element and CSS selector state mapping (`:checked`) to let users trigger a complete animation restart on command without JavaScript.
4. **Composited GPU Performance**:
   Using hardware-accelerated animations (`stroke-dashoffset` and `opacity`) to ensure fluid 60fps vector transitions without reflowing the document.
5. **Reduced Motion Accessibility**:
   Handling OS-level motion reduction settings by presenting fully drawn SVGs instantly on page load.

---

## 📐 How SVG Stroke Drawing Works

The progressive line reveal effect is built upon two core CSS properties for vector paths:

### 1. `stroke-dasharray`

The `stroke-dasharray` property sets pattern lengths of dashes and spaces on a stroke:

```css
stroke-dasharray: 535;
```

By setting the dash length equal to the total path perimeter length, a single dash covers the entire shape. No dashes or gaps are visible; the shape looks fully drawn.

### 2. `stroke-dashoffset`

The `stroke-dashoffset` property controls where the dash pattern begins:

```css
stroke-dashoffset: 535;
```

By setting the offset equal to the path length, the entire single dash is pushed out of the visible viewport area. The shape appears completely invisible.

### 3. The Animation Keyframe

We animate `stroke-dashoffset` from the full path length back to `0`, pulling the dash back into view and simulating a progressive draw:

```css
@keyframes draw-path {
  from {
    stroke-dashoffset: var(--path-len);
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
```

---

## 🔄 Pure CSS Replay Selector Hack

To allow replaying the drawing animation without using any JavaScript, we use a hidden HTML checkbox (`<input type="checkbox" id="replay-toggle">`) and sibling selectors.

1. **Unchecked State**: Binds the default animation name `draw-path`.
2. **Checked State**: Toggles the animation name to `draw-path-alt` (an identical copy of the keyframe sequence).

```css
/* Default state */
.path-ring {
  animation-name: draw-path;
}

/* Checked state */
.replay-checkbox:checked ~ .hero-section .path-ring {
  animation-name: draw-path-alt;
}
```

Because the animation name changes when the user toggles the button, the browser's rendering engine resets the animation state and reruns the keyframes from $0\%$.

---

## ♿ Accessibility & prefers-reduced-motion

To prevent visual strain for users who have opted into motion-reduction settings on their operating systems:

```css
@media (prefers-reduced-motion: reduce) {
  .drawing-svg path,
  .drawing-svg circle {
    animation: none !important;
    stroke-dashoffset: 0 !important;
    opacity: 1 !important;
  }
  .replay-btn {
    display: none !important;
  }
}
```

In reduced-motion mode:

- All drawing animations are disabled.
- The `stroke-dashoffset` is locked at `0`, making the drawing instantly visible on page load.
- The replay button is hidden since no animations are executed.

---

## 🌐 Browser Compatibility & Considerations

- **`stroke-dasharray` and `stroke-dashoffset`**: Supported natively by all browsers (Chrome, Safari, Firefox, Edge, Opera) for modern vector paths.
- **Vector Path Length Auditing**: Path lengths were audited using vector dimensions:
  - Outer Circle (`r=85`): Length $\approx 535px$
  - Geometric Triangles: Length $\approx 430px$
  - Core Circle (`r=25`): Length $\approx 158px$
  - Inner Cross: Length $\approx 60px$
- **GPU Layering**: Utilizing `will-change: stroke-dashoffset, opacity` ensures path offsets are drawn on isolated GPU composition threads, avoiding rendering bottlenecks.
