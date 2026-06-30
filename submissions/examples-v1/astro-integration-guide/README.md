# Astro Integration Guide

This guide explains how to use EaseMotion CSS in Astro projects.

## Option 1: Install via npm

```bash
npm install easemotion-css
```

Import globally in your layout:

```astro
---
import "../styles/global.css";
---
```

```css
@import "easemotion-css";
```

## Option 2: Use CDN

```html
<link rel="stylesheet" href="https://cdn.example.com/easemotion.css" />
```

## Global Layout Import

Example layout:

```astro
---
import "../styles/global.css";
---

<html>
  <body>
    <slot />
  </body>
</html>
```

## Hydration Considerations

Static animations work automatically:

```html
<div class="ease-fade-in">Content</div>
```

Interactive animations require hydration:

```astro
<MyComponent client:load />
```

This ensures client-side JavaScript is available for dynamic state changes.

## Benefits

- Easy setup
- Works in static and interactive pages
- Human-readable animation classes
- Minimal configuration
