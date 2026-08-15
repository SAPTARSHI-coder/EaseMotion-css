# Staggered Entrance Delay Utilities

This guide details configuration specs for generating SCSS staggered entrance animation delays.

---

## Technical Overview: The Stale Delay Mixin Loop

Declaring static delays for list elements manually scales poorly when elements are added or removed dynamically. Generating animation delays via SCSS `@for` loops maps delays uniformly:

```scss
// SCSS Staggered Entrance Loop (1 to 10 entries)
@for $i from 1 through 10 {
  .delay-#{$i} {
    animation-delay: $i * 100ms;
  }
}
```

This outputs class helpers from `.delay-1` to `.delay-10`, allowing developers to easily stagger lists of elements.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Watch the entrance fade-in sequence — verify that the cards animate into view in order from left to right.
3. Click **Restart Animations** — verify that the entrance animations stagger correctly on replay.
