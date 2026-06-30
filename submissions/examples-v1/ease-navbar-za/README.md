# CSS Responsive Navbar

## What does this do?

Fully responsive navigation bar with hamburger toggle (checkbox hack), dropdown menus, and glassmorphism styling.

## How is it used?

```html
<nav class="nv-navbar">
  <div class="nv-brand"><a href="#">Brand</a></div>
  <input type="checkbox" id="nv-toggle" class="nv-toggle" /><label
    for="nv-toggle"
    class="nv-hamburger"
    ><span></span><span></span><span></span
  ></label>
  <ul class="nv-menu">
    <li class="nv-item nv-active"><a href="#">Home</a></li>
  </ul>
</nav>
```

## Why is it useful?

Provides responsive navigation without JavaScript. Hamburger collapse on mobile via checkbox hack. Hover dropdown menus. Fixed position with glassmorphism blur. Active state highlighting.
