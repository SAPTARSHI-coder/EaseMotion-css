# Skeleton Loader

## What does this do?

This component provides animated skeleton placeholders with a shimmer effect while actual content is being loaded. It helps users understand that content is being fetched instead of displaying a blank screen or plain loading text.

---

## How is it used?

```html
<div class="skeleton-card">
    <div class="skeleton-image"></div>

    <div class="skeleton-text skeleton-title"></div>

    <div class="skeleton-text"></div>

    <div class="skeleton-text skeleton-short"></div>
</div>
```

---

## Why is it useful?

Skeleton loaders improve perceived performance and provide a smoother user experience during loading states.

This component aligns with EaseMotion CSS's animation-first philosophy because it:

* Uses lightweight, pure HTML and CSS.
* Includes a shimmer animation for visual feedback.
* Can be easily reused in different layouts.
* Is suitable for cards, articles, profile sections, and content-heavy interfaces.
* Follows a beginner-friendly implementation approach.

---

## Real-World Use Cases

* YouTube video cards while recommendations are loading.
* Instagram feed placeholders before posts appear.
* Amazon product cards during data fetching.
* Blog or news article previews.
* Dashboard widgets and profile sections.
