# Morph Shape Animation

**Category:** Animation — 2D Shapes & Layout  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-morph/`

---

## 1. What does this do?

The **Morph Shape Animation** gallery showcases highly fluid, hardware-accelerated shape transformations built purely in HTML and CSS. By manipulating the browser's native **8-value `border-radius`** coordinate property (`border-radius: top-left top-right bottom-right bottom-left / top-left-y top-right-y bottom-right-y bottom-left-y;`) inside a CSS `@keyframes` cycle, standard rectangular elements morph seamlessly into organic liquid shapes or distinct geometric forms without Jagged edges or canvas rendering overhead.

### The Morphing Shape Studio showcases three distinct visual categories:

1. **The Organic Liquid Blob (`.ease-morph-blob`):** A continuous, water-like fluid morphing shape that cycles endlessly through 4 custom asymmetric border configurations. Perfect for backdrop ambient glow spots or decorative graphic frames.
2. **The Geometric Shifter (`.ease-morph-shifter`):** A structural morphing component that transitions cleanly through five distinct geometric shapes (Squircle → Circle → Organic Leaf → Arch Dome → Droplet Shield). It uses keyframe percentage ranges to pause the animation on each shape, giving the viewer time to parse each clean state.
3. **The Elastic Hover Card (`.ease-morph-elastic`):** An input-triggered interactive button that morphs dynamically when hovered, focused, or pressed. It couples shape deforming with a custom spring timing curve `cubic-bezier(0.175, 0.885, 0.32, 1.25)` to create a highly tactile, physical rebound effect.

---

## 2. How is it used?

To integrate this contribution into your project, copy the following structure and styling details:

### HTML Structure Blueprint

```html
<!-- Showcase 1: Continuous Organic Fluid Blob -->
<div class="ease-shape-canvas">
  <div class="ease-blob-ambient"></div>
  <div class="ease-morph-blob">
    <div class="ease-blob-core">LQD</div>
  </div>
</div>

<!-- Showcase 2: Phase-Stepping Geometric Shifter -->
<div class="ease-shape-canvas">
  <div class="ease-morph-shifter">
    <div class="ease-shifter-core">
      <div class="ease-shifter-dot"></div>
    </div>
  </div>
</div>

<!-- Showcase 3: Input-Triggered Elastic Hover Card -->
<div class="ease-studio-card ease-studio-card--interactive" tabindex="0">
  <div class="ease-shape-canvas">
    <div class="ease-morph-elastic">
      <div class="ease-elastic-eye">
        <div class="ease-elastic-pupil"></div>
      </div>
    </div>
  </div>
</div>
```

### Essential CSS Keyframes

The fluid and geometric animations leverage custom `@keyframes` to transition shape coordinates cleanly:

```css
/* Shape 1: Liquid Blob Keyframes */
@keyframes morph-blob {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;
  }
  50% {
    border-radius: 30% 70% 70% 30% / 50% 60% 40% 50%;
  }
  75% {
    border-radius: 70% 30% 52% 48% / 37% 40% 60% 63%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

/* Shape 2: Geometric Shifter Keyframes (with 15% pauses per shape) */
@keyframes morph-shift {
  /* Soft Squircle Pause */
  0%,
  15% {
    border-radius: 25% 25% 25% 25%;
    transform: rotate(0deg);
  }
  /* Perfect Circle Pause */
  25%,
  35% {
    border-radius: 50%;
    transform: rotate(45deg);
  }
  /* Organic Leaf Pause */
  45%,
  55% {
    border-radius: 0% 100% 0% 100%;
    transform: rotate(90deg);
  }
  /* Arch Dome Pause */
  65%,
  75% {
    border-radius: 50% 50% 0 0;
    transform: rotate(180deg);
  }
  /* Droplet Shield Pause */
  85%,
  95% {
    border-radius: 50% 50% 50% 0;
    transform: rotate(270deg);
  }
  /* Loop Return */
  100% {
    border-radius: 25% 25% 25% 25%;
    transform: rotate(360deg);
  }
}
```

---

## 3. Why is it useful?

Geometric structural transitions and organic morphing effects make digital interfaces feel responsive, fluid, and alive.

### Key Benefits:

1. **Hardware-Accelerated Fluid Performance:**
   Animates composited properties (`border-radius`, `transform`, `opacity`) directly on the GPU, avoiding costly main-thread layout recalculations or paint triggers. This yields buttery smooth 60+ FPS animations even on lower-end devices, unlike canvas or SVG path-morph JS scripts.

2. **Clean HTML & CSS Integration:**
   Zero external scripts, zero runtime libraries, and zero overhead. The animations work instantly upon page load before scripts are parsed and executed, improving Time to Interactive metrics and layout stability.

3. **Exposed Design Customization Tokens:**
   Exposes precise, semantic CSS custom properties in the `:root` scope for rapid custom tailoring:
   - `--ease-morph-blob-speed` (cycles duration control)
   - `--ease-morph-shift-speed` (transition duration control)
   - `--ease-morph-elastic-speed` (tactile reaction speed)
   - Color bounds variables (e.g. `--blob-color-start`, `--shifter-color-start`, `--elastic-color-start`).

4. **Complete Accessibility Standards:**
   - **Reduced Motion Support:** Respects system user preferences via `@media (prefers-reduced-motion: reduce)`, instantly halting endless loops, rotations, and deforms, replacing them with clean static borders.
   - **Keyboard Tabbing Support:** Elastic card structures utilize explicit `tabindex="0"` bindings and `:focus-within` selectors to ensure keyboard-only users trigger high-fidelity morphing deforms on tab focuses.
   - **Semantic Segregations:** Strictly hides decorative structural center dots and rings using `aria-hidden="true"`, ensuring screen readers focus purely on actual textual data.
