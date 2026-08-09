# Testimonial Carousel/Slider

This is a self-contained example demonstrating how to create a modern, animated testimonial carousel with auto-play, manual navigation, and responsive design using pure CSS and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎠 **Smooth Sliding:** Buttery-smooth slide transitions with cubic-bezier easing.
- ▶️ **Auto-Play:** Automatically cycles through testimonials every 5 seconds.
- ⏸️ **Pause on Hover:** Auto-play pauses when user hovers over carousel.
- ◀️ **Manual Navigation:** Previous/Next arrow buttons for manual control.
- 🔘 **Dot Indicators:** Clickable dots showing current slide position.
- ⌨️ **Keyboard Navigation:** Arrow keys for accessibility.
- 📱 **Fully Responsive:** 3 cards on desktop, 2 on tablet, 1 on mobile.
- ⭐ **Star Ratings:** Animated star ratings with bounce effect.
- 🎨 **Hover Effects:** Cards lift and glow on hover.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 🚫 **Minimal JavaScript:** Only for carousel logic (no animation JS).

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the carousel HTML structure.
4. Add your testimonial cards inside `.carousel__track`.
5. Include the JavaScript class at the bottom of your page.
6. Initialize the carousel: `const carousel = new TestimonialCarousel();`

## HTML Structure
```html
<div class="carousel" id="carousel">
  <div class="carousel__track" id="carouselTrack">
    <!-- Testimonial Cards -->
    <div class="testimonial-card">
      <div class="testimonial-card__quote">"</div>
      <p class="testimonial-card__text">Testimonial text here</p>
      <div class="testimonial-card__rating">
        <span class="star">★</span>
        <!-- More stars -->
      </div>
      <div class="testimonial-card__author">
        <img src="avatar.jpg" alt="Name" class="testimonial-card__avatar" />
        <div class="testimonial-card__info">
          <h4 class="testimonial-card__name">Name</h4>
          <p class="testimonial-card__role">Role</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Navigation -->
  <button class="carousel__nav carousel__nav--prev" id="prevBtn">‹</button>
  <button class="carousel__nav carousel__nav--next" id="nextBtn">›</button>
  
  <!-- Dots -->
  <div class="carousel__dots" id="carouselDots">
    <button class="carousel__dot carousel__dot--active" data-index="0"></button>
    <!-- More dots -->
  </div>
</div>