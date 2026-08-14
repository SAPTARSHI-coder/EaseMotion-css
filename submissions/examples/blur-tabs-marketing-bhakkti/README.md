# Blur-Entrance Tabs - Marketing Landing Page Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Blur-Entrance interaction transition, styled to complement Marketing Landing Page interface aesthetics. Vibrant, engaging, and conversion-focused.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Blur-Entrance** | Smooth blur-in animation on tab switch |
|  **Marketing Theme** | Vibrant, conversion-focused design |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 Marketing Panels** | Features, Pricing, Testimonials, ROI |

---

##  CSS Customization


:root {
  /* Colors - Marketing Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: linear-gradient(135deg, rgba(244, 114, 182, 0.12), rgba(139, 92, 246, 0.12));
  --ease-tab-hover-bg: rgba(244, 114, 182, 0.06);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #f472b6;
  --ease-tab-accent: #f472b6;
  
  /* Animation - Blur Entrance */
  --ease-tab-duration: 0.5s;
  --ease-tab-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

 ### CSS Classes
Class                       	Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon	                Tab icon
.ease-tab-label             	Tab text
.ease-tab-panels            	Panels container
.ease-tab-panel	                Individual panel
.ease-features              	Features grid
.ease-feature	                Individual feature
.ease-pricing	                Pricing grid
.ease-plan	                    Pricing plan
.ease-testimonials          	Testimonials grid
.ease-testimonial           	Individual testimonial
.ease-roi	                    ROI metrics grid
.ease-roi-item              	Individual ROI metric
## Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/blur-tabs-marketing-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50111