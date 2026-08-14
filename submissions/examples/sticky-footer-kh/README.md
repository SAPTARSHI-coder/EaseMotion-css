# Sticky Footer Layout

## What does this do?

Provides a layout utility that keeps the footer pinned to the bottom of the viewport when page content is short.

## How is it used?

```html
<body class="ease-sticky-footer-layout">

  <header>...</header>

  <main class="ease-sticky-footer-main">
    ...
  </main>

  <footer>...</footer>

</body>
```

## CSS

```css
.ease-sticky-footer-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.ease-sticky-footer-main {
  flex: 1;
}
```

## Features

- Footer remains at the bottom of short pages
- Pure CSS solution
- Flexbox-based layout
- Lightweight utility classes
- Responsive by default

## Why does it fit EaseMotion CSS?

The utility provides a simple, human-readable layout pattern that solves a common UI problem with minimal CSS. It follows EaseMotion CSS naming conventions and can be easily composed with existing components.