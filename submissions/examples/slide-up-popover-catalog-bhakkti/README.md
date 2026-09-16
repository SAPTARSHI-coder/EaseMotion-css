# Slide-Up Popover - Product Catalog Component

##  Overview
A pure CSS animated popover utilizing a smooth Slide-Up interaction transition, styled to complement Product Catalog interface aesthetics. Perfect for product previews and quick info.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Slide-Up Popover** | Smooth slide-up animation on hover |
|  **Product Catalog** | E-commerce focused design |
|  **Keyboard Accessible** | Tab + Enter for popover |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Product Cards** | Interactive product previews |

---

##  CSS Customization


:root {
  /* Colors - Product Catalog Theme */
  --ease-popover-bg: rgba(255, 255, 255, 0.06);
  --ease-popover-border: rgba(255, 255, 255, 0.08);
  --ease-popover-shadow: rgba(0, 0, 0, 0.3);
  --ease-popover-text: #ffffff;
  --ease-popover-accent: #f59e0b;
  --ease-popover-btn-bg: #f59e0b;
  --ease-popover-btn-hover: #d97706;
  
  /* Sizing */
  --ease-popover-width: 280px;
  --ease-popover-padding: 20px;
  --ease-popover-radius: 16px;
  
  /* Animation - Slide Up */
  --ease-popover-duration: 0.4s;
  --ease-popover-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

###  CSS Classes
Class	                           Purpose
.ease-popover-container	           Main container
.ease-popover-trigger	           Trigger wrapper
.ease-product-card	               Product card
.ease-popover	                   Popover container
.ease-popover-content              Popover content
.ease-popover-btn	               Popover button
### Accessibility
 Keyboard navigation (Tab + Enter)
 ARIA attributes (role="tooltip")
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/slide-up-popover-catalog-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #46383