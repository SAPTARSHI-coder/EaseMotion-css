# Documentation: Gradient Glow Hover Card - Advanced Styling (#96876)

Comprehensive documentation guide, copy-paste HTML markup examples, CSS class naming conventions, custom CSS variable overrides, and accessibility/keyboard navigation notes for the EaseMotion **Gradient Glow Hover Card (Advanced Styling)** component (`#96876`), fully addressing issue `#81614`.

## 🚀 Overview & Features

- **Advanced Hover Glow & Elevation:** Utilizes multi-stop colored box-shadows (`#a855f7` and `#06b6d4`) with smooth upward translation upon hover or keyboard focus.
- **Glassmorphism Backdrop Blur:** High-performance translucent card styling with vibrant border transitions.
- **Keyboard Navigation Setup:** Clear `:focus-visible` high-contrast outlines and full tab support.

## 🛠️ Copy-Paste HTML Markup Example

```html
<div class="ease-glow-card em-card-advanced" role="region" aria-label="Advanced Gradient Glow Card Preview" tabindex="0">
    <div class="em-glow-content">
        <span class="em-glow-tag">ADVANCED GLOW // 01</span>
        <h2 class="em-glow-inner-title">NEON GRADIENT FLUX</h2>
        <p class="em-glow-inner-text">Dynamic hover transitions with multi-stop radial gradient lighting and smooth elevation shifts.</p>
        <button class="em-glow-btn" autofocus>EXPLORE GLOW</button>
    </div>
</div>
