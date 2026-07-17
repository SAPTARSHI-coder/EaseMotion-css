# Underline Tabs (`ease-tabs-underline`)

A perfectly responsive tab navigation component featuring a buttery-smooth sliding underline indicator and animated content switching, built purely with CSS.

## 🚀 Features

- **Zero JavaScript**: Entirely reliant on the HTML `<input type="radio">` and `<label>` relationship combined with the CSS `:checked` pseudo-class and the `~` general sibling combinator.
- **Dynamic Width Calculation**: By utilizing a simple inline CSS variable (`style="--tab-count: 3;"`), the `.ease-tab-underline` element automatically calculates its own width using `calc(100% / var(--tab-count))`.
- **Hardware Accelerated**: The underline slides along the X-axis utilizing a `transform: translateX()` powered by a bouncy `cubic-bezier` timing function, resulting in fluid 60fps animations.
- **Fade-in Content**: Content panels appear with a crisp `@keyframes` fade-in and slide-up animation when switched.

## 🛠️ Usage

To ensure the CSS selectors work correctly, your hidden radio inputs, the `.ease-tabs-nav`, and the `.ease-tabs-content` containers **must** be siblings within the same parent wrapper.

```html
<div class="ease-tabs-container" style="--tab-count: 3;">
  
  <!-- 1. The Controllers -->
  <input type="radio" id="tab-1" name="my-tabs" class="ease-tab-input" checked>
  <input type="radio" id="tab-2" name="my-tabs" class="ease-tab-input">
  <input type="radio" id="tab-3" name="my-tabs" class="ease-tab-input">
  
  <!-- 2. The Navigation -->
  <div class="ease-tabs-nav">
    <label for="tab-1" class="ease-tab-label">Tab 1</label>
    <label for="tab-2" class="ease-tab-label">Tab 2</label>
    <label for="tab-3" class="ease-tab-label">Tab 3</label>
    <div class="ease-tab-underline"></div>
  </div>
  
  <!-- 3. The Content -->
  <div class="ease-tabs-content">
    <div class="ease-tab-panel ease-panel-1">Content 1</div>
    <div class="ease-tab-panel ease-panel-2">Content 2</div>
    <div class="ease-tab-panel ease-panel-3">Content 3</div>
  </div>

</div>
