# 🛍️ Zoom-Out Tabs Component Variant (Product Catalog Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions, styled to complement **Product Catalog** interface aesthetics. This component provides an elegant shopping experience with product grids, featured sections, categories, and new arrivals displays.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-product-catalog-oh/
├── demo.html     # Live preview with product catalog design
├── style.css     # Product Catalog zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Product Catalog tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Product catalog navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
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
  </div>
</div>
```

## 🔧 CSS Custom Properties (Configurable Parameters)

The component exposes the following CSS Custom Properties for easy customization:

| Property | Default Value | Description |
|----------|--------------|-------------|
| `--tab-transition-duration` | `0.4s` | Animation transition duration |
| `--tab-transition-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--tab-zoom-scale` | `0.9` | Scale factor for zoom effect |

## 🎨 Color Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--catalog-primary` | `#e83e8c` | Primary pink/magenta color |
| `--catalog-secondary` | `#6f42c1` | Secondary purple color |
| `--catalog-accent` | `#fd7e14` | Accent orange color |
| `--catalog-success` | `#28a745` | Success green color |
| `--catalog-danger` | `#dc3545` | Danger/sale red color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Zoom**
```css
.tabs-zoom .tab-btn-mini.active {
  animation: zoomPulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Smooth scale pulse with overshoot effect.

### 2. **Spring**
```css
.tabs-spring .tab-btn-mini.active {
  animation: springIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```
Spring physics animation with bounce.

### 3. **Smooth**
```css
.tabs-smooth .tab-btn-mini.active {
  animation: smoothIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```
Elegant smooth fade-scale transition.

## 🎨 Visual Features

1. **Product Grid**: Beautiful card layout with hover effects and badges
2. **Featured Section**: Large promotional banner with gradient overlay
3. **Category Cards**: Icon-based category navigation
4. **New Arrivals**: Timeline-based product list with dates
5. **Star Ratings**: Product rating display system
6. **Price Display**: Current and original price with sale indication
7. **Product Badges**: New, Sale, and custom badges

## 🎯 Why This Component is Useful

1. **E-Commerce Ready**: Perfect for online shopping catalogs
2. **Pure CSS**: Zero JavaScript for core animations
3. **Visual Product Showcase**: Beautiful product cards and grids
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Product grid adjusts from 3 to 2 to 1 column
- Category grid adapts to smaller screens
- Featured card stacks vertically on mobile

## 🔗 Dependencies

- **Google Fonts** - Poppins loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your product catalog content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*🛍️ Built for modern product catalogs*
