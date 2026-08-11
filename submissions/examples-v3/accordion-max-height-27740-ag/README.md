# Accordion Max-Height Utilities

This submission implements accordion expand/collapse height transition classes matching SCSS mixin specifications.

---

## Technical Overview: The Max-Height Mixin

CSS transitions require explicitly declared pixel dimensions to scale, meaning transitions from `height: 0` to `height: auto` fail to animate. Utilizing `max-height` bounds resolves this layout limit:

```scss
// SCSS Accordion Height Transition Mixin
@mixin accordion-collapse($limit-height: 200px, $duration: 0.3s) {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height $duration cubic-bezier(0.25, 1, 0.5, 1), opacity $duration ease;
  
  &.expanded {
    max-height: $limit-height;
    opacity: 1;
  }
}

// Utility Classes
.accordion-content {
  @include accordion-collapse(200px);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click any of the panel headers.
3. Verify that the drawers slide open with smooth vertical animations.
