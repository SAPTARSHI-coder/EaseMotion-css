# Neon Pulse Ring - EaseMotion CSS Component

## 🌟 Overview
An interactive, glowing **Neon Pulse Ring** component with:
- ✨ **Breathing pulse animation** (cyan glow)
- ⚡ **Hover acceleration** + color shift to magenta
- 💥 **Click ripple burst** shockwave effect
- 🖱️ **Cursor tracking** (ring follows mouse movement)
- ♿ **Keyboard accessible** (Enter/Space to trigger)
- 📱 **Touch optimized** for mobile devices



---

## 🚀 Quick Start

### HTML

<div class="ease-neon-ring-container">
  <div class="ease-neon-ring"></div>
  <div class="ease-neon-ring-content">
    <span>✨</span>
    <p>Interactive Glow</p>
  </div>
</div>

### CSS

/* Include style.css */
@import url('style.css');
JavaScript
javascript
/* Include script.js for interactivity */
<script src="script.js"></script>

 ### CSS Classes
Class	                      Purpose
.ease-neon-ring-container	  Wrapper container
.ease-neon-ring	              The glowing ring element
.ease-neon-ring-content       Inner content container
.ripple (JS-added)	          Triggers ripple burst on click

###  Features Breakdown
1. Breathing Pulse
Slow, rhythmic scaling + opacity change
Cyan glow with layered shadows
Duration: 2.5s loop

2. Hover Interaction
Animation speed increases (0.8s)
Ring scales up (1.15x)
Color shifts: Cyan → Magenta
Glow intensifies

3. Click Ripple
Shockwave burst outward
Scales to 1.8x
Fades to white → transparent
Flash feedback on container

4. Cursor Tracking
Ring follows mouse position
Smooth transition (0.2s)
Uses CSS custom properties
Graceful fallback

5. Accessibility
Keyboard support (Enter/Space)
ARIA role + label
prefers-reduced-motion support
Touch device optimized

### Browser Support
Browser	Version
Chrome	90+
Firefox	88+
Safari	14+
Edge	90+
### File Structure

submissions/examples/neon-pulse-ring-bhakkti/
├── index.html    # Demo page
├── style.css     # All styles
├── script.js     # Interactivity
└── README.md     # Documentation
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
License: MIT
GSSoC 2026 Contribution

### Notes
Zero external dependencies
Pure CSS animations (JS only for interaction)
Fully responsive
Dark theme optimized