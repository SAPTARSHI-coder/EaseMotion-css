# Skeleton Loader

1. **What does this do?** Shows a content-shaped placeholder with a shimmer sweep while real data is still loading, instead of a generic spinner.

2. **How is it used?** Wrap placeholder blocks in a container with `.skeleton-loader-sup`, and give each shape (avatar, title line, text line) the `.skeleton-loader-sup__block` class plus a size modifier:

```html
<div class="skeleton-loader-sup" role="status" aria-live="polite" aria-label="Loading content">
  <div class="skeleton-loader-sup__avatar-row">
    <div class="skeleton-loader-sup__block skeleton-loader-sup__avatar"></div>
    <div class="skeleton-loader-sup__text-lines">
      <div class="skeleton-loader-sup__block skeleton-loader-sup__line skeleton-loader-sup__line--title"></div>
      <div class="skeleton-loader-sup__block skeleton-loader-sup__line skeleton-loader-sup__line--short"></div>
    </div>
  </div>
  <div class="skeleton-loader-sup__block skeleton-loader-sup__line skeleton-loader-sup__line--full"></div>
</div>
```

3. **Why is it useful?** A shimmering, content-shaped skeleton gives users a clearer sense of *what* is loading and roughly how it will be laid out, which feels faster than a blank screen or a spinner — the same pattern used by GitHub, LinkedIn, and YouTube. It also respects `prefers-reduced-motion` (the shimmer animation is dropped, leaving a static placeholder) and adapts its colors under `prefers-color-scheme: dark`, matching EaseMotion CSS's accessibility-first philosophy.
