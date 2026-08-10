# Scale-Hover Tabs - EaseMotion CSS Component

##  Overview
A pure CSS animated tabs component utilizing a smooth Scale-Hover interaction transition. Fully responsive, keyboard accessible, and exposes custom parameters via CSS custom properties.

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Scale-Hover** | Smooth scale effect on hover (1.08x default) |
|  **Accessible** | Keyboard navigation (Tab, Enter, Space) |
|  **Responsive** | Adapts to all screen sizes |
|  **Customizable** | CSS variables for everything |
|  **Reduced Motion** | Respects `prefers-reduced-motion` |
|  **Icon Support** | Icons with hover animation |
|  **4 Panels** | Home, Analytics, Settings, Profile |
|  **Smooth Transitions** | Bounce easing on all interactions |

---

##  Quick Start

### HTML

<div class="ease-tabs-container" role="tablist">
  <input type="radio" name="tabs" id="tab1" checked />
  <label for="tab1" class="ease-tab" role="tab">
    <span class="ease-tab-icon">🏠</span>
    <span class="ease-tab-label">Home</span>
  </label>
  
  <input type="radio" name="tabs" id="tab2" />
  <label for="tab2" class="ease-tab" role="tab">
    <span class="ease-tab-icon">📊</span>
    <span class="ease-tab-label">Analytics</span>
  </label>
  
  <!-- Add more tabs... -->
  
  <div class="ease-tab-panels">
    <div class="ease-tab-panel" id="panel1" role="tabpanel">
      <!-- Panel 1 content -->
    </div>
    <div class="ease-tab-panel" id="panel2" role="tabpanel">
      <!-- Panel 2 content -->
    </div>
  </div>
</div>

 ### CSS Customization
Override these CSS variables:


:root {
  /* Colors */
  --ease-tab-bg: rgba(255, 255, 255, 0.05);
  --ease-tab-active-bg: rgba(99, 102, 241, 0.2);
  --ease-tab-hover-bg: rgba(99, 102, 241, 0.1);
  --ease-tab-text: rgba(255, 255, 255, 0.7);
  --ease-tab-active-text: #ffffff;
  --ease-tab-accent: #6366f1;
  --ease-tab-border: rgba(255, 255, 255, 0.1);
  
  /* Sizing */
  --ease-tab-padding: 12px 24px;
  --ease-tab-font-size: 0.95rem;
  --ease-tab-gap: 8px;
  --ease-tab-radius: 12px;
  
  /* Animation */
  --ease-tab-scale: 1.08;
  --ease-tab-duration: 0.3s;
  --ease-tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}

### CSS Classes
Class	                        Purpose
.ease-tabs-container	        Main container
.ease-tab	                    Tab label
.ease-tab-icon	                Tab icon
.ease-tab-label	                Tab text
.ease-tab-panels	            Panels container
.ease-tab-panel	                Individual panel

### Accessibility
 Keyboard navigation (Tab, Enter, Space)
 ARIA attributes (role="tab", role="tabpanel")
 Focus indicators with :focus-visible
 Screen reader friendly
 prefers-reduced-motion support

###  Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

 File Structure

submissions/examples/scale-hover-tabs-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution
Closes #50092