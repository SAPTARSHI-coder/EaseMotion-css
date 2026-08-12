# CSS-only 3D Flip Card

### 1. What does this do?
An interactive CSS-only 3D flip card component. It utilizes the `transform-style: preserve-3d`, `perspective`, and `backface-visibility: hidden` properties to smoothly rotate a card 180 degrees on the Y-axis upon hover, revealing content on the reverse side with a playful bouncy transition.

### 2. How is it used?
```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Front Side</h2>
    </div>
    <div class="flip-card-back">
      <h2>Back Side</h2>
    </div>
  </div>
</div>
```

### 3. Why is this useful?
3D flip cards are a staple UI pattern for displaying dual-sided information like team member bios, pricing tiers, or product details. Providing a robust, purely CSS-based implementation ensures developers have access to this premium interaction without relying on heavy JavaScript libraries.
