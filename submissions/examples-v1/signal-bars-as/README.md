# Signal Bars

### What does this do?

It shows cellular style signal strength meters. Each meter is five ascending bars; a level class fills the first N bars in a strength color (green, amber, red) while the rest stay dim. A `searching` variant animates all bars with a staggered scan.

### How is it used?

```html
<div class="sig lvl-3 ok" role="img" aria-label="Signal strength 3 of 5">
  <i></i><i></i><i></i><i></i><i></i>
  <span class="sig-label">Fair</span>
</div>
```

Add a strength class pair to the wrapper: `lvl-5 strong`, `lvl-3 ok`, or `lvl-1 weak`. The fill uses `:nth-child(-n + N)` to color the first N bars. Use `searching` for the animated scanning state.

### Why is it useful?

Status bars, device UIs, and connection panels show signal strength with ascending bars. This provides that meter, including a searching animation, using only CSS selectors and no images or script.
