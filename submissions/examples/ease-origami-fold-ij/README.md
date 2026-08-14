# Origami Fold

A paper square folds cleanly in half along a center crease, rotating each half toward the viewer.

## How is it used?

The paper is two halves whose shared `transform-origin` sits on the center crease. A `.folded` class rotates each half `178deg` around the Y axis with a snappy cubic-bezier:

```css
.half-left {
  transform-origin: 100% 50%;
  transition: transform 0.7s cubic-bezier(0.45, 0.05, 0.35, 1);
}

.paper.folded .half-left {
  transform: rotateY(178deg);
}
```

## Why is it useful?

Folding is the core of many menu/modal reveals: split an element into halves, pivot each on the shared edge, and keep `perspective` on the parent. The `preserve-3d` children give it a genuine 3D hinge instead of a flat squash.
