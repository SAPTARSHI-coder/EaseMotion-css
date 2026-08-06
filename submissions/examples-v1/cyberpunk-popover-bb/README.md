# Cyberpunk Neon Draw-Border Popover

## Description
A highly customizable, zero-JS Cyberpunk Neon popover that utilizes background gradient scaling to create a seamless draw-border animation upon hover or focus.

## How to Use
Add the HTML structure with the `cyberpunk-trigger` and `cyberpunk-popover` classes, and include the `style.css` file. It relies purely on CSS `:hover` and `:focus-within` pseudo-classes to trigger the animation.

```html
<div class="cyberpunk-trigger">
    <button class="cyber-btn" aria-haspopup="true">Hover Me</button>
    <div class="cyberpunk-popover">
        <div class="cyberpunk-popover-border"></div>
        <div class="popover-content-title">System Alert</div>
        <div class="popover-content-text">Draw-border animation initiated.</div>
    </div>
</div>
```

## Why it fits EaseMotion CSS
It strictly adheres to the animation-first, zero-dependency philosophy by implementing complex multi-directional border drawing logic entirely through pure CSS and highly customizable CSS variables, making it plug-and-play without any JavaScript overhead.

## Customization
You can easily override the default variables on the parent container to customize the colors, timings, and dimensions:
```css
.custom-colors {
    --cy-neon-primary: #f90;
    --cy-neon-secondary: #f00;
    --cy-draw-duration: 0.6s;
}
```
