# 3D Perspective Flip Card Deck

A hardware-accelerated 3D perspective flip card deck built with pure CSS transforms, cubic-bezier transition curves, and interactive glassmorphism sheen reflections.

## 1. What does this do?
This component renders an interactive grid of cards with real-time 3D perspective tilt calculations, smooth 180-degree flip animations, and dual-face metadata displays. Hovering over a card creates a dynamic 3D depth shift based on cursor position, while clicking or pressing space/enter triggers a fluid 3D card flip reveal.

## 2. How is it used?
Include `style.css` in your project and structure your cards using the `perspective-card`, `card-inner`, `card-front`, and `card-back` class layout as shown in `demo.html`:

```html
<article class="perspective-card" tabindex="0">
  <div class="card-inner">
    <div class="card-face card-front">
      <!-- Front Content -->
    </div>
    <div class="card-face card-back">
      <!-- Back Content -->
    </div>
  </div>
</article>
```

Add the toggle script from `demo.html` to support click/keyboard card flipping and perspective tilt tracking.

## 3. Why is it useful?
- **High Visual Appeal:** Elevates feature showcases, product tiers, or team profiles with production-grade 3D physics.
- **Accessibility Ready:** Supports keyboard navigation (`tab`, `enter`, `space`) and ARIA labels out of the box.
- **GPU Accelerated:** Uses CSS `preserve-3d`, `backface-visibility`, and hardware-accelerated transforms to maintain steady 60+ FPS rendering.
