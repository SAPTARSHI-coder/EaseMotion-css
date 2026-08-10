# CSS Level Up Banner

## 1. What does this do?
This component renders a responsive full-width gamification banner that triggers a multi-colored radial star burst explosion animation and glowing header states using pure CSS.

## 2. How is it used?
Configure the banner triggers and star nodes inside the full-width wrapper:
```html
<!-- Interactive checkbox trigger -->
<input type="checkbox" id="level-up-trigger" class="banner-trigger">

<div class="banner-container" role="alert">
  <div class="banner-content">
    <h1 class="banner-title">LEVEL UP!</h1>
  </div>

  <div class="burst-stage">
    <!-- Star elements styled with custom coordinates -->
    <div class="star s-1"></div>
    <div class="star s-2"></div>
  </div>
</div>
```

## 3. Why is it useful?
It provides front-end developers with an immersive, performance-optimized visual feedback banner using native CSS clip-paths and staggered vector translations, avoiding heavy particle simulation scripts.
