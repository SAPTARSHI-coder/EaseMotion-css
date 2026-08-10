# CSS-Only Carousel

**What does this do?**
Creates a lightweight, pure-CSS carousel component using `scroll-snap-type` for smooth pagination and modern `animation-timeline: view()` for center-focused scale-up effects.

**How is it used?**
Use the wrapper class on your container and the slide class on your items:
```html
<div class="carousel-ag">
  <div class="carousel-slide-ag">Slide 1</div>
  <div class="carousel-slide-ag">Slide 2</div>
  <div class="carousel-slide-ag">Slide 3</div>
</div>
```

**Why is it useful?**
Carousels usually require heavy JavaScript libraries like Swiper.js. This component provides 90% of the functionality (snapping, smooth scrolling, and dynamic scale-up/opacity effects based on scroll position) with 0 dependencies and pure CSS, making it incredibly performant. It gracefully degrades on older browsers (using hover/focus scale instead).
