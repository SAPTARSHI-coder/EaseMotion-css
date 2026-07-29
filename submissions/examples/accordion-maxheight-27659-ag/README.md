# Accordion Expand/Collapse Max-Height Utilities

This guide details configuration specs for generating SCSS accordion collapse mixins.

---

## Technical Overview: The Accordion Height Mixin

CSS height values (e.g. `height: auto`) cannot be transitioned. Utilizing a dynamic `max-height` transition curve creates smooth collapsible widgets:

```scss
// SCSS Accordion Collapse Mixin
@mixin accordion-transition($duration: 0.4s, $max-height-bound: 200px) {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: 
    max-height $duration cubic-bezier(0.16, 1, 0.3, 1), 
    opacity $duration ease;
    
  // Selector target for expanded parent
  .active & {
    max-height: $max-height-bound;
    opacity: 1;
  }
}

// Utility Class mapping
.accordion-content {
  @include accordion-transition;
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the accordion headers to toggle active state classes.
3. Verify that panels expand and collapse smoothly, and the chevrons rotate in sync.
