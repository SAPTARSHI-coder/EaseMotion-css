# Ease Underline Hover

A reusable utility class that animates an underline from left to right on hover or keyboard focus.

## What does this do?
Adds a `::after` pseudo-element underline that smoothly grows from 0 to full width when the element is hovered or keyboard-focused, using `currentColor` so it automatically matches the text color.

## How is it used?
Apply `.ease-underline-hover` to any inline-level element — links, buttons, or headings.

```html
<a href="#" class="ease-underline-hover">Documentation</a>
<button class="ease-underline-hover">Get Started</button>
<h2 class="ease-underline-hover">Section Title</h2>
```

## Why is it useful?
A common, modern hover interaction pattern used in navigation bars and documentation sites. This utility is lightweight (pure CSS, no JS), works on any inline element via `currentColor`, is keyboard-accessible (`:focus-visible` triggers the same animation as hover), and respects `prefers-reduced-motion` — fitting EaseMotion's animation-first, reusable-utility philosophy.
