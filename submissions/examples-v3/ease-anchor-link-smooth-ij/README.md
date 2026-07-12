# ease-anchor-link-smooth

## What does this do?

Anchor links that ease-scroll to their section target and briefly highlight it on arrival, using nothing but native CSS smooth scrolling and a `:target` keyframe animation — zero JavaScript required.

## How is it used?

Give your nav links the `ease-anchor-link` class and point them at section IDs; each target section gets `ease-anchor-section` plus a matching `id`:

```html
<nav class="ease-anchor-nav">
  <a href="#features" class="ease-anchor-link">Features</a>
</nav>

<section id="features" class="ease-anchor-section">
  <h1>Features</h1>
</section>
```

`html { scroll-behavior: smooth; }` handles the actual scroll animation, `scroll-margin-top` keeps a sticky nav from covering the landed heading, and the hover/focus underline plus the `:target` fade-in highlight are exposed as custom properties:

```css
:root {
  --anchor-scroll-offset: 76px;
  --anchor-underline-duration: 0.3s;
  --anchor-underline-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --anchor-highlight-duration: 1.6s;
  --anchor-highlight-easing: ease-out;
  --anchor-accent: #6366f1;
}
```

## Why is it useful?

It's a self-contained, JS-free navigation pattern that fits EaseMotion's animation-first philosophy: the underline sweep gives immediate hover/focus feedback (interactive trigger), the smooth scroll itself is the primary transition, and the `:target` highlight confirms which section the user landed on — useful on long docs pages or one-page marketing sites. It's fully responsive (nav wraps and section spacing shrinks on small screens) and respects `prefers-reduced-motion` by falling back to instant jumps and a static highlight.

## Files

```
ease-anchor-link-smooth-ij/
├── demo.html
├── style.css
└── README.md
```
