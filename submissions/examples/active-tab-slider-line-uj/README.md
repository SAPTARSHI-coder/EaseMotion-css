# Active Tab Slider Line

## What does this do?

It provides an animated underline tab indicator that glides smoothly and adjusts its width to match the active navigation tab.

## How is it used?

Apply the `tabs-group-uj`, `tab-uj`, and `tab-slider-uj` classes to construct your tab layout:

```html
<div class="tabs-group-uj">
  <button class="tab-uj active">Overview</button>
  <button class="tab-uj">Settings</button>
  <div class="tab-slider-uj"></div>
</div>
```

Use a simple JavaScript event listener to toggle the `active` class on tab changes and update the left offset and width of the `.tab-slider-uj`:

```javascript
function updateIndicator(activeTab, slider) {
  slider.style.left = `${activeTab.offsetLeft}px`;
  slider.style.width = `${activeTab.offsetWidth}px`;
}
```

## Why is this useful?

Animated sliding tab underlines are a classic UX pattern for modern dashboards, setting dialogs, and navigation panels. This utility runs transitions on compositor-friendly properties (`left` and `width`) for high frame rate rendering, respects reduced-motion preferences, and supports custom themes out-of-the-box.
