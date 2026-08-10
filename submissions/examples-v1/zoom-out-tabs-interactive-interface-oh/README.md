# ⚡ Zoom-Out Tabs Component Variant (Interactive Interface Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions, styled with a vibrant **Interactive Interface** aesthetic. This component is designed for modern web applications with dynamic, engaging UI elements.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-interactive-interface-oh/
├── demo.html     # Live preview with interactive interface design
├── style.css     # Interactive Interface zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Interactive Interface tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Interactive navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      <span class="tab-icon"><svg><!-- Icon --></svg></span>
      Tab Label
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
| `--tab-transition-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--tab-zoom-scale` | `0.9` | Scale factor for zoom effect |

## 🎨 Color Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--int-pink` | `#ff2e63` | Primary pink color |
| `--int-cyan` | `#08d9d6` | Accent cyan color |
| `--int-yellow` | `#ffcd38` | Highlight yellow color |
| `--int-purple` | `#9d4edd` | Secondary purple color |
| `--int-green` | `#00f5a0` | Success green color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Splash**
```css
.tabs-splash .tab-btn-mini.active {
  animation: splashIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Scale splash with overshoot effect.

### 2. **Morph**
```css
.tabs-morph .tab-btn-mini.active {
  animation: morphIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
Rotation morph effect.

### 3. **Burst**
```css
.tabs-burst .tab-btn-mini.active {
  animation: burstIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Burst with glow effect.

## 🎨 Visual Features

1. **Interactive Cards**: Glowing hover effects and gradient accents
2. **Activity Feed**: Pulsing status indicators
3. **Discover Grid**: Icon-based category cards
4. **Favorites List**: Starred items with action buttons
5. **Profile Section**: Avatar with stats and edit button
6. **Dark Theme**: Vibrant dark interface aesthetic
7. **Syne Typography**: Modern bold font family

## 🎯 Why This Component is Useful

1. **Highly Interactive**: Perfect for engaging user interfaces
2. **Pure CSS**: Zero JavaScript for core animations
3. **Vibrant Design**: Eye-catching gradient and glow effects
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Grid layouts stack vertically on mobile
- Tab icons hide on small screens
- Maintains vibrant appearance across all breakpoints

## 🔗 Dependencies

- **Google Fonts** - Syne loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your interactive content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*⚡ Built for interactive experiences*
