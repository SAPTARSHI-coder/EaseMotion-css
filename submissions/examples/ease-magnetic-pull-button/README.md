# Magnetic Pull Button

A sleek, modern interactive button that simulates a "magnetic pull" effect when the cursor is nearby. This premium tactile feel is achieved purely through CSS using a hidden grid of hover zones, requiring absolutely zero JavaScript.

### Usage
```html
<div class="ease-magnetic-container">
    <div class="ease-magnetic-zone top-left"></div>
    <div class="ease-magnetic-zone top-center"></div>
    <!-- ... (9 zones total) ... -->
    <div class="ease-magnetic-zone bottom-right"></div>
    
    <button class="ease-magnetic-btn">Hover Me</button>
</div>
```

### Why is it useful?
It provides an advanced micro-interaction commonly found on high-end awwwards-winning websites, but implements it purely in CSS. This completely eliminates the need for expensive JS event listeners (`mousemove`), adhering perfectly to EaseMotion's zero-JS philosophy while delivering a wow factor.
