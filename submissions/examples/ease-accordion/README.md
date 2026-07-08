# Smooth Grid Accordion

A perfectly smooth, CSS-only accordion component using native `<details>` and `<summary>` tags.

## Usage

Include `style.css` and use the following HTML structure:

```html
<details class="ease-accordion">
  <summary class="ease-accordion-header">
    Title Here
    <span class="ease-accordion-icon">↓</span>
  </summary>
  <div class="ease-accordion-content">
    <div class="ease-accordion-inner">
      <div class="ease-accordion-body">
        Content goes here.
      </div>
    </div>
  </div>
</details>
```

## Why it fits EaseMotion CSS
It solves the infamous CSS problem of animating height `0` to `auto` without JavaScript by using CSS Grid transitions. This adheres to the EaseMotion philosophy of lightweight, pure-CSS animations.
