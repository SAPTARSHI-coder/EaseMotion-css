# Scroll-Driven Timeline Drawing

Vertical timelines where the center connecting line appears to "draw" itself downward exactly as the user scrolls are a staple of modern storytelling sites (like the Apple Mac Pro page or advanced SaaS product tours).

### Usage
```html
<div class="ease-timeline-container">
    <div class="ease-timeline-line"></div>
    <div class="ease-timeline-item">
        <div class="ease-timeline-dot"></div>
        <div class="ease-timeline-content">Content</div>
    </div>
</div>
```

### Why is it useful?
Historically, tracking a user's scroll position and mapping it to a CSS property required massive JavaScript libraries like GSAP ScrollTrigger or ScrollMagic. These libraries constantly listen to the `scroll` event, perform mathematical calculations on every single pixel scrolled, and update inline CSS variables on the DOM, often leading to jank on mobile devices.

This component achieves the exact same premium effect natively in the browser with absolutely zero JavaScript. It utilizes the modern CSS specification `animation-timeline: scroll()`. We simply define a standard `@keyframes` animation from `scaleY(0)` to `scaleY(1)`, and tie it directly to the scroll progress of the nearest scroll container block. The browser's native hardware-accelerated compositor handles the math perfectly, providing an infinitely smoother scrolling experience. 

> **Note:** As `animation-timeline` is a newer CSS specification, it degrades gracefully on older browsers (the line simply remains fully drawn).
