# Smooth Page Entrance Slide

## What does this do?

It introduces a premium, CSS-only entrance animation that smoothly translates elements upward while fading them in on page load.

## How is it used?

Apply the `entrance-slide-uj` class to any section, container, or card element you want to animate on page load:

```html
<section class="entrance-slide-uj">
  <h2>Main Content Area</h2>
  <p>Content appears with a smooth entrance animation.</p>
</section>
```

You can stagger multiple entrance animations using standard animation delays:

```css
.card-1 { animation-delay: 0.15s; }
.card-2 { animation-delay: 0.3s; }
```

## Why is this useful?

This utility softens abrupt rendering and layouts during initial page rendering, offering a polished, professional entrance flow for landing pages and dashboards. It is highly optimized, lightweight, runs entirely on the GPU, and respects user `prefers-reduced-motion` settings.
