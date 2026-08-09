# ⚡ Zoom-Out Tabs Component Variant (Modern SaaS Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions, styled with a premium **Modern SaaS** dark aesthetic. This component is designed for sophisticated SaaS applications with dashboards, projects, tasks, and team management.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-modern-saas-oh/
├── demo.html     # Live preview with modern SaaS design
├── style.css     # Modern SaaS zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Modern SaaS tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Modern SaaS navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      Dashboard
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
| `--saas-primary` | `#6366f1` | Primary indigo color |
| `--saas-secondary` | `#8b5cf6` | Secondary purple color |
| `--saas-green` | `#10b981` | Success green color |
| `--saas-orange` | `#f59e0b` | Warning orange color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Zoom**
```css
.tabs-zoom .tab-btn-mini.active {
  animation: zoomPulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Scale pulse with subtle overshoot.

### 2. **Bounce**
```css
.tabs-bounce .tab-btn-mini.active {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
Spring bounce with overshoot.

### 3. **Glow**
```css
.tabs-glow .tab-btn-mini.active {
  animation: glowIn 0.5s ease forwards;
}
```
Glow pulse effect.

## 🎨 Visual Features

1. **Dashboard Widgets**: Stats cards and activity charts
2. **Projects List**: Project cards with progress rings
3. **Tasks List**: Task items with checkboxes and priority badges
4. **Team Grid**: Team member cards with status indicators
5. **Dark Mode**: Premium dark theme aesthetic
6. **Geist Typography**: Modern tech font family
7. **Gradient Accents**: Purple to indigo gradients

## 🎯 Why This Component is Useful

1. **Premium SaaS Ready**: Modern dark theme for sophisticated applications
2. **Pure CSS**: Zero JavaScript for core animations
3. **Full Feature Set**: Dashboard, projects, tasks, team all included
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Dashboard widgets stack vertically on mobile
- Team grid adjusts from 4 to 2 to 1 column
- Tab layout adapts to smaller viewports

## 🔗 Dependencies

- **Google Fonts** - Geist loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your SaaS content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*⚡ Built for modern SaaS products*
