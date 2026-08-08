# CSS Elastic Slide Card Grid

A responsive Card Grid featuring smooth elastic slide hover animations built with pure HTML and CSS.

## Features

- Pure HTML & CSS
- Responsive Grid Layout
- Elastic Slide Hover Effect
- CSS Custom Properties
- Lightweight & Reusable
- Supports `prefers-reduced-motion`
- Accessible Design

## Folder Structure

```
submissions/examples/elastic-slide-card-grid/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<div class="card-grid">
    <article class="card">
        <h2>Title</h2>
        <p>Description</p>
    </article>
</div>
```

## CSS Variables

```css
:root{
    --primary:#2563eb;
    --radius:18px;
    --duration:.45s;
}
```

## Accessibility

Supports `prefers-reduced-motion` by disabling motion effects for users who request reduced animations.