# Promo Code Input (ease-promo-code-input-mp)

### What does this do?
A CSS-driven promo code input field that visually validates a code on submit — turning green with a success message for a valid code, or red with a shake animation for an invalid/empty one.

### How is it used?
```html
<div class="promo-code-input-mp" id="promoWrapMp">
  <label class="promo-label-mp" for="promoFieldMp">Promo Code</label>
  <div class="promo-field-row-mp">
    <input type="text" id="promoFieldMp" class="promo-field-mp" placeholder="Enter code">
    <button class="promo-apply-btn-mp" onclick="checkPromoMp()">Apply</button>
  </div>
  <p class="promo-message-mp" id="promoMessageMp"></p>
</div>
```
Toggle `promo-success-mp` or `promo-error-mp` (plus `shake-mp` for the shake) on the `.promo-code-input-mp` wrapper based on validation result, as shown in `demo.html`.

### Why is it useful?
Promo/coupon inputs are a near-universal e-commerce and checkout UI pattern. Giving instant visual feedback (color + shake) instead of a plain text error message makes validation feel immediate and satisfying, in line with EaseMotion CSS's animation-first, dependency-free philosophy.
