# Rating Summary

### What does this do?

It shows a review summary with a large average score, a star row, and a distribution of five to one star bars. Each bar fills to a percent set with a custom property and grows on load.

### How is it used?

```html
<div class="rating-summary">
  <div>
    <div class="rs-score">4.6<span>out of 5</span></div>
    <div class="rs-stars">★★★★★</div>
  </div>
  <ul class="rs-bars">
    <li style="--val: 72%"><span>5</span><span class="rs-track"></span></li>
    <li style="--val: 18%"><span>4</span><span class="rs-track"></span></li>
  </ul>
</div>
```

Set each row fill with the `--val` custom property. The score and star row sit on the left and the distribution bars on the right.

### Why is it useful?

Product and app pages show a rating breakdown so shoppers can judge reviews at a glance. This lays out an average score next to labeled distribution bars driven by a single custom property per row, using only CSS. The bars animate in and stay still under reduced motion.
