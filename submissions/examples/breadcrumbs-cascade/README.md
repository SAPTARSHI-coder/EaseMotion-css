# Breadcrumbs Navigation

A navigation component with animated separators and hover effects for multi-level website hierarchies, using pure CSS.

## What does this do?

This creates breadcrumb navigation with animated separators using CSS pseudo-elements (`::after`), hover effects with underline animations, and multiple style variants for different design contexts.

## How is it used?

```html
<nav class="breadcrumbs breadcrumb-arrow">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Products</a></span>
  <span class="breadcrumb-item"><span class="current">Laptops</span></span>
</nav>

<!-- Separator variants -->
<nav class="breadcrumbs breadcrumb-slash">...</nav>
<nav class="breadcrumbs breadcrumb-dot">...</nav>
<nav class="breadcrumbs breadcrumb-chevron">...</nav>

<!-- Size variants -->
<nav class="breadcrumbs breadcrumb-sm">...</nav>
<nav class="breadcrumbs breadcrumb-md">...</nav>
<nav class="breadcrumbs breadcrumb-lg">...</nav>

<!-- Style variants -->
<nav class="breadcrumbs breadcrumb-pill">...</nav>
<nav class="breadcrumbs breadcrumb-underline">...</nav>
<nav class="breadcrumbs breadcrumb-card">...</nav>
```

Separators are added using CSS pseudo-elements:

```css
.breadcrumb-item::after {
  content: '›';
  margin-left: 0.5rem;
  animation: separator-pulse 2s ease-in-out infinite;
}
```

## Why is it useful?

Breadcrumbs provide essential navigation context for users in multi-level websites, e-commerce platforms, and documentation sites. The animated separators and hover effects improve user experience by providing visual feedback and making the navigation more engaging. The pure CSS approach using pseudo-elements and transitions keeps the implementation lightweight and performant without JavaScript. Multiple style variants (pill, underline, card) make it versatile for different design contexts while maintaining consistency. The component demonstrates advanced CSS techniques for creating clean, accessible navigation patterns.
