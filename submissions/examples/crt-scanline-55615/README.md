# Retro CRT Monitor Scanline & Flicker Overlay

## What does this do?
A highly stylized overlay component that gives any image, video, or container a retro 80s/90s CRT monitor vibe. It uses CSS `repeating-linear-gradient` for scanlines and subtle `opacity` keyframes for screen flicker.

## How is it used?
```html
<div class="ease-crt-container">
    <!-- Your content goes here (e.g., text, images, videos) -->
    <h1>> SYSTEM BOOT_</h1>
</div>
```

## Why does it fit EaseMotion CSS?
It relies purely on the `::after` pseudo-element and `linear-gradient` backgrounds to draw scanlines without any heavy image assets. Combined with `pointer-events: none` and a lightweight opacity animation, it provides an incredible retro vibe while staying incredibly performant and CSS-only.

## Tech Stack
- HTML
- CSS (No JavaScript)
