# CSS Flash Deal Timer

## 1. What does this do?
This component renders an interactive e-commerce product card containing an integrated, pure CSS countdown timer that counts down seconds and minutes in real-time using step-based keyframe animations.

## 2. How is it used?
Configure vertical digit strips inside overflow-hidden container blocks:
```html
<div class="countdown-digits">
  <!-- Seconds Tens (0-5) -->
  <div class="digit-container">
    <div class="digit-strip anim-sec-tens">
      <div class="digit-item">5</div>
      <div class="digit-item">4</div>
      <!-- numbers down to 0 -->
    </div>
  </div>
</div>
```

```css
.anim-sec-tens {
  animation: tick-6 60s steps(6) infinite;
}
@keyframes tick-6 {
  0% { transform: translateY(0); }
  100% { transform: translateY(-144px); } /* 6 items * 24px */
}
```

## 3. Why is it useful?
It provides front-end developers with an elegant ticking countdown clock concept built natively in CSS, removing the need for heavy JavaScript intervals and DOM reflow calculations.
