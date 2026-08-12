# Compare Plan Slider

## What does this do?

Compare Plan Slider is a self-contained HTML and CSS pricing comparison surface with animated plan cards, a segmented billing switch, progress meters, feature lists, and hover-lift actions.

## How is it used?

Create a `plan-grid` wrapper and add `plan-card` items with plan modifier classes such as `plan-starter`, `plan-growth`, or `plan-scale`.

```html
<article class="plan-card plan-growth featured">
  <div class="plan-header">
    <p class="plan-kicker">Growth</p>
    <span class="plan-badge">Popular</span>
  </div>
  <div class="plan-price">
    <span>$29</span>
    <small>/ month</small>
  </div>
  <div class="meter" aria-hidden="true">
    <span></span>
  </div>
  <button type="button">Choose Growth</button>
</article>
```

Available plan classes:

- `plan-starter`
- `plan-growth`
- `plan-scale`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to help comparison: cards enter softly, meters reveal relative value, the segmented switch provides lightweight movement, and hover states clarify each action. The demo is standalone and works by opening `demo.html` directly in a browser.
