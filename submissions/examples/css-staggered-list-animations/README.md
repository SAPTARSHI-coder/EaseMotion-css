# CSS Staggered List Entry Animation

## Overview

A CSS-only staggered entry animation for list items.

The component automatically applies an incremental `animation-delay`
to child elements using CSS `:nth-child()` selectors. This avoids
creating separate delay classes such as `delay-100`, `delay-200`, and
`delay-300` for individual list items.

## Features

- CSS-only implementation
- Staggered child animations
- Incremental animation delays
- Supports up to 20 list items
- No JavaScript
- No external dependencies
- Responsive layout
- `prefers-reduced-motion` support

## Usage

Create a list with the `.stagger-list` class:

```html
<ul class="stagger-list">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    <li>Fourth item</li>
</ul>