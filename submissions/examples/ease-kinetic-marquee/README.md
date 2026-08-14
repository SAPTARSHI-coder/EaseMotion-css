# Kinetic Typography Marquee

**What does this do?**
Creates a massive, outline-only kinetic typography effect that smoothly and infinitely scrolls across the background without relying on JavaScript.

**How is it used?**
Wrap your text inside `.marquee-container` and `.marquee-content`, then duplicate the `.marquee-text` element to ensure a seamless looping animation:

```html
<div class="marquee-container">
    <div class="marquee-content">
        <span class="marquee-text">KINETIC TYPOGRAPHY KINETIC TYPOGRAPHY KINETIC TYPOGRAPHY </span>
        <span class="marquee-text">KINETIC TYPOGRAPHY KINETIC TYPOGRAPHY KINETIC TYPOGRAPHY </span>
    </div>
</div>
```

**Why is it useful?**
It provides a premium agency-style background scrolling text effect purely through CSS using `-webkit-text-stroke` and `@keyframes` transform, entirely bypassing heavy JS loopers, resulting in optimal performance and avoiding layout thrashing.
