# Glassmorphic Glow Card - EaseMotion CSS Component

## ✨ Overview
A premium glassmorphic card with a rotating animated gradient border and a subtle glow effect. Perfect for modern SaaS, dashboards, and portfolio designs.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🪟 **Glass Effect** | Frosted glass with backdrop blur |
| 🎨 **Animated Border** | Rotating conic gradient border |
| 💫 **Glow Effect** | Soft neon aura on hover |
| 📊 **Stats Cards** | Interactive metrics display |
| 🖱️ **Hover Animation** | Card lifts, glow intensifies |
| 🎯 **Responsive** | Adapts to all screen sizes |
| 🌙 **Reduced Motion** | Respects `prefers-reduced-motion` |

---

## 🎨 Visual Behavior

### Default State
- Frosted glass background with blur
- Static gradient border (not rotating)
- Subtle shadow

### On Hover
- Card lifts (translateY -8px, scale 1.02)
- Border animation starts rotating
- Glow background pulses
- Stats highlight with scale effect
- Icon floats up

### Border Animation
- Conic gradient with 4 colors
- Smooth rotation (4s loop)
- Colors: Pink → Purple → Cyan → Amber

---

## 🚀 Quick Start

### HTML

<div class="ease-glass-glow-card">
  <div class="ease-glass-glow-card-border"></div>
  <div class="ease-glass-glow-card-glow"></div>
  <div class="ease-glass-glow-card-content">
    <div class="ease-card-icon">✨</div>
    <h2>Premium Glass Card</h2>
    <p>Your content here...</p>
    <button class="ease-card-btn">Get Started →</button>
  </div>
</div>

### CSS Customization

:root {
  /* Colors */
  --ease-glass-card-bg: rgba(255, 255, 255, 0.05);
  --ease-glass-card-border-color: rgba(255, 255, 255, 0.1);
  --ease-glass-card-text: rgba(255, 255, 255, 0.8);
  --ease-glass-card-subtext: rgba(255, 255, 255, 0.5);
  --ease-glass-card-glow-color: rgba(139, 92, 246, 0.15);
  
  /* Gradient Border Colors */
  --ease-glass-border-color-1: #f472b6;
  --ease-glass-border-color-2: #8b5cf6;
  --ease-glass-border-color-3: #06b6d4;
  --ease-glass-border-color-4: #f59e0b;
  
  /* Sizing */
  --ease-glass-card-radius: 20px;
  --ease-glass-card-padding: 32px;
  
  /* Animation */
  --ease-glass-border-duration: 4s;
  --ease-glass-glow-duration: 3s;
}
### CSS Classes
Class	                        Purpose
.ease-glass-glow-card	        Main card container
.ease-glass-glow-card-border	Animated gradient border
.ease-glass-glow-card-glow	    Background glow effect
.ease-glass-glow-card-content	Card content wrapper
.ease-card-icon             	Card icon (floats on hover)
.ease-card-stats            	Stats grid container
.ease-stat                  	Individual stat
.ease-card-btn              	Card CTA button
### Accessibility
Focus indicators on interactive elements
 prefers-reduced-motion support
 Semantic HTML structure
 Keyboard navigable

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/glass-glow-card-bhakkti-v2/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #55925