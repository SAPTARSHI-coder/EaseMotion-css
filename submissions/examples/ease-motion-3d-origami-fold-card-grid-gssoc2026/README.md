# 3D Origami Fold Card Grid - EaseMotion CSS

A responsive, high-performance 3D Origami Fold Card Grid UI component built using pure CSS custom properties, cubic-bezier timing functions, and hardware-accelerated 3D transforms.

## 1. What does this do?
This component renders an interactive grid of cards that simulate a 3D origami folding and unfolding animation on hover or keyboard focus. It provides a visual depth effect with glassmorphism backdrops and subtle lighting highlights.

## 2. How is it used?
Include the CSS file in your HTML document and structure your markup using `.origami-card`, `.card-inner`, `.card-front`, and `.card-back` containers:

```html
<link rel="stylesheet" href="style.css">

<article class="origami-card" tabindex="0">
  <div class="card-inner">
    <div class="card-front">
      <!-- Front Content -->
    </div>
    <div class="card-back">
      <!-- Back Content -->
    </div>
  </div>
</article>
```

## 3. Why is it useful?
- **High Performance:** Employs `transform-style: preserve-3d` and CSS `backface-visibility` for smooth 60 FPS transitions without JS overhead.
- **Accessibility Ready:** Supports keyboard navigation via `:focus` and `:focus-visible` states.
- **Fully Responsive:** Adapts dynamically to screen dimensions using CSS Grid `minmax()` layout patterns.
