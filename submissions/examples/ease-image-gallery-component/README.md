# Modern Image Gallery Component

**Category:** Components — Media & Display  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-image-gallery-component/`

---

## 1. What does this do?

The **Modern Image Gallery Component** renders a fully responsive image grid using CSS `auto-fill` columns. It includes:

- **Auto-fill CSS Grid** — columns automatically fill available space with a minimum card width, collapsing gracefully across screen sizes.
- **Featured card** — the first card spans 2 columns × 2 rows, creating a natural visual anchor (masonry-inspired hierarchy using `grid-column: span 2; grid-row: span 2`).
- **Gradient art placeholders** — every card uses a rich multi-stop CSS `linear-gradient` as its image. When you have real images, simply swap the inline `--art-gradient` for an `<img>` tag or `background-image: url(...)`.
- **Hover overlay + caption slide** — a dark gradient fade reveals the caption block, which slides upward on hover via `transform` + `opacity`.
- **Zoom art on hover** — the art background scales from `scale(1)` to `scale(1.06)` for a subtle kinetic feel.
- **Corner badge** — an emoji badge pops in (scale + rotate reveal) from the top-right corner on hover.
- **Staggered entrance** — 10 cards animate in with `0.06s` incremental `nth-child` delays.
- **Mobile-always-visible captions** — at `≤560px`, overlays and captions are permanently visible (no hover state on touch screens).

---

## 2. How is it used?

### Basic Card

```html
<section class="ease-gallery" aria-label="Gallery items">
  <!-- Standard card -->
  <figure
    class="ease-gallery-item"
    role="img"
    aria-label="Aurora Horizon — 3D Art"
    style="--art-gradient: linear-gradient(135deg, #042830 0%, #0891b2 70%, #67e8f9 100%);"
  >
    <div class="ease-gallery-art"></div>
    <div class="ease-gallery-badge" aria-hidden="true">🎨</div>
    <div class="ease-gallery-overlay" aria-hidden="true"></div>

    <figcaption class="ease-gallery-caption">
      <span
        class="ease-gallery-chip"
        style="--chip-color:#06b6d4; --chip-rgb:6,182,212;"
        >3D Art</span
      >
      <div class="ease-gallery-name">Aurora Horizon</div>
      <div class="ease-gallery-meta">Rendered with Blender 4.0</div>
    </figcaption>
  </figure>
</section>
```

### Featured Card (2 × 2 span)

Add the modifier class `ease-gallery-item--featured` to the first item:

```html
<figure class="ease-gallery-item ease-gallery-item--featured" ...>...</figure>
```

### Using a Real Image

Replace the `ease-gallery-art` div with an actual image and set `object-fit`:

```html
<figure class="ease-gallery-item" ...>
  <img
    class="ease-gallery-art"
    src="photo.jpg"
    alt="Descriptive alt text"
    style="object-fit: cover; width: 100%; height: 100%;"
  />
  ...
</figure>
```

### Class Reference

| Class                          | Role                                                           |
| ------------------------------ | -------------------------------------------------------------- |
| `.ease-gallery`                | Outer `<section>` — CSS Grid container                         |
| `.ease-gallery-item`           | One `<figure>` card — overflow-hidden, staggered animation     |
| `.ease-gallery-item--featured` | Modifier — `grid-column: span 2; grid-row: span 2`             |
| `.ease-gallery-art`            | Full-bleed art/image block — scales on hover                   |
| `.ease-gallery-overlay`        | Dark gradient fade-in overlay                                  |
| `.ease-gallery-caption`        | `<figcaption>` — slides up on hover                            |
| `.ease-gallery-chip`           | Category tag — uses `--chip-color` / `--chip-rgb` custom props |
| `.ease-gallery-name`           | Card title                                                     |
| `.ease-gallery-meta`           | Card subtitle / metadata                                       |
| `.ease-gallery-badge`          | Corner emoji badge — rotates in on hover                       |

### Per-card Theming

Set `--art-gradient` on `.ease-gallery-item` and `--chip-color` / `--chip-rgb` on `.ease-gallery-chip` inline:

```html
<figure
  class="ease-gallery-item"
  style="--art-gradient: linear-gradient(135deg, #6c4ac5 0%, #a78bfa 100%);"
>
  ...
  <span
    class="ease-gallery-chip"
    style="--chip-color:#a78bfa; --chip-rgb:167,139,250;"
    >Branding</span
  >
</figure>
```

---

## 3. Why is it useful?

1. **Zero JavaScript** — The entire hover reveal, staggered entrance, zoom, and badge pop are driven purely by CSS `transition`, `animation`, and `nth-child` pseudo-selectors. No IntersectionObserver, no event listeners.

2. **GPU-composited animations** — Every moving property (`transform`, `opacity`) lives on the compositor thread, guaranteeing smooth 60 FPS without layout recalculation.

3. **Self-contained per-card theming** — Inline CSS custom properties (`--art-gradient`, `--chip-color`, `--chip-rgb`) let each card carry its own visual identity without additional modifier classes or specificity conflicts. Easily extend the palette without touching the stylesheet.

4. **Drop-in real images** — The gradient `ease-gallery-art` block is a plug-in placeholder. Replace it with an `<img>` or a CSS `background-image: url(...)` and the hover effects, overlays, and responsive grid continue to work unchanged.

5. **Three-tier responsive out of the box** — `auto-fill` with `minmax(260px, 1fr)` gives fluid desktop columns. The `900px` breakpoint disables the double-row featured span. The `560px` mobile breakpoint collapses to a single column and makes all captions always-visible (touch-friendly).

6. **Accessible markup** — Uses semantic `<figure>` / `<figcaption>`, `role="img"`, and `aria-label` on each card. Decorative overlays and badges carry `aria-hidden="true"`. Respects `prefers-reduced-motion` by disabling all animations and transitions.
