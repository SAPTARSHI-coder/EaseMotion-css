# Gooey Elastic Tab Navigation (`ease-gooey-nav-sn`)

## What does this do?

A premium navigation tab component where the active tab background highlight indicator slides with a "gooey" liquid or elastic stretch effect when moving between tabs, using pure CSS and SVG filters.

## How is it used?

Add the SVG gooey filter definition to the document body, then structure the tab navigation container:

```html
<!-- SVG Filter Definition (Add once to the body) -->
<svg style="position: absolute; width: 0; height: 0;" width="0" height="0">
  <defs>
    <filter id="ease-gooey-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
        result="goo"
      />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<!-- Tab Navigation Container -->
<div class="ease-gooey-nav">
  <input type="radio" id="g-tab-1" name="gooey-tabs" checked />
  <label for="g-tab-1" class="ease-gooey-tab">Dashboard</label>

  <input type="radio" id="g-tab-2" name="gooey-tabs" />
  <label for="g-tab-2" class="ease-gooey-tab">Analytics</label>

  <input type="radio" id="g-tab-3" name="gooey-tabs" />
  <label for="g-tab-3" class="ease-gooey-tab">Settings</label>

  <div class="ease-gooey-indicator"></div>
</div>
```

## Why is it useful?

It provides a high-fidelity interactive fluid animation (similar to macOS dock magnification or liquid mercury physics) in pure CSS, requiring zero JavaScript, maintaining maximum rendering performance, and degrading gracefully in older browsers.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.
