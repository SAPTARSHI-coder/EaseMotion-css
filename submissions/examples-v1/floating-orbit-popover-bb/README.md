# Floating Orbit Popover

## Description
A pure CSS animated Popover featuring a smooth "Floating Orbit" interaction transition. Styled to complement minimalist Creative Portfolio interface aesthetics, utilizing glassmorphism and subtle ring animations.

## How to Use
Add the HTML structure with the `orbit-trigger` and `orbit-popover` classes, and include the `style.css` file. It relies purely on CSS `:hover` and `:focus-within` to trigger the animation. 

```html
<div class="orbit-trigger">
    <button class="portfolio-btn" aria-haspopup="true">Hover Me</button>
    <div class="orbit-popover">
        <div class="orbit-connector"></div>
        <div class="popover-title">Alex Creative</div>
        <div class="popover-subtitle">UX Designer</div>
    </div>
</div>
```

## Why it fits EaseMotion CSS
This component adheres to the zero-dependency, animation-first philosophy by using CSS keyframes and pseudo-elements to create a highly complex-looking multi-layered animation (floating body + counter-rotating outer rings) seamlessly without JavaScript.

## Customization
Fully responsive and exposes CSS variables for theming, timing, and dimensions:
```css
.custom-theme {
  --orbit-ring-color: rgba(255, 255, 255, 0.15);
  --orbit-ring-active: rgba(200, 180, 255, 0.6);
  --orbit-speed: 16s;
  --orbit-float-speed: 4s;
  --orbit-popover-bg: rgba(20, 20, 25, 0.7);
  --orbit-text: #f0f0f0;
  --orbit-radius: 16px;
  --orbit-blur: 20px;
  --orbit-accent: #c8b4ff;
}
```
