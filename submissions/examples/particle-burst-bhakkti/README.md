# Particle Burst Button - EaseMotion CSS Component

##  Overview
A button that, when clicked, bursts into colorful particles that explode outward and fade away. Fun, engaging, and perfect for celebrations! 🎉

---

##  Features

| Feature | Description |
|---------|-------------|
|  **Particle Explosion** | 35 colorful particles burst outward |
|  **Random Colors** | 18+ vibrant colors from a curated palette |
|  **Multiple Shapes** | Circle, Square, Triangle, Star |
|  **Random Sizes** | 6-18px particles |
|  **Interactive** | Hover scale, click feedback |
|  **Accessible** | Keyboard support (Enter/Space) |
|  **Touch Optimized** | Works on mobile devices |
|  **Reduced Motion** | Respects `prefers-reduced-motion` |

---

##  Visual Behavior

### Default State
- Glowing gradient button (pink to purple)
- Smooth shadow effect

### On Hover
- Scales up (1.08x)
- Glow intensifies

### On Click
- Button squishes (0.92x)
- 35 particles burst outward
- Particles have random:
  - Colors (18+ options)
  - Sizes (6-18px)
  - Shapes (circle, square, triangle, star)
  - Directions (360° spread)
  - Speeds (random distances)

---

##  Quick Start

### HTML

<button class="ease-particle-btn" id="particleBtn">
  <span class="ease-btn-text">🎉 Click Me!</span>
</button>

<script src="script.js"></script>

### CSS

/* Include style.css */
@import url('style.css');

### CSS Customization

:root {
  --ease-particle-btn-bg: linear-gradient(135deg, #f472b6, #8b5cf6);
  --ease-particle-btn-color: #ffffff;
  --ease-particle-btn-radius: 50px;
  --ease-particle-btn-padding: 16px 48px;
  --ease-particle-btn-font-size: 1.2rem;
  --ease-particle-duration: 1.2s;
}
### CSS Classes
Class                   	Purpose
.ease-particle-btn	        Main button
.ease-btn-text           	Button text
.ease-particle-container	Particle container
.ease-particle	            Individual particle
.ease-particle.square   	Square shape
.ease-particle.triangle	    Triangle shape
.ease-particle.star	        Star shape
### JavaScript Configuration

const CONFIG = {
  particleCount: 35,           // Number of particles
  colors: [...],               // Array of colors
  particleSize: { min: 6, max: 18 },
  duration: 1200,              // ms
  spread: 300,                 // px
  shapes: ['circle', 'square', 'triangle', 'star'],
};
### Accessibility
 Keyboard navigation (Enter/Space)
 ARIA label
 Focus indicators
 prefers-reduced-motion support

### Browser Support
Chrome 90+ · Firefox 88+ · Safari 14+ · Edge 90+

### File Structure

submissions/examples/particle-burst-bhakkti/
├── demo.html
├── style.css
├── script.js
└── README.md
### Credits
Author: Bhakkti Gautam (@BhakktiGautam)
Project: EaseMotion CSS
GSSoC 2026 Contribution

Closes #55926