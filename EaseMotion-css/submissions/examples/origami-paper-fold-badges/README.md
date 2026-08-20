# Origami Paper Fold Badges & Chips

A pure CSS implementation of smooth, accessible, and performant badges and chips featuring an **Origami Paper Fold** aesthetic — inspired by the art of Japanese paper folding.

## What it does

Provides three types of components, all styled with a handcrafted paper feel:

- **Status Badges** — Compact labels with a folded corner dog-ear that expands on hover, giving the illusion of a real paper tag being lifted.
- **Action Chips** — Interactive button chips with a fold crease line that reveals along the left edge on hover, plus a folded corner on the right.
- **Ribbon Badges** — Arrow-shaped ribbon banners using `clip-path` that subtly widen their arrowhead point on hover.

All components use `@media (prefers-color-scheme: dark)` for automatic dark mode, warm muted tones to reinforce the paper texture feel, and `transform: translateZ(0)` / `will-change` for hardware-accelerated transitions.

## How to use it

1. Include the styles from `style.css` in your project.

**Status Badge:**
```html
<span class="badge badge-blue" role="status" aria-label="Status: Info">Info</span>
```

**Action Chip:**
```html
<button class="chip chip-green" aria-label="Save item">
  <span class="chip-icon" aria-hidden="true">✓</span> Save
</button>
```

**Ribbon Badge:**
```html
<span class="ribbon ribbon-red" role="note">New</span>
```

## Available colour variants

| Class suffix | Colour |
|---|---|
| `-red` | Red / Urgent |
| `-blue` | Blue / Info |
| `-green` | Green / Success |
| `-yellow` | Yellow / Pending |
| `-purple` | Purple / Beta |

## Why it fits EaseMotion CSS

This component delivers a distinctive, premium visual pattern — origami paper folding — using only CSS `clip-path`, `pseudo-elements`, `box-shadow` layering, and cubic-bezier spring transitions. It requires zero JavaScript, respects `prefers-reduced-motion` and `prefers-color-scheme`, and uses `will-change` / `translateZ(0)` to keep animations on the GPU compositor thread for optimal performance.
