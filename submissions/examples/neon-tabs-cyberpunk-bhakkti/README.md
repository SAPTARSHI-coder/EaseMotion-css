# Neon Glow Tabs - Cyberpunk Neon Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Neon Glow interaction transition, styled to complement Cyberpunk Neon interface aesthetics. Vibrant, edgy, and futuristic.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Neon Glow** | Active tab glows with cyberpunk neon effect |
|  **Cyberpunk Theme** | Vibrant, edgy design |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Cyberpunk Panels** | Neon, Cyber, Digital, Synth |

---

##  CSS Customization


:root {
  /* Colors - Cyberpunk Neon Theme */
  --ease-tab-bg: rgba(255, 0, 255, 0.03);
  --ease-tab-active-bg: rgba(255, 0, 255, 0.08);
  --ease-tab-hover-bg: rgba(255, 0, 255, 0.05);
  --ease-tab-text: rgba(255, 255, 255, 0.3);
  --ease-tab-active-text: #ff00ff;
  --ease-tab-accent: #ff00ff;
  
  /* Neon Glow Parameters */
  --ease-tab-neon-intensity: 0.4;
  --ease-tab-neon-blur: 25px;
  
  /* Animation - Neon Glow */
  --ease-tab-duration: 0.4s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

### CSS Classes
Class                   	Purpose
.ease-tabs-container	    Main container
.ease-tab	                Tab label
.ease-tab-icon          	Tab icon
.ease-tab-label         	Tab text
.ease-tab-panels        	Panels container
.ease-tab-panel	            Individual panel
.ease-features	            Features grid
.ease-feature	            Individual feature
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/neon-tabs-cyberpunk-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50131


