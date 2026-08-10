# Shimmer Sweep Popover - Product Catalog Component

## ✨ Overview
A pure CSS animated popover utilizing a smooth Shimmer Sweep interaction transition, styled to complement Product Catalog interface aesthetics. Premium, eye-catching, and interactive.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ✨ **Shimmer Sweep** | Popover has shimmering sweep animation |
| 🛍️ **Product Catalog** | E-commerce focused design |
| ♿ **Keyboard Accessible** | Tab + Enter for popover |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 🛒 **4 Product Cards** | Interactive product previews |

---

## 🎨 CSS Customization


:root {
  /* Colors - Product Catalog Theme */
  --ease-popover-bg: rgba(255, 255, 255, 0.06);
  --ease-popover-border: rgba(255, 255, 255, 0.08);
  --ease-popover-shadow: rgba(0, 0, 0, 0.3);
  --ease-popover-text: #ffffff;
  --ease-popover-accent: #f59e0b;
  --ease-popover-btn-bg: #f59e0b;
  --ease-popover-btn-hover: #d97706;
  
  /* Shimmer Colors */
  --ease-shimmer-color-1: rgba(255, 255, 255, 0);
  --ease-shimmer-color-2: rgba(255, 255, 255, 0.15);
  --ease-shimmer-color-3: rgba(255, 255, 255, 0.3);
  --ease-shimmer-color-4: rgba(255, 255, 255, 0.15);
  --ease-shimmer-color-5: rgba(255, 255, 255, 0);
  
  /* Sizing */
  --ease-popover-width: 280px;
  --ease-popover-padding: 20px;
  --ease-popover-radius: 16px;
  
  /* Animation */
  --ease-popover-duration: 0.5s;
  --ease-shimmer-duration: 2s;
}

### CSS Classes
Class                       	Purpose
.ease-popover-container     	Main container
.ease-popover-trigger	        Trigger wrapper
.ease-product-card	            Product card
.ease-popover	                Popover container
.ease-popover-shimmer	        Shimmer overlay
.ease-popover-content	        Popover content
.ease-popover-btn	            Popover button
### Accessibility
 Keyboard navigation (Tab + Enter)
 ARIA attributes (role="tooltip")
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

## File Structure

submissions/examples/shimmer-popover-catalog-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #49997