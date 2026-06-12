# Submission: Cookie Consent Banner

## 1. What does this do?

A GDPR / CCPA compliant cookie consent banner that slides in from the
bottom of the page using a spring CSS transition. Three variants included:
default (icon + text + accept/decline), minimal (one-liner), and detailed
(toggle switches per cookie category). Dismissed by accepting, declining,
or clicking the close button.

---

## 2. How is it used?

```html
<!-- Default banner -->
<div
  class="ease-cookie-banner"
  id="cookieBanner"
  role="dialog"
  aria-label="Cookie consent"
>
  <div class="ease-cookie-inner">
    <div class="ease-cookie-icon">🍪</div>
    <div class="ease-cookie-text">
      <p class="ease-cookie-title">We use cookies</p>
      <p class="ease-cookie-desc">
        We use cookies to enhance your experience.
        <a href="#" class="ease-cookie-link">Privacy Policy</a>
      </p>
    </div>
    <div class="ease-cookie-actions">
      <button class="ease-btn ease-btn-ghost ease-btn-sm">Decline</button>
      <button class="ease-btn ease-btn-primary ease-btn-sm">Accept All</button>
    </div>
    <button class="ease-cookie-close" aria-label="Close">✕</button>
  </div>
</div>

<!-- Show banner -->
<script>
  const banner = document.getElementById("cookieBanner");
  banner.classList.add("ease-visible"); // slides in
  // to dismiss:
  banner.classList.remove("ease-visible");
  banner.classList.add("ease-hidden"); // slides out
</script>
```

**Variants:**

- Default: `ease-cookie-banner`
- Minimal: `ease-cookie-banner ease-cookie-banner--minimal`
- Detailed: `ease-cookie-banner ease-cookie-banner--detailed`

---

## 3. Why is it useful?

Cookie consent banners are **legally required** for GDPR and CCPA
compliance — every website that serves EU or California visitors needs one.
EaseMotion CSS has no banner component yet, making this a direct gap fill.

Fits the animation-first philosophy:

- `ease-visible` / `ease-hidden` — readable state classes, one toggle each
- Slide-in uses `cubic-bezier(0.22, 1, 0.36, 1)` spring easing
- Toggle switches animate thumb with the same spring curve
- Top purple glow line matches EaseMotion CSS's existing visual language
- `prefers-reduced-motion` replaces slide with fade — accessible

Zero external libraries — pure CSS transitions + vanilla JS class toggles.

---

## Proposed class names (maintainer decides)

| Raw name                       | Proposed ease-\* name    |
| ------------------------------ | ------------------------ |
| `ease-cookie-banner`           | already ease-\* prefixed |
| `ease-cookie-banner--minimal`  | already ease-\* prefixed |
| `ease-cookie-banner--detailed` | already ease-\* prefixed |
| `ease-cookie-inner`            | already ease-\* prefixed |
| `ease-cookie-title`            | already ease-\* prefixed |
| `ease-cookie-desc`             | already ease-\* prefixed |
| `ease-cookie-actions`          | already ease-\* prefixed |
| `ease-cookie-close`            | already ease-\* prefixed |
| `ease-cookie-link`             | already ease-\* prefixed |
| `ease-toggle`                  | already ease-\* prefixed |
| `ease-toggle--on`              | already ease-\* prefixed |
| `ease-visible`                 | already ease-\* prefixed |
| `ease-hidden`                  | already ease-\* prefixed |
