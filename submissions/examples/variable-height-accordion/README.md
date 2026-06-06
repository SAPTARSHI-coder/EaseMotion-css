# ⚡ Utility: Pure CSS Variable Height Accordion Reveal

### What does this do?
This layout feature resolves a long-standing web interaction limitation: smoothly animating an element container's height from `height: 0` to `height: auto` dynamically using pure CSS. By leveraging modern CSS Grid fractional track transitions (`0fr` ⇄ `1fr`), elements reveal smoothly without requiring hardcoded pixel limits.

### How is it used?
Assemble your collapse items with the semantic input check triggers and wrap the hidden layers inside the structural sub-grid classes:

```html
<div class="ease-accordion-item">
  <input type="checkbox" id="item-id" class="ease-accordion-input" />
  <label for="item-id" class="ease-accordion-trigger">Trigger Header</label>

  <div class="ease-accordion-collapse">
    <div class="ease-accordion-content">
      <p>Dynamic variable text content blocks go here.</p>
    </div>
  </div>
</div>
```

### By
Pari Dubey