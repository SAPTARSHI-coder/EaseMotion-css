# Ease Tooltip SAP Component

### What does this do?
Adds an interactive, animated tooltip variant that dynamically alternates between top and downward positioning with responsive micro-movement transitions.

### How is it used?
```html
<div class="tooltip-container-sap">
  <button aria-describedby="tooltip-sap">Trigger</button>
  <div class="tooltip-content-sap" id="tooltip-sap" role="tooltip">Tooltip Text</div>
</div>
```

### Why is it useful?
It keeps the interaction lightweight, predictable, and accessible by using semantic HTML, `:hover`, and `:focus-within` instead of JavaScript. The motion is restrained enough to feel polished while still giving clear spatial feedback that helps keyboard users and pointer users understand the relationship between trigger and tooltip.
