# Animated Credit Card Flip on Hover

## 1. What does this do?

A pure CSS animated credit card that flips to reveal its back face on hover. The front face features a neon gradient border glow pulse, a holographic shimmer sweep, and a gold chip. The back face shows a magnetic strip, signature area, and CVV box. No JavaScript required.

## 2. How is it used?

```html
<div class="card-scene">
  <div class="card-inner">
    <!-- Front -->
    <div class="card-front">
      <div class="chip"></div>
      <div class="card-number">4532 1547 8963 2210</div>
      <div class="card-footer">
        <div>
          <div class="card-label">Card Holder</div>
          <div class="card-value">YOUR NAME</div>
        </div>
        <div>
          <div class="card-label">Expires</div>
          <div class="card-value">08 / 27</div>
        </div>
      </div>
    </div>

    <!-- Back -->
    <div class="card-back">
      <div class="magnetic-strip"></div>
      <div class="sig-area">
        <div class="sig-strip"><span class="sig-text">YOUR NAME</span></div>
        <div class="cvv-box">927</div>
      </div>
    </div>
  </div>
</div>
```

## 3. Why is it useful?

- Pure CSS — zero JavaScript, zero dependencies
- Flip is triggered by hover, not click or form input (unique from existing submissions)
- Neon glow border pulse and holographic shimmer are CSS-only animations
- Great for payment UI showcases, portfolio projects, and UI component libraries
- Fits EaseMotion's animation-first, human-readable philosophy perfectly
