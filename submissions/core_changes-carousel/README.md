# Carousel / Slider

1. **What does this do?** Provides a CSS-only carousel using `scroll-snap-type: x mandatory` for slide behavior, with navigation dots and optional image captions — zero JavaScript.

2. **How is it used?**
   ```html
   <div class="carousel">
     <div class="carousel-track">
       <div class="carousel-slide">Slide 1</div>
       <div class="carousel-slide">Slide 2</div>
     </div>
   </div>
   ```

3. **Why is it useful?** Carousels showcase multiple pieces of content in a compact space. This implementation uses CSS scroll-snap for native smooth scrolling, supports dark mode, and requires no JavaScript — aligning with EaseMotion's zero-dependency philosophy.
