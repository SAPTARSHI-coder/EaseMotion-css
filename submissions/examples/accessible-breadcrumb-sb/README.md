# Accessible Breadcrumb Navigation

## What does this do?

Adds a semantic breadcrumb navigation demo with `nav`, ordered-list markup, `aria-current="page"` for the active item, and a CSS-variable driven separator.

## How is it used?

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb" style="--breadcrumb-separator: '›'">
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li aria-current="page">Getting Started</li>
  </ol>
</nav>
```

## Why is it useful?

Breadcrumbs help users understand where they are in nested documentation, dashboards, and app flows while staying lightweight, accessible, and easy to customize with plain CSS.
