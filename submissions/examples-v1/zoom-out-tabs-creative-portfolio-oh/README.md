# 🎨 Zoom-Out Tabs Component Variant (Creative Portfolio Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions, styled with an elegant **Creative Portfolio** aesthetic. This component is designed for creative professionals and agencies showcasing their work.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-creative-portfolio-oh/
├── demo.html     # Live preview with creative portfolio design
├── style.css     # Creative Portfolio zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Creative Portfolio tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Portfolio navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      Work
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
| `--port-primary` | `#c9a87c` | Primary gold/warm color |
| `--port-primary-dark` | `#a88b5e` | Darker gold accent |
| `--port-accent` | `#2d2d2d` | Dark accent color |
| `--port-warm` | `#d4a574` | Warm accent color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Float**
```css
.tabs-float .tab-btn-mini.active {
  animation: floatIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Gentle float-up effect.

### 2. **Reveal**
```css
.tabs-reveal .tab-btn-mini.active {
  animation: revealIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```
Smooth reveal from above.

### 3. **Glow**
```css
.tabs-glow .tab-btn-mini.active {
  animation: glowIn 0.5s ease forwards;
}
```
Subtle glow pulse effect.

## 🎨 Visual Features

1. **Portfolio Grid**: Elegant project showcase with hover overlays
2. **About Section**: Profile image with skills tags
3. **Services List**: Pricing and service cards
4. **Contact Form**: Clean contact form with inputs
5. **Playfair Display**: Elegant serif typography for headings
6. **Warm Color Palette**: Gold and cream tones
7. **Minimal Design**: Clean, sophisticated aesthetic

## 🎯 Why This Component is Useful

1. **Creative Ready**: Perfect for portfolios and creative agencies
2. **Pure CSS**: Zero JavaScript for core animations
3. **Elegant Design**: Sophisticated, minimal aesthetic
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Portfolio grid stacks to single column on mobile
- About section stacks vertically
- Contact section adapts to single column
- Maintains elegant appearance across all breakpoints

## 🔗 Dependencies

- **Google Fonts** - Playfair Display & Inter loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your portfolio content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*🎨 Built for creative portfolios*
