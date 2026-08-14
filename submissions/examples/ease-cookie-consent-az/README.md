# Cookie Consent Banner Component

### What does this do?
Adds `ease-cookie-consent-az` — a slide-in cookie consent banner with a cookie icon, title/description, and Accept/Decline buttons. Slides up with a smooth cubic-bezier transition, and comes in bottom-bar and center-modal variants.

### How is it used?
The maintainer should copy `style.css` into `components/cookie-consent.css` and import it.

```html
<div class="ease-cookie-consent-az show">
  <div class="ease-cookie-consent-icon-az"><!-- cookie icon --></div>
  <div class="ease-cookie-consent-text-az">
    <div class="ease-cookie-consent-title-az">This site uses cookies</div>
    <p class="ease-cookie-consent-desc-az">Description here</p>
  </div>
  <div class="ease-cookie-consent-actions-az">
    <button class="ease-cookie-consent-btn-az secondary">Decline</button>
    <button class="ease-cookie-consent-btn-az primary">Accept All</button>
  </div>
</div>
```

Variants: `.center` for modal style, `.sm` for compact. Toggle visibility with `.show`.

### Why is it useful?
1. **Smooth entrance** — slides up with `cubic-bezier(0.16, 1, 0.3, 1)` and fades in concurrently
2. **Two layouts** — bottom bar (default) and `.center` modal, both mobile-responsive
3. **Accessible buttons** — Accept (`.primary`) and Decline (`.secondary`) with `:focus-visible` rings
