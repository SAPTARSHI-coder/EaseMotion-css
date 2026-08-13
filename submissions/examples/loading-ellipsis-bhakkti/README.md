# CSS Loading Ellipsis - EaseMotion

##  Description
A pure CSS loading ellipsis with three animated dots that grow and fade in sequence. Perfect for loading states and progress indicators.

##  Features

-  **Three Dots** - Grow and fade in sequence
-  **Pure CSS** - No JavaScript required
-  **Size Variants** - Small, Default, Large
-  **Custom Colors** - Easy theming with CSS variables
-  **Speed Control** - Adjustable animation duration
-  **Accessible** - ARIA labels + reduced motion support
-  **Responsive** - Works on all screen sizes

##  How It Works

Each dot animates with a delay between them:

@keyframes ellipsis-grow {
  0%   { transform: scale(0.4); opacity: 0.3; }
  20%  { transform: scale(1);   opacity: 1; }
  40%  { transform: scale(1);   opacity: 1; }
  60%  { transform: scale(0.4); opacity: 0.3; }
  100% { transform: scale(0.4); opacity: 0.3; }
}

## CSS Custom Properties
Variable	Default 	Description
--dot-size	12px	    Size of each dot
--dot-gap	8px	        Space between dots
--dot-color	#6366f1	Dot color
--dot-duration	1.6s	Animation duration
--dot-delay	    0.2s	Delay between dots
## Usage
### Basic Usage
html
<div class="loading-ellipsis" role="status" aria-label="Loading">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
## With Text
html
<div class="loading-ellipsis-wrapper">
  <span class="loading-text">Loading</span>
  <div class="loading-ellipsis" role="status" aria-label="Loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>
### Size Variants
html
<!-- Small -->
<div class="loading-ellipsis loading-ellipsis-sm">...</div>

<!-- Large -->
<div class="loading-ellipsis loading-ellipsis-lg">...</div>
### Custom Colors
html
<div class="loading-ellipsis" style="--dot-color: #ff6b6b;">...</div>
### Faster Speed
html
<div class="loading-ellipsis" style="--dot-duration: 1s; --dot-delay: 0.15s;">...</div>
### File Structure

loading-ellipsis-bhakkti/
├── demo.html     # Showcase with variants
├── style.css     # All styles + animations
└── README.md     # Documentation

### Related Issue
Closes #70230

GSSoC-26 Contribution
Labels: GSSoC-26, good first issue, level:beginner, type:feature

MIT Licence © 2026