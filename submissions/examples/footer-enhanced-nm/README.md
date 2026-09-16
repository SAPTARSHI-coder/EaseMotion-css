# Enhanced Footer

## What does this do?
Provides a modern, accessible footer component with a responsive grid layout — brand section with social links, organised navigation columns, newsletter signup form, and a bottom bar with back-to-top — using EaseMotion CSS tokens.

## How is it used?
Add `.footer-nm` to a `<footer>` element with `.footer-nm-grid` (4-column responsive grid), `.footer-nm-brand`, `.footer-nm-nav`, `.footer-nm-newsletter`, and `.footer-nm-bottom` sub-components.

```html
<footer class="footer-nm">
  <div class="footer-nm-grid">
    <div class="footer-nm-brand">
      <h2>Brand</h2>
      <ul class="footer-nm-social" aria-label="Social links">...</ul>
    </div>
    <div class="footer-nm-nav">
      <h3>Product</h3>
      <ul><li><a href="#">Features</a></li></ul>
    </div>
    <div class="footer-nm-newsletter">
      <form><input type="email" /><button>Subscribe</button></form>
    </div>
  </div>
  <div class="footer-nm-bottom">
    <span>&copy; 2026</span>
    <a href="#" class="footer-nm-top">&uarr; Back to top</a>
  </div>
</footer>
```

## Why is it useful?
A well-designed footer improves site navigation and credibility. This component provides a fully responsive, accessible (keyboard-nav, focus-visible, semantic HTML), theme-aware (light/dark), and motion-safe footer that integrates with EaseMotion's design token system.
