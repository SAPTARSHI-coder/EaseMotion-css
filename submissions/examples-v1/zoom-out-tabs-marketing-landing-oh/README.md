# 📈 Zoom-Out Tabs Component Variant (Marketing Landing Page Style)

## 📋 Component Overview

A pure CSS animated **Tabs** component featuring smooth **Zoom-Out** interaction transitions, styled to complement **Marketing Landing Page** interface aesthetics. This component is designed for high-converting landing pages with features, pricing, testimonials, and FAQ sections.

This component integrates seamlessly into the EaseMotion CSS library framework, utilizing CSS Custom Properties for configurable animation parameters.

## 🛠️ Folder & Structural Architecture

```
submissions/examples/zoom-out-tabs-marketing-landing-oh/
├── demo.html     # Live preview with marketing landing design
├── style.css     # Marketing Landing zoom-out tab animation styles
└── README.md     # Production integration documentation
```

## ⚡ Integration & Usage Blueprint

Deploy this Marketing Landing Page tabs component by embedding the following skeletal DOM structure:

```html
<div class="tabs-container">
  <div class="tabs-nav" role="tablist" aria-label="Marketing navigation tabs">
    <button class="tab-btn active" role="tab" 
            aria-selected="true" 
            aria-controls="tab-panel-1" 
            id="tab-1" 
            data-tab="1">
      Features
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
| `--mkt-primary` | `#f97316` | Primary orange color |
| `--mkt-secondary` | `#8b5cf6` | Secondary purple color |
| `--mkt-accent` | `#06b6d4` | Accent cyan color |

## 🎯 Animation Variants

The component supports three distinct animation variants:

### 1. **Expand**
```css
.tabs-expand .tab-btn-mini.active {
  animation: expandIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Scale-up with subtle overshoot.

### 2. **Reveal**
```css
.tabs-reveal .tab-btn-mini.active {
  animation: revealIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```
Slide-down reveal with fade.

### 3. **Pop**
```css
.tabs-pop .tab-btn-mini.active {
  animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
Spring pop effect with bounce.

## 🎨 Visual Features

1. **Features Grid**: Icon-based feature cards with hover effects
2. **Pricing Tables**: Three-tier pricing cards with featured highlight
3. **Testimonials**: Customer review cards with avatars
4. **FAQ Section**: Accordion-style frequently asked questions
5. **Gradient Accents**: Orange to purple gradient highlights
6. **Manrope Typography**: Modern marketing font family
7. **Hover States**: Interactive cards with lift effects

## 🎯 Why This Component is Useful

1. **High-Converting**: Perfect for marketing and landing pages
2. **Pure CSS**: Zero JavaScript for core animations
3. **Sales Ready**: Features, pricing, testimonials all included
4. **Highly Customizable**: CSS Custom Properties for easy theming
5. **Performance**: Hardware-accelerated transforms for smooth 60fps
6. **Accessible**: Keyboard navigation and ARIA support
7. **Responsive**: Adapts gracefully to all screen sizes

## 📱 Responsive Behavior

- Grid layouts stack vertically on mobile
- Featured pricing card normalizes size on small screens
- Tab layout adapts to smaller viewports

## 🔗 Dependencies

- **Google Fonts** - Manrope loaded via CDN

## 🚀 Quick Start

1. Copy the `demo.html`, `style.css`, and the script section into your project
2. Customize the CSS Custom Properties to match your brand
3. Add your marketing content inside the `.tab-panel` elements
4. Initialize the tab switching with the provided JavaScript

## 📄 License

This component is submitted as part of the GSSoC '26 initiative and follows the EaseMotion CSS contribution guidelines.

---

*📈 Built for high-converting landing pages*
