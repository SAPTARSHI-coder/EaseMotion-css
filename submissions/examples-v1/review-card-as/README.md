# Review Card

### What does this do?

It shows a product review card with an author row, a verified purchase badge, a partial star rating, a date, a short title, the review text, and a helpful count with a thumbs up. The star rating fills to a percent from a custom property.

### How is it used?

```html
<article class="review">
  <div class="rv-head">
    <span class="rv-avatar">GH</span>
    <div class="rv-who"><span class="rv-name">Grace H. <span class="rv-verified"><svg>...</svg>Verified</span></span><span class="rv-date">8 Jul 2026</span></div>
  </div>
  <div class="rv-rate"><span class="rv-stars" style="--pct: 80%"></span><span class="rv-title">Sturdy</span></div>
  <p class="rv-text">Exactly as described.</p>
  <div class="rv-foot"><button class="rv-helpful"><svg>...</svg>Helpful (12)</button></div>
</article>
```

The star rating draws a gray row and clips a gold copy to the `--pct` width, so any fractional rating shows. The avatar uses initials, so there are no external images.

### Why is it useful?

Product pages list customer reviews as cards. This lays out a review card with a partial star rating, a verified badge, and a helpful count, using only CSS and initials avatars. The helpful button has hover and focus states removed of motion under reduced motion.
