# Glassmorphism Card Component

## What does this do?
This component provides a premium, responsive glassmorphism card design built purely with HTML and CSS, featuring a frosted-glass surface effect (using CSS backdrop-filters), glowing accent reflections, deep shadows, and hover animations.

## How is it used?
To use the glassmorphism card, wrap your content in an element with the `glass-card` class and add an accent modifier (`card-purple`, `card-cyan`, or `card-emerald`) along with the child `.card-glow` element to support background glows:

```html
<article class="glass-card card-purple">
  <!-- Interactive top radial glow container -->
  <div class="card-glow"></div>
  
  <!-- Content wrapper -->
  <div class="card-content">
    <h2 class="card-title-text">Card Title</h2>
    <p class="card-subtitle-text">Card Subtitle</p>
    <p class="card-description-text">
      Your description goes here.
    </p>
  </div>
  
  <!-- Action button bar -->
  <div class="card-actions">
    <button class="btn btn-outline" type="button">Secondary Action</button>
    <button class="btn btn-primary" type="button">Primary Action</button>
  </div>
</article>
```

You can customize the card's accent coloring using CSS variables:
```css
.your-custom-accent {
  --card-accent: #f43f5e; /* Rose accent */
  --card-accent-glow: rgba(244, 63, 94, 0.15);
}
```

## Why is it useful?
Glassmorphism is a popular design trend that mimics the appearance of frosted glass. It establishes visual hierarchy through simulated depth, transparency, and background blurring rather than flat solid boundaries. This component:
- **Reduces scripting bloat**: Implements high-performance frosted surfaces and ambient glow scenes natively without relying on Canvas, WebGL, or JavaScript libraries.
- **Adapts dynamically to backdrops**: Since it uses `backdrop-filter`, it automatically blends and blurs whatever dynamic background, gradient mesh, or images pass underneath it, creating a unified premium interface feel.
- **Provides clean templates**: Includes pre-configured structures for user profiles, product listings, and analytical grids, making it ready-to-deploy in modern portfolios or dashboard designs.

## Tech Stack
- **HTML5**: Semantic tags (`article`, `section`, `header`, `footer`) and optimized SVGs for scalable vector drawings.
- **CSS3**: Pure CSS custom properties (variables), `backdrop-filter` for the frosted texture, CSS Grid and Flexbox for responsive layouts, custom cubic-bezier transitions, and keyframe animations for ambient glow shifts.

## Preview
To preview the component, open [demo.html](file:///Users/shreeyakale/Desktop/GSSOC/EaseMotion-css/submissions/examples/glassmorphism-card-component-sk/demo.html) directly in any modern web browser.

## Contribution Notes
- Class naming is handled by the contributor (`.glass-card`, `.card-purple`, etc.).
- The maintainer will rename classes to fit the standard `ease-*` prefix naming convention before merging.
