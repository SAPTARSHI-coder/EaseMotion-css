# Flash Subscribe Form — EaseMotion CSS

A modern Real Estate inspired flash subscribe form built with pure HTML & CSS using EaseMotion utility classes and variables. Responsive, accessible, and JavaScript-free.

---

## Preview

A compact card-style subscribe form with a subtle animated entrance and an accent strip — ideal for property listings, lead capture, and newsletter CTAs.

---

## Files

```
submissions/examples/flash-subscribe-form-ak/
├── demo.html    ← live demo (links to easemotion.min.css)
├── style.css    ← component styles (responsive + accessible)
└── README.md
```

---

## Installation

1. Copy the folder or use the files in `submissions/examples/flash-subscribe-form-ak/`.
2. Include EaseMotion CSS in the page — the demo links to the repository build at `../../../easemotion.min.css`.

Example head snippet:

```html
<link rel="stylesheet" href="../../../easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

---

## HTML usage

Minimal markup (see `demo.html` for the full example):

```html
<article class="flash-card ease-card ease-padding-6 ease-rounded-lg ease-shadow-md ease-fade-in ease-slide-up">
  <h2 id="flash-headline">Discover premium properties first</h2>
  <p>Quick market alerts and exclusive previews.</p>

  <form class="subscribe-form" method="post" action="#" novalidate>
    <label for="email" class="ease-sr-only">Email address</label>
    <div class="field-group">
      <input id="email" type="email" class="ease-input" placeholder="you@domain.com" required />
      <button class="ease-btn ease-btn-primary ease-btn-pill" type="submit">Subscribe</button>
    </div>
    <p class="ease-text-sm ease-text-muted">No spam — unsubscribe anytime.</p>
  </form>
</article>
```

---

## Why this fits EaseMotion CSS

- Uses EaseMotion utility classes: animations (`ease-fade-in`, `ease-slide-up`), form tokens (`ease-input`), buttons (`ease-btn`, `ease-btn-primary`, `ease-btn-pill`) and spacing utilities.
- Leverages EaseMotion CSS variables for colours and speeds (falls back to `--ease-color-primary`, `--ease-color-surface`, etc.).
- Pure HTML + CSS with semantic markup and accessibility considerations (`aria-*`, `ease-sr-only`, keyboard focus styles).
- Mobile-first responsive layout and `prefers-reduced-motion` support.

---

## Accessibility notes

- Form uses a proper `<label>` for the email input (visually hidden via `ease-sr-only`).
- Input uses `type="email"` and `required` for native validation.
- Decorative accents are non-interfering and animations respect `prefers-reduced-motion`.

---

Contributor: `@ak` — Issue: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/39952
