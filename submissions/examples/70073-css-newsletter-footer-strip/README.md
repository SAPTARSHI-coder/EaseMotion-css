# CSS Newsletter Footer Strip Component (`css-newsletter-footer-strip`)

A pure HTML + Vanilla CSS compact website footer newsletter signup strip component featuring a 200% animated background gradient backdrop (`.strip-gradient-backdrop`), native HTML form validation (`type="email"`, `required`), horizontal desktop / stacked mobile responsive layout, light/dark theme adaptation, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% responsive newsletter signup strip without JavaScript, external fonts, SVG image files, or build scripts. Works offline.
- **200% Animated Background Gradient**: Uses a 200% x 200% linear gradient (`linear-gradient(135deg, var(--strip-grad-1) 0%, var(--strip-grad-2) 50%, var(--strip-grad-3) 100%)`) animated via `background-position` (`@keyframes ease-newsletter-gradient-shift`) over a smooth 14-second infinite loop.
- **Native HTML Form Validation**: Implements native browser email validation using `<input type="email" autocomplete="email" required>` inside a semantic `<form>` structure.
- **Compact & Responsive Architecture**: Renders as a sleek horizontal bar on desktop viewports (768px+) and stacks cleanly onto mobile screens (<768px) without horizontal scrollbars.
- **100% Accessible**: Built using semantic `<footer class="newsletter-footer-strip">`, `<form>`, `<label for="newsletter-email" class="sr-only">`, `<input>`, and `<button type="submit">`. Keyboard navigation supported (`Tab`, `Shift+Tab`, `Enter`) with distinct `:focus-visible` indicators.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<footer class="newsletter-footer-strip">
  <div class="strip-gradient-backdrop" aria-hidden="true"></div>

  <div class="newsletter-content">
    <h2 class="newsletter-title">Get Motion Insights In Your Inbox</h2>
  </div>

  <form class="newsletter-form" action="#" method="POST">
    <label for="newsletter-email" class="sr-only">Email address</label>
    <div class="newsletter-fields">
      <input
        type="email"
        id="newsletter-email"
        name="email"
        class="email-input"
        required
      />
      <button type="submit" class="submit-btn">Subscribe Now</button>
    </div>
  </form>
</footer>
```

### Customization Variables

```css
:root {
  --strip-bg: #f8fafc;
  --strip-grad-1: #0f172a;
  --strip-grad-2: #1e1b4b;
  --strip-grad-3: #065f46;
  --strip-focus: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70073-css-newsletter-footer-strip/demo.html) directly in any modern web browser to interact with the newsletter footer strip component offline.
