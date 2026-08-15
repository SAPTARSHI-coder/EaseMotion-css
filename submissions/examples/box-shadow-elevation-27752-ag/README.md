# Box Shadow Elevation Scale Mixin

This guide details configuration specs for generating SCSS multi-layer box-shadow elevation scale utilities.

---

## Technical Overview: The Multi-Layer Shadow Mixin

Using single offset box-shadow parameters makes shadows look harsh and unrealistic. Combining multiple comma-separated offsets creates smooth, realistic shadows:

```scss
// SCSS Box Shadow Elevation Mixin
@mixin shadow-elevation($z-level: 1) {
  @if $z-level == 1 {
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.2), 
      0 1px 2px rgba(0, 0, 0, 0.15);
  }
  @else if $z-level == 2 {
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.25), 
      0 2px 4px rgba(0, 0, 0, 0.2);
  }
  @else if $z-level == 3 {
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.3), 
      0 4px 6px -2px rgba(0, 0, 0, 0.25);
  }
}

// Utility Classes
.shadow-z1 { @include shadow-elevation(1); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review cards Z1, Z2, and Z3.
3. Verify that cards display realistic depth shadows, scaling smoothly from low-intensity defaults to modal-level overlays.
