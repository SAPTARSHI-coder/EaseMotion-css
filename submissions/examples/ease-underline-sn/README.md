# Ease Underline Sn

## What does this do?

A CSS-only animated underline decoration utility that creates engaging underline effects for text links, headings, and navigation items — including left-to-right draw, center-outward draw, opacity fade, and wavy animation.

## How is it used?

```html
<!-- Draw underline from left to right on hover -->
<a href="#" class="underline-draw">Link Text</a>

<!-- Draw underline from center outward on hover -->
<h3 class="underline-draw-center">Heading</h3>

<!-- Fade in underline on hover -->
<span class="underline-appear">Text</span>

<!-- Wavy animated underline on hover -->
<a href="#" class="underline-wave">Navigation Link</a>

<!-- Custom color and thickness -->
<a href="#" class="underline-draw" style="--underline-color: #06b6d4; --underline-thickness: 3px;">Styled Link</a>
```

Customize via CSS custom properties:
- `--underline-color` — underline color (default: `#f97316`)
- `--underline-thickness` — underline thickness (default: `2px`)

## Why is it useful?

Animated underlines are essential for navigation menus, blog post titles, call-to-action text, and footer links. They provide visual feedback and improve UX without JavaScript dependencies. This implementation is pure CSS, respects `prefers-reduced-motion`, and works with any inline element including `<a>`, `<h1>`-`<h6>`, `<span>`, and more.