# 🛒 Zoom-Out Tabs Component Variant (E-Commerce Checkout Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions with a modern **E-Commerce Checkout** aesthetic. This component is designed specifically for online shopping flows with cart management, payment options, and order confirmation components.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-ecommerce-checkout-oh/
├── demo.html     # Live preview with checkout flow design
├── style.css     # E-Commerce zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this E-Commerce checkout tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Checkout navigation tabs">
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

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Scale**
```css
.tabs-scale .tab-btn-mini.active {
  animation: scalePulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Scale pulse with overshoot effect.

### 2. **Spin**
```css
.tabs-spin .tab-btn-mini.active {
  animation: spinIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Rotation effect for playful interactions.

### 3. **Wiggle**
```css
.tabs-wiggle .tab-btn-mini.active {
  animation: wiggleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Wobble effect with damped oscillations.

## 🎨 Visual Features

1. **Cart Management**: Shopping cart with product images and quantity controls
2. **Payment Options**: Selection cards with radio inputs and check indicators
3. **Shipping Forms**: Address input fields with validation styling
4. **Shipping Options**: Delivery method selection with pricing
5. **Order Confirmation**: Success state with order details
6. **DM Sans Typography**: Clean e-commerce font family

## 🎯 Why This Component is Useful

1. **Checkout Optimized**: Designed specifically for e-commerce checkout flows
2. **Pure CSS**: Zero JavaScript for core animations
3. **Complete Flow**: From cart to confirmation in one component
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Cart items adapt to smaller screens
- Form inputs stack vertically on mobile
- Tab layout remains functional across all breakpoints

## 🔗 Dependencies

- **Google Fonts** - DM Sans loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your checkout content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*🛍️ Built for modern e-commerce experiences*
