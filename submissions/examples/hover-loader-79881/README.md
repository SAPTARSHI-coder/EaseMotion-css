# Hover Loader Documentation

A responsive Hover Loader component featuring animated loading indicators that react to user hover interactions.

## Features

- CSS-only implementation
- Hover-triggered animations
- Smooth transitions
- Responsive layout
- Lightweight and reusable
- No external dependencies

## Files

- demo.html
- style.css

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the loader markup:

```html
<div class="hover-loader">
  <span></span>
  <span></span>
  <span></span>
</div>
```

## Customization

Change loader color:

```css
.hover-loader span{
  background:#3b82f6;
}
```

Adjust animation speed:

```css
animation: bounce .8s infinite ease-in-out;
```

## Responsive Behavior

The loader automatically scales and remains centered across desktop, tablet, and mobile devices.