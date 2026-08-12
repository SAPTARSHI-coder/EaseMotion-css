# Scale-Hover Tabs - Responsive Dashboard Component

## 📊 Overview
A pure CSS animated tabs component utilizing a smooth Scale-Hover interaction transition, styled to complement Responsive Dashboard aesthetics. Fully responsive, keyboard accessible, and exposes custom parameters via CSS custom properties.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Scale-Hover** | Smooth scale effect on hover (1.08x) |
| ♿ **Keyboard Accessible** | Tab navigation + Enter/Space |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 🌙 **Reduced Motion** | Respects `prefers-reduced-motion` |
| 📊 **4 Dashboard Panels** | Overview, Users, Revenue, Performance |
| 📈 **Metrics Cards** | Interactive dashboard metrics |

---

## 🚀 Quick Start

### HTML
<div class="ease-tabs-container" role="tablist">
  <input type="radio" name="tabs" id="tab1" checked />
  <label for="tab1" class="ease-tab" role="tab">
    <span class="ease-tab-icon">📈</span>
    <span class="ease-tab-label">Overview</span>
  </label>
  <!-- More tabs... -->
  
  <div class="ease-tab-panels">
    <div class="ease-tab-panel" id="panel1" role="tabpanel">
      <!-- Dashboard content -->
    </div>
  </div>
</div>

### CSS Customization

:root {
  /* Colors - Dashboard Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: rgba(6, 182, 212, 0.12);
  --ease-tab-hover-bg: rgba(6, 182, 212, 0.06);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #06b6d4;
  
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
.ease-tab-panels            	Panels container
.ease-tab-panel             	Individual panel
.ease-metrics               	Metrics grid
.ease-metric                	Individual metric
.ease-trend.up              	Positive trend
.ease-trend.down            	Negative trend
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes (role="tab", role="tabpanel")
 Focus indicators
 Screen reader friendly
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/scale-hover-tabs-dashboard-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50091