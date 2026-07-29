# Blur-Entrance Popover - Minimalist Tech Component

## 💻 Overview
A pure CSS animated popover utilizing a smooth Blur-Entrance interaction transition, styled to complement Minimalist Tech interface aesthetics. Clean, modern, and ultra-smooth.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 💫 **Blur-Entrance** | Popover blurs in on hover |
| 💻 **Minimalist Tech** | Clean, modern design |
| ♿ **Keyboard Accessible** | Tab + Enter for popover |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 🚀 **4 Tech Cards** | Code, DevOps, AI, Cloud |

---

## 🎨 CSS Customization


:root {
  /* Colors - Minimalist Tech Theme */
  --ease-popover-bg: rgba(255, 255, 255, 0.04);
  --ease-popover-border: rgba(255, 255, 255, 0.06);
  --ease-popover-shadow: rgba(0, 0, 0, 0.3);
  --ease-popover-text: #ffffff;
  --ease-popover-accent: #00d4ff;
  --ease-popover-btn-bg: rgba(0, 212, 255, 0.1);
  --ease-popover-btn-hover: rgba(0, 212, 255, 0.2);
  
  /* Sizing */
  --ease-popover-width: 280px;
  --ease-popover-padding: 20px;
  --ease-popover-radius: 12px;
  
  /* Animation - Blur Entrance */
  --ease-popover-duration: 0.5s;
  --ease-popover-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

### CSS Classes
Class	                    Purpose
.ease-popover-container	    Main container
.ease-popover-trigger	    Trigger wrapper
.ease-tech-card         	Tech card
.ease-popover	            Popover container
.ease-popover-content   	Popover content
.ease-popover-btn       	Popover button
### Accessibility
 Keyboard navigation (Tab + Enter)
 ARIA attributes (role="tooltip")
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/blur-entrance-popover-tech-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #46472