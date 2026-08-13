# Accessible Accordion Component

## 1. What does this component do?

Provides a CSS-first accordion disclosure component built on standard HTML5 `<details>` and `<summary>` tags with animated chevron rotation (`.ease-accordion-icon`) and smooth body fade transitions (`.ease-accordion-body`).

## 2. How is it used?

```html
<div class="ease-accordion-group">
  <details class="ease-accordion-item" open>
    <summary class="ease-accordion-header">
      <span>Accordion Header</span>
      <span class="ease-accordion-icon">▼</span>
    </summary>
    <div class="ease-accordion-body">
      Accordion content goes here...
    </div>
  </details>
</div>
```

## 3. Why does it fit EaseMotion CSS?

Delivers a lightweight, zero-dependency disclosure component that leverages native semantic HTML, complete keyboard accessibility, and smooth CSS keyframe transitions.

## 4. Demo Instructions

Open `demo.html` in any web browser to test keyboard and pointer interaction on the accordion items.
