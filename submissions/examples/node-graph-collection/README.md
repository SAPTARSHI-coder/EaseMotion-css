# Animated Node Graph Connector Collection

A pure CSS/SVG animated node-and-edge graph component for network diagrams, dependency maps, and relationship visualisations. Edges draw in on mount, active edges flow with animated dashes, nodes pop in with a stagger, live nodes pulse, and hovering a node highlights its connected edges while dimming unrelated nodes.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Mount | Edges draw in via `stroke-dashoffset`; nodes pop in staggered |
| Active edge | Traveling dash animates along the path to show data flow |
| Hover node | Node scales + glows; connected edges highlight amber; others dim |
| Pulse node | Repeating `drop-shadow` glow marks "live" or "selected" nodes |

---

## Files

```
submissions/examples/node-graph-collection/
├── demo.html    ← self-contained SVG demo (microservices graph)
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-graph` | SVG container; fade + scale entrance via `@keyframes ease-graph-mount` |
| `ease-graph-edge` | SVG path/line; draws in via `stroke-dashoffset` on mount |
| `ease-graph-edge-active` | Traveling dash overlay; `@keyframes ease-edge-flow` loops indefinitely |
| `ease-graph-edge-highlight` | Add on node hover to highlight connected edges |
| `ease-graph-node` | SVG circle; hover scale + glow; pop-in on mount |
| `ease-graph-node-highlight` | Add on hover to mark the focused node (amber fill) |
| `ease-graph-node-pulse` | Repeating `drop-shadow` pulse ring for live/selected nodes |

---

## Usage

```html
<svg class="ease-graph" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">

  <!-- Static edge -->
  <path class="ease-graph-edge"
        d="M160,100 L270,60"
        data-from="gateway" data-to="cache" />

  <!-- Active flow edge -->
  <path class="ease-graph-edge ease-graph-edge-active"
        d="M160,100 L270,160"
        data-from="gateway" data-to="auth" />

  <!-- Regular node -->
  <circle class="ease-graph-node" cx="295" cy="160" r="26" data-id="auth" />

  <!-- Live / selected node -->
  <circle class="ease-graph-node ease-graph-node-pulse" cx="150" cy="100" r="26" data-id="gateway" />

</svg>
```

### Hover highlight wiring (minimal JS)

```js
nodeGroups.forEach(group => {
  const circle = group.querySelector('.ease-graph-node');
  const nodeId = circle.dataset.id;

  group.addEventListener('mouseenter', () => {
    circle.classList.add('ease-graph-node-highlight');
    edges.forEach(edge => {
      if (edge.dataset.from === nodeId || edge.dataset.to === nodeId) {
        edge.classList.add('ease-graph-edge-highlight');
      }
    });
  });

  group.addEventListener('mouseleave', () => {
    circle.classList.remove('ease-graph-node-highlight');
    edges.forEach(edge => edge.classList.remove('ease-graph-edge-highlight'));
  });
});
```

---

## Animation Details

### Edge draw-in — `ease-edge-draw`
```css
.ease-graph-edge {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: ease-edge-draw 700ms cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes ease-edge-draw {
  to { stroke-dashoffset: 0; }
}
```

### Active edge flow — `ease-edge-flow`
```css
.ease-graph-edge-active {
  stroke-dasharray: 10 14;
  animation: ease-edge-flow 1.4s linear infinite;
}
@keyframes ease-edge-flow {
  to { stroke-dashoffset: -48; }
}
```

### Node pop-in — `ease-node-popin`
```css
@keyframes ease-node-popin {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
```

### Node pulse — `ease-node-pulse`
```css
@keyframes ease-node-pulse {
  0%, 100% { filter: drop-shadow(0 0 0px var(--ease-graph-pulse-color)); }
  50%       { filter: drop-shadow(0 0 14px var(--ease-graph-pulse-color)); }
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-graph-node-fill:            #6366f1;
  --ease-graph-edge-active:          #6366f1;
  --ease-graph-node-highlight-fill:  #f59e0b;
  --ease-graph-pulse-color:          rgba(99,102,241,0.4);
}
```

Override to match any brand palette or to use distinct colours per node type.

---

## Accessibility

- `role="img"` + `aria-label` on the SVG container
- Node `data-id` and edge `data-from`/`data-to` attributes for JS wiring
- `prefers-reduced-motion` disables all animations and transitions; `stroke-dashoffset` resets to `0` so edges are always visible

---

## Browser Support

Chrome 88+, Firefox 85+, Safari 14+. Uses `stroke-dashoffset` animation, SVG `filter`, `transform-box: fill-box`, and CSS custom properties — all widely supported.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#18927](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/18927)