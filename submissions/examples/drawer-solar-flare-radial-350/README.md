# Solar Flare Radial Drawer

A pure CSS, hardware-accelerated drawer featuring a dark theme with a smooth, glowing solar flare radial gradient effect.

## What does this do?
This is a smooth, accessible side drawer/sidebar built without JavaScript, utilizing the hidden checkbox hack and CSS transforms for high-performance sliding animations.

## How is it used?

```html
<!-- Open Button -->
<label for="drawer-toggle" class="drawer-open-btn">Open</label>

<!-- Hidden Checkbox -->
<input type="checkbox" id="drawer-toggle" class="drawer-toggle">

<!-- Overlay -->
<label for="drawer-toggle" class="drawer-overlay"></label>

<!-- Drawer -->
<aside class="drawer">
  <div class="drawer-content">
    <div class="drawer-header">
      <h2 class="drawer-title">Menu</h2>
      <label for="drawer-toggle" class="drawer-close-btn">&times;</label>
    </div>
    <!-- Add navigation items here -->
  </div>
</aside>
```

## Why is it useful?
It provides a performant, zero-dependency sidebar solution that feels dynamic and modern, perfectly fitting EaseMotion's philosophy of lightweight, beautiful animations powered entirely by CSS. The solar flare visual effect adds depth to dark mode interfaces without compromising usability.
