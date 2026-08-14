# CSS Tabs — Dark Mode Demo

## Overview

Demonstrates the `.ease-tabs` component from EaseMotion CSS in both light and dark modes. The component uses radio inputs for state management and CSS sibling selectors to show/hide panels. Dark mode overrides `--tab-color`, `--tab-active-color`, `--tab-panel-bg`, and `--tab-panel-border`.

## Usage

```html
<div class="ease-tabs">
  <input type="radio" name="tabs" id="tab1" class="ease-tab-input" checked>
  <input type="radio" name="tabs" id="tab2" class="ease-tab-input">

  <div class="ease-tabs-nav">
    <label for="tab1" class="ease-tab-label">Tab One</label>
    <label for="tab2" class="ease-tab-label">Tab Two</label>
  </div>

  <div class="ease-tab-panels">
    <div class="ease-tab-panel" data-tab="1">
      <h3>Tab One Content</h3>
      <p>Your content here.</p>
    </div>
    <div class="ease-tab-panel" data-tab="2">
      <h3>Tab Two Content</h3>
      <p>Your content here.</p>
    </div>
  </div>
</div>
```

Pill variant: add `.ease-tabs-pill` to the root `.ease-tabs` element.

## Dark Mode Overrides

```css
[data-theme="dark"] {
  --tab-color: #94a3b8;
  --tab-active-color: #a78bfa;
  --tab-panel-bg: #1e293b;
  --tab-panel-border: #334155;
  --pill-bg: #334155;
  --pill-active-bg: #a78bfa;
}
```

## Browser Support

CSS Custom Properties + CSS sibling combinators: Chrome 87+, Firefox 78+, Safari 13.1+, Edge 88+.
