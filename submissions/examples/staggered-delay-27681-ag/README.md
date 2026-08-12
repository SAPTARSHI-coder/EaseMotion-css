# Staggered Entrance Delay Utility Classes

This guide details configuration specs for generating SCSS staggered delay utility classes.

---

## Technical Overview: The SCSS Stagger Loop

Declaring static delays manually repeatedly increases file size and reduces maintainability. Utilizing an SCSS `@for` loop scales staggered delay parameters automatically:

```scss
// SCSS Stagger Delay Generator Loop
@for $i from 1 through 10 {
  .delay-#{$i} {
    animation-delay: #{$i * 100}ms !important;
  }
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Watch the packages list slide up sequentially.
3. Click the **Replay Stagger Sequence** button — verify that the items slide in again, one after another, with 100ms increments.
