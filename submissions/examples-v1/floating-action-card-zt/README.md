# Floating Action Card

What does this do?

Creates a set of premium floating action cards with hover lift and revealable action buttons. The cards are built with pure HTML and CSS for modern SaaS dashboards and landing pages.

How is it used?

Use the `action-card` base class and choose a variant for the accent treatment.

Example usage:

```html
<link rel="stylesheet" href="style.css">
<article class="action-card card-default">
  <span class="card-tag">Default</span>
  <h2>Workspace summary</h2>
  <p>Clean overview card with a balanced dark surface and soft accent border.</p>
  <button class="card-action">View details</button>
</article>
```

Gradient Accent:

```html
<article class="action-card card-gradient">
  ...
</article>
```

Glass Style:

```html
<article class="action-card card-glass">
  ...
</article>
```

Neon Accent:

```html
<article class="action-card card-neon">
  ...
</article>
```

Why is it useful?

- Ideal for premium sections in dashboards, pricing pages, and product showcases.
- Enhances user interface polish with hover depth and action reveal.
- Fits EaseMotion CSS by delivering a reusable, self-contained component with no external dependencies.

Feature list:
- Floating card lift on hover
- Hover-revealed action button
- Smooth shadow and border transitions
- Gradient, glass, neon, and default variants
- Responsive dark theme styling
- Pure HTML + CSS implementation
