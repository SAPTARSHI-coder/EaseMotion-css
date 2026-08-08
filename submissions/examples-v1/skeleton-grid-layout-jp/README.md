# Skeleton Loading Grid

A responsive CSS Grid component pre-configured to display a set of loading skeleton blocks.

**What does this do?**
Provides a `.ease-skeleton-grid` layout container and `.ease-skeleton-card` children elements that automatically fill the space with a premium shimmering gradient animation, simulating loading data.

**How is it used?**
Use the provided HTML structure as a placeholder while your actual data (like a gallery or product list) is fetching:

```html
<div class="ease-skeleton-grid">
  <!-- Repeat this block for each placeholder item -->
  <div class="ease-skeleton-card">
    <div class="ease-skeleton-img"></div>
    <div class="ease-skeleton-text title"></div>
    <div class="ease-skeleton-text short"></div>
  </div>
</div>
```

**Why is it useful?**
Skeleton screens significantly improve perceived loading times by giving users an immediate visual cue of the layout to come, replacing static spinners.
