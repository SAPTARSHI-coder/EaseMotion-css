# Mega Menu

A responsive two-column navigation panel that smoothly reveals itself beneath a navigation item.

## Usage

Add the navigation trigger and mega-menu panel inside a positioned navigation item:

```html
<div class="mega-nav__item">
  <button class="mega-nav__trigger" type="button">
    Products
  </button>

  <div class="mega-menu">
    <div class="mega-menu__column">
      <p class="mega-menu__heading">Products</p>
      <a href="#">...</a>
    </div>

    <div class="mega-menu__column">
      <p class="mega-menu__heading">Resources</p>
      <a href="#">...</a>
    </div>
  </div>
</div>
```

Include `style.css` to provide the layout and animation.

## Why it is useful

Mega menus make large navigation systems easier to scan by grouping related links into clear columns while using subtle motion to establish a visual connection between the navigation trigger and the revealed content.

The component is dependency-free, responsive, keyboard-focusable, and respects `prefers-reduced-motion`, making it a practical example of EaseMotion's focus on purposeful CSS motion.

## Demo

Open `demo.html` directly in a browser.

Hover or focus on **Products** to reveal the two-column mega menu.

The demo works without a development server.

## Files

```text
mega-menu-sap/
├── demo.html
├── style.css
└── README.md
```

## Accessibility

The example respects:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, animations are disabled.

The navigation trigger uses:

```html
aria-expanded
aria-controls
```

so the open/closed state can be communicated to assistive technologies.

## Responsive Design

On mobile devices (max-width: 700px), the mega menu stacks into a single column and repositions to fit the viewport.

## Design Goals

This example follows the EaseMotion CSS philosophy:

* **Human-readable** — `mega-menu`, `mega-nav__item`, and `is-open` clearly describe UI states.
* **Animation-first** — motion establishes a visual connection between the trigger and the panel.
* **Composable** — the mega menu can be applied to different navigation systems.
* **Lightweight** — no external animation library is required.
* **Accessible** — keyboard navigation and reduced-motion support built-in.

## Browser Testing

* Chrome
* Firefox
* Edge
* Safari

## Contribution

This is a proposed EaseMotion CSS example.

The final EaseMotion class naming, timing, and framework integration can be standardized by the repository maintainer.
