# Animated Breadcrumb

## 1. What does this do?
A breadcrumb navigation where links slide up and reveal an underline on hover, with `::before` slash separators between items.

## 2. How is it used?
Use an `<ol>` with the `.breadcrumb` class, each `<li>` is a `.crumb`. Use `.crumb-active` for the current page (no link, bold text).
```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="crumb"><a href="#">Home</a></li>
    <li class="crumb crumb-active" aria-current="page">Current</li>
  </ol>
</nav>
```

## 3. Why is it useful?
An accessible breadcrumb navigation with subtle hover animations. Auto-inserts slash separators between items. Uses `aria-current="page"` and `aria-label` for screen readers. Respects `prefers-reduced-motion`.
