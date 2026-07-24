# Elastic Testimonial Card Component (Blog Design Variant)

A blog grid testimonial card layout featuring physics-based spring/elastic scaling micro-interactions.

---

## 💡 Quick Overview

### 1. What does this do?

This component provides a cards layout showcase representing blog reader reviews that deforms with an elastic stretch-and-snap scaling animation on mouse hover using pure CSS.

### 2. How is it used?

Incorporate the card article markup inside your grid layout:

```html
<article class="elastic-card">
  <!-- Profile details -->
  <header class="card-profile">
    <div class="card-avatar-wrap">
      <img src="avatar.jpg" alt="Author avatar" />
    </div>
    <div class="card-author-info">
      <h3 class="card-author-name">Sarah Connor</h3>
      <span class="card-author-handle">@dev_sarah</span>
    </div>
  </header>

  <!-- Star ratings -->
  <div class="card-rating" aria-label="5 out of 5 stars">
    <span class="rating-star">★</span>
    <span class="rating-star">★</span>
    <!-- Stars tags... -->
  </div>

  <!-- Quote blockquote -->
  <blockquote class="card-quote">
    <p>
      "Chronicle writing is incredibly clear and packed with actionable advice."
    </p>
  </blockquote>

  <!-- Interaction footer -->
  <footer class="card-footer">
    <time class="card-date">July 10, 2026</time>
    <div class="card-actions">
      <button class="card-btn card-btn-heart">Like</button>
    </div>
  </footer>
</article>
```

### 3. Why is it useful?

Testimonial grids are key social proof components on blogs and SaaS portals. This component implements an elastic animation that mimics physical inertia, creating a highly premium, tactile feel without causing layout shifts or relying on heavy external physics scripting.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and animation curves:

```css
:root {
  /* Minimalist Blog Palette colors */
  --blog-canvas: #fafafa; /* Background canvas */
  --blog-surface: #ffffff; /* Card face background */
  --blog-border: #eaeaea; /* Card edge boundary line */
  --blog-accent: #4f46e5; /* Brand identity accent primary */

  /* Timing Configuration */
  --ease-elastic-duration: 0.65s; /* Speed of spring-back distortion */
  --ease-spring-curve: cubic-bezier(
    0.34,
    1.56,
    0.64,
    1
  ); /* Custom bezier curve */
}
```

Physics distortion can be tweaked inside the animation keyframes:

```css
@keyframes elastic-card-hover {
  32% {
    transform: scale3d(1.12, 0.88, 1);
  } /* Squashes horizontal, stretches vertical */
  45% {
    transform: scale3d(0.92, 1.08, 1);
  } /* Opposite bounce stretch step */
}
```

---

## ♿ Accessibility Specifications

1. **Semantic HTML**: Built using correct ARIA landmark roles: `<article>` for container wrapping, `<blockquote/>` for quotes, and `<time/>` tags for date stamps.
2. **Keyboard Traversal**: Buttons are interactive elements and focus states are styled with prominent blue indicators.
3. **Motion settings**: Supports reduced motion media settings, instantly falling back to simple linear scale transitions without physics distortions.
