# ease-carousel

A CSS-only testimonial carousel for **EaseMotion CSS**, controlled by radio-button dot navigation. No JavaScript, no carousel library.

## Usage

```html
<div class="carousel">
  <input type="radio" name="slide" id="slide1" class="carousel-radio" checked>
  <input type="radio" name="slide" id="slide2" class="carousel-radio">
  <input type="radio" name="slide" id="slide3" class="carousel-radio">

  <div class="carousel-track">
    <blockquote class="carousel-slide">Quote 1</blockquote>
    <blockquote class="carousel-slide">Quote 2</blockquote>
    <blockquote class="carousel-slide">Quote 3</blockquote>
  </div>

  <div class="carousel-dots">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
  </div>
</div>