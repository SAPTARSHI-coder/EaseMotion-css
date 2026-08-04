# Cyberpunk Neon Fade Carousel

### What does this do?
This component provides a pure CSS content carousel with smooth fade-in slide transitions and a futuristic cyberpunk neon theme without requiring any JavaScript.

### How is it used?
Include `style.css` in your project and structure your HTML with radio inputs and matching label controls:

```html
<section class="carousel">
  <!-- Hidden radio inputs control active slide states -->
  <input type="radio" name="slider" id="slide1" checked>
  <input type="radio" name="slider" id="slide2">

  <div class="carousel-card">
    <div class="card-glow-bar"></div>

    <div class="slides">
      <article class="slide s1">
        <div class="content">
          <span class="badge badge-cyan">01 // Slide</span>
          <h2 class="slide-title">Neon <span class="accent-cyan">City</span></h2>
          <p class="slide-desc">Slide description content goes here.</p>
        </div>
      </article>
    </div>

    <!-- Navigation arrows and pagination dots using labels -->
    <div class="arrows">
      <label for="slide2" class="arrow next next1" aria-label="Next Slide">&rsaquo;</label>
    </div>
    
    <div class="navigation" role="tablist">
      <label for="slide1" class="dot dot1" aria-label="Go to Slide 1"></label>
      <label for="slide2" class="dot dot2" aria-label="Go to Slide 2"></label>
    </div>
  </div>
</section>
```

### Why is it useful?
It fits EaseMotion's core philosophy of pure CSS motion by using native form controls (`:checked`) to handle slide state, delivering fast 60fps hardware-accelerated transitions with zero JavaScript dependencies.
