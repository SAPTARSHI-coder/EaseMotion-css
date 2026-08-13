# Animated Skeleton Card Showcase

Resolves #43543.

### What does this do?
Provides a loading skeleton UI card with a smooth shimmer effect mimicking a profile or content card before data is loaded.

### How is it used?
Use the `.ease-skeleton-item` class on any placeholder element. The shimmer animation (`::after` pseudo-element) handles the loading effect automatically. Use `.ease-skeleton-card` as the container.

### Why is it useful?
Skeleton screens reduce perceived loading time. Adding a polished shimmer animation makes the wait feel intentional and improves overall perceived performance.
