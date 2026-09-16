# ease-subgrid-pricing

A pure-CSS pricing table that uses **CSS Subgrid** (`grid-template-rows: subgrid`) to keep card internals — headers, prices, feature lists, and CTA buttons — perfectly aligned across a row of independent cards, regardless of content length.

> **Issue:** [#62925](https://github.com/Viidhii19/EaseMotion-css/issues/62925)

---

## 1. What does this do?

CSS Subgrid lets a child grid **inherit its parent's row (or column) track sizing** instead of defining its own. In this component:

| Layer | Role |
|---|---|
| `.ease-pricing-wrapper` (parent) | Defines **4 explicit row tracks**: Header · Price · Features · Button |
| `.ease-pricing-card` (child) | Spans all 4 parent rows via `grid-row: span 4`, then uses `grid-template-rows: subgrid` to adopt those exact track sizes |

Because every card participates in the **same shared row tracks**, the browser automatically sizes each row to the tallest content across *all* cards. The result: prices line up, buttons line up, and feature lists fill the remaining space — even when one card has a 3-line header and 8 features while another has a 1-line header and 3 features.

---

## 2. How is it used?

### CSS

```css
/* Parent: define the shared row tracks */
.ease-pricing-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: max-content max-content 1fr max-content;
  gap: 2rem;
}

/* Child: inherit the parent's rows via subgrid */
.ease-pricing-card {
  display: grid;
  grid-row: span 4;                   /* span all 4 parent rows */
  grid-template-rows: subgrid;        /* adopt the parent's row sizing */
  gap: 0;
}
```

### HTML

```html
<div class="ease-pricing-wrapper">

  <div class="ease-pricing-card">
    <div class="ease-pricing-header">Basic</div>
    <div class="ease-pricing-price">$9/mo</div>
    <ul  class="ease-pricing-features">
      <li>Feature A</li>
    </ul>
    <a   class="ease-pricing-btn">Buy Now</a>
  </div>

  <div class="ease-pricing-card">
    <!-- Even with vastly different content lengths,
         all rows stay aligned thanks to subgrid -->
    <div class="ease-pricing-header">Pro — A Much Longer Title</div>
    <div class="ease-pricing-price">$29/mo</div>
    <ul  class="ease-pricing-features">
      <li>Feature A</li>
      <li>Feature B</li>
      <li>Feature C</li>
      <li>Feature D</li>
    </ul>
    <a   class="ease-pricing-btn">Buy Now</a>
  </div>

</div>
```

### Running the demo

Open `demo.html` in any modern browser (Chrome 117+, Firefox 71+, Safari 16+). No build step or server required.

---

## 3. Why is it useful?

Before CSS Subgrid, aligning independent card sections required one of two bad options:

| Old approach | Problem |
|---|---|
| **Hardcoded `min-height`** on headers / feature lists | Breaks the moment content changes; requires manual maintenance |
| **JavaScript height-equalization** (e.g. `matchHeight.js`, GSAP) | Adds runtime cost, layout shifts on load, and a JS dependency for something that is purely a layout concern |

**CSS Subgrid eliminates both.** The browser's layout engine handles alignment natively, at zero runtime cost, with no JavaScript, no magic numbers, and no fragile workarounds. It is the correct, standards-based solution for any "align children across siblings" layout problem.

---

## Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome / Edge | 117 |
| Firefox | 71 |
| Safari | 16 |

> See [caniuse.com/css-subgrid](https://caniuse.com/css-subgrid) for full details.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | All component styles — wrapper grid, subgrid cards, theming |
| `demo.html` | Self-contained demo with 3 cards (stress-tests uneven content) |
| `README.md` | This file |
