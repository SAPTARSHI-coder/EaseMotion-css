# Pure CSS Infinite Marquee (ease-marquee-viidhii19)

### What does this do?
This provides a hardware-accelerated, zero-JavaScript infinite looping marquee that gracefully pauses on hover and seamlessly loops content.

### How is it used?
Wrap two identical content blocks inside `.ease-marquee-viidhii19`. Each inner block must have the `.ease-marquee-content-viidhii19` class.

```html
<div class="ease-marquee-viidhii19">
  <!-- Block 1 -->
  <div class="ease-marquee-content-viidhii19">
    <div>Logo 1</div>
    <div>Logo 2</div>
  </div>
  <!-- Block 2 (Duplicate) -->
  <div class="ease-marquee-content-viidhii19" aria-hidden="true">
    <div>Logo 1</div>
    <div>Logo 2</div>
  </div>
</div>
```

To reverse the direction of the marquee, add the `reverse` class to the wrapper:
```html
<div class="ease-marquee-viidhii19 reverse">
```

### Why is it useful?
Infinite logo carousels are a staple in modern landing pages but often rely on JavaScript for DOM node duplication and recalculation, leading to performance bottlenecks and jerky transitions. By shifting this strictly to the HTML layer (static duplication) and CSS (hardware-accelerated transforms), it guarantees consistent 60fps performance without affecting the main thread.

### The Mathematics of a Seamless Loop

Creating a flawless infinite CSS loop using flexbox requires strict mathematics. If we merely translated the content by `-100%`, it would disregard the `gap` applied by the flex container between the two identical content blocks, resulting in a visual "snap" or jump when the animation resets.

To avoid this, we use the `calc()` function in our `@keyframes`:

```css
@keyframes ease-scroll-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap, 1rem)));
  }
}
```

By factoring in the exact `gap` used in the flex layout (`calc(-100% - gap)`), the first block of logos translates perfectly out of view at the exact moment the second block fully occupies its initial position, resulting in a flawless, buttery-smooth loop.
