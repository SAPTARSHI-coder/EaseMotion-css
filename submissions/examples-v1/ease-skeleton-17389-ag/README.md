# CSS Skeleton Loader Placeholder Component

This component submission introduces pure CSS skeleton loader placeholders to give visual progression feedback during loading cycles.

---

## Technical Overview

The placeholder shimmer effect uses CSS linear-gradient background shifting:

```css
.ease-skeleton {
  background: linear-gradient(
    90deg,
    var(--ease-skeleton-base) 25%,
    var(--ease-skeleton-shine) 37%,
    var(--ease-skeleton-base) 63%
  );
  background-size: 400% 100%;
  animation: ease-shimmer var(--ease-skeleton-duration) ease-in-out infinite;
}

@keyframes ease-shimmer {
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## Classes Provided

- `.ease-skeleton` — Base class initializing shimmer animations.
- `.ease-skeleton--avatar` — Circles representing user profile avatars.
- `.ease-skeleton--title` — Medium-height bars representing headers.
- `.ease-skeleton--text` — Small lines representing standard paragraph text.
- `.ease-skeleton--image` — Aspect-ratio boxes representing cards or hero elements.

---

## Custom Settings

Change core settings via CSS variables:
- `--ease-skeleton-base` (defaults to subtle transparent white background)
- `--ease-skeleton-shine` (defaults to lighter transparent white highlights)
- `--ease-skeleton-duration` (defaults to `1.5s` cycle speed)

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Verify that two cards (Profile Card, Article Card) display pulsing shimmer blocks representing images, titles, descriptions, and avatars.
3. Click the **Simulate Content Loaded** button at the top.
4. Verify that skeletons hide immediately and actual content renders smoothly.
5. Click the button again to toggle back to loading shapes.
