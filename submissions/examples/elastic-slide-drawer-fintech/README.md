# Elastic-Slide Drawer for Fintech Dashboard Layouts

A responsive sidebar drawer that slides in from the left with a spring-physics elastic easing curve.

## What does this do?

Provides a navigation drawer component for fintech dashboards that opens with an elastic slide animation and supports staggered link entry for a polished, native-app feel.

## How is it used?

```html
<aside class="drawer" id="drawer" aria-hidden="true">
  <div class="drawer__overlay" id="drawerOverlay"></div>
  <div class="drawer__panel">
    <div class="drawer__header">
      <h2 class="drawer__title">Menu</h2>
      <button class="drawer__close" id="closeDrawer">&times;</button>
    </div>
    <nav class="drawer__nav">
      <a href="#" class="drawer__link drawer__link--active">Dashboard</a>
      <a href="#" class="drawer__link">Transactions</a>
      <a href="#" class="drawer__link">Accounts</a>
    </nav>
  </div>
</aside>

<button class="drawer-toggle" id="openDrawer">☰</button>
```

Toggle open/close with JS:

```js
drawer.classList.toggle("drawer--open");
```

## Why is it useful?

Fintech dashboards need clean navigation that doesn't clutter the main view. This drawer gives a mobile-app-style slide-in menu with elastic spring animation, keeping the UI responsive and fluid while staying lightweight with zero dependencies.

## CSS Custom Properties

| Property              | Description         | Default                                       |
| --------------------- | ------------------- | --------------------------------------------- |
| `--drawer-width`      | Panel width         | `300px`                                       |
| `--drawer-bg`         | Overlay background  | `#111827`                                     |
| `--drawer-panel-bg`   | Panel background    | `#1f2937`                                     |
| `--drawer-accent`     | Active link color   | `#6366f1`                                     |
| `--drawer-transition` | Spring easing curve | `0.45s cubic-bezier(0.68, -0.55, 0.27, 1.55)` |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
