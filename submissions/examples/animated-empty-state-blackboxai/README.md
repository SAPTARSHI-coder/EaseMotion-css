# Animated Empty State (Floating Illustration) — blackboxai

## 1) What does this do?

Provides a reusable, accessible **empty state** UI with a floating illustration, descriptive text, optional CTA button, and a smooth CSS-only entrance animation.

## 2) How is it used?

Open `demo.html` directly, or copy the HTML structure below and include `style.css`.

```html
<article
  class="ease-empty-state-blackboxai"
  role="status"
  aria-live="polite"
>
  <div class="ease-empty-state-blackboxai__media" aria-hidden="true">
    <!-- Inline illustration (SVG) -->
  </div>

  <div class="ease-empty-state-blackboxai__body">
    <h2 class="ease-empty-state-blackboxai__title">No results found</h2>
    <p class="ease-empty-state-blackboxai__description">
      Try adjusting your filters or search terms.
    </p>

    <div class="ease-empty-state-blackboxai__actions">
      <button class="ease-empty-state-blackboxai__button" type="button">
        Clear filters
      </button>
    </div>
  </div>
</article>
```

Optional: remove the CTA spacing if you don’t render a button.

```html
<article
  class="ease-empty-state-blackboxai ease-empty-state-blackboxai--no-cta"
  role="status"
  aria-live="polite"
>
  ...
</article>
```

## 3) Why is it useful?

Empty states are often overlooked. This component helps communicate “nothing to show yet” clearly, with motion kept respectful via `prefers-reduced-motion`.

It fits EaseMotion CSS’s philosophy: **small, composable UI pieces** that feel polished and performant—without relying on JavaScript for animation.

