# Dark Mode Tabs - Accessibility Integration

A responsive dark-mode tabs component with keyboard navigation and accessibility support.

## Features

- Dark mode styling
- Responsive layout
- Accessible tab structure
- Keyboard navigation
- CSS custom properties
- No external dependencies

## Basic HTML

```html
<div class="tabs" role="tablist" aria-label="Content sections">

  <button
    class="tabs__tab tabs__tab--active"
    role="tab"
    aria-selected="true"
    aria-controls="panel-overview"
    tabindex="0">
    Overview
  </button>

  <button
    class="tabs__tab"
    role="tab"
    aria-selected="false"
    aria-controls="panel-features"
    tabindex="-1">
    Features
  </button>

</div>