# Accordion Expand/Collapse Max-Height Utilities

This guide details configuration specs for generating SCSS max-height transition mixins.

---

## Technical Overview: The Accordion Max-Height Mixin

Transitioning heights from `height: 0` to `height: auto` is unsupported in native CSS, requiring explicit max-height envelopes. Hardcoding static max heights yields sluggish animations:

```scss
// SCSS Accordion Max-Height Mixin
@mixin accordion-collapse($duration: 0.25s, $max-height: 200px) {
  max-height: 0;
  overflow: hidden;
  transition: max-height $duration ease-out;
  
  &.is-open {
    max-height: $max-height;
  }
}

// Utility classes mapping
.accordion-collapse {
  @include accordion-collapse(0.25s, 300px);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click on the **General Settings** panel header.
3. Verify that the card body expands smoothly to reveal content.
4. Click on the **Security & API Keys** panel — verify it expands while closing the previous panel.
5. Review arrow node rotation transitions.
