# Smooth Accordion Chevron Rotation

Closes #57014

### What does this do?
Rotates a dropdown indicator chevron 180 degrees smoothly on a single axis when the accordion header is hovered or interacted with.

### How is it used?
```html
<div class="accordion-header">
  Click Accordion
  <span class="chevron">▼</span>
</div>
```

### Why is it useful?
It's a minimal, hardware-accelerated transform-based micro-interaction that gives strong visual feedback on a common UI pattern (accordions/dropdowns) without heavy layout changes or JavaScript, fitting EaseMotion's human-readable, animation-first philosophy.
