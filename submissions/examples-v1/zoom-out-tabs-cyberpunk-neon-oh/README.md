# 🌃 Zoom-Out Tabs Component Variant (Cyberpunk Neon Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions with a futuristic **Cyberpunk Neon** aesthetic. This component captures the essence of sci-fi interfaces with glowing neon accents, pulsing animations, and high-tech visual elements.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters and neon glow effects.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-cyberpunk-neon-oh/
├── demo.html     # Live preview with cyberpunk interface design
├── style.css     # Neon zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this cyberpunk tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      <span class="tab-icon">
        <svg><!-- Icon --></svg>
      </span>
      <span class="tab-text">Tab Label</span>
    </button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active" id="tab-panel-1" 
         role="tabpanel" 
         aria-labelledby="tab-1">
      <!-- Tab Content -->
    </div>
  </div>
</div>
```

## 🔧 CSS Custom Properties (Configurable Parameters)

The component exposes the following CSS Custom Properties for easy customization:

| Property | Default Value | Description |
|----------|--------------|-------------|
| `--tab-transition-duration` | `0.4s` | Animation transition duration |
| `--tab-transition-ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function |
| `--tab-zoom-scale` | `0.85` | Scale factor for zoom effect |

## 🎨 Color Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--cyber-cyan` | `#00f0ff` | Primary neon cyan color |
| `--cyber-magenta` | `#ff00ff` | Accent magenta color |
| `--cyber-lime` | `#39ff14` | Success/active lime color |
| `--cyber-yellow` | `#ffff00` | Warning yellow color |

## 🎮 Animation Variants

The component supports three distinct cyberpunk animation variants:

### 1. **Glitch**
```css
.tabs-glitch .tab-btn-mini.active {
  animation: glitch 0.5s ease infinite;
}
```
RGB split effect with position jitter for digital glitch aesthetic.

### 2. **Pulse**
```css
.tabs-pulse .tab-btn-mini.active {
  animation: neonPulse 1.5s ease-in-out infinite;
}
```
Pulsing neon glow effect with scale breathing.

### 3. **Scan**
```css
.tabs-scan .tab-btn-mini.active {
  animation: scanSweep 1.5s linear infinite;
}
```
Horizontal scan line sweep across the active tab.

## 🌟 Visual Features

1. **Neon Glow Effects**: Multiple layered box-shadows for authentic neon appearance
2. **Animated Border**: Gradient border glow animation on the container
3. **Scan Line Effect**: Moving scan line across panel backgrounds
4. **Status Indicators**: Pulsing status dots for system monitoring aesthetics
5. **Gradient Text**: Glowing text shadows for headings
6. **Orbitron Typography**: Futuristic font integration
7. **Grid-based Stats**: Cyberpunk-style data visualization panels

## 🎯 Why This Component is Useful

1. **Immersive Design**: Creates a futuristic, high-tech visual experience
2. **Pure CSS**: Zero JavaScript for core animations and effects
3. **Framework Agnostic**: Works with any web project
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance Optimized**: Hardware-accelerated CSS transforms
6. **Responsive**: Adapts to all screen sizes
7. **Accessibility**: Includes keyboard navigation and ARIA support

## 📱 Responsive Behavior

- Tab labels automatically hide on screens below 640px
- Stats grid collapses to single column on mobile
- Maintains neon glow effects across all breakpoints

## 🔗 Dependencies

- **Google Fonts** - Orbitron & Share Tech Mono loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to adjust colors and timing
3. Add your cyberpunk-themed content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*🖥️ Welcome to the future of web interfaces*
