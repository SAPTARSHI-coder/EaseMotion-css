# Shimmer Loading Animation (`ease-shimmer`)

A smooth, gradient-based shimmer animation effect that slides across skeleton loaders and placeholder elements. The shimmer creates the illusion of content loading by displaying a moving highlight that mimics light reflecting off a surface. This is a highly requested pattern for loading states and skeleton screens.

**What does this do?**
Adds a `.ease-shimmer` utility class to apply a moving highlight over skeleton elements.

**How is it used?**
```html
<!-- Card placeholder with shimmer -->
<div class="ease-card ease-skeleton ease-shimmer">
  <div style="height: 200px; width: 100%; border-radius: 8px;"></div>
  <div style="height: 16px; width: 75%; margin-top: 16px; border-radius: 4px;"></div>
</div>
```

**Why is it useful?**
- **Human-readable**: `ease-shimmer` is immediately clear and descriptive
- **Animation-first**: It's a pure CSS animation with no JavaScript dependencies
- **Composable**: Can be combined with `.ease-skeleton` and loader components
- **Accessibility-friendly**: Respects reduced motion preferences
