# Elastic Bounce Tabs - E-Commerce Checkout Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Elastic Bounce interaction transition, styled to complement E-Commerce Checkout interface aesthetics. Playful yet professional for checkout flows.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Elastic Bounce** | Active tab bounces with elastic effect (1.1x scale) |
|  **Checkout Flow** | 4-step checkout process |
|  **Keyboard Accessible** | Tab + Enter/Space |
| **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Checkout Steps** | Cart, Details, Payment, Confirm |
|  **Step Badges** | Visual step indicators |

---

##  CSS Customization

:root {
  /* Colors - E-Commerce Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: rgba(245, 158, 11, 0.1);
  --ease-tab-hover-bg: rgba(245, 158, 11, 0.05);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #f59e0b;
  --ease-tab-accent: #f59e0b;
  
  /* Elastic Bounce Parameters */
  --ease-tab-bounce-scale: 1.1;
  --ease-tab-bounce-duration: 0.5s;
  
  /* Animation - Elastic Bounce */
  --ease-tab-duration: 0.5s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
### CSS Classes
Class                   	Purpose
.ease-tabs-container	    Main container
.ease-tab	                Tab label
.ease-tab-icon	            Tab icon
.ease-tab-label         	Tab text
.ease-tab-step          	Step number badge
.ease-tab-panels	        Panels container
.ease-tab-panel         	Individual panel
.ease-items	                Cart items
.ease-item              	Individual item
.ease-form	                Shipping form
.ease-payment           	Payment options
.ease-confirm	            Order confirmation
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/bounce-tabs-checkout-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50141