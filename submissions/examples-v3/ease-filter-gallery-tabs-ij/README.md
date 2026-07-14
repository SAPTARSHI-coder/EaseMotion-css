# Filter Gallery Tabs

A filter gallery tabs component with animated category switch — CSS + JS.

## Features
- Animated tab indicator (sliding underline)
- Smooth content transition on tab switch
- Active tab state with custom properties
- Fully customizable via CSS custom properties

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--tab-bg` | #2a2a2a | Background of inactive tabs |
| `--tab-active-bg` | #6366f1 | Background of the active tab |
| `--tab-color` | #d1d5db | Text color of tabs |
| `--transition-speed` | 0.3s | Duration of tab transitions |

## Usage
```html
<div class="gallery-tabs" style="--tab-bg: #2a2a2a; --tab-active-bg: #6366f1; --tab-color: #d1d5db; --transition-speed: 0.3s;">
  <button class="tab active" data-panel="all">All</button>
  <button class="tab" data-panel="design">Design</button>
  <button class="tab" data-panel="code">Code</button>
  <div class="tab-indicator"></div>
</div>
<div class="panel active" id="all">Content</div>
```

## Browser Support
- Chrome 49+, Firefox 31+, Safari 9+

## Tech Stack
- HTML + CSS + JavaScript
