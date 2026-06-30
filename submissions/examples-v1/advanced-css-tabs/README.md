# Advanced Pure CSS Tabs

This submission adds a highly advanced, pure CSS tabs component. Unlike basic CSS tabs that just toggle visibility, this component implements a smooth sliding indicator and cross-fading panel animations without a single line of JavaScript.

## Features
- **Zero JavaScript:** Powered entirely by the hidden radio-button hack and sibling selectors.
- **Sliding Indicator:** The `.ease-tab-indicator` physically slides across the top using `transform: translateX()`, creating a highly premium native-app feel.
- **Fading Panels:** Active panels fade and slide up simultaneously.
- **Accessibility:** Uses `.ease-sr-only` for inputs, allowing keyboard navigation via `Tab` and `Space/Arrow keys`.

## Usage
```html
<div class="ease-tabs-wrapper">
  <input type="radio" id="tab-1" name="tabs" class="ease-tab-trigger ease-sr-only" checked>
  <input type="radio" id="tab-2" name="tabs" class="ease-tab-trigger ease-sr-only">
  
  <div class="ease-tabs-container">
    <div class="ease-tab-list">
      <label for="tab-1">Tab 1</label>
      <label for="tab-2">Tab 2</label>
      <div class="ease-tab-indicator"></div>
    </div>
    <div class="ease-tab-panels">
      <div class="ease-tab-panel" id="panel-1">Content 1</div>
      <div class="ease-tab-panel" id="panel-2">Content 2</div>
    </div>
  </div>
</div>
```
