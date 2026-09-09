# Hover Hero Section with Neumorphism Styling

## What does this add?
A pure CSS, highly professional hero section utilizing soft-UI neumorphic shadows and layouts.

## How does a developer use it?
Simply copy the HTML structure from `demo.html` and link the `style.css`.
The structure consists of a `.ease-neu-hero` container wrapping the text content (`.ease-neu-hero-content`) and the animated visual elements (`.ease-neu-hero-visual`). 

```html
<header class="ease-neu-hero">
    <div class="ease-neu-hero-content">...</div>
    <div class="ease-neu-hero-visual" aria-hidden="true">...</div>
</header>
```

## Why does it fit EaseMotion CSS?
It provides a highly recognizable, smooth, and lightweight CSS-only micro-interaction without relying on JavaScript, perfectly matching EaseMotion's beginner-friendly and animation-first philosophy. The neumorphic buttons provide tactile feedback, and the decorative mock cards elegantly rotate and float apart on hover.

## Accessibility & Motion
Fully respects `@media (prefers-reduced-motion: reduce)` by bypassing the hover transforms and button press transitions to provide a static layout for users who prefer reduced motion.

Created for Issue #78507.
