# Position Utilities & Interactive Showcases

Issue: [#16590](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16590)

## What does this do?

Provides a modular suite of CSS position utility classes (`.ease-static`, `.ease-relative`, `.ease-absolute`, `.ease-fixed`, `.ease-sticky`) along with directional offsets (`.ease-top-0`, `.ease-right-0`, `.ease-bottom-0`, `.ease-left-0`, `.ease-inset-0`) and z-index layers. These utilities allow developers to lay out, stack, overlap, and stick elements in the document flow without writing custom CSS selectors.

## How is it used?

Apply the `.ease-relative` utility to create a positioning context, and position child elements using `.ease-absolute` combined with offset utilities:

```html
<!-- Relative parent container -->
<div class="card ease-relative">
  <!-- Absolute tag overlay in the top-right corner -->
  <span class="badge ease-absolute ease-top-0 ease-right-0">New</span>
  <h3>Feature Card</h3>
</div>
```

For full-page sticky headers:

```html
<header class="header ease-sticky ease-top-0 ease-z-50">
  <h2>Sticky Navigation</h2>
</header>
```

## Why is it useful?

1. **Declarative Layout Design**: Enables developers to control component nesting, overlays, and document flow directly from HTML markup, dramatically accelerating prototyping and UI building.
2. **Kinematic Layout Control**: Simplifies complex UI elements like dropdown menus, modal backdrops, sticky table headers, floating action buttons (FABs), and toast alerts.
3. **Consistency**: Standardizes layout behaviors across components, avoiding ad-hoc styling and ensuring compatibility with z-indexing best practices.
