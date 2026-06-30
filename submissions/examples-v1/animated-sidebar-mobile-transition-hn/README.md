# Mobile Sidebar Transition Fix

## What does this do?

This contribution corrects a bug where the mobile sidebar layout skips entrance/exit transitions and snaps instantly. By replacing the binary `display: none` / `display: block` toggling logic with CSS `visibility: hidden` / `visibility: visible` and `pointer-events` controls, the sidebar successfully executes the slide-in and slide-out translate animations on mobile viewports.

## How is it used?

Set up the responsive layout structure:

```html
<link rel="stylesheet" href="style.css" />

<div class="sidebar-layout-hn">
  <!-- Sidebar -->
  <aside class="sidebar-hn">
    <!-- links -->
  </aside>

  <!-- Main Content -->
  <main class="sidebar-main-hn">
    <button class="sidebar-toggle-hn">Toggle Menu</button>
  </main>
</div>

<script>
  document.querySelector(".sidebar-toggle-hn").addEventListener("click", () => {
    document
      .querySelector(".sidebar-layout-hn")
      .classList.toggle("sidebar-open-hn");
  });
</script>
```

## Why is it useful?

It creates fluid, premium mobile interactions. Previously, when the sidebar toggled display states on mobile devices, the browser collapsed the starting translate offset calculation frame, ruining transition animations. Replacing display logic with visibility rules preserves animations.
