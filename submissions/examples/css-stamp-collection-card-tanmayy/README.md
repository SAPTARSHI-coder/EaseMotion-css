# CSS Stamp Collection Card

A pure-CSS implementation of a vintage postage stamp. It creates hyper-realistic perforated edges using `radial-gradient` pegboard masking and features a custom CSS-drawn postmark overlay, all without requiring any inline SVGs or external background images for the borders.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a vintage postage stamp. The edges of the stamp perfectly mimic real paper perforations (the small semi-circular cutouts). The stamp includes an inner frame, a designated image area, typography scaled for denomination, and a vintage postmark (cancellation mark) overlay. When hovered, the stamp gently rotates and lifts off the page with a realistic drop-shadow.

### 2. How is it used?

The implementation uses an elegant CSS layering trick. It wraps the `.stamp-card` in a `.stamp-wrapper` (which handles the `drop-shadow`). Inside the card, two pseudo-elements create the perforated shape:

```html
<div class="stamp-wrapper">
  <article class="stamp-card">
    <div class="stamp-inner">
      <!-- Stamp Content Here -->
    </div>
  </article>
</div>
```

**The Perforation Trick:**
1. The `.stamp-card::before` element renders a repeating `radial-gradient`. This draws the solid paper color *everywhere except* in a grid of transparent holes (a pegboard).
2. The `.stamp-card::after` element renders a solid block of color with `inset: 12px`. This perfectly covers all the *internal* holes from the pegboard layer, leaving only the outer perimeter of transparent holes exposed on the edges.

**Customization via CSS Properties:**
You can adjust the size and spacing of the perforations via root variables:

```css
:root {
  --stamp-bg: #fdfbf7;      
  --hole-size: 8px;         /* Diameter of the perforations */
  --hole-spacing: 24px;     /* Distance between perforations */
}
```

### 3. Why is it useful?

Achieving decorative, cut-out borders (like tickets, receipts, or stamps) is traditionally done using SVG `mask-image` or slicing PNG backgrounds. These approaches are often rigid, difficult to resize, and require extra HTTP requests. By utilizing mathematically aligned CSS `radial-gradient` patterns combined with the `inset` property, we create a fully fluid, infinitely scalable perforated border. Applying `filter: drop-shadow` to the parent wrapper ensures the shadow perfectly contours around the transparent cutouts, achieving a photorealistic physical aesthetic purely in CSS.
