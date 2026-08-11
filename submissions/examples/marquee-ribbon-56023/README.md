# Diagonal Marquee Ribbon

## What does this do?
A decorative banner ribbon that sits diagonally across a container corner and infinitely scrolls text (e.g., "SALE", "NEW", "PRO").

## How is it used?
```html
<!-- Ensure the parent container has position: relative and overflow: hidden -->
<div class="product-card" style="position: relative; overflow: hidden;">
    <div class="ease-ribbon-wrapper">
        <div class="ease-ribbon">
            <div class="ease-ribbon-content">
                <span>BLACK FRIDAY SALE </span>
                <span>BLACK FRIDAY SALE </span>
                <span>BLACK FRIDAY SALE </span>
                <span>BLACK FRIDAY SALE </span>
            </div>
        </div>
    </div>
</div>
```

## Why does it fit EaseMotion CSS?
Normally, continuous marquee scrolling banners rely on JavaScript `requestAnimationFrame` loops or `<marquee>` tags (which are obsolete). This component solves it purely in CSS utilizing a seamless `translateX(-50%)` loop and structural wrapper logic to achieve a beautiful, 45-degree angled premium ribbon overlay.

## Tech Stack
- HTML
- CSS (No JavaScript)
