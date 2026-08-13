# Metallic Sheen CSS Card Component

A pure HTML + Vanilla CSS card component featuring a "Metallic Sheen" visual identity with brushed metal surface gradients (`linear-gradient(135deg, #1e293b 0%, #334155 50%, #0f172a 100%)`), inset highlight bevels (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25)`), a reflective sheen sweep pseudo-element (`::before`), and interactive metallic action controls.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Metallic Sheen Identity**: Multi-layer brushed metal surface gradients, 1px border highlights, inset bevel highlights (`inset 0 1px 0 rgba(255, 255, 255, 0.25)`), and a reflective sheen sweep (`::before`) sliding across the card on hover/focus-within.
- **100% Accessible**: Built using semantic `<article>`, `<h2>`, `<p>`, and real `<a class="metal-card__action">` links with clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on interactive action links.
- **Responsive & Mobile Ready**: Responsive CSS Grid layout scales naturally across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<article class="metal-card">
  <div class="metal-card__header">
    <span class="metal-card__eyebrow">TITANIUM EDITION</span>
    <h2 class="metal-card__title">Polished Metal Surface</h2>
  </div>
  <p class="metal-card__description">
    A high-performance CSS card component engineered with multi-layer brushed
    metal surface gradients.
  </p>
  <div class="metal-card__footer">
    <a href="#details" class="metal-card__action">View Details</a>
  </div>
</article>
```

### Customization Variables

```css
:root {
  --metal-bg: #0f172a;
  --metal-card-bg: #1e293b;
  --metal-border: rgba(255, 255, 255, 0.2);
  --metal-accent: #38bdf8;
}
```
