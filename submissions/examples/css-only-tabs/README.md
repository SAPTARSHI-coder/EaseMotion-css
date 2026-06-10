# CSS-Only Tabs

## What does this do?
A fully functional tab navigation component powered entirely by hidden radio buttons and CSS — zero JavaScript required.

## How is it used?
Wrap radio inputs, label nav, and content panels inside a container:

```html
<div class="tabs-container">
  <input type="radio" name="tabs" id="tab-1" checked>
  <input type="radio" name="tabs" id="tab-2">

  <nav class="tab-nav">
    <label class="tab-label" for="tab-1">Tab 1</label>
    <label class="tab-label" for="tab-2">Tab 2</label>
  </nav>

  <div class="tab-panels">
    <section class="tab-panel">Content 1</section>
    <section class="tab-panel">Content 2</section>
  </div>
</div>
```

## Why is it useful?
Tabs are one of the most fundamental UI patterns on the web, yet EaseMotion CSS had no tab component. This submission fills that gap with a pure-CSS solution that features smooth fade + slide transitions, an animated active-state indicator, responsive mobile stacking, and `prefers-reduced-motion` support — fully aligned with the framework's no-JS philosophy.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
