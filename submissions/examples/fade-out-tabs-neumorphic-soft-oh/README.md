# 🧊 Fade-Out Tabs Component Variant (Neumorphic Soft Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Fade-Out** interaction transitions, styled with a beautiful **Neumorphic Soft** aesthetic. This component uses soft shadows to create a 3D embossed/debossed effect with fade animations.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/fade-out-tabs-neumorphic-soft-oh/
├── demo.html     # Live preview with neumorphic design
├── style.css     # Neumorphic Soft fade-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Neumorphic Soft tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Neumorphic navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      Home
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
| `--tab-transition-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |
| `--tab-fade-opacity` | `0` | Opacity for inactive tabs |

## 🎨 Color Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--neu-bg` | `#e0e5ec` | Background color (same as surface for neumorphic) |
| `--neu-shadow-light` | `#ffffff` | Light shadow color |
| `--neu-shadow-dark` | `#a3b1c6` | Dark shadow color |
| `--neu-primary` | `#6c63ff` | Primary accent purple |
| `--neu-secondary` | `#a78bfa` | Secondary accent |
| `--neu-success` | `#48bb78` | Success green color |
| `--neu-warning` | `#ecc94b` | Warning yellow color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Soft**
```css
.tabs-soft .tab-btn-mini.active {
  animation: softFade 0.4s ease forwards;
}
```
Fade with subtle blur effect.

### 2. **Blur**
```css
.tabs-blur .tab-btn-mini.active {
  animation: blurFade 0.5s ease forwards;
}
```
Fade with blur and scale effect.

### 3. **Depth**
```css
.tabs-depth .tab-btn-mini.active {
  animation: depthFade 0.4s ease forwards;
}
```
Fade with 3D depth translation.

## 🎨 Visual Features

1. **Soft 3D Cards**: Neumorphic cards with dual shadows
2. **Calendar View**: Soft calendar with neumorphic day cells
3. **Messages List**: Message cards with avatar badges
4. **Settings Toggle**: Neumorphic toggle switch
5. **Inset Panels**: Tab panels with pressed-in effect
6. **Nunito Typography**: Rounded, friendly font family
7. **Dual Shadows**: Light and dark shadows for 3D effect

## 🎯 Why This Component is Useful

1. **Modern UI Trend**: Neumorphic design is popular in modern interfaces
2. **Pure CSS**: Zero JavaScript for core animations and effects
3. **Tactile Feel**: Soft shadows create depth and dimension
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Cards grid stacks to single column on mobile
- Calendar remains functional on all sizes
- Tab layout adapts to smaller viewports

## 🔗 Dependencies

- **Google Fonts** - Nunito loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your design
3. Add your content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*🧊 Built for soft, tactile interfaces*
