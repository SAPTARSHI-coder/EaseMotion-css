# Elastic Bounce Tabs - Responsive Dashboard Component

## 🏀 Overview
A pure CSS animated tabs component utilizing a smooth Elastic Bounce interaction transition, styled to complement Responsive Dashboard interface aesthetics. Playful, engaging, and responsive.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏀 **Elastic Bounce** | Active tab bounces with elastic effect (1.15x scale) |
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
  --ease-tab-active-bg: rgba(245, 158, 11, 0.1);
  --ease-tab-hover-bg: rgba(245, 158, 11, 0.05);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #f59e0b;
  --ease-tab-accent: #f59e0b;
  
  /* Animation - Elastic Bounce */
  --ease-tab-bounce-scale: 1.15;
  --ease-tab-bounce-duration: 0.6s;
  --ease-tab-bounce-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

### CSS Classes
Class                               	Purpose
.ease-tabs-container	                Main container
.ease-tab	                            Tab label
.ease-tab-icon                      	Tab icon
.ease-tab-label	                        Tab text
.ease-tab-panels	                    Panels container
.ease-tab-panel	                        Individual panel
.ease-metrics	                        Metrics grid
.ease-metric	                        Individual metric
.ease-trend.up                      	Positive trend
.ease-trend.down	                    Negative trend
## Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

## Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/elastic-bounce-tabs-dashboard-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50147