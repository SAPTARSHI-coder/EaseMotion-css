# Animated Accordion (grid-template-rows)

Closes #56637

### What does this do?
A pure CSS accordion component that smoothly expands and collapses using the modern `grid-template-rows: 0fr -> 1fr` technique, with a rotating chevron icon.

### How is it used?
```html
<div class="accordion-item">
  <input type="checkbox" id="acc-1" class="accordion-toggle" />
  <label for="acc-1" class="accordion-title">
    What is EaseMotion CSS?
    <span class="accordion-icon">▼</span>
  </label>
  <div class="accordion-content">
    <div class="accordion-content-inner">
      A lightweight, curated CSS animation framework.
    </div>
  </div>
</div>
```

### Why is it useful?
It avoids the common `max-height` hack and its abrupt/jumpy transitions by animating `grid-template-rows` instead, giving a truly smooth expand/collapse for content of any height — with zero JavaScript. It uses native checkbox/label semantics for accessibility and respects `prefers-reduced-motion`.
