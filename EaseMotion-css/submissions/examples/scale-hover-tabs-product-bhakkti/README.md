# Scale-Hover Tabs - Product Catalog Layouts Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Scale-Hover interaction transition, styled to complement Product Catalog interface aesthetics. Perfect for e-commerce and product showcases.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Scale-Hover** | Smooth scale effect on hover (1.08x) |
| **Product Catalog** | E-commerce focused design |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Catalog Panels** | Electronics, Fashion, Home, Gaming |
|  **Product Cards** | Interactive product listings |

---

##  CSS Customization


:root {
  /* Colors - Product Catalog Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: rgba(245, 158, 11, 0.1);
  --ease-tab-hover-bg: rgba(245, 158, 11, 0.05);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #f59e0b;
  
  /* Animation - Scale */
  --ease-tab-scale: 1.08;
  --ease-tab-duration: 0.3s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

### CSS Classes
Class                       	Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon	                Tab icon
.ease-tab-label             	Tab text
.ease-tab-panels	            Panels container
.ease-tab-panel	                Individual panel
.ease-products	                Product grid
.ease-product	                Individual product card
.ease-product-icon	            Product icon
.ease-product-price	            Product price
### Accessibility
Keyboard navigation (Tab, Enter, Space)
ARIA attributes
Focus indicators
prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

## File Structure
text
submissions/examples/scale-hover-tabs-product-bhakkti/
├── demo.html
├── style.css
└── README.md
## Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50084