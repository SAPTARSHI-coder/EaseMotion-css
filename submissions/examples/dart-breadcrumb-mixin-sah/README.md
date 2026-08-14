# Dart Breadcrumb Animation Mixin (`#54691`)

## What does this do?
Provides a dynamic breadcrumb navigation bar where individual links dart forward with spring easing and illuminate path separators when interacted with.

## How is it used?
Wrap an ordered breadcrumb list inside an `ease-breadcrumb-dart` container:
```html
<nav class="ease-breadcrumb-dart">
  <ol class="crumb-list">
    <li><a href="#" class="crumb-link">Home</a><span class="sep">/</span></li>
  </ol>
</nav>
```

## Why is it useful?
Solves issue #54691 by transforming repetitive structural breadcrumb trees into engaging interactive routing features.