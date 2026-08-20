Masonry Reduced Motion AK

What does this do?

Demonstrates a CSS masonry layout that respects the user's `prefers-reduced-motion` setting by disabling animations.

---

How is it used?

@media (prefers-reduced-motion: reduce) {
  .masonry-item { animation: none; }
}

Apply reduced-motion-safe animations to masonry grid items.

---

Why is it useful?

Ensures masonry layouts with entrance animations are accessible to users who prefer reduced motion, preventing vestibular discomfort while preserving the layout structure.

Features

- CSS masonry grid layout (multi-column)
- Entrance animations for items
- Reduced motion media query guard
- Graceful fallback for non-supporting browsers
- Responsive column count
- Accessible by default
- Smooth reveal effect
