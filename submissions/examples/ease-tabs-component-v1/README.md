# EaseMotion Tabs Component

A modern, highly customizable tabs component for EaseMotion CSS. This component provides an organized way to switch between different sections of content without navigating away from the page, improving UX and content structure clarity.

## Overview

The Tabs Component is designed to be lightweight, accessible, and easy to integrate. It uses flexbox for layout, clean CSS classes for styling, and simple vanilla JavaScript for functionality. It is designed to look great out-of-the-box with a modern SaaS-style dashboard aesthetic.

## Features

- **Smooth Animations**: Includes fade-in effects for content and sliding indicators for active tabs.
- **Responsive Design**: Automatically adapts to smaller screens (e.g., vertical tabs convert to horizontal scrolling or stacked layouts on mobile).
- **Reusable CSS Classes**: Built with a modular CSS architecture using variables for easy theming.
- **No Dependencies**: Uses 100% vanilla CSS and JavaScript. No external libraries required.
- **Modern Aesthetic**: Features rounded corners, soft shadows, and clean spacing systems.

## Variants

1. **Default Tabs**: Classic top-bordered active state.
2. **Underline Tabs**: Clean bottom-border design.
3. **Pill Tabs**: Rounded, button-like tabs for a friendly UI.
4. **Card Tabs**: Attached card-style look for contained content.
5. **Icon Tabs**: Support for inline SVGs or icons.
6. **Vertical Tabs**: Side-navigation style for complex dashboards.
7. **Animated Tabs**: Features a smooth sliding bottom indicator.
8. **Gradient Tabs**: Modern gradient backgrounds for active states.
9. **Minimal Tabs**: Clean, text-only tabs with subtle active indicators.
10. **Dark Mode Tabs**: Optimized colors for dark interfaces.

## Tab Types & Use Cases

- **Content Switching Tabs**: Basic text or media switching in standard pages.
- **Dashboard Navigation Tabs**: Underline or vertical tabs for switching dashboard views.
- **Settings Page Tabs**: Vertical tabs for categorizing user settings.
- **Product Detail Tabs**: Card tabs for product descriptions, reviews, and specifications.

## Usage Example

### HTML Structure

```html
<div class="ease-tabs ease-tabs-underline">
  <div class="ease-tab-list" role="tablist">
    <button class="ease-tab-btn active" role="tab" onclick="switchTab(this, 'tab-1')">Tab 1</button>
    <button class="ease-tab-btn" role="tab" onclick="switchTab(this, 'tab-2')">Tab 2</button>
  </div>
  <div id="tab-1" class="ease-tab-content active" role="tabpanel">
    <p>Content for Tab 1</p>
  </div>
  <div id="tab-2" class="ease-tab-content" role="tabpanel">
    <p>Content for Tab 2</p>
  </div>
</div>
```

### JavaScript functionality

```javascript
function switchTab(clickedBtn, targetId) {
  const tabsContainer = clickedBtn.closest('.ease-tabs');
  
  // Update buttons
  const buttons = tabsContainer.querySelectorAll('.ease-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
  
  // Update content
  const contents = tabsContainer.querySelectorAll('.ease-tab-content');
  contents.forEach(content => content.classList.remove('active'));
  document.getElementById(targetId).classList.add('active');
}
```

## Customization

You can easily customize the tabs by overriding the CSS variables defined in `:root`:

```css
:root {
  --tab-bg: #f3f4f6;
  --tab-bg-active: #ffffff;
  --tab-text: #4b5563;
  --tab-accent: #2563eb;
  --tab-radius: 8px;
  /* Add more overrides here */
}
```
