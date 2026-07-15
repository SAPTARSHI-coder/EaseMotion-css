# Shimmer Sweep Popover

## Description
A pure CSS animated Popover featuring a smooth "Shimmer Sweep" interaction transition. Styled to complement modern Marketing Landing Page aesthetics, featuring a clean layout, prominent CTA shadows, and a sophisticated metallic shimmer effect.

## How to Use
Add the HTML structure with the `shimmer-trigger` and `shimmer-popover` classes, and include the `style.css` file. It relies entirely on CSS `:hover` and `:focus-within` to trigger the spring-like entry animation and the looping shimmer sweep.

```html
<div class="shimmer-trigger">
    <button class="marketing-btn" aria-haspopup="true">Hover Me</button>
    <div class="shimmer-popover">
        <div class="popover-title">Exclusive Offer</div>
        <div class="popover-body">Get 50% off your first month.</div>
    </div>
</div>
```

## Why it fits EaseMotion CSS
This component embodies the EaseMotion philosophy by providing a highly polished, attention-grabbing animation (often requiring JS libraries or complex SVG masks) using only pure CSS. It leverages `background-image` linear-gradients and `background-position` animations to achieve a lightweight, zero-dependency shimmer effect.

## Customization
Fully responsive and easily customizable via CSS variables. You can adjust the shimmer angle, speed, and popover colors:
```css
:root {
  --sh-bg-color: #ffffff;
  --sh-shimmer-color: rgba(255, 255, 255, 0.9);
  --sh-shimmer-angle: 110deg;
  --sh-shimmer-duration: 3s;
  --sh-popover-radius: 16px;
}
```
