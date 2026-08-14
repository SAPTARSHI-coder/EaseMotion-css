# Skew-Active Tabs - Marketing Landing Page Component

## 🚀 Overview
A pure CSS animated tabs component utilizing a smooth Skew-Active interaction transition, styled to complement Marketing Landing Page aesthetics. Fully responsive, keyboard accessible, and exposes custom parameters via CSS custom properties.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📐 **Skew-Active** | Active tab skews for dynamic, marketing-focused effect |
| ♿ **Keyboard Accessible** | Tab navigation + Enter/Space |
| 📱 **Fully Responsive** | Adapts to all screen sizes |
| 🎨 **CSS Variables** | Fully customizable |
| 🌙 **Reduced Motion** | Respects `prefers-reduced-motion` |
| 📊 **4 Marketing Panels** | Features, Pricing, Testimonials, ROI |
| 💰 **Pricing Plans** | Interactive pricing cards with CTA buttons |
| ⭐ **Testimonials** | Customer review cards |
| 📈 **ROI Metrics** | Impact statistics |

---

## 🚀 Quick Start

### HTML

<div class="ease-tabs-container" role="tablist">
  <input type="radio" name="tabs" id="tab1" checked />
  <label for="tab1" class="ease-tab" role="tab">
    <span class="ease-tab-icon">🎯</span>
    <span class="ease-tab-label">Features</span>
  </label>
  <!-- More tabs... -->
  
  <div class="ease-tab-panels">
    <div class="ease-tab-panel" id="panel1" role="tabpanel">
      <!-- Marketing content -->
    </div>
  </div>
</div>

### CSS Customization

:root {
  /* Colors - Marketing Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: linear-gradient(135deg, rgba(244, 114, 182, 0.15), rgba(139, 92, 246, 0.15));
  --ease-tab-hover-bg: rgba(244, 114, 182, 0.08);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #ec4899;
  
  /* Animation - Skew */
  --ease-tab-skew: -8deg;
  --ease-tab-duration: 0.4s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
### CSS Classes
Class                   	Purpose
.ease-tabs-container    	Main container
.ease-tab	                Tab label
.ease-tab-icon	            Tab icon
.ease-tab-label	            Tab text
.ease-tab-panels        	Panels container
.ease-tab-panel         	Individual panel
.ease-features          	Features grid
.ease-feature	            Individual feature
.ease-pricing	            Pricing grid
.ease-plan	                Pricing plan card
.ease-plan.popular	        Popular plan
.ease-badge             	Popular badge
.ease-testimonials      	Testimonials grid
.ease-testimonial       	Individual testimonial
.ease-roi	                ROI metrics grid
.ease-roi-item	            Individual ROI metric
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes (role="tab", role="tabpanel")
 Focus indicators
 Screen reader friendly
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/skew-active-tabs-marketing-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50097