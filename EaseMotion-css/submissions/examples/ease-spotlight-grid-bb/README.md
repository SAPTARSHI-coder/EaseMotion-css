# Interactive Cursor Spotlight Grid

## Description
A premium dashboard grid element featuring subtle illumination borders and ambient backing glows that track cursor positioning dynamically on hover.

## Usage
Simply structure your cards inside the spotlight-grid layout:
```html
<div class="spotlight-grid" id="grid">
  <div class="spotlight-card">
    <div class="spotlight-card-content">
      <h4>Compute Engine</h4>
      <p>Dynamic workload allocation.</p>
    </div>
  </div>
</div>
```

## Why is it useful?
Provides high-fidelity depth highlights without complex canvas renderers. Purely styled utilizing modern CSS variables (`--mouse-x`, `--mouse-y`) mapped to grid layouts. Performance-friendly and accessibility compatible.
