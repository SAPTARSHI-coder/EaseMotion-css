# Animated Tabs (`ease-tabs-animated`)

## Overview
This submission introduces smooth, animated tabbed interfaces with sliding underline indicators, content fade transitions, and multiple layout variants. Tabs are essential for organizing content into separate views without leaving the page.

## Features
- **Animated Underline Indicator**: A smooth sliding indicator that moves to the active tab using GPU-accelerated transforms.
- **Content Fade Transitions**: Tab panels fade in and slide up slightly when activated, providing a polished feel.
- **Multiple Variants**: Includes horizontal tabs with underline, pill-style tabs, and vertical tabs.
- **Fully Accessible**: Uses proper ARIA attributes (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`), keyboard navigation (Arrow keys, Tab, Enter), and `:focus-visible` states.
- **Hover States**: Smooth color and background transitions on tab hover.
- **Theming Ready**: Leverages `--ease-color-*` CSS variables for seamless integration with the core design token system.
- **Reduced Motion Support**: Gracefully disables animations for users with `prefers-reduced-motion` enabled.
- **Dark Mode Support**: Automatically adapts to dark mode using `prefers-color-scheme`.

## Files Included
- `demo.html`: Interactive showcase with all tab variants.
- `style.css`: Clean, production-ready CSS with smooth animations.

## How to Test
1. Ensure you are in the `submissions/examples/ease-tabs-animated-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Click different tabs to see the underline indicator slide smoothly.
4. Observe the content fade-in animation when switching tabs.
5. Use arrow keys to navigate between tabs (keyboard accessibility).
6. Check the pill-style and vertical variants for different layouts.

## Usage Example
```html
<!-- Basic Horizontal Tabs -->
<div class="ease-tabs">
  <div class="ease-tabs__list" role="tablist">
    <button class="ease-tabs__tab ease-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab1">Tab 1</button>
    <button class="ease-tabs__tab" role="tab" aria-selected="false" aria-controls="tab2">Tab 2</button>
    <span class="ease-tabs__indicator"></span>
  </div>
  <div class="ease-tabs__panels">
    <div class="ease-tabs__panel ease-tabs__panel--active" role="tabpanel" id="tab1">Content 1</div>
    <div class="ease-tabs__panel" role="tabpanel" id="tab2" hidden>Content 2</div>
  </div>
</div>

<!-- Pill-style Tabs -->
<div class="ease-tabs ease-tabs--pills">
  <!-- ... -->
</div>

<!-- Vertical Tabs -->
<div class="ease-tabs ease-tabs--vertical">
  <!-- ... -->
</div>