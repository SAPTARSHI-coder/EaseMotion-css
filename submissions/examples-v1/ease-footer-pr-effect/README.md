# Submission: Footer Component

## 1. What does this do?

A full-featured 4-column website footer with brand info, two link groups,
a newsletter signup form, social media icons, and a copyright bar —
with animated link underlines, hover lift on social icons, and smooth
input focus transitions. Fully responsive: 2-column on tablet, stacked
on mobile.

---

## 2. How is it used?

```html
<footer class="footer">
  <!-- top purple glow divider -->
  <div class="footer-glow-bar"></div>

  <div class="footer-inner">
    <!-- Col 1: Brand -->
    <div class="footer-col footer-col--brand">
      <a href="#" class="footer-logo">
        <span class="footer-logo-dot"></span>
        EaseMotion CSS
      </a>
      <p class="footer-tagline">Human-readable. Animation-first.</p>
      <div class="footer-badges">
        <span class="footer-badge">MIT License</span>
        <span class="footer-badge footer-badge--green">v1.0.0</span>
      </div>
      <!-- social icons row -->
      <div class="footer-social">
        <a href="#" class="footer-social-link" aria-label="GitHub"
          ><!-- svg --></a
        >
        <a href="#" class="footer-social-link" aria-label="npm"><!-- svg --></a>
      </div>
    </div>

    <!-- Col 2: Link group -->
    <div class="footer-col">
      <h4 class="footer-col-title">Framework</h4>
      <ul class="footer-links">
        <li><a href="#" class="footer-link">Getting Started</a></li>
        <li><a href="#" class="footer-link">Documentation</a></li>
      </ul>
    </div>

    <!-- Col 3: Link group -->
    <div class="footer-col">
      <h4 class="footer-col-title">Community</h4>
      <ul class="footer-links">
        <li><a href="#" class="footer-link">GitHub</a></li>
        <li><a href="#" class="footer-link">Contributing Guide</a></li>
      </ul>
    </div>

    <!-- Col 4: Newsletter -->
    <div class="footer-col footer-col--newsletter">
      <h4 class="footer-col-title">Stay Updated</h4>
      <p class="footer-newsletter-desc">
        Get notified when new components ship.
      </p>
      <div class="footer-newsletter-form">
        <input type="email" class="footer-input" placeholder="your@email.com" />
        <button class="footer-btn" type="button">Subscribe</button>
      </div>
    </div>
  </div>

  <!-- Copyright bar -->
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <p class="footer-copy">© 2026 Saptarshi Sadhu. MIT License.</p>
      <div class="footer-bottom-links">
        <a href="#" class="footer-bottom-link">Privacy</a>
        <span class="footer-bottom-sep">·</span>
        <a href="#" class="footer-bottom-link">Terms</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 3. Why is it useful?

EaseMotion CSS is animation-first and composable — class names describe
behavior in plain English. This footer follows the same philosophy:

- `footer-link` with `::after` underline — animated from 0% to 100%
  width using `cubic-bezier(0.22, 1, 0.36, 1)` on hover
- `footer-social-link` — lift + glow box-shadow on hover
- `footer-btn` — translateY lift + purple glow on hover
- `footer-input` — focus ring using box-shadow, no outline hack
- `footer-glow-bar` — purple gradient line on the top border edge

Responsive breakpoints:

- Desktop: 4-column grid (`1.6fr 1fr 1fr 1.5fr`)
- Tablet (≤900px): 2-column, brand spans full width
- Mobile (≤560px): single column, fully stacked

Accessibility: social links have `aria-label`, form input has
`aria-label`, `prefers-reduced-motion` strips all transitions.

---

## Proposed class names (maintainer decides final naming)

| Raw name                 | Proposed ease-\* name        |
| ------------------------ | ---------------------------- |
| `footer`                 | `ease-footer`                |
| `footer-inner`           | `ease-footer-inner`          |
| `footer-col`             | `ease-footer-col`            |
| `footer-col--brand`      | `ease-footer-col-brand`      |
| `footer-col--newsletter` | `ease-footer-col-newsletter` |
| `footer-link`            | `ease-footer-link`           |
| `footer-social-link`     | `ease-footer-social-link`    |
| `footer-btn`             | `ease-footer-btn`            |
| `footer-input`           | `ease-footer-input`          |
| `footer-bottom`          | `ease-footer-bottom`         |
| `footer-glow-bar`        | `ease-footer-glow-bar`       |
