# CSS Container Query Wrapper Classes

This guide details configuration specs for generating SCSS container query wrapper mixins.

---

## Technical Overview: The Container Query Mixin

Relying exclusively on global `@media` queries limits component reusability since layout rules cannot check parent dimensions. Packaging inline-size parameters inside an SCSS mixin scales container boundaries:

```scss
// SCSS Container Query Mixin
@mixin container-query-parent($name: query-parent) {
  container-type: inline-size;
  container-name: $name;
}

@mixin container-query-child($name: query-parent, $min-width: 400px) {
  @container #{$name} (min-width: #{$min-width}) {
    @content;
  }
}

// Utility Classes
.resize-container {
  @include container-query-parent;
}

.query-card {
  display: flex;
  flex-direction: column;
  
  @include container-query-child(query-parent, 400px) {
    flex-direction: row;
  }
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the responsive card.
3. Slide the **Parent Wrapper Width** slider to resize the box.
4. Verify that when width goes below `400px`, the card transitions from a row layout to a stacked column layout.
