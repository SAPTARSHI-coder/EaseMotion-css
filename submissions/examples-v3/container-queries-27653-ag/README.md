# CSS Container Query Wrapper Classes

This guide details configuration specs for generating SCSS container query mixins.

---

## Technical Overview: The Container Query Mixin

Relying on global viewport queries (`@media`) causes elements inside nested sidebars or widgets to scale incorrectly. Setting container queries ensures local element scalability:

```scss
// SCSS Container Queries Mixin
@mixin container-wrapper($min-width: 450px) {
  // Establish parent container type
  container-type: inline-size;
  
  // Scoped child layout updates
  @container (min-width: #{$min-width}) {
    @content;
  }
}

// Class mapping
.query-container {
  @include container-wrapper(450px) {
    .responsive-card {
      flex-direction: row;
    }
  }
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the card inside the simulated container box.
3. Slide the **Target Container Width** range slider — verify that the layout shifts from vertical stack (under 450px) to horizontal row (450px and above) dynamically.
