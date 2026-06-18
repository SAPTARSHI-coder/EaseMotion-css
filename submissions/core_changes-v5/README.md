# CSS-only Drawer / Off-canvas Sidebar Component

A responsive, CSS-only drawer component that slides in from any edge (left, right, top, bottom) with overlay backdrop.

## Features

- **4 positions**: left, right, top, bottom — via `.ease-drawer-left`, `.ease-drawer-right`, `.ease-drawer-top`, `.ease-drawer-bottom`
- **Overlay**: semi-transparent backdrop via `.ease-drawer-overlay`
- **Toggle**: add/remove `.open` on the drawer and `.ease-drawer-open` on `<body>`
- **Escape key**: closes active drawer
- **Overlay click**: closes drawer
- **Focus trap**: first focusable element receives focus on open
- **Body scroll lock**: via `.ease-drawer-open` on `<body>` (`overflow: hidden`)
- **Dark mode**: compatible

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css">
<link rel="stylesheet" href="style.css">

<div class="ease-drawer ease-drawer-left" id="my-drawer">
  <div class="ease-drawer-overlay" data-close></div>
  <div class="ease-drawer-content" role="dialog" aria-modal="true">
    <div class="ease-drawer-header">
      <h2>Title</h2>
      <button class="close-drawer" data-close>&times;</button>
    </div>
    <div class="ease-drawer-body">
      <!-- Content -->
    </div>
  </div>
</div>

<script>
  // Toggle: add/remove .open on drawer and .ease-drawer-open on body
</script>
```

## Toggle JS (minimal)

```js
document.querySelector(".open-drawer").addEventListener("click", function() {
  document.getElementById("my-drawer").classList.add("open");
  document.body.classList.add("ease-drawer-open");
});
```

Fixes #12456
