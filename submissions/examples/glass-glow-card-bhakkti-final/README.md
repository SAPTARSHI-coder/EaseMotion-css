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
| 🌙 **Reduced Motion** | Respects `prefers-reduced-motion` |

---

## 🎨 CSS Customization


:root {
  /* Colors */
  --ease-glass-card-bg: rgba(255, 255, 255, 0.05);
  --ease-glass-card-border-color: rgba(255, 255, 255, 0.1);
  --ease-glass-card-glow-color: rgba(139, 92, 246, 0.15);
  
  /* Gradient Border Colors */
  --ease-glass-border-color-1: #f472b6;
  --ease-glass-border-color-2: #8b5cf6;
  --ease-glass-border-color-3: #06b6d4;
  --ease-glass-border-color-4: #f59e0b;
  
  /* Animation */
  --ease-glass-border-duration: 4s;
  --ease-glass-glow-duration: 3s;
}

### CSS Classes
Class	                        Purpose
.ease-glass-glow-card       	Main card container
.ease-glass-glow-card-border	Animated gradient border
.ease-glass-glow-card-glow	    Background glow effect
.ease-glass-glow-card-content	Card content wrapper
.ease-card-icon	                Card icon
.ease-card-stats	            Stats grid
.ease-stat	                    Individual stat
.ease-card-btn	                Card button

### Accessibility
 Focus indicators
 prefers-reduced-motion support
 Semantic HTML

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/glass-glow-card-bhakkti-final/
├── demo.html
├── style.css
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #55925