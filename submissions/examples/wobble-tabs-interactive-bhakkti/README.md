# Wobble-Focus Tabs - Interactive Interface Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Wobble-Focus interaction transition, styled to complement Interactive Interface aesthetics. Playful, engaging, and fun.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Wobble-Focus** | Tabs wobble with focus effect on hover |
|  **Interactive Theme** | Engaging, playful design |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Interactive Panels** | Creative, Interactive, Gamified, AI-Powered |

---

##  CSS Customization


:root {
  /* Colors - Interactive Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: linear-gradient(135deg, rgba(244, 114, 182, 0.12), rgba(139, 92, 246, 0.12));
  --ease-tab-hover-bg: rgba(139, 92, 246, 0.06);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #8b5cf6;
  
  /* Animation - Wobble Focus */
  --ease-tab-duration: 0.6s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

 ### CSS Classes
Class	                        Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon                 	Tab icon
.ease-tab-label             	Tab text
.ease-tab-panels            	Panels container
.ease-tab-panel	                Individual panel
.ease-features	                Features grid
.ease-feature	                Individual feature
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/wobble-tabs-interactive-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50226