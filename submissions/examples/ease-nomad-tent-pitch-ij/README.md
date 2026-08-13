# Nomad Tent Pitch

A tent that pitches itself: poles hinge upright, the fabric snaps up, and the entrance flaps fold open — plus a flickering campfire.

## How is it used?

The pitch is a sequence of staggered transitions on different elements:

```css
.tent.up .pole-l { transform: rotate(-38deg); }
.tent.up .pole-r { transform: rotate(38deg); }
.tent.up .fabric {
  transform: scaleY(1); /* starts at scaleY(0), transition-delay 0.35s */
}
.tent.up .flap-l { transform: rotate(12deg); /* delay 0.7s */ }
```

Each part delays its start (`0.35s`, `0.7s`) so the scene unfolds in order, while the poles use a springy overshoot curve to sell the snap of a tent rod.

## Why is it useful?

Staggered transition-delays turn one class toggle into a full sequence — the same technique runs multi-step onboarding reveals, chained accordions, and "assembly" animations. Mixing different easings per step (overshoot for structure, ease for fabric) keeps each material feeling right.
