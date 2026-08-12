# Draw-Border Portfolio Popover

## Description
A pure CSS animated Popover featuring a highly elegant, smooth "Draw-Border Line" interaction transition. Styled to complement minimalist Creative Portfolio aesthetics, utilizing glassmorphism, soft shadows, and clean typography.

## How to Use
Add the HTML structure with the `portfolio-trigger` and `portfolio-popover` classes, and include the `style.css` file. It relies entirely on CSS `:hover` and `:focus-within` to trigger the border drawing animation around the popover edges and the bottom arrow.

```html
<div class="portfolio-trigger">
    <button class="creative-btn" aria-haspopup="true">Hover Me</button>
    <div class="portfolio-popover">
        <div class="portfolio-popover-border"></div>
        <div class="popover-header">Project Alpha</div>
        <div class="popover-body">An exploration of minimal interfaces.</div>
    </div>
</div>
```

## Why it fits EaseMotion CSS
This component embodies the animation-first philosophy by providing an elegant, continuous border-drawing effect (often requiring SVG `stroke-dasharray` animations or JavaScript libraries) using only pure CSS `linear-gradient` scaling. 

## Customization
Fully responsive and easily customizable via CSS variables. You can adjust the border color, drawing duration, and easing to fit your portfolio's branding perfectly:
```css
:root {
  --pt-border-color: #8b5cf6;
  --pt-border-width: 2px;
  --pt-draw-duration: 0.6s;
  --pt-draw-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --pt-popover-radius: 12px;
}
```
