# Skew-Active Tabs for Cyberpunk Neon Layouts

A pure CSS implementation of cyberpunk-themed tabs featuring a skewed geometry, glowing neon borders, and dynamic fill animations on active states.

## Usage

```html
<div class="ease-skew-tabs-cyberpunk" role="tablist">
    <button class="ease-skew-tab active" role="tab" aria-selected="true">
        <span>System</span>
    </button>
    <button class="ease-skew-tab" role="tab" aria-selected="false">
        <span>Network</span>
    </button>
</div>
```

## Features

- **Cyberpunk Aesthetic:** High-contrast neon colors on dark backgrounds with glowing shadows.
- **Skewed Geometry:** Built using `transform: skewX()` for a sharp, angular futuristic look, while keeping the text un-skewed.
- **Smooth Transitions:** Hover and active states feature cubic-bezier timing for the background fill and box-shadow enhancements.
- **Accessibility:** Includes `prefers-reduced-motion` support to disable transitions.
- **Responsiveness:** Automatically falls back to a stacked column layout on smaller viewports.
