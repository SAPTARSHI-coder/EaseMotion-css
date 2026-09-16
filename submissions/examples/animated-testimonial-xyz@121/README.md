# Animated Testimonial Card (`ease-testimonial-xyz`)

A zero-dependency, CSS-only animated testimonial/review card component designed for the **EaseMotion CSS** framework. Perfect for social proof, customer feedback, and product reviews with smooth animations and star ratings.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and transitions.
- **Animation-First**: Smooth fade-in, hover lift, star fill animations, and carousel transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic cards, featured testimonials, inline/horizontal layout, compact cards, and carousel.
- **Star Ratings**: Animated star fill effects with staggered delays.
- **Avatar Support**: Profile images with border styling.
- **Company Logos**: Optional company logo display with hover effects.
- **Carousel**: Pure CSS carousel with dot navigation.
- **Featured Style**: Gradient background with animated glow effect.
- **Accessible**: Proper semantic HTML structure and ARIA labels.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Testimonial Card
```html
<div class="ease-testimonial-xyz">
  <div class="ease-testimonial-xyz-header">
    <div class="ease-testimonial-xyz-avatar">
      <img src="avatar.jpg" alt="Name">
    </div>
    <div class="ease-testimonial-xyz-info">
      <div class="ease-testimonial-xyz-name">John Doe</div>
      <div class="ease-testimonial-xyz-role">Developer at Company</div>
    </div>
  </div>
  <div class="ease-testimonial-xyz-rating">
    <span class="ease-testimonial-xyz-star">★</span>
    <span class="ease-testimonial-xyz-star">★</span>
    <span class="ease-testimonial-xyz-star">★</span>
    <span class="ease-testimonial-xyz-star">★</span>
    <span class="ease-testimonial-xyz-star">★</span>
  </div>
  <blockquote class="ease-testimonial-xyz-quote">
    "Great product! Highly recommended."
  </blockquote>
  <div class="ease-testimonial-xyz-date">2 weeks ago</div>
</div>