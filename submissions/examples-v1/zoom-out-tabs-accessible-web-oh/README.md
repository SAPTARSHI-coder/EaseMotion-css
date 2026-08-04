# 🔍 Zoom-Out Tabs Component Variant (Accessible Web Style)

## 📋 Component Overview

A pure CSS, zero-dependency animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions. Designed specifically for **Accessible Web** interface aesthetics with full keyboard navigation, ARIA attributes, and high contrast support.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters including timing, easing, and scale factors.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-accessible-web-oh/
├── demo.html     # Live preview with full accessibility features
├── style.css     # Comprehensive zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this accessible tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      <svg><!-- Icon --></svg>
      Tab Label
    </button>
    <button class="tab-btn" role="tab" 
            aria-selected="false" 
            aria-controls="tab-panel-2" 
            id="tab-2" 
            data-tab="2">
      <svg><!-- Icon --></svg>
      Tab Label
    </button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active" id="tab-panel-1" 
         role="tabpanel" 
         aria-labelledby="tab-1">
      <!-- Tab Content -->
    </div>
    <div class="tab-panel" id="tab-panel-2" 
         role="tabpanel" 
         aria-labelledby="tab-2">
      <!-- Tab Content -->
    </div>
  </div>
</div>
```

## 🔧 CSS Custom Properties (Configurable Parameters)

The component exposes the following CSS Custom Properties for easy customization:

| Property | Default Value | Description |
|----------|--------------|-------------|
| `--tab-transition-duration` | `0.4s` | Animation transition duration |
| `--tab-transition-ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function for smooth animation |
| `--tab-zoom-scale` | `0.85` | Scale factor for zoom-out effect |
| `--tab-hover-scale` | `1.05` | Scale factor on hover state |

## 🎨 Animation Variants

The component supports three distinct zoom animation variants:

### 1. **Zoom** (Default)
```css
.tab-btn.active {
  transform: scale(0.85);
}
```
Smooth scale-down effect on the active tab.

### 2. **Scale**
```css
.tabs-scale .tab-btn.active {
  animation: scaleZoom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Bouncy scale animation with overshoot.

### 3. **Pop**
```css
.tabs-pop .tab-btn.active {
  animation: popZoom 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
Pop effect with rotation for playful interactions.

## ♿ Accessibility Features

This component is designed with accessibility as a priority:

- **ARIA Roles**: Proper `tablist`, `tab`, and `tabpanel` roles
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Focus Visible**: Clear focus states for keyboard users
- **High Contrast**: Strong color contrast ratios (WCAG AA compliant)
- **Screen Reader Support**: Proper `aria-selected`, `aria-controls`, and `aria-labelledby` attributes
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## 🎯 Why This Component is Useful

1. **Zero JavaScript Required**: Pure CSS animations work without any client-side scripting
2. **Framework Agnostic**: Can be integrated into any web project regardless of framework
3. **Accessible by Default**: Built with accessibility best practices from the ground up
4. **Highly Customizable**: CSS Custom Properties allow easy theming and parameter adjustment
5. **Smooth Performance**: Hardware-accelerated CSS transforms ensure 60fps animations
6. **Responsive Design**: Adapts gracefully to all screen sizes including mobile devices

## 📱 Responsive Behavior

On smaller screens (below 640px), tab labels automatically hide, showing only icons for a cleaner mobile experience.

## 🔗 Dependencies

- **None** - This is a pure CSS solution with no external dependencies
- **Google Fonts** (optional) - Inter font loaded via CDN for optimal typography

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your design system
3. Add your tab content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*Built with ♿ accessibility in mind*
