# Animated Testimonial Slider

## 1. What does this do?

A responsive, pure HTML + CSS testimonial slider that automatically cycles through customer reviews with smooth sliding animations, avatars, names, roles, and star ratings — no JavaScript required.

## 2. How is it used?

Drop the markup into your page and the CSS handles everything else. Hover the slider to pause the animation.

```html
<section class="testimonial-slider">
  <div class="testimonial-track">

    <article class="testimonial-slide">
      <img class="testimonial-avatar" src="avatar.jpg" alt="User name" />
      <p class="testimonial-quote">Your testimonial text goes here.</p>
      <h3 class="testimonial-name">Jane Doe</h3>
      <span class="testimonial-role">Designer, Acme Co.</span>
      <div class="testimonial-stars">★ ★ ★ ★ ★</div>
    </article>

    <!-- Add more .testimonial-slide articles -->

  </div>

  <div class="testimonial-dots">
    <span></span><span></span><span></span><span></span>
  </div>
</section>