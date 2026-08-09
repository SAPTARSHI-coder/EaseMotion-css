# Jello-Hover Tabs - Modern SaaS Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Jello-Hover interaction transition, styled to complement Modern SaaS interface aesthetics. Playful, professional, and engaging.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Jello-Hover** | Tabs wiggle with jello effect on hover |
|  **SaaS Theme** | Modern, professional design |
|  **Keyboard Accessible** | Tab navigation + Enter/Space |
|  **Fully Responsive** | Adapts to all screen sizes |
|  **CSS Variables** | Fully customizable |
|  **4 SaaS Panels** | Analytics, Team, Features, Pricing |

---

## CSS Customization

:root {
  /* Colors - Modern SaaS Theme */
  --ease-tab-bg: rgba(255, 255, 255, 0.03);
  --ease-tab-active-bg: rgba(6, 182, 212, 0.1);
  --ease-tab-hover-bg: rgba(6, 182, 212, 0.05);
  --ease-tab-text: rgba(255, 255, 255, 0.5);
  --ease-tab-active-text: #06b6d4;
  --ease-tab-accent: #06b6d4;
  
  /* Animation - Jello Hover */
  --ease-tab-duration: 0.6s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
 ### CSS Classes
Class	                        Purpose
.ease-tabs-container        	Main container
.ease-tab	                    Tab label
.ease-tab-icon	                Tab icon
.ease-tab-label             	Tab text
.ease-tab-panels            	Panels container
.ease-tab-panel             	Individual panel
.ease-metrics	                Metrics grid
.ease-metric	                Individual metric
.ease-team	                    Team grid
.ease-member	                Team member
.ease-features	                Features grid
.ease-feature               	Individual feature
.ease-pricing	                Pricing grid
.ease-plan	                    Pricing plan
### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/jello-tabs-saas-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #50227