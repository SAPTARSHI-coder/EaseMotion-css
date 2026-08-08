# Component: Rotate Testimonial Card

This submission implements the Rotate Testimonial Card for GSSoC issue **#41981**.

## Description

A 3D carousel testimonial showcase with rotate animations and smooth transitions.

## Features

- **3D Carousel**: Three testimonials with perspective rotation
- **Auto-Rotate**: Automatically cycles every 5 seconds
- **Manual Controls**: Previous/next buttons and dot navigation
- **Prev/Next States**: Cards on sides show partial view
- **Floating Animation**: Static card with gentle float effect
- **Star Ratings**: Five-star rating display
- **Author Section**: Avatar and role information

## Usage

```html
<div class="testimonial-card rotate-card active">
  <div class="quote-icon">"</div>
  <p class="testimonial-text">Your testimonial here...</p>
  <div class="testimonial-author">
    <div class="author-avatar">JD</div>
    <div class="author-info">
      <span class="author-name">John Doe</span>
      <span class="author-role">Role</span>
    </div>
  </div>
  <div class="rating">★★★★★</div>
</div>
```

## Carousel Structure

```html
<div class="testimonial-carousel">
  <div class="carousel-track">
    <div class="testimonial-card rotate-card active">...</div>
    <div class="testimonial-card rotate-card">...</div>
    <div class="testimonial-card rotate-card">...</div>
  </div>
  <div class="carousel-controls">
    <button onclick="rotatePrev()">←</button>
    <div class="carousel-dots">...</div>
    <button onclick="rotateNext()">→</button>
  </div>
</div>
```

## Animations

| State | Transform |
|-------|-----------|
| Active | `translateX(0) rotateY(0deg) scale(1)` |
| Previous | `translateX(-50%) rotateY(-15deg) scale(0.9)` |
| Next | `translateX(50%) rotateY(15deg) scale(0.9)` |

## JavaScript

```javascript
function rotateNext() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
}

// Auto-rotate
setInterval(rotateNext, 5000);
```

## Acceptance Criteria

- ✅ Uses 3D rotate transforms
- ✅ Auto-rotate functionality
- ✅ Manual navigation controls
- ✅ Smooth transition animations
- ✅ Static floating variant
- ✅ README.md included
