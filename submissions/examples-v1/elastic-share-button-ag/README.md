# Elastic Share Button

An interactive, high-precision sharing dashboard element with elastic spring physics, designed for clinical telemetry and medical dashboard interfaces.

## 1. What does this do?

The Elastic Share Button triggers a physical squeeze-and-rebound macro-animation upon activation, expanding a list of share targets in a fluid, staggered vertical sequence.

## 2. How is it used?

Integrate the following semantic structure and link the stylesheet to use the component:

```html
<div class="elastic-share-widget-ag">
  <!-- Hidden checkbox input to toggle active states -->
  <input type="checkbox" id="share-toggle-ag" class="share-state-checkbox-ag" />

  <!-- Trigger Label -->
  <label
    for="share-toggle-ag"
    class="share-btn-trigger-ag"
    tabindex="0"
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <span class="share-icon-box-ag">
      <!-- Standard Share Vector -->
      <svg class="icon-share-ag" viewBox="0 0 24 24">...</svg>
      <!-- Close Vector -->
      <svg class="icon-close-ag" viewBox="0 0 24 24">...</svg>
    </span>
    <span>Share Telemetry Data</span>
  </label>

  <!-- Share Dropdown Drawer -->
  <div class="share-dropdown-ag" role="menu">
    <a
      href="#colleague"
      class="share-item-link-ag"
      style="--item-index: 1;"
      role="menuitem"
    >
      <span class="share-item-label-ag">
        <span class="share-item-icon-ag">🩺</span>
        <span>Colleague Share</span>
      </span>
      <span class="share-item-shortcut-ag">EHR</span>
    </a>
    <!-- Additional share options with incremented --item-index variables -->
  </div>
</div>
```

Include the keyboard activation listener script to support Space/Enter keys:

```javascript
const triggerLabel = document.querySelector(".share-btn-trigger-ag");
const checkbox = document.getElementById("share-toggle-ag");

triggerLabel.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    checkbox.click();
  }
});
```

## 3. Why is it useful?

It offers a highly interactive, responsive clinical layout that provides tactile micro-animations without heavy JS overhead. By leveraging native CSS variables and transitions, it integrates smoothly into modern dashboard layouts, complying with web accessibility standards (including keyboard accessibility and prefers-reduced-motion triggers).
