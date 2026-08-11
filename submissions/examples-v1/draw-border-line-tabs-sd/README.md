# CSS Draw-Border Line Tabs

### 1. What does this do?

This is a pure CSS horizontal tab component with a smooth, dynamic draw-border underline transition. When tabs are switched, the active indicator line moves to the new active tab while performing an organic stretch-and-draw animation beneath it.

### 2. How is it used?

Include the `style.css` stylesheet in your HTML. Use the class name `.draw-border-line-tabs-sd` for the outer container, with standard radio inputs and label structures to control active states:

```html
<div class="draw-border-line-tabs-sd">
  <input
    type="radio"
    id="tab-sd-1"
    name="tabs-group-sd"
    class="tab-input-sd"
    checked
  />
  <input type="radio" id="tab-sd-2" name="tabs-group-sd" class="tab-input-sd" />
  <input type="radio" id="tab-sd-3" name="tabs-group-sd" class="tab-input-sd" />

  <div class="tabs-header-sd">
    <label for="tab-sd-1" class="tab-label-sd">Tab 1</label>
    <label for="tab-sd-2" class="tab-label-sd">Tab 2</label>
    <label for="tab-sd-3" class="tab-label-sd">Tab 3</label>
    <div class="tabs-indicator-sd"></div>
  </div>

  <div class="tab-panels-sd">
    <div class="tab-panel-sd" id="panel-sd-1">...</div>
    <div class="tab-panel-sd" id="panel-sd-2">...</div>
    <div class="tab-panel-sd" id="panel-sd-3">...</div>
  </div>
</div>
```

Configure style overrides directly on the container via custom CSS variables:

```css
.draw-border-line-tabs-sd {
  --tabs-duration: 0.4s;
  --tabs-easing: cubic-bezier(0.25, 1, 0.5, 1);
  --tabs-line-thickness: 3px;
  --tabs-line-color: #2563eb;
  --tabs-scale: 1;
}
```

### 3. Why is it useful?

- **Zero JavaScript:** High performance, secure, and compatible with static marketing page architectures.
- **Accessibility (A11y):** Screen-reader friendly, fully keyboard navigable using standard arrow key patterns, visible focus states, and respects the `prefers-reduced-motion` media queries.
- **Modern Brand Aesthetic:** The minimal, clean typography combined with the dynamic sliding and redrawing animation creates a premium user experience tailored for product and marketing landing pages.
