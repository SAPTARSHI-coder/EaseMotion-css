# Glass Navbar – Manual Dark Theme Demo

## Overview

This documentation demo showcases support for manual dark mode using the `data-theme="dark"` attribute.

## Problem

Previously, the glass navbar relied only on the `prefers-color-scheme` media query.

When developers manually enabled dark mode using:

```html
<html data-theme="dark">
```

or

```html
<body data-theme="dark">
```

the navbar links remained dark (`#0f172a`), resulting in poor contrast and unreadable navigation.

## Solution

This demo adds support for:

```css
[data-theme="dark"] .glass-navbar a {
    color: #f8fafc;
}
```

so the navbar text adapts correctly whenever the application switches themes manually.

## Result

- ✅ Supports manual theme switching
- ✅ Maintains accessibility and readability
- ✅ Works independently of the user's system preference
- ✅ Demonstrates the expected behavior in a simple showcase