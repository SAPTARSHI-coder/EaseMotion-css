# Keyframe Wobble & Pulse Animation Mixins

This submission implements keyframe wobble and pulse mixin actions matching SCSS utility specifications.

---

## Technical Overview: SCSS Animation Mixins

Hardcoding animation keyframe styles on individual selectors makes them hard to maintain. Storing them inside SCSS mixins enables clean reuse:

```scss
// SCSS Wobble Mixin
@mixin wobble($duration: 0.6s) {
  animation: wobble $duration ease;
}

// SCSS Pulse Mixin
@mixin pulse($duration: 1s) {
  animation: pulse $duration infinite alternate ease-in-out;
}

// Utility Classes
.btn-wobble:hover { @include wobble(0.6s); }
.btn-pulse:hover  { @include pulse(1s); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the **Wobble Interaction** card — verify that it skews and shifts horizontally before settling.
3. Hover over the **Pulse Interaction** card — verify that it scales up and down in a smooth, continuous loop.
