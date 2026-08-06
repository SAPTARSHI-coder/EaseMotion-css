# EaseMotion CSS — 3D Flip Card Component (`ease-flip-card`)

> **Issue Reference:** #58245  
> **Track:** Standard (HTML/CSS Submission)

## What does this do?
The `ease-flip-card` component creates a smooth, responsive 3D card flip animation revealing back-side content on hover or keyboard focus using pure CSS perspective and 3D transforms (`rotateY` / `rotateX`).

---

## Features
- **Pure CSS3 & HTML5:** Zero JavaScript dependencies.
- **3D Depth Effect:** Uses CSS `perspective: 1000px` and `transform-style: preserve-3d` for seamless spatial depth.
- **Hidden Backface:** Utilizes `backface-visibility: hidden` to prevent visual bleeding or glitches during rotation.
- **Keyboard Accessible:** Supports `:focus-within` and `:focus-visible` states so keyboard users tabbing onto cards trigger the flip effect seamlessly.
- **Multiple Orientations:** Supports standard horizontal Y-axis flips (`rotateY`) and vertical X-axis flips (`.ease-flip-card-vertical`).
- **Reduced Motion Support:** Respects user accessibility settings via `@media (prefers-reduced-motion: reduce)`.

---

## How is it used?

### HTML Structure

```html
<!-- Standard Horizontal 3D Flip Card -->
<div class="ease-flip-card" tabindex="0" role="region" aria-label="Product Showcase Card">
  <div class="ease-flip-card-inner">
    <!-- Front Side -->
    <div class="ease-flip-card-front">
      <h2>Card Front</h2>
      <p>Content shown by default.</p>
    </div>
    <!-- Back Side -->
    <div class="ease-flip-card-back">
      <h2>Card Back</h2>
      <p>Content revealed on flip.</p>
    </div>
  </div>
</div>

<!-- Vertical 3D Flip Card Variant -->
<div class="ease-flip-card ease-flip-card-vertical" tabindex="0" role="region" aria-label="Vertical Flip Card">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">
      <h2>Front Content</h2>
    </div>
    <div class="ease-flip-card-back">
      <h2>Back Content</h2>
    </div>
  </div>
</div>
```

---

## Why is it useful?
3D Flip Cards are a high-impact UI pattern used across modern web applications for product feature showcases, user profile cards, flashcards, pricing tables, and interactive dashboards. By providing a zero-dependency, CSS-only implementation, `ease-flip-card` fits EaseMotion CSS's core philosophy of lightweight, performant, and accessible micro-interactions without relying on heavy external JavaScript libraries.
