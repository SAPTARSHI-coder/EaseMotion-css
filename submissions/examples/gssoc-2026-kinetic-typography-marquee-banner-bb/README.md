# Kinetic Typography Infinite Marquee Banner (GSSoC 2026)

## 1. What does this do?
The **Kinetic Typography Infinite Marquee Banner** component implements high-performance continuous dual-direction ticker marquees featuring text-stroke variable font fills, hardware-accelerated GPU translation (`transform: translateX`), and hover-pause mechanics.

## 2. How is it used?
Link the stylesheet in your HTML head:
```html
<link rel="stylesheet" href="style.css">
```
Structure marquee track elements with duplicated inner content blocks for seamless infinite loops:
```html
<div class="marquee-track track-forward">
  <div class="marquee-content"><span>EASEMOTION CSS</span></div>
  <div class="marquee-content" aria-hidden="true"><span>EASEMOTION CSS</span></div>
</div>
```

## 3. Why is it useful?
- **Seamless Continuous Ticker Loop**: Avoids marquee stutter or jump gaps by utilizing twin duplicated track blocks.
- **Hardware-Accelerated 60 FPS Scroll**: Translates along GPU compositor layers without triggering browser reflows.
- **Modern Typography Showcase**: Ideal for landing page hero banners, client logo rolls, and festival announcements.
