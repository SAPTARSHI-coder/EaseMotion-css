# Ease Breadcrumb Separator

## What does this do?

A reusable animated separator element for breadcrumb navigation paths.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="#">Home</a>
    <span class="separator">›</span>
    <a href="#">Projects</a>
    <span class="separator">›</span>
    <span class="current">Dashboard</span>
</nav>
```

### Available separator styles

Chevron:

```html
<span class="separator">›</span>
```

Slash:

```html
<span class="separator">/</span>
```

Dot:

```html
<span class="separator">•</span>
```

### Features

- Chevron separator
- Multiple separator styles
- Hover animation
- Responsive spacing
- Flexible wrapping
- Pure CSS
- No JavaScript required

## Why is it useful?

Breadcrumb separators are commonly used in dashboards, documentation, nested navigation, settings pages, and other interfaces where users need to understand their current location in a hierarchy.

This component provides a lightweight and reusable separator pattern with subtle animation while following the animation-first philosophy of EaseMotion CSS.