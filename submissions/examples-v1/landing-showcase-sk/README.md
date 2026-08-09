# Landing Showcase

## What does this do?

A polished, multi-section landing page that demonstrates EaseMotion CSS animations, components, and utility classes working together in a real-world marketing layout.

## How is it used?

```html
<!-- Open demo.html directly in a browser -->
<!-- Key EaseMotion classes demonstrated: -->

<!-- Animations -->
<div class="ease-fade-in ease-slide-up ease-zoom-in ease-hover-lift ease-reveal">
  <!-- Animated content with scroll-reveal and hover effects -->
</div>

<!-- Components -->
<button class="ease-btn ease-btn-primary ease-btn-lg">Get Started</button>
<span class="ease-badge ease-badge-success">Live</span>
<div class="ease-skeleton ease-skeleton-text"></div>
<div class="ease-loader ease-loader-spin"></div>
<span class="ease-tooltip" data-tooltip="Help text">Hover me</span>
<div class="ease-progress"><div class="ease-progress-bar" style="width:72%"></div></div>

<!-- Utilities -->
<div class="ease-container ease-grid ease-grid-cols-3 ease-gap-6">
  <!-- Responsive grid layout -->
</div>

<!-- Animated text -->
<span class="ease-gradient-text">framework</span>
<span class="ease-gradient-text-animated">14.2 kB</span>
```

## Why is it useful?

This demo fits EaseMotion's philosophy by showing how human-readable classes compose into a complete, production-quality interface. It demonstrates:

- **Progressive enhancement**: All animations degrade gracefully without JavaScript
- **Zero-config composition**: Features section uses `ease-reveal` + `ease-fade-in` + `ease-hover-lift` on cards without conflicts
- **Component showcase**: Proves that 34 components are immediately usable together
- **Theming**: Works with EaseMotion's built-in dark mode out of the box
- **Responsive**: Uses EaseMotion's `ease-grid-cols-*` and `ease-container` responsive utilities

The landing page serves as both a marketing asset and a learning resource for new users exploring what EaseMotion CSS can do.
