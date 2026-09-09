# Animated Tabs Navigation Component

A modern, highly responsive tabs navigation deck built entirely with **pure HTML and CSS**. It uses hidden radio selectors to coordinate tab triggers, features a slidable bottom underline indicator, and handles dynamic container height flows as users toggle between panels without any JavaScript.

---

## 1. What does this do?
The **Animated Tabs Navigation** provides a clean content switching grid:
- **Slidable Underline Indicator**: When a tab heading is selected, a gradient underline slides horizontally to the active item using pure CSS translate transforms.
- **Dynamic Card Heights**: Inactive panels are absolute-positioned with zero opacity. Checking a tab triggers relative positioning on the active panel, allowing the parent card to dynamically stretch its height to fit the active content.
- **Micro-Interactions**: Features a vertical CSS chart that grows dynamically on page selection, styled checklist toggle switches, and list hover highlights.
- **Mobile Friendly**: The tab bar automatically converts into a swipe-scroll container on mobile widths to prevent label clipping.
- **100% JS-Free**: All calculations, height updates, and translations are handled in pure CSS.

---

## 2. How is it used?

### File Setup
Link `style.css` in the head of your document and copy the markup template:
```html
<link rel="stylesheet" href="style.css">
```

### HTML Layout Structure
Define radio buttons at the root of the tab container. Match headers labels to inputs, and wrap content blocks in panel classes matching target select rules:
```html
<div class="ease-tabs-card">
  <!-- Radio Inputs (Hidden) -->
  <input type="radio" id="tab-1" name="tabs" class="ease-tab-input" checked>
  <input type="radio" id="tab-2" name="tabs" class="ease-tab-input">

  <!-- Headers -->
  <nav class="ease-tabs-nav" role="tablist">
    <label for="tab-1" class="ease-tab-label" role="tab" aria-selected="true">Overview</label>
    <label for="tab-2" class="ease-tab-label" role="tab">Analytics</label>
    
    <!-- Sliding underline indicator -->
    <span class="ease-tab-indicator"></span>
  </nav>

  <!-- Panels -->
  <div class="ease-tabs-content">
    <div class="ease-tab-panel panel-dash" role="tabpanel"> ... Dashboard metrics ... </div>
    <div class="ease-tab-panel panel-stats" role="tabpanel"> ... Chart visuals ... </div>
  </div>
</div>
```

---

## 3. Why is it useful?
- **Zero Script Footprint**: Content tab engines usually rely on jQuery tabs or React states to switch panels and resize wraps. This pure CSS component handles this with zero script bytes.
- **Sliding Indicator Fluidity**: The underline indicator transitions on browser transform coordinates (`translateX`), providing smooth 60fps speeds.
- **Clean Responsive Wrapping**: Swiping scrolls for mobile viewports prevent messy word wraps or label compressions.
- **Accessibility & Motion Fallbacks**: Employs standard `aria-selected` and `role="tabpanel"` structures. Support for `@media (prefers-reduced-motion: reduce)` automatically disables slide lines, resolving sensory concerns.
