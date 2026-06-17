# CSS Cross-document View Transitions

## What does this do?

Demonstrates the CSS View Transitions API (`@view-transition`, `::view-transition-old()`, `::view-transition-new()`) by providing a two-page gallery-to-detail navigation with smooth morphing animations, entirely CSS-only with no JavaScript.

## How is it used?

Open `demo.html` in a browser that supports the View Transitions API (Chrome 126+, Edge 126+). Click any card to navigate to the detail page — the card image smoothly morphs into the hero image on the detail page.

```html
<!-- Card image on the gallery page -->
<span class="card-image" style="view-transition-name: card-hero;"></span>

<!-- Hero image on the detail page — same view-transition-name enables cross-document morph -->
<span class="detail-hero" style="view-transition-name: card-hero;"></span>
```

The transition is enabled by the CSS at-rule in `style.css`:

```css
@view-transition {
  navigation: auto;
}
```

Custom animations use pseudo-elements:

```css
::view-transition-old(card-hero) {
  animation: 0.35s ease-out both view-scale-out;
}

::view-transition-new(card-hero) {
  animation: 0.35s ease-out both view-scale-in;
}
```

## Why is it useful?

The View Transitions API is a modern browser feature that enables seamless animated transitions between pages (MPA) or states (SPA). This example positions EaseMotion CSS as a forward-thinking framework by providing a ready-to-use reference implementation that developers can study, customize, and integrate into their projects.

### Key Features

- **Cross-document navigation** — smooth transitions between separate HTML pages
- **Shared element morphing** — card images seamlessly transform into hero images
- **Graceful degradation** — falls back to normal navigation in unsupported browsers
- **Reduced motion** — respects `prefers-reduced-motion` by disabling transitions
- **Zero JavaScript** — pure CSS implementation
- **Responsive** — adapts to mobile and desktop viewports
