# Confetti Bottom Sheet

A premium, medical-dashboard-themed bottom sheet modal containing an animated pure CSS confetti explosion particle system and soft neumorphic depth styles.

## 1. What does this do?
This component renders an interactive mobile-first bottom sheet overlay that slides up from the bottom of the viewport when triggered, immediately blasting a stream of colored confetti particles across the page.

## 2. How is it used?

Place the toggle checkbox at the root of your HTML layout, then configure the sheet overlay and container:
```html
<!-- Root inputs bindings -->
<input type="checkbox" id="sheet-toggle" class="ctrl-sheet-toggle" />

<!-- Bottom Sheet Overlay -->
<div class="sheet-overlay">
  <label for="sheet-toggle" class="sheet-backdrop-close" aria-label="Close"></label>
  
  <!-- Confetti Explosion deck (30 individual particle divs) -->
  <div class="confetti-blast">
    <div class="confetti-p p-1"></div>
    <div class="confetti-p p-2"></div>
    <!-- ... remaining particles p-3 to p-30 ... -->
  </div>

  <!-- Bottom Sheet container -->
  <div class="sheet-container" role="dialog" aria-labelledby="sheet-title" aria-modal="true">
    <div class="sheet-drag-handle">
      <span class="handle-bar neumorphic-recessed"></span>
    </div>
    
    <div class="sheet-content">
      <div class="success-badge neumorphic-extruded">
        <span class="badge-icon">✓</span>
      </div>
      <h3 id="sheet-title">Transaction Approved</h3>
      <label for="sheet-toggle" class="btn-sheet-close neumorphic-extruded">DONE</label>
    </div>
  </div>
</div>
```

To bind a trigger button anywhere in your billing card to slide up the sheet, use a label:
```html
<label for="sheet-toggle" class="btn-checkout-trigger neumorphic-extruded">
  COMPLETE TRANSACTION
</label>
```

## 3. Why is it useful?
Bottom sheets are widely used to display quick summaries and alerts on mobile devices. Standard implementation depends heavily on large JavaScript libraries to calculate particle trajectories and control overlays.

This component fits EaseMotion's philosophy by:
- **Pure CSS Particle Engine:** Simulates a random physics-based confetti explosion by assigning unique coordinates (`--tx`, `--ty`, `--rot`, `--sc`) and timing delays to 30 individual markup elements, powered entirely by a single `@keyframes` rule.
- **No-JS Modal Operations:** Coordinates overlays and container slides using root input checked states (`:checked`), achieving instant transitions without performance overhead.
- **Visual Depth:** Applies soft double-shadow curves (`box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff`) to extruded and recessed components to provide depth.

## 4. Customization Variables API

Customize accents inside parent stylesheets using:

- `--accent-teal`: Primary theme color.
- `--accent-green`: Success badge tick color.
- `--accent-blue`: Secondary billing highlight color.

---
*Created as a submission for GSSOC-26 / ECSoC-26 under submissions/examples/confetti-bottom-sheet-neumorphic/*
