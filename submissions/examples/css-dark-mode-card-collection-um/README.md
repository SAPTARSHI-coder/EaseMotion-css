# CSS Dark Mode Card Collection

## 1. What does this do?
This component renders identical HTML card nodes side-by-side in Light and Dark mode variations using mapped CSS variable design tokens.

## 2. How is it used?
Configure card components and map theme-specific variables using container scope selectors:
```html
<!-- Light Edition -->
<div class="theme-light">
  <article class="showcase-card">
    <div class="card-image-mock"></div>
    <h2 class="card-title">Title Here</h2>
    <a href="#" class="btn-action">Explore</a>
  </article>
</div>

<!-- Dark Edition -->
<div class="theme-dark">
  <!-- Same internal node structure -->
</div>
```

```css
.theme-light {
  --card-bg: #ffffff;
  --card-title-color: #121225;
}
.theme-dark {
  --card-bg: #121224;
  --card-title-color: #ffffff;
}
```

## 3. Why is it useful?
It provides front-end developers with an optimized design token system model, allowing theme switching or multiple theme variants to be served natively using unified CSS variables without JavaScript.
