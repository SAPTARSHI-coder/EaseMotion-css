# Blur-Entrance Tabs - Creative Portfolio Component

## 🎨 Overview
A pure CSS animated tabs component utilizing a smooth Blur-Entrance interaction transition, styled to complement Creative Portfolio interface aesthetics. Artistic, elegant, and inspiring.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 💫 **Blur-Entrance** | Smooth blur-in animation on tab switch |
| 🎨 **Creative Portfolio** | Artistic, design-focused theme |
| ♿ **Keyboard Accessible** | Tab navigation + Enter/Space |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 📊 **4 Portfolio Panels** | Design, Illustration, Photography, Video |

---

## 🎨 CSS Customization


:root {
  /* Colors - Creative Portfolio Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: linear-gradient(135deg, rgba(244, 114, 182, 0.12), rgba(139, 92, 246, 0.12));
  --ease-tab-hover-bg: rgba(139, 92, 246, 0.06);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #8b5cf6;
  
  /* Animation - Blur Entrance */
  --ease-tab-duration: 0.5s;
  --ease-tab-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

### CSS Classes
Class	                            Purpose
.ease-tabs-container	            Main container
.ease-tab	                        Tab label
.ease-tab-icon	                    Tab icon
.ease-tab-label                 	Tab text
.ease-tab-panels	                Panels container
.ease-tab-panel	                    Individual panel
.ease-portfolio	                    Portfolio grid
.ease-portfolio-item	            Individual portfolio item
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/blur-tabs-portfolio-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50121