# Ease 3D Cube Tabs — Product Catalog

## Description
Unlike a typical flip-tabs pattern where individual content panels rotate independently, this component treats all three tab panels as literal **faces of one 3D cube**. Selecting a tab rotates the entire cube on its Y-axis to bring that face to the front — visually similar to a product spinning on a display pedestal, which fits a product catalog context especially well. Pure CSS, zero JavaScript.

## How it's structurally different from a standard flip
Standard flip-tab patterns animate each panel individually (`rotateY(90deg) → 0deg` per panel, with `backface-visibility` hiding the inactive one). Here, all three faces are positioned in fixed 3D space around a single shared cube element using `translateZ()` + `rotateY()` offsets (0°, 90°, 180°) — they never move relative to each other. Only the parent `.cube` element itself rotates, driven by which radio input is checked. This is a genuine cube carousel, not three independently-flipping panels.

## Features
- True 3D cube: 3 faces positioned via `rotateY()` + `translateZ()`, forming an actual box in 3D space
- Selecting a tab rotates the whole cube (not the individual panel) to bring that face forward
- Product catalog demo content: Details, Specs, Reviews
- Fully keyboard accessible (native radio inputs, `role="tablist"`/`"tab"`/`"tabpanel"`)
- Responsive (cube stage height increases on narrow viewports to fit reflowed content)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-cube-tabs" role="tablist" aria-label="Product information">
  <input type="radio" name="cube-tab" id="ctab-details" class="tab-input" checked />
  <input type="radio" name="cube-tab" id="ctab-specs" class="tab-input" />
  <input type="radio" name="cube-tab" id="ctab-reviews" class="tab-input" />

  <div class="tab-list">
    <label for="ctab-details" class="tab-label" role="tab">Details</label>
    <label for="ctab-specs" class="tab-label" role="tab">Specs</label>
    <label for="ctab-reviews" class="tab-label" role="tab">Reviews</label>
  </div>

  <div class="cube-stage">
    <div class="cube">
      <div class="cube-face face-details" role="tabpanel">...</div>
      <div class="cube-face face-specs" role="tabpanel">...</div>
      <div class="cube-face face-reviews" role="tabpanel">...</div>
    </div>
  </div>
</div>
```
Each face needs its `rotateY()` offset to match its position in the tab order (0°, 90°, 180° for a 3-face cube), and the corresponding `#idN:checked ~ .cube-stage .cube { transform: rotateY(-N * 90deg); }` rule to rotate the cube to face it.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--cube-size` | `320px` | Cube width/height |
| `--spin-duration` | `0.9s` | Cube rotation duration |
| `--spin-easing` | `cubic-bezier(0.65, 0, 0.35, 1)` | Rotation timing function |
| `--accent` | `#e11d48` | Active tab / title accent color |
| `--radius` | `18px` | Face corner rounding |

## Files
- `demo.html` — live working example (product Details/Specs/Reviews cube)
- `style.css` — component styles and cube rotation logic
- `README.md` — this file