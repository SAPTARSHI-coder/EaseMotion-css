# Skeleton Loading Component

**What does this do?**
Provides a pure-CSS implementation of a Skeleton Loading UI pattern, featuring a continuous, smooth shimmering linear-gradient animation.

**How is it used?**
Apply the base `.skeleton-ag` class to placeholder elements. You can combine it with shape modifiers like `.skeleton-circle-ag` or `.skeleton-rounded-ag`, and control the dimensions via inline styles or dedicated layout classes.
```html
<div class="skeleton-ag skeleton-circle-ag" style="width: 50px; height: 50px;"></div>
<div class="skeleton-ag" style="width: 100%; height: 20px;"></div>
```

**Why is it useful?**
Skeleton screens significantly improve perceived performance compared to blank screens or traditional loading spinners by giving the user an immediate preview of the layout structure before the data finishes fetching.
