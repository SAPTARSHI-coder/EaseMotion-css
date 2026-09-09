# CSS-Only Animated Tabs Component

A pure CSS tabbed navigation component featuring a smooth sliding underline indicator and content fade-in transitions without JavaScript.

## Overview & Features
- **Zero JavaScript**: Powered entirely by radio inputs and `:checked` state selectors.
- **Sliding Underline**: Hardware-accelerated `transform: translateX()` and width transitions.
- **Responsive Scroll**: Horizontally scrollable tab header container for mobile screens.
- **Customization Tokens**: Uses `--ease-tabs-accent` and `--ease-tabs-speed`.

## Usage Example
```html
<div class="ease-tabs">
  <input type="radio" id="t1" name="group" checked />
  <div class="ease-tab-list">
    <label class="ease-tab" for="t1">Tab One</label>
    <div class="ease-tabs-indicator"></div>
  </div>
  <div class="ease-panels">
    <div class="ease-tab-panel" id="p1">Content Here</div>
  </div>
</div>