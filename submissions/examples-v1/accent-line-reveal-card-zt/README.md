# Accent Line Reveal Card

What does this do?

Creates modern card components with a top accent line that expands on hover, offering a polished SaaS-style reveal effect using only HTML and CSS.

How is it used?

Link the stylesheet and use the `reveal-card` class with one of the accent variants.

Example usage:

```html
<link rel="stylesheet" href="style.css" />
<article class="reveal-card card-default">
  <div class="accent-line"></div>
  <div class="card-body">
    <span class="card-label">Default</span>
    <h2>Workspace summary</h2>
    <p>
      Clean overview card with a balanced dark surface and soft accent border.
    </p>
    <a class="card-cta" href="#">Review report</a>
  </div>
</article>
```

CSS customization:

- Change `--accent` for the default line color.
- Use `card-blue`, `card-purple`, `card-neon`, or `card-gradient` for accent variations.
- Adjust `box-shadow` values on `.reveal-card:hover` to deepen hover depth.

Why is it useful?

- Adds a premium hover effect suitable for dashboards, landing pages, and product showcases.
- Provides a reusable card pattern with strong visual polish and no JavaScript.
- Fits EaseMotion CSS by delivering a self-contained component with clean styling and responsive behavior.
