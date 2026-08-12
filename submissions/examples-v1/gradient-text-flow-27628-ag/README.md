# Gradient Text Flow & Animation Utilities

This submission implements animated text gradient utilities matching SCSS utility mixin requirements.

---

## Technical Overview: The SCSS Gradient Flow Mixin

Manually declaring background sizes, text clips, and keyframe definitions repeatedly increases bundle weight. Utilizing an SCSS mixin scales gradient settings uniformly:

```scss
// SCSS Gradient Text Flow Mixin
@mixin gradient-text-flow($gradient, $duration: 6s) {
  background-image: $gradient;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  // Animation attachment
  animation: flowAnimation $duration linear infinite;
}

// Utility Classes
.flow-aurora { @include gradient-text-flow(linear-gradient(120deg, #a78bfa 0%, #22d3ee 50%, #a78bfa 100%)); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the headers (Aurora, Sunset, Ocean) moving horizontally.
3. Hover over each header — verify that the gradient animation speed increases.
