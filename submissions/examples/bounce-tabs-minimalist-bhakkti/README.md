# Elastic Bounce Tabs - Minimalist Tech Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Elastic Bounce interaction transition, styled to complement Minimalist Tech interface aesthetics. Clean, modern, with a playful bounce.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Elastic Bounce** | Active tab bounces with elastic effect (1.08x scale) |
|  **Minimalist Tech** | Clean, modern design |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Tech Panels** | Code, DevOps, AI, Cloud |

---

##  CSS Customization


:root {
  /* Colors - Minimalist Tech Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.02);
  --ease-tab-active-bg: rgba(0, 212, 255, 0.04);
  --ease-tab-hover-bg: rgba(255, 255, 255, 0.02);
  --ease-tab-text: rgba(255, 255, 255, 0.3);
  --ease-tab-active-text: #00d4ff;
  --ease-tab-accent: #00d4ff;
  
  /* Elastic Bounce Parameters */
  --ease-tab-bounce-scale: 1.08;
  --ease-tab-bounce-duration: 0.5s;
  
  /* Animation - Elastic Bounce */
  --ease-tab-duration: 0.5s;
  --ease-tab-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

#### CSS Classes
Class	                    Purpose
.ease-tabs-container	    Main container
.ease-tab	                Tab label
.ease-tab-icon	            Tab icon
.ease-tab-label         	Tab text
.ease-tab-panels	        Panels container
.ease-tab-panel	            Individual panel
.ease-features	            Features grid
.ease-feature	            Individual feature
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

## Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/bounce-tabs-minimalist-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50144