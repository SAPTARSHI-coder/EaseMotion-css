# Fix ease-navbar Mobile Menu Focus Ring

## What does this do?
Adds `:focus-visible` outlines to `.ease-navbar__link` and `.ease-navbar__toggle`
so keyboard users can navigate the mobile menu with clear visual feedback.

## How is it used?
```html
<nav class="ease-navbar" aria-label="Main navigation">
  <a class="ease-navbar__brand" href="#">Brand</a>
  <ul class="ease-navbar__menu" role="list">
    <li><a class="ease-navbar__link" href="#" aria-current="page">Home</a></li>
  </ul>
</nav>
```

## Why is it useful?
Keyboard users rely on focus indicators to navigate. Without them the
navbar is inaccessible. Fixes: #35817
