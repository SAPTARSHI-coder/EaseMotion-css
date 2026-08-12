# Animated Tabs Component (`ease-tabs-xyz`)

A zero-dependency, CSS-only animated tabs/tab navigation component designed for the **EaseMotion CSS** framework. Perfect for organizing content into sections with smooth sliding indicators, content transitions, and multiple tab styles.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using radio buttons and CSS selectors.
- **Animation-First**: Smooth sliding indicators, content fade transitions, hover effects, and icon scaling using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Styles**: Underline (default), boxed, pill, and vertical tab layouts.
- **Sliding Indicator**: Animated underline that smoothly transitions between tabs.
- **Content Transitions**: Fade and slide animations when switching between tab panels.
- **Icon Support**: Optional icons with hover scale animations.
- **Badge Support**: Highlight badges for special tabs (e.g., "Popular").
- **Count Support**: Numeric counters for tab items.
- **Hover Effects**: Background color transitions and icon scaling on hover.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Underline Tabs
```html
<div class="ease-tabs-xyz">
  <input type="radio" name="tabs" id="tab-1" class="ease-tabs-xyz-radio" checked>
  <input type="radio" name="tabs" id="tab-2" class="ease-tabs-xyz-radio">
  <input type="radio" name="tabs" id="tab-3" class="ease-tabs-xyz-radio">
  
  <div class="ease-tabs-xyz-nav">
    <label for="tab-1" class="ease-tabs-xyz-tab">Tab 1</label>
    <label for="tab-2" class="ease-tabs-xyz-tab">Tab 2</label>
    <label for="tab-3" class="ease-tabs-xyz-tab">Tab 3</label>
    <div class="ease-tabs-xyz-indicator"></div>
  </div>

  <div class="ease-tabs-xyz-content">
    <div class="ease-tabs-xyz-panel">
      <h3>Content 1</h3>
      <p>Panel content here</p>
    </div>
    <div class="ease-tabs-xyz-panel">
      <h3>Content 2</h3>
      <p>Panel content here</p>
    </div>
    <div class="ease-tabs-xyz-panel">
      <h3>Content 3</h3>
      <p>Panel content here</p>
    </div>
  </div>
</div>