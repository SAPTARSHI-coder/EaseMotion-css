# CSS Skeleton Screen Loader

Shimmer skeleton placeholders for content loading states, built entirely with pure CSS.

## What does this do?

It provides reusable skeleton loading components that mimic the shape of real content (cards, profiles, lists) while data is being fetched. A subtle shimmer gradient sweeps across each placeholder to indicate activity.

## How is it used?

Drop `demo.html` and `style.css` into your project. Use the skeleton classes to build loading placeholders:

```html
<div class="skeleton-card" role="status" aria-label="Loading content">
  <div class="skeleton-card__image skeleton-shimmer"></div>
  <div class="skeleton-card__body">
    <div class="skeleton-card__title skeleton-shimmer"></div>
    <div class="skeleton-card__text skeleton-shimmer"></div>
  </div>
  <span class="sr-only">Loading content, please wait...</span>
</div>
```

The key class is `skeleton-shimmer` — apply it to any element to give it the shimmer loading effect. The skeleton structure classes (`skeleton-card`, `skeleton-profile`, `skeleton-list`) provide ready-made layouts.

## Why is it useful?

Skeleton screens are a standard pattern in modern web apps for showing loading states. They reduce perceived wait time compared to spinners because users can see the layout forming. This component gives developers a drop-in skeleton kit with card, profile, and list variants, all pure CSS with no JavaScript, customizable via CSS custom properties, and with built-in dark mode and reduced-motion support.
