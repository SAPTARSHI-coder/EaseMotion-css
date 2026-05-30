# Reveal On Scroll

**What does this do?**
Creates a highly sought-after "fade-in and slide-up" effect as elements scroll into the viewport, using cutting-edge pure CSS scroll-driven animations instead of JavaScript.

**How is it used?**
Apply the class to any element (like a card, image, or text block) that you want to animate as the user scrolls down to it:
```html
<div class="reveal-on-scroll">
    I will magically appear when scrolled into view!
</div>
```

**Why is it useful?**
Traditionally, scroll-reveal animations require heavy JavaScript libraries (like IntersectionObserver). By using the modern CSS `animation-timeline: view()` API, this perfectly honors EaseMotion's "Zero dependencies" rule while delivering a massive, much-needed UX upgrade to long landing pages.
