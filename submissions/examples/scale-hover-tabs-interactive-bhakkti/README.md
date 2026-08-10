# Scale-Hover Tabs - Interactive Interface Component

## 🎯 Overview
A pure CSS animated tabs component utilizing a smooth Scale-Hover interaction transition, styled to complement interactive interface aesthetics. Fully responsive, keyboard accessible, and exposes custom parameters via CSS custom properties.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Scale-Hover** | Smooth 1.1x scale effect with bounce easing |
| ♿ **Keyboard Accessible** | Tab navigation + Enter/Space |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 🌙 **Reduced Motion** | Respects `prefers-reduced-motion` |
| 🖼️ **Icon Animation** | Scale + rotate on hover |
| 📊 **5 Panels** | Dashboard, Analytics, Performance, Gaming, AI Hub |
| ✨ **Stats Cards** | Interactive stats in each panel |

---

## 🚀 Quick Start

### HTML

<div class="ease-tabs-container" role="tablist">
  <input type="radio" name="tabs" id="tab1" checked />
  <label for="tab1" class="ease-tab" role="tab">
    <span class="ease-tab-icon">🚀</span>
    <span class="ease-tab-label">Dashboard</span>
  </label>
  <!-- More tabs... -->
  
  <div class="ease-tab-panels">
    <div class="ease-tab-panel" id="panel1" role="tabpanel">
      <!-- Content -->
    </div>
  </div>
</div>

### CSS Customization

:root {
  /* Colors - Interactive Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: linear-gradient(135deg, rgba(244, 114, 182, 0.2), rgba(139, 92, 246, 0.2));
  --ease-tab-hover-bg: rgba(139, 92, 246, 0.1);
  --ease-tab-text: rgba(255, 255, 255, 0.6);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #8b5cf6;
  --ease-tab-border: rgba(255, 255, 255, 0.06);
  
  /* Animation */
  --ease-tab-scale: 1.1;
  --ease-tab-duration: 0.4s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

###  CSS Classes
Class                       	Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon	                Tab icon
.ease-tab-label	                Tab text
.ease-tab-panels            	Panels container
.ease-tab-panel	                Individual panel
.ease-stats                 	Stats grid
.ease-stat                  	Individual stat

###  Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes (role="tab", role="tabpanel")
 Focus indicators
 Screen reader friendly
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/scale-hover-tabs-interactive-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution
Closes #50094

