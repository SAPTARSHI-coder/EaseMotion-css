# Magnetic Button — Zero-JS

**EaseMotion Submission** · Contributor: kavin553

---

## 1. What does this do?

Approximates a "magnetic pull" hover interaction using only CSS — the button lifts and scales more strongly the closer the cursor gets to its center, using nested hover zones and `:has()`, with genuinely zero JavaScript.

## 2. How is it used?

```html
<button class="magnetic-btn">
  Explore
  <span class="magnetic-zone"></span>
</button>