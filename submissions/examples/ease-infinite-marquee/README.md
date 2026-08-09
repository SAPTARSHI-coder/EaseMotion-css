# Infinite CSS Marquee

A perfectly smooth, infinitely scrolling marquee designed for "Trusted By" partner logo sections on modern SaaS landing pages. This component achieves seamless looping using pure CSS without relying on heavy JavaScript libraries.

### Usage
```html
<div class="ease-marquee-container">
    <div class="ease-marquee-track">
        <!-- Original Set -->
        <div class="ease-marquee-item">Logo 1</div>
        <div class="ease-marquee-item">Logo 2</div>
        
        <!-- Duplicated Set for Seamless Loop (aria-hidden for screen readers) -->
        <div class="ease-marquee-item" aria-hidden="true">Logo 1</div>
        <div class="ease-marquee-item" aria-hidden="true">Logo 2</div>
    </div>
</div>
```

### Why is it useful?
Infinite marquees are a staple of modern web design. Often developers reach for complex JavaScript plugins, which bloat bundle sizes and can cause jank on lower-end devices. This pure CSS implementation leverages hardware-accelerated transforms (`translateX`) and a clever duplication trick to provide flawless, performant looping out of the box.
