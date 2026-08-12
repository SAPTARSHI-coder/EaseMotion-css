# Sticky Nav Shrink (ease-sticky-nav-shrink)

### 1. What does this do?

This component smoothly transitions the height, padding, background density, and logo size of a navigation bar when the user scrolls past a specified threshold (e.g. 50 pixels) on the page.

### 2. How is it used?

Create your navigation header layout:

```html
<header class="ease-navbar" id="navbar">
  <a href="#" class="ease-navbar-logo">
    <svg viewBox="0 0 40 40">...</svg>
    <span>BrandLogo</span>
  </a>
  <ul class="ease-navbar-links">
    <li><a href="#home">Home</a></li>
  </ul>
</header>
```

Add a small script listening to page scroll offsets to toggle the `.ease-scrolled` class on the `body` after passing your scroll threshold (N pixels):

```javascript
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.body.classList.add("ease-scrolled");
  } else {
    document.body.classList.remove("ease-scrolled");
  }
});
```

### 3. Why is it useful?

It provides a classic, visually satisfying header micro-interaction that reduces visual clutter and increases vertical screen space once users start consuming content. Built with hardware-accelerated transitions, it guarantees smooth rendering rates while ensuring accessible reduced-motion fallback compliance (`prefers-reduced-motion: reduce`) by disabling transitions and swapping states instantly.
