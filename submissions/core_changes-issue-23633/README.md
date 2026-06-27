# 3D Flip Animations (flip-x & flip-y)

1. What does this do?
Provides CSS classes (`flip-x` and `flip-y`) for one-shot 180° 3D flip animations around the horizontal or vertical axis, as well as a pure-CSS interactive `.flip-card` helper.

2. How is it used?

**One-shot animations:**
```html
<!-- Flips around the horizontal X-axis on load -->
<div class="flip-x">Horizontal Flip Content</div>

<!-- Flips around the vertical Y-axis on load -->
<div class="flip-y">Vertical Flip Content</div>
```

**Pure CSS interactive hover/focus cards:**
```html
<!-- Y-axis flip (default) -->
<div class="flip-card" tabindex="0">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <!-- Front Content -->
    </div>
    <div class="flip-card-back">
      <!-- Back Content (revealed on hover/focus) -->
    </div>
  </div>
</div>

<!-- X-axis flip -->
<div class="flip-card flip-card-x" tabindex="0">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <!-- Front Content -->
    </div>
    <div class="flip-card-back">
      <!-- Back Content -->
    </div>
  </div>
</div>
```

3. Why is it useful?
3D card flipping is a popular interactive design pattern for flashcards, pricing plans, and product highlights. Providing standard, hardware-accelerated 3D transforms without JavaScript makes implementation fast and performance-friendly, aligning with EaseMotion CSS's philosophy of lightweight, pure-CSS utility design.
