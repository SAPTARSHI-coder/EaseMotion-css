# Elastic Off-Canvas Drawer Navigation

A premium mobile-responsive off-canvas drawer navigation.

## What does this do?
It builds an off-canvas drawer layout which slides and bounces elastically from the side bounds, while staggered links progressively fade-in depending on active open/close trigger events.

## How is it used?
Configure standard HTML elements with the drawer container selectors:

```html
<nav class="drawer-panel" id="drawer-panel">
  <div class="drawer-header">
    <h2>Menu Directory</h2>
    <button class="close-btn" id="close-drawer">✕</button>
  </div>
  <ul class="nav-links">
    <li style="--delay: 1;"><a href="#">Link</a></li>
  </ul>
</nav>
```

## Why is it useful?
It provides fluid off-canvas navigation options for mobile-responsive viewports, utilizing CSS transit parameters and staggered delay selectors.
