# Ease Breadcrumb

## What does this do?

A responsive breadcrumb navigation component that displays hierarchical navigation using clickable links, chevron separators, and a highlighted active page.

---

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="#">Home</a>
    <span class="separator">›</span>

    <a href="#">Projects</a>
    <span class="separator">›</span>

    <span class="current" aria-current="page">
        Settings
    </span>
</nav>
```

### Features

- Multiple breadcrumb items
- Chevron separators
- Active page highlighting
- Hover animation on links
- Smooth entrance animation
- Responsive wrapping
- Accessible breadcrumb navigation

---

## Why is it useful?

Breadcrumb navigation helps users understand their current location within dashboards, documentation sites, file managers, and multi-level websites.

This component provides a lightweight and reusable navigation pattern with subtle motion while following the animation-first philosophy of EaseMotion CSS.