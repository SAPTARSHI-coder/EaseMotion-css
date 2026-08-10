# Scale-Hover Tabs - Glassmorphism UI Layouts Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Scale-Hover interaction transition, styled to complement Glassmorphism UI interface aesthetics. Frosted glass, blur effects, and modern design.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Scale-Hover** | Smooth scale effect on hover (1.06x) |
|  **Glassmorphism** | Frosted glass with backdrop blur |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **Dark Mode** | Automatic theme switching |
|  **4 Glass Panels** | Design, Gallery, Analytics, Settings |

---

## CSS Customization

:root {
  /* Colors - Glassmorphism Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.04);
  --ease-tab-active-bg: rgba(255, 255, 255, 0.08);
  --ease-tab-hover-bg: rgba(255, 255, 255, 0.06);
  --ease-tab-text: rgba(255, 255, 255, 0.4);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: rgba(139, 92, 246, 0.5);
  --ease-tab-border: rgba(255, 255, 255, 0.06);
  
  /* Animation - Scale */
  --ease-tab-scale: 1.06;
  --ease-tab-duration: 0.3s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

### CSS Classes
Class                       	Purpose
.ease-tabs-container        	Main glass container
.ease-tab	                    Tab label
.ease-tab-icon              	Tab icon
.ease-tab-label	                Tab text
.ease-tab-panels                Panels container
.ease-tab-panel	                Individual panel
.ease-features	                Features grid
.ease-feature               	Individual feature
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/scale-hover-tabs-glassmorphism-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50087