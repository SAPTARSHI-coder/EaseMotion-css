# Diagonal Icon Slide Link

## 1. What does this do?

This adds a smooth diagonal offset transition (translating both horizontally and vertically) to inline child icons (like `↗`) when the parent link is hovered.

## 2. How is it used?

Add the class to an anchor element, and wrap the icon/arrow inside an element with the class `.arrow-icon`:

```html
<a href="#" class="diagonal-slide-link">
  <span>View Dashboard</span>
  <span class="arrow-icon">↗</span>
</a>
```

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by using clean, declarative classes to enhance page navigability and external call-to-actions, utilizing lightweight transition transforms with no JS overhead.
