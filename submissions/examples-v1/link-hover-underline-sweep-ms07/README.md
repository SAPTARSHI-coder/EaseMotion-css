# Ease Link Hover Underline Sweep

A lightweight CSS link animation that creates a smooth underline sweep from left to right when the user hovers over a link.

## Features

- Pure CSS
- No JavaScript required
- Uses `ease-` prefixed class names
- Lightweight and reusable
- Smooth underline reveal animation
- Easy to customize

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<a href="#" class="ease-link-sweep">
    Documentation
</a>
```

## How it Works

The component uses a `::after` pseudo-element positioned beneath the link.

Initially the underline is hidden using:

```css
transform: scaleX(0);
```

On hover it smoothly expands across the width of the link using:

```css
transform: scaleX(1);
```

The text color also transitions to provide additional visual feedback.

## Why it fits EaseMotion CSS

- Animation-first design
- Human-readable class name
- Lightweight
- Reusable across any project
- No dependencies