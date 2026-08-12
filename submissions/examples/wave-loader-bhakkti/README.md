# Wave Loading Dots - EaseMotion CSS Component

## 🌊 Overview
A smooth, wave-like loading animation with dots that move up and down in sequence, creating an ocean wave effect.

### ✨ Features
- Pure CSS - Zero JavaScript
- Staggered animation for wave effect
- Customizable colors via CSS variables
- 3 sizes: sm, default, lg
- Responsive & accessible
- Respects `prefers-reduced-motion`

---

## 🚀 Quick Start

### HTML

<!-- Basic wave loader -->
<div class="ease-wave-loader">
  <span class="ease-wave-dot"></span>
  <span class="ease-wave-dot"></span>
  <span class="ease-wave-dot"></span>
  <span class="ease-wave-dot"></span>
  <span class="ease-wave-dot"></span>
</div>

<!-- With loading text -->
<div class="ease-wave-loader ease-wave-loader-with-text">
  <div class="ease-wave-loader">
    <span class="ease-wave-dot"></span>
    <span class="ease-wave-dot"></span>
    <span class="ease-wave-dot"></span>
    <span class="ease-wave-dot"></span>
    <span class="ease-wave-dot"></span>
  </div>
  <span class="ease-loader-text">Loading...</span>
</div>

### Sizes

<!-- Small -->
<div class="ease-wave-loader ease-wave-loader-sm">...</div>

<!-- Default -->
<div class="ease-wave-loader">...</div>

<!-- Large -->
<div class="ease-wave-loader ease-wave-loader-lg">...</div>


### CSS Customization
Override these CSS variables:


:root {
  --ease-wave-dot-size: 20px;
  --ease-wave-dot-color-1: #00ffff;
  --ease-wave-dot-color-2: #3b82f6;
  --ease-wave-dot-color-3: #8b5cf6;
  --ease-wave-dot-color-4: #a855f7;
  --ease-wave-dot-color-5: #ff00ff;
  --ease-wave-duration: 1.2s;
  --ease-wave-dot-gap: 12px;
}

###  CSS Classes
Class	                            Purpose
.ease-wave-loader	                Container for dots
.ease-wave-dot	                    Individual dot
.ease-wave-loader-sm	            Small size variant
.ease-wave-loader-lg	            Large size variant
.ease-wave-loader-with-text     	Adds loading text
.ease-loader-text	                Loading text style
###  Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

###  File Structure

submissions/examples/wave-loader-bhakkti/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution
Closes #55919