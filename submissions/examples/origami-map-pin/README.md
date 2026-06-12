# Unfolding Origami Map Pin

## What it does

Location map pins that **unfold like origami paper** on hover, revealing a rich detail card (name, rating, status, CTA button). The card appears to emerge from the pin tip with a 3D perspective fold animation. Child elements inside the card stagger in sequentially for a layered reveal effect.

## Animations & Techniques

- **`scaleY` + `rotateX` Composite Transform**: The card opens from `scaleY(0) rotateX(-60deg)` to `scaleY(1) rotateX(0deg)` — simulating a flat folded paper unfolding upward in 3D perspective space.
- **`transform-origin: 50% 100%`**: Anchors the unfolding animation to the bottom of the card (closest to the pin tip), making it appear to hinge open from that point.
- **Staggered Child Animations**: `.card-header`, `.card-stats`, and `.card-btn` each have increasing `transition-delay` (0.1s → 0.18s → 0.24s) so the content populates line-by-line after the card opens.
- **Spring Easing**: All transitions use `cubic-bezier(0.34, 1.56, 0.64, 1)` for an organic overshoot that feels physical.
- **Pin Bounce**: The SVG pin itself `translateY(-6px) scale(1.08)` on hover, with a drop-shadow deepening to feel like it's lifting off the map.
- **Shadow Pulse**: An `::after` pseudo-element casts an animated soft shadow beneath the pin tip.

## Folder structure

```
animations/origami-map-pin/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS

- Demonstrates advanced multi-property transition composition (scale + rotate + translate simultaneously).
- Showcases `transform-origin` as a design tool — the single most important property for making animations feel anchored and physical.
- Includes `prefers-reduced-motion` and keyboard focus support.
