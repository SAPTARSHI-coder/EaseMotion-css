# Ease Accordion

## What does this do?

Provides a CSS-only accordion component built using native `<details>` and `<summary>` elements with smooth expand/collapse animations.

The utility includes multiple variants:

* `ease-accordion-group` — groups multiple accordion items together
* `ease-accordion-bordered` — card-style bordered accordion
* `ease-accordion-flush` — minimal borderless appearance
* `ease-accordion-arrow` — rotating arrow indicator
* `ease-accordion-plus` — plus/minus indicator

## How is it used?

```html
<div class="ease-accordion-group">

  <details class="ease-accordion ease-accordion-bordered ease-accordion-arrow">
    <summary class="ease-accordion-trigger">
      What is EaseMotion CSS?
    </summary>

    <div class="ease-accordion-content">
      <div>
        EaseMotion CSS is a pure CSS animation utility library.
      </div>
    </div>
  </details>

</div>
```

## Why is it useful?

Accordions are commonly used for FAQs, settings panels, documentation sections, navigation menus, and content organization.

Using native HTML elements keeps the component accessible, keyboard-friendly, lightweight, and completely JavaScript-free while still providing smooth animations and reusable styling variants.
