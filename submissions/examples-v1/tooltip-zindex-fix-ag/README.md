# Tooltip Z-Index Fix (Issue #18337)

## What does this do?
Demonstrates a corrected z-index hierarchy where tooltips use `z-index: 500` and modal overlays use `z-index: 1000`, ensuring that tooltips on background elements never bleed through active modal overlays.

## How is it used?
```html
<!-- Tooltip (z-index: 500 — stays behind modal) -->
<div class="ease-tooltip-wrapper">
  <button>Hover</button>
  <div class="ease-tooltip">Tip text</div>
</div>

<!-- Modal (z-index: 1000 — always on top) -->
<div class="ease-modal-overlay is-active">
  <div class="ease-modal">...</div>
</div>
```

## Why is it useful?
Setting `z-index: 9999` on tooltips globally causes them to float above every other element, including modal overlays that are meant to capture all interaction. By establishing a consistent stacking context (tooltips at 500, modals at 1000), the UI hierarchy remains predictable and modals correctly block all background interaction.
