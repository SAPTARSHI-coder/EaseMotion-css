# Elastic Spring Off-Canvas Side Drawer

## Description
A highly performant off-canvas navigation drawer with natural elastic spring physics and built-in keyboard navigation support.

## Usage
Add the overlay and drawer structural templates to your page:
```html
<div class="drawer-overlay" id="overlay"></div>
<div class="elastic-drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="drawerTitle">
  <div class="drawer-header">
    <h3 id="drawerTitle">Navigation</h3>
    <button class="close-drawer-btn" id="closeBtn">Close</button>
  </div>
  ...
</div>
```

## Why is it useful?
Delivers a highly fluid user experience utilizing advanced CSS cubic-bezier transition curves. Standard features include an integrated modal backdrop overlay, focus-control logic, accessibility role attributes, and safety overrides for prefers-reduced-motion environments.
