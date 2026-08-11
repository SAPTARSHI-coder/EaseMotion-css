# Interactive Skeleton Loading Showcase

## 1. What does this do?

This submission provides a collection of six reusable skeleton loading patterns, including Text, Avatar, Card, Image Card, List, and Profile placeholders. Each pattern features a smooth CSS shimmer animation, and the demo includes an interactive toggle to switch between loading placeholders and example loaded content.

---

## 2. How is it used?

Open `demo.html` directly in a browser to preview the showcase. Copy the required HTML structure and corresponding CSS from `style.css`, then customize the size, spacing, colors, and animation speed using the provided CSS custom properties. The interactive toggle in the demo illustrates how skeleton placeholders transition to loaded content in a real application.

Example:

```html
<div class="text-skeleton" role="status" aria-live="polite">
  <span class="skeleton-line skeleton-line--heading"></span>
  <span class="skeleton-line"></span>
  <span class="skeleton-line skeleton-line--short"></span>
</div>
```

---

## 3. Why is it useful?

Skeleton loaders improve the perceived loading experience by displaying meaningful placeholders while content is being fetched. This submission demonstrates responsive, reusable, accessible, and lightweight loading patterns built with HTML, CSS, and minimal vanilla JavaScript for the interactive demo, without relying on external libraries or frameworks.