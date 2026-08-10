# Modern Testimonial Carousel

Fixes #61782 — a self-contained testimonial display component with sliding profile frames and faded slide transitions, built with the radio-input pattern so no JavaScript is required.

## Features

- Faded slide + horizontal shift transition between testimonials
- Avatar scales up slightly on hover (bounce easing)
- Dot navigation with active-state highlight
- Fully responsive: adjusted padding and font size on small viewports
- Respects `prefers-reduced-motion: reduce` — disables all transforms/transitions
- Uses EaseMotion CSS design tokens (`var(--ease-color-*)`, `var(--ease-space-*)`, `var(--ease-radius-*)`, `var(--ease-shadow-*)`, `var(--ease-ease-bounce)`) with fallbacks

## Usage

```html
<div class="testimonial-carousel">
  <input type="radio" name="testimonial-slide" id="slide-1" class="testimonial-carousel__input" checked />
  <input type="radio" name="testimonial-slide" id="slide-2" class="testimonial-carousel__input" />
  <input type="radio" name="testimonial-slide" id="slide-3" class="testimonial-carousel__input" />

  <div class="testimonial-carousel__track">
    <div class="testimonial-carousel__slide">
      <img class="testimonial-carousel__avatar" src="avatar1.jpg" alt="" />
      <p class="testimonial-carousel__quote">"Quote text here."</p>
      <p class="testimonial-carousel__name">Name</p>
      <p class="testimonial-carousel__role">Role, Company</p>
    </div>
    <!-- repeat .testimonial-carousel__slide for each additional testimonial -->
  </div>

  <nav class="testimonial-carousel__dots">
    <label class="testimonial-carousel__dot" for="slide-1" aria-label="Testimonial 1"></label>
    <label class="testimonial-carousel__dot" for="slide-2" aria-label="Testimonial 2"></label>
    <label class="testimonial-carousel__dot" for="slide-3" aria-label="Testimonial 3"></label>
  </nav>
</div>
```

Slide visibility uses `:nth-of-type()` matched against each radio input's `:checked` state, so slides must appear in the same order as their corresponding dots.

## Customization

Override these custom properties to restyle:

- `--ease-color-primary` — active dot and name text color
- `--ease-color-primary-light` — avatar border color
- `--ease-ease-bounce` — avatar hover easing curve
- `--ease-space-*`, `--ease-radius-lg` — spacing and corner rounding

## How to view

Open `demo.html` directly in a browser — no build step or server required. Demo avatars are loaded from `pravatar.cc` as placeholders; replace with real images in production use.
