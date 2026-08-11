# 📊 Zoom-Out Tabs Component Variant (Dashboard Analytics Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions, styled to complement **Dashboard Analytics** interface aesthetics. This component is designed for data-driven dashboards with metrics, charts, and reports.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-dashboard-analytics-oh/
├── demo.html     # Live preview with dashboard analytics design
├── style.css     # Dashboard Analytics zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Dashboard Analytics tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Dashboard navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      Overview
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
| `--dash-primary` | `#3182ce` | Primary blue color |
| `--dash-secondary` | `#38a169` | Secondary green (positive) |
| `--dash-accent` | `#805ad5` | Accent purple color |
| `--dash-danger` | `#e53e3e` | Danger/negative red color |
| `--dash-warning` | `#d69e2e` | Warning yellow color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Fade**
```css
.tabs-fade .tab-btn-mini.active {
  animation: fadeIn 0.5s ease forwards;
}
```
Simple opacity fade with scale.

### 2. **Slide**
```css
.tabs-slide .tab-btn-mini.active {
  animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Slide-in from left with fade.

### 3. **Pulse**
```css
.tabs-pulse .tab-btn-mini.active {
  animation: tabPulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Scale pulse effect.

## 🎨 Visual Features

1. **Stats Grid**: KPI cards with value, label, and change indicator
2. **Chart Preview**: Bar chart visualization
3. **Revenue Breakdown**: Progress bars for revenue sources
4. **Metrics List**: Horizontal progress bar metrics
5. **Reports List**: Document cards with status badges
6. **IBM Plex Sans Typography**: Professional dashboard font

## 🎯 Why This Component is Useful

1. **Data-Driven**: Perfect for analytics and reporting dashboards
2. **Pure CSS**: Zero JavaScript for core animations
3. **KPI Ready**: Stats, charts, and metrics all included
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Stats grid adjusts from 4 to 2 to 1 column
- Metric labels stack on mobile
- Tab layout adapts to smaller viewports

## 🔗 Dependencies

- **Google Fonts** - IBM Plex Sans loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your dashboard content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*📊 Built for data-driven decisions*
