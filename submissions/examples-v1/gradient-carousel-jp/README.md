# Gradient Carousel

## What does this do?

This submission creates a responsive, accessible, pure-CSS carousel with glassmorphism panels, animated gradient backgrounds, and smooth slide transitions.

## How is it used?

```html
<section class="carousel-jp">
  <input
    class="carousel-radio-jp"
    type="radio"
    name="gradient-carousel"
    id="slide-1"
    checked
  />

  <div class="carousel-viewport-jp">
    <div class="carousel-track-jp">
      <article class="carousel-slide-jp">
        <div class="glass-panel-jp">
          <h2>Design transitions that explain the interface.</h2>
        </div>
      </article>
    </div>
  </div>

  <div class="carousel-controls-jp">
    <label for="slide-1">01</label>
  </div>
</section>
```

Customize the motion and visual system through CSS variables:

```css
:root {
  --ease-carousel-duration-jp: 820ms;
  --ease-carousel-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-gradient-speed-jp: 9s;
  --ease-glass-blur-jp: 22px;
  --ease-radius-jp: 2rem;
  --ease-accent-jp: #8a7dff;
}
```

The carousel uses hidden native radio inputs and labels to switch slides without JavaScript. The selected radio moves the track and activates the corresponding glass panel.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Carousels are common in landing pages, portfolios, product stories, case studies, testimonials, and feature showcases.

This example fits EaseMotion CSS because it:

- uses animated gradients and depth to communicate slide changes;
- exposes reusable motion variables and keyframes;
- uses native radio controls for CSS-only state;
- includes keyboard-reachable navigation;
- provides visible active states;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
