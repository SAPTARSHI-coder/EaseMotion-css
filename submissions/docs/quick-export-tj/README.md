# Quick HTML Export Action for Component Examples

1. What does this do?
This feature provides action buttons on component examples that programmatically copy clean, standardized component HTML markup directly to the user's clipboard, complete with animated visual success indicators.

2. How is it used?
Wrap your component preview in a container with a unique identifier, and add a `.tj-export-btn` action button targeting the identifier via a `data-target` attribute:

```html
<!-- Showcase card structure with copy button -->
<div class="tj-card">
  <div class="tj-card-header">
    <h3 class="tj-card-title">Interactive Button</h3>
    <button class="tj-export-btn" data-target="tj-btn-example">
      <svg class="tj-icon-copy" ...>...</svg>
      <svg class="tj-icon-check" ...>...</svg>
      <span class="tj-btn-text">Copy HTML</span>
    </button>
  </div>
  
  <div class="tj-preview-container" id="tj-btn-example">
    <!-- Clean markup to be exported -->
    <button class="tj-btn-element" type="button">
      Explore Components
    </button>
  </div>
</div>
```

3. Why is it useful?
It significantly speeds up developer workflows by providing an instant, frictionless copy-paste path for UI components, eliminating the need to inspect page sources or manually strip helper elements, aligning perfectly with EaseMotion's core philosophy of rapid and efficient web development.
