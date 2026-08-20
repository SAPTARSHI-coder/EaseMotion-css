# Accessible Landmark Roles (Header, Nav, Main, Footer)

This submission demonstrates how to implement a fully accessible page skeleton using HTML5 semantic elements that map directly to ARIA Landmark Roles. 

## The Problem: The "Div Soup" Anti-Pattern

When developers build a page layout entirely out of `<div>` tags (e.g., `<div class="header">`, `<div class="content">`), the visual structure is apparent to sighted users, but completely invisible to screen readers. 

Screen reader users rely on **Landmarks** to navigate quickly. Just as a sighted user scans a page to find the main article or the navigation bar, a screen reader user presses a shortcut key to pull up a list of page landmarks and jump directly to them.

## The Solution: Semantic HTML5

Instead of manually writing `role="banner"`, `role="main"`, etc., you should use native HTML5 structural elements. Browsers automatically map these elements to their corresponding ARIA landmark roles.

### 1. Banner (`<header>`)

The site's primary header should be wrapped in a `<header>` tag. When placed at the top level of the `<body>`, it automatically becomes the **Banner** landmark.

```html
<header class="site-header">
    <!-- Logo and primary tools -->
</header>
```

### 2. Main (`<main>`)

The core content of the page MUST be wrapped in a `<main>` tag. This is the most important landmark on the page. 
*Rule: There should only ever be one visible `<main>` element per document.*

```html
<main id="main-content" tabindex="-1">
    <!-- Page specific content -->
</main>
```
*Note: `tabindex="-1"` allows the element to receive programmatic focus from a Skip Link without interrupting the normal `Tab` order.*

### 3. Contentinfo (`<footer>`)

The site's footer should be wrapped in a `<footer>` tag. When at the top level, it becomes the **Contentinfo** landmark.

```html
<footer class="site-footer">
    <!-- Copyright, links, etc. -->
</footer>
```

### 4. Navigation (`<nav>`) and Naming

Navigation sections should be wrapped in `<nav>`. However, most pages have multiple navigation blocks (Header nav, Sidebar nav, Footer links). 

**Critical WCAG Requirement:** If you have multiple elements with the same landmark role (like multiple `<nav>` tags), you MUST give them unique accessible names using `aria-label`. Otherwise, a screen reader user just sees a list that says "Navigation, Navigation, Navigation".

```html
<!-- Primary Navigation -->
<header>
    <nav aria-label="Primary Navigation">...</nav>
</header>

<!-- Sidebar Navigation -->
<aside>
    <nav aria-label="Secondary Navigation">...</nav>
</aside>
```

### 5. The Skip Link

Landmarks help screen readers jump around. For sighted keyboard-only users, you must provide a **Skip Link** at the very top of the page that jumps directly to the `<main>` element, bypassing repetitive navigation links.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
