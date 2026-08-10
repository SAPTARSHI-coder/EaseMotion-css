# CSS Draw-Border Line Tabs - Minimalist Tech

### 1. What does this do?

This is a lightweight, pure CSS interactive tab component built with a minimalist tech aesthetic. When switching tabs, a smooth draw-border line animation executes on the active tab underline, drawing the indicator line from left to right, and shrinking it from left to right when deactivated.

### 2. How is it used?

Include the `style.css` stylesheet in your HTML. Structure the tabs using standard HTML `<input type="radio">` and `<label>` elements inside the `.draw-border-line-tabs` container:

```html
<div class="draw-border-line-tabs">
  <!-- Radio State inputs -->
  <input type="radio" id="tab-1" name="tech-tabs" class="tab-input" checked>
  <input type="radio" id="tab-2" name="tech-tabs" class="tab-input">
  <input type="radio" id="tab-3" name="tech-tabs" class="tab-input">

  <!-- Tabs Navigation Header -->
  <div class="tabs-header">
    <label for="tab-1" class="tab-label">
      <span class="tab-code">01//</span>Console
    </label>
    <label for="tab-2" class="tab-label">
      <span class="tab-code">02//</span>Network
    </label>
    <label for="tab-3" class="tab-label">
      <span class="tab-code">03//</span>Security
    </label>
  </div>

  <!-- Tab Panels -->
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
  --tabs-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  --tabs-line-color: #00f0ff;
  --tabs-line-thickness: 2px;
  --tabs-scale: 1;
}
```

### 3. Why is it useful?

- **Zero JavaScript Overhead:** High performance, secure, and works instantly without needing a bundle step.
- **Fluid & Responsive:** Built using a flex-based layout where the underlines dynamically adjust to varying tab title widths.
- **Accessibility-First:** Fully keyboard navigable using native HTML radio behavior (arrow key navigation), includes visible focus outlines, and honors the `prefers-reduced-motion` media query.
- **Premium Tech Aesthetic:** Designed specifically to align with high-tech developer portals, dashboard panels, and minimalist terminal-like UI mockups.
