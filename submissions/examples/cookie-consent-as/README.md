# Cookie Consent Bar

### What does this do?

It shows a cookie consent bar fixed to the bottom with a message and accept and decline buttons, that slides away when either is chosen.

### How is it used?

```html
<input type="checkbox" id="cookie" class="cookie-dismiss" />
<div class="cookie-bar" role="dialog" aria-label="Cookie consent">
  <p>We use cookies to improve your experience.</p>
  <div class="cookie-actions">
    <label for="cookie" class="cookie-btn is-ghost">Decline</label>
    <label for="cookie" class="cookie-btn">Accept</label>
  </div>
</div>
```

Both buttons are labels for the same checkbox, so either one dismisses the bar. The host app can read the result and store the preference.

### Why is it useful?

Consent bars are required on many sites. This slides the banner out on an action driven by the `:checked` state, so the visual dismissal needs no JavaScript. The bar uses a `dialog` role, and the slide is softened under `prefers-reduced-motion: reduce`.
