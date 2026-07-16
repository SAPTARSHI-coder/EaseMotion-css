# Disclosure Accordion (`ease-accordion-has`)

### 1. What does this do?
An accordion expansion drawer component using max-height transitions and chevron rotations.

### 2. How is it used?
Mark with `.accordion-item` and control open states via `.active`:
```html
<div class="accordion-item">
  <button class="accordion-header">
    <span>Title</span>
    <span class="chevron">▼</span>
  </button>
  <div class="accordion-content">
    <p>Details...</p>
  </div>
</div>
```

### 3. Why is it useful?
Provides collapsible text storage options that reveal elegantly without triggering page load layout reflows.