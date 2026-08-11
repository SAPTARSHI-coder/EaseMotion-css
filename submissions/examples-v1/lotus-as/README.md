# Lotus

### What does this do?

It shows a lotus flower closed as a bud on a pond. Hovering or focusing it makes the flower bloom: nineteen petals across three rings sweep open, the outer ring reaching furthest and the inner ring barely parting, revealing the golden heart. It works with no JavaScript. Under reduced motion the flower opens without easing.

### How is it used?

```html
<div class="lotus" tabindex="0">
  <div class="bloom">
    <span class="petl o po1"></span>
    <span class="petl m pm1"></span>
    <span class="heart"></span>
  </div>
</div>
```

Every petal stores its angle around the flower in a `--pa` custom property and transforms as `rotate(var(--pa)) translateY(...)` — rotating first, then pushing outward, so one value both aims the petal and sets it on its ring. Closed, all three rings are pulled in and scaled down so they nest into a bud; on `:hover` each ring translates out by a different distance, which is what gives the bloom its layered depth rather than a flat fan.

### Why is it useful?

Calm, wellness, and reveal or "open up" interactions use a lotus. This builds a blooming lotus with pure CSS shapes, custom properties, and transitions, no images or JavaScript, with a reduced motion fallback.
