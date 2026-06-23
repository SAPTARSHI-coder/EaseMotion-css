# Pill Tabs (`ease-tabs-pill`)

A beautiful tab navigation component featuring a buttery-smooth sliding background pill and animated content panels. Built for the EaseMotion-css framework.

## 🚀 Features

- **Sliding Pill Background**: Uses an absolutely positioned `.ease-tabs-highlight` element that tracks the active tab. CSS transitions handle the sliding effect, while a snippet of JS calculates the dynamic `translateX` offset and `width`.
- **Dynamic Resizing**: The sliding pill smoothly transitions its `width` alongside its `transform`, meaning it perfectly accommodates tabs of varying text lengths seamlessly!
- **Panel Transitions**: Employs an `@keyframes` entry animation (`easePanelEntry`) on the content panels so that switching tabs feels fluid rather than abrupt.
- **A11y Compliant**: Designed with full ARIA roles (`tablist`, `tab`, `tabpanel`, `aria-controls`, and `aria-selected`) to ensure screen readers can understand the relationship between the tabs and the content.

## 🛠️ Usage

Ensure your HTML structure links the `aria-controls` attribute of the tab button to the `id` of the content panel.

```html
<div class="ease-tabs-wrapper">
  
  <!-- The Nav -->
  <div class="ease-tabs-nav" role="tablist">
    <div class="ease-tabs-highlight" id="tab-highlight"></div>
    <button class="ease-tab-btn active" role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
    <button class="ease-tab-btn" role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
  </div>
  
  <!-- The Content -->
  <div class="ease-tabs-content">
    <div class="ease-tab-panel active" id="panel-1" role="tabpanel">Content 1</div>
    <div class="ease-tab-panel" id="panel-2" role="tabpanel">Content 2</div>
  </div>

</div>
