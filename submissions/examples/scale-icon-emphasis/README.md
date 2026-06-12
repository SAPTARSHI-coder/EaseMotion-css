# Scale Icon Emphasis

A physics-based spring scale animation designed to provide micro-interaction emphasis for icon components during user actions.

---

## 1. What does this do?

It creates an elastic, springy scale-up bounce effect on icons during hover, focus, or click interactions, drawing attention to active components.

---

## 2. How is it used?

Apply the `.scale-icon-emphasis` class to your icon wrapper or direct icon element (e.g., SVG or emoji container):

```html
<!-- Using on an SVG Icon -->
<svg class="scale-icon-emphasis" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 21.35l-1.45-1.32C5.4..." />
</svg>

<!-- Using on an Emoji Icon -->
<span class="scale-icon-emphasis" role="img" aria-label="notification">🔔</span>
```

---

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by adding lightweight, high-performance, and delightful micro-interactions without relying on heavy JavaScript libraries. By incorporating keyframe-based anticipation (compression before pop) and rebounds, it mimics physical material behavior, resulting in an interface that feels responsive and organic.
