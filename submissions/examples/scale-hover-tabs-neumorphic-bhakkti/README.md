# Scale-Hover Tabs - Neumorphic Soft Layouts Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Scale-Hover interaction transition, styled to complement Neumorphic Soft interface aesthetics. Fully responsive, keyboard accessible, and exposes custom parameters via CSS custom properties.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Scale-Hover** | Smooth scale effect on hover (1.05x) |
|  **Neumorphic** | Soft shadows for extruded/tactile feel |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **Dark Mode** | Automatic theme switching |
|  **4 Panels** | Design, UI Kits, Components, Themes |

---

##  CSS Customization


:root {
  /* Colors - Neumorphic Theme */
  --ease-neu-bg: #e0e5ec;
  --ease-neu-shadow-light: #ffffff;
  --ease-neu-shadow-dark: #a3b1c6;
  --ease-tab-text: #2d4059;
  --ease-tab-active-text: #2d4059;
  
  /* Animation - Scale */
  --ease-tab-scale: 1.05;
  --ease-tab-duration: 0.3s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

 ### CSS Classes
Class	                        Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon              	Tab icon
.ease-tab-label             	Tab text
.ease-tab-panels            	Panels container
.ease-tab-panel	                Individual panel
.ease-cards	                    Cards grid
.ease-card	                    Individual card
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

###  Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure
text
submissions/examples/scale-hover-tabs-neumorphic-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50090