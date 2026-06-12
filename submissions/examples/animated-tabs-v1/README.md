# Animated Tabs

## 1. What does this do?

A horizontal tab bar with a sliding underline indicator that moves smoothly to the active tab on click. Each tab shows different content panels.

## 2. How is it used?

Structure `.tabs` with `.tabs-header` containing `.tab-btn` elements and a `.tab-indicator`. Each button's `data-tab` targets a matching `.tab-panel` id.

```html
<div class="tabs">
  <div class="tabs-header">
    <button class="tab-btn active" data-tab="tab1">One</button>
    <div class="tab-indicator"></div>
  </div>
  <div class="tab-panel active" id="tab1">...</div>
</div>
```

## 3. Why is it useful?

A lightweight tab switcher with smooth indicator animation and fade-in content transitions. No external library required. Respects `prefers-reduced-motion`.
