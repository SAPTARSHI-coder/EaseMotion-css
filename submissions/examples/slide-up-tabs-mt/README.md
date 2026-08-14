# CSS Slide-Up Tabs for Minimalist Tech Layouts

This component implements a sleek, pure CSS tab layout with a slide-up entrance animation for the tab content panels, perfect for minimalist and tech-focused interfaces.

## Usage

```html
<div class="tabs-container ease-tabs-slide">
  <input type="radio" id="tab1" name="tabs" checked>
  <input type="radio" id="tab2" name="tabs">
  
  <div class="tabs-header">
    <label for="tab1" class="tab-label">Tab 1</label>
    <label for="tab2" class="tab-label">Tab 2</label>
    <div class="tab-indicator"></div>
  </div>
  
  <div class="tabs-content">
    <div class="tab-panel" id="panel1">Content 1</div>
    <div class="tab-panel" id="panel2">Content 2</div>
  </div>
</div>
```

## Features

- **Pure CSS/HTML**: No JavaScript required, utilizing radio inputs and sibling selectors for state management.
- **Smooth Animations**: Hardware-accelerated transitions for both the active tab indicator and the content panel slide-up effect.
- **Accessibility**: Includes `prefers-reduced-motion` support to disable the slide-up animation for users who prefer minimal movement.
- **Responsive**: Adapts gracefully to different screen sizes.
