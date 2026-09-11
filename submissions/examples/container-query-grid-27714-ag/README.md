# CSS Container Query Grid Wrapper Classes

This guide details configuration specs for generating SCSS container query grid wrappers.

---

## Technical Overview: The Container Query Grid Mixin

Media queries adapt styles to viewport dimensions, which fail when elements are nested within multi-column grid components. Declaring parent containers enables layout scaling based on localized parent dimensions:

```scss
// SCSS Container Query Mixin
@mixin container-width($name, $threshold) {
  @container #{$name} (min-width: #{$threshold}) {
    @content;
  }
}

// Parent declaration
.query-wrapper {
  container-type: inline-size;
  container-name: grid-container;
}

// Child element query
.grid-card {
  padding: 16px;
  
  @include container-width(grid-container, 480px) {
    padding: 28px;
  }
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Watch the card container size and padding increments.
3. Slide the **Parent Container Width** range above 480px — verify the padding expands and typography color/size scales dynamically.
