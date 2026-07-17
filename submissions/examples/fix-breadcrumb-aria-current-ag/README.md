# Fix ease-breadcrumb aria-current=page

## What does this do?
Adds `aria-current="page"` to the last breadcrumb item and wraps the list
in `<nav aria-label="Breadcrumb">` for screen reader landmark navigation.

## How is it used?
```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb">
    <li class="ease-breadcrumb__item"><a class="ease-breadcrumb__link" href="/">Home</a></li>
    <li class="ease-breadcrumb__item"><a class="ease-breadcrumb__link" href="#" aria-current="page">Current</a></li>
  </ol>
</nav>
```

## Why is it useful?
Without `aria-current="page"`, screen readers cannot tell users which
breadcrumb represents the current page. Fixes: #35810
