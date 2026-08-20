# CSS `:has()` Powered Dynamic Bento Grid

## Abstract

This submission introduces a zero-JavaScript, GPU-accelerated Bento Grid layout using modern CSS specifications. By taking advantage of the CSS `:has()` relational pseudo-class, the grid parent element operates as a reactive state observer. When user interaction occurs on any descendant card, the grid dynamically reconfigures column track sizes and modifies sibling visual presentation without reliance on JavaScript event handlers or UI component state.

## The `:has()` Relational Selector

Historically, CSS parent selectors could not respond to descendant state changes without JS interaction listeners. With the inclusion of the `:has()` relational selector, structural container elements can observe state changes in child components:

```css
/* Parent grid detects hover state on any child bento card */
.ease-bento-grid:has(.ease-bento-card:hover) .ease-bento-card {
  filter: blur(4px);
  opacity: 0.4;
  transform: scale(0.98);
}
```

When a user hovers over a `.ease-bento-card`, `.ease-bento-grid:has(.ease-bento-card:hover)` evaluates to `true`. This allows the parent container to apply dimming, scaling down, and Gaussian blur to all child cards, while maintaining focus and elevated styling on the target card using specificity rules:

```css
.ease-bento-grid:has(.ease-bento-card:hover) .ease-bento-card:hover {
  filter: blur(0);
  opacity: 1;
  transform: scale(1.02);
  z-index: 10;
  border-color: #38bdf8;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}
```

## Grid Track Interpolation

In addition to state-driven visual modifications, `:has()` empowers dynamic layout track interpolation. By assigning column positional markers (`.ease-col-1`, `.ease-col-2`, `.ease-col-3`) to cards, the container alters its `grid-template-columns` definition dynamically:

```css
/* Shift column widths based on which column contains the hovered card */
.ease-bento-grid:has(.ease-col-1:hover) {
  grid-template-columns: 1.5fr 0.75fr 0.75fr;
}

.ease-bento-grid:has(.ease-col-2:hover) {
  grid-template-columns: 0.75fr 1.5fr 0.75fr;
}

.ease-bento-grid:has(.ease-col-3:hover) {
  grid-template-columns: 0.75fr 0.75fr 1.5fr;
}
```

Combined with `transition: grid-template-columns 0.5s cubic-bezier(0.4, 0, 0.2, 1);`, the grid seamlessly interpolates track dimensions from uniform sizing (`1fr 1fr 1fr`) to asymmetric expansion (`1.5fr 0.75fr 0.75fr`). This achieves responsive layout state mutation entirely within the browser's style calculation and render pipeline, delivering 60 FPS performance without client-side script evaluation.
