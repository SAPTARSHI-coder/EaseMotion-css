# Native Scroll-Driven Multi-Layer Parallax

A true parallax effect requires a foreground, midground, and background to scroll at completely different speeds as the user moves down the page, simulating physical depth.

### Usage
```html
<header class="ease-parallax-header">
    <div class="parallax-layer parallax-bg"></div>
    <div class="parallax-layer parallax-mid"><h1>Title</h1></div>
    <div class="parallax-layer parallax-fg"></div>
</header>
```

### Why is it useful?
Historically, implementing true multi-layer parallax without extreme jitter on mobile devices required complex JavaScript `requestAnimationFrame` loops (like GSAP ScrollTrigger or basic `window.addEventListener('scroll')`). The browser had to constantly pause rendering, run your JS math to calculate the new offset based on `window.scrollY`, and apply inline DOM styles on every single tick.

This component implements a next-generation approach. By utilizing the bleeding-edge `animation-timeline: scroll()` specification, we can define standard `@keyframes` that simply translate our layers along the Y axis. We then tie those keyframes strictly to the native scroll timeline. 

Because we bypass JavaScript entirely, the browser is able to hand off these depth calculations directly to its hardware-accelerated compositor thread. The result is an incredibly performant, perfectly synced true parallax effect that costs 0 bytes of JavaScript overhead.

> **Note:** As `animation-timeline` is a newer CSS specification, it degrades gracefully on older browsers (the layers will simply remain static and scroll normally with the page document).
