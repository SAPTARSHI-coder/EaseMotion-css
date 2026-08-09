# Rotate-Fade Tabs

A smooth, accessible tab component with rotate and fade animations for fintech dashboard layouts.

## What does this do?

Implements an interactive tabbed interface with a distinctive rotateX and fade transition effect, featuring a sliding indicator and smooth content reveals optimized for data-rich dashboard applications.

## How is it used?

Add the CSS to your page and use radio inputs with the `.tab-content` class structure:

```html
<div class="tabs-container">
  <div class="tabs">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">
    
    <div class="tab-labels">
      <label for="tab1" class="tab-label">Tab 1</label>
      <label for="tab2" class="tab-label">Tab 2</label>
    </div>
    
    <div class="tab-indicator"></div>
    
    <div class="tab-content-wrapper">
      <div class="tab-content">
        <!-- Tab 1 content -->
      </div>
      <div class="tab-content">
        <!-- Tab 2 content -->
      </div>
    </div>
  </div>
</div>
```

## CSS Custom Properties

```css
--tabs-bg           /* Container background */
--tabs-border       /* Border color */
--tab-active-bg     /* Active tab background */
--tab-active-border /* Indicator color */
--tab-hover-bg      /* Hover state background */
--tab-text          /* Default text color */
--tab-text-active   /* Active text color */
--transition-rotate /* Rotation animation timing */
--transition-fade   /* Fade animation timing */
```

## Why is it useful?

- **3D Effect**: The rotateX transform creates depth and visual hierarchy
- **Smooth Transitions**: Coordinated fade and rotate make tab switches feel polished
- **Performance**: Pure CSS animations run on the GPU for smooth 60fps
- **Accessibility**: Supports `prefers-reduced-motion` for users who need it
- **Responsive**: Adapts gracefully to mobile viewports

## Features

- Pure CSS/HTML implementation (no JavaScript required)
- Sliding tab indicator with glow effect
- Content fade and rotate animations
- Fully responsive layout
- Reduced motion support
- Accessible keyboard navigation
- Customizable via CSS variables
