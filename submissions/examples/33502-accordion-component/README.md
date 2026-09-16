# EaseMotion CSS Accordion

## What does this do?

This component provides a smooth, CSS-only accordion with animated height transitions using CSS Grid.

---

## How is it used?

```html
<div class="ease-accordion">

  <button class="ease-accordion-trigger" aria-expanded="false">
    Accordion Title
  </button>

  <div class="ease-accordion-content">
    <div class="content">
      Accordion Content
    </div>
  </div>

</div>
```

Include the accompanying `style.css` and use a small JavaScript snippet to toggle the `.is-open` class and update the `aria-expanded` attribute.

---

## Why is it useful?

This approach avoids JavaScript height calculations and the traditional `max-height` workaround. It provides smooth animations using CSS Grid, improves accessibility with keyboard support and `aria-expanded`, and respects the user's `prefers-reduced-motion` setting.