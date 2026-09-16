# CSS Morphing Blob Animation

This directory contains a standalone, advanced CSS-only example showcasing how to build an **organic morphing blob animation** using advanced CSS border-radius coordinates, continuous rotation, and layered refraction overlays.

---

## 🌟 What This Demo Demonstrates

1. **Organic Shape Morphing**:
   Continuous fluid shape shifts created using the 8-point `border-radius` property, avoiding the uniformity of basic circular or square elements.
2. **Layered Refraction Depth**:
   Overlaying a glassmorphic refractive card (using `backdrop-filter: blur()`) directly on top of the moving gradient blobs to generate high-end visual depth.
3. **Multi-Directional Motion**:
   Staggering multiple blobs with different sizes, gradient colors, and opposing rotation directions (clockwise vs. counter-clockwise) to mimic complex liquid currents.
4. **Pure CSS Composited Performance**:
   Running animations entirely on the browser's compositor thread using GPU-friendly properties (`border-radius` and `transform: rotate() scale()`) to prevent main-thread lag.
5. **Reduced Motion Accessibility**:
   Gracefully handling user operating system motion preferences by freezing rotations and complex morphing shape cycles to prevent vestibular strain.

---

## 📐 Creating Organic Shapes in CSS

A standard circle is created using `border-radius: 50%`. To create asymmetric organic drops, we specify distinct horizontal and vertical radii for each of the four corners using the 8-value slash syntax:

```css
border-radius: [top-left-h] [top-right-h] [bottom-right-h] [bottom-left-h] /
  [top-left-v] [top-right-v] [bottom-right-v] [bottom-left-v];
```

Example organic shape:

```css
border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
```

### Animating the Shapes

By mapping these 8 values to different stages of a `@keyframes` loop, the corners shift boundaries, making the shape appear to stretch, flow, and morph like liquid.

---

## 🔄 Rotation & Scaling Mechanics

To enhance the fluid flow:

- **Clockwise Rotation**: The main blob rotates clockwise from `0deg` to `240deg` over a `14s` loop.
- **Counter-Clockwise Rotation**: The secondary background blob rotates counter-clockwise from `0deg` to `-240deg` over an `18s` loop, creating complex intersecting lines.
- **Subtle Scale Breathing**: We oscillate scale slightly (from `0.95` to `1.05`) at keyframe milestones to give the blob a breathing/organic life-like quality.

---

## ♿ Accessibility & prefers-reduced-motion

For users with vestibular conditions or sensitivity to motion, the constant shifting, scaling, and rotating of shapes can be disorienting. We handle this immediately using system-level media queries:

```css
@media (prefers-reduced-motion: reduce) {
  .blob-glow,
  .blob-secondary,
  .blob-main,
  .blob-glass-overlay,
  .floating-badge {
    animation: none !important;
    transform: none !important;
  }
  .blob-main,
  .blob-glass-overlay {
    border-radius: 50% !important;
  }
}
```

In reduced-motion mode:

1. All rotations and scaling oscillations are stopped.
2. The complex border-radius shifting keyframes are bypassed.
3. Blobs fall back to a stable, elegant, static presentation.

---

## 🌐 Browser Compatibility Considerations

- **`border-radius` & `transform`**: Supported by 100% of modern browsers (Chrome, Edge, Firefox, Safari, Opera).
- **`backdrop-filter`**: Supported natively in all modern browsers (Safari requires `-webkit-backdrop-filter` prefix, which is fully included in the stylesheet).
- **Performance**: Utilizing `will-change: border-radius, transform` signals browser rendering engines to promote the elements to their own GPU layers, ensuring 60fps rendering even on low-powered mobile devices.
