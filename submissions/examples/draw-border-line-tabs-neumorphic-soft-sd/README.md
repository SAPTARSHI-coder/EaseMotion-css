# CSS Draw-Border Line Tabs - Neumorphic Soft

### 1. What does this do?

This is a pure CSS horizontal tab component styled with a soft neumorphic appearance. When switching between tabs, the active tab transitions to a raised neumorphic elevation while a smooth draw-border line animation plays on the underline indicator.

### 2. How is it used?

Include `style.css` in your project. Structure the tabs using standard `<input type="radio">` states, labels, and panels under the `.draw-border-line-tabs` class:

```html
<div class="draw-border-line-tabs">
  <input type="radio" id="tab-1" name="neumorphic-tabs" class="tab-input" checked>
  <input type="radio" id="tab-2" name="neumorphic-tabs" class="tab-input">
  <input type="radio" id="tab-3" name="neumorphic-tabs" class="tab-input">

  <div class="tabs-header">
    <label for="tab-1" class="tab-label">General</label>
    <label for="tab-2" class="tab-label">Settings</label>
    <label for="tab-3" class="tab-label">Status</label>
  </div>

  <div class="tab-panels">
    <div class="tab-panel" id="panel-1">...</div>
    <div class="tab-panel" id="panel-2">...</div>
    <div class="tab-panel" id="panel-3">...</div>
  </div>
</div>
```

Configure style overrides directly on the container via custom CSS variables:

```css
.draw-border-line-tabs {
  --tabs-duration: 0.3s;
  --tabs-easing: ease;
  --tabs-line-color: #3b82f6;
  --tabs-line-thickness: 3px;
  --tabs-scale: 1;
}
```

### 3. Why is it useful?

- **Zero JavaScript Overhead:** Runs purely on high-performance CSS logic.
- **Fluid & Responsive:** The header track and labels adjust automatically to all viewports.
- **Soft Neumorphic Styling:** Delivers a modern soft-UI appearance with customizable shadow/accent overrides.
- **Accessible-First:** Navigable via keyboard arrow keys (standard radio behavior), has distinct focus-visible states, and respects motion reduction preferences.
