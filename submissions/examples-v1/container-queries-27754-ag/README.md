# CSS Container Query Wrapper Classes

This submission implements responsive parent-relative container query utilities matching SCSS mixin specifications.

---

## Technical Overview: SCSS Container Queries Mixin

Viewport-relative media queries (`@media`) scale sizing parameters matching screen dimensions. However, if a component resides in a split sidebar or nested card column, screen-based scaling fails.

### The Remediation

Using parent containers (`container-type: inline-size`) allows components to query the size of their parent element rather than the screen size:

```scss
// SCSS Container Query Mixin
@mixin container-query($name, $min-width) {
  @container #{$name} (min-width: #{$min-width}) {
    @content;
  }
}

// Parent declaration
.query-parent {
  container-type: inline-size;
  container-name: card-container;
}

// Child responsive styling
.responsive-card {
  display: flex;
  flex-direction: column;
  
  @include container-query(card-container, 450px) {
    flex-direction: row;
  }
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe layout wraps to stacked view at startup width.
3. Slide the **Container Width** slider above 450px — verify the card adapts into a horizontal flex row layout dynamically.
