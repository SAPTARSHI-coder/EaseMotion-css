# Multi-Layer Box Shadow Elevation Scale

This guide details configuration specs for generating SCSS multi-layer box shadow mixins.

---

## Technical Overview: The Elevation Mixin

Using simple single-line box shadows often produces flat, artificial looks. Combining multiple shadow offsets generates organic depth scales:

```scss
// SCSS Box Shadow Elevation Mixin
@mixin shadow-elevation($level: 1) {
  @if $level == 1 {
    box-shadow: 
      0 1px 2px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.1);
  } @else if $level == 2 {
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.15),
      0 10px 15px rgba(0, 0, 0, 0.12);
  } @else if $level == 3 {
    box-shadow: 
      0 10px 20px rgba(0, 0, 0, 0.2),
      0 20px 40px rgba(0, 0, 0, 0.25);
  }
}

// Class mapping
.card-medium {
  @include shadow-elevation(2);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the three shadow cards (Level 1, Level 2, Level 3).
3. Verify that cards cast realistic multi-tiered depths that intensify per level.
