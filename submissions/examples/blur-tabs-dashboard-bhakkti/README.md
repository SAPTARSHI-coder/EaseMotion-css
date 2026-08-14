# Blur-Entrance Tabs - Dashboard Analytics Component

## 📊 Overview
A pure CSS animated tabs component utilizing a smooth Blur-Entrance interaction transition, styled to complement Dashboard Analytics interface aesthetics. Smooth, modern, and data-driven.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 💫 **Blur-Entrance** | Smooth blur-in animation on tab switch |
| 📊 **Dashboard Theme** | Data-focused design |
| ♿ **Keyboard Accessible** | Tab navigation + Enter/Space |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 📊 **4 Dashboard Panels** | Overview, Users, Revenue, Performance |
| 📈 **KPI Metrics** | Interactive metric cards |

---

## 🎨 CSS Customization


:root {
  /* Colors - Dashboard Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: rgba(6, 182, 212, 0.1);
  --ease-tab-hover-bg: rgba(6, 182, 212, 0.05);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #06b6d4;
  --ease-tab-accent: #06b6d4;
  
  /* Animation - Blur Entrance */
  --ease-tab-duration: 0.5s;
  --ease-tab-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

###  CSS Classes
Class	                        Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon	                Tab icon
.ease-tab-label	                Tab text
.ease-tab-panels            	Panels container
.ease-tab-panel             	Individual panel
.ease-metrics	                Metrics grid
.ease-metric	                Individual metric
.ease-trend.up	                Positive trend
.ease-trend.down	            Negative trend
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/blur-tabs-dashboard-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50110
