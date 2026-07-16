# Migration from Animate.css to EaseMotion CSS

## Overview

This documentation showcase provides a simple migration path from **Animate.css** to **EaseMotion CSS**. It includes equivalent class mappings, usage examples, migration tips, and accessibility considerations to help developers transition smoothly.

---

## What does this do?

This guide helps developers replace common Animate.css classes with their EaseMotion CSS equivalents while understanding the differences between the two animation approaches.

---

## How is it used?

Simply replace the Animate.css stylesheet with EaseMotion CSS and update the animation classes.

### Before

```html
<link rel="stylesheet" href="animate.min.css">

<div class="animate__animated animate__fadeIn">
    Welcome
</div>
```

### After

```html
<link rel="stylesheet" href="easemotion.css">

<div class="ease-fade-in">
    Welcome
</div>
```

---

## Common Class Mapping

| Animate.css | EaseMotion CSS |
|-------------|----------------|
| `animate__fadeIn` | `ease-fade-in` |
| `animate__fadeOut` | `ease-fade-out` |
| `animate__slideInUp` | `ease-slide-up` |
| `animate__slideInDown` | `ease-slide-down` |
| `animate__slideInLeft` | `ease-slide-left` |
| `animate__slideInRight` | `ease-slide-right` |
| `animate__bounce` | `ease-bounce` |
| `animate__pulse` | `ease-pulse` |
| `animate__spin` | `ease-rotate` |
| `animate__zoomIn` | `ease-zoom-in` |
| `animate__zoomOut` | `ease-zoom-out` |

---

## Utility-First Approach

### Animate.css

Animate.css generally requires two classes:

```html
<div class="animate__animated animate__bounce"></div>
```

### EaseMotion CSS

EaseMotion CSS uses a single descriptive utility class.

```html
<div class="ease-bounce"></div>
```

This results in:

- Cleaner HTML
- Easier maintenance
- More readable markup
- Faster migration

---

## Animation Duration

Animate.css commonly uses helper classes such as:

```html
animate__slow
animate__fast
```

EaseMotion CSS instead encourages customization using CSS variables.

```css
:root{

    --ease-duration:1.5s;

}
```

or

```css
.custom{

    animation-duration:2s;

}
```

---

## Animation Delay

Instead of helper classes:

```html
animate__delay-2s
```

EaseMotion CSS uses native CSS:

```css
.custom{

    animation-delay:2s;

}
```

---

## Find & Replace

For most projects, migration can be completed with simple search-and-replace operations.

Replace:

```
animate__fadeIn
```

with

```
ease-fade-in
```

Likewise:

| Find | Replace |
|------|---------|
| animate__slideInUp | ease-slide-up |
| animate__bounce | ease-bounce |
| animate__pulse | ease-pulse |
| animate__spin | ease-rotate |

After replacing animation names, remove:

```
animate__animated
```

because EaseMotion CSS does not require a base animation class.

---

## Accessibility

EaseMotion CSS supports reduced-motion friendly implementations.

Example:

```css
@media (prefers-reduced-motion: reduce){

    *{

        animation:none !important;
        transition:none !important;

    }

}
```

This respects users who have enabled reduced motion in their operating system.

---

## Why is this useful?

This migration guide makes it easier for developers familiar with Animate.css to adopt EaseMotion CSS without having to learn everything from scratch.

Benefits include:

- Easy migration path
- Familiar animation equivalents
- Cleaner utility-first syntax
- Modern customization using CSS variables
- Better accessibility support
- Lightweight implementation

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## Folder Structure

```
submissions/
└── docs/
    └── migration-from-animate-css/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Files Included

### demo.html

Interactive documentation page demonstrating the migration process.

### style.css

Custom styling for tables, code blocks, responsive layout, and documentation sections.

### README.md

Complete written migration guide with examples, mapping tables, and best practices.

---

## Summary

EaseMotion CSS provides a lightweight, utility-first animation system that makes migrating from Animate.css straightforward. By replacing class names, removing the extra activation class, and using CSS variables for customization, developers can modernize their animation workflow while keeping their code clean and maintainable.