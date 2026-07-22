# 🛍️ Fade-Out Tabs Component Variant (Product Catalog Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Fade-Out** interaction transitions, styled to complement **Product Catalog** interface aesthetics. Elegant shopping experience with product grids, featured sections, and categories.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/fade-out-tabs-product-catalog-oh/
├── demo.html     # Live preview with product catalog design
├── style.css     # Product Catalog fade-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Product catalog navigation tabs">
    <button class="tab-btn active" role="tab" aria-selected="true" aria-controls="tab-panel-1" id="tab-1" data-tab="1">All Products</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active" id="tab-panel-1" role="tabpanel" aria-labelledby="tab-1"><!-- Content --></div>
  </div>
</div>
```

## 🔧 CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--tab-transition-duration` | `0.4s` | Animation transition duration |
| `--tab-transition-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |
| `--tab-fade-opacity` | `0` | Opacity for inactive tabs |

## 🎯 Animation Variants

### 1. **Fade** - Simple opacity fade
### 2. **Scale** - Fade with scale effect
### 3. **Blur** - Fade with blur effect

## 🎨 Visual Features

1. **Product Grid**: Beautiful card layout with hover effects and badges
2. **Featured Section**: Large promotional banner with gradient overlay
3. **Category Cards**: Icon-based category navigation
4. **New Arrivals**: Timeline-based product list with dates
5. **Star Ratings**: Product rating display system
6. **Price Display**: Current and original price with sale indication
7. **Poppins Typography**: Modern product catalog font

## 📄 License

This component is submitted as part of the GSSoC '26 initiative.

---

*🛍️ Built for modern product catalogs*
