# Parallax Accordion Documentation

A Parallax Accordion combines expandable content panels with subtle depth and motion effects to create a more engaging user experience.

## Features

- Parallax-inspired hover effects
- Smooth accordion transitions
- Responsive layout
- Lightweight implementation
- Customizable styling
- Pure HTML and CSS support

## Files

- demo.html
- style.css

## Basic Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Accordion structure:

```html
<div class="accordion">

  <details>
    <summary>Section One</summary>
    <p>Accordion content goes here.</p>
  </details>

  <details>
    <summary>Section Two</summary>
    <p>Accordion content goes here.</p>
  </details>

</div>
```

## Customization

### Change Accent Color

```css
summary{
  color:#2563eb;
}
```

### Adjust Animation Speed

```css
details{
  transition:.4s ease;
}
```

### Modify Card Radius

```css
details{
  border-radius:20px;
}
```

## Responsive Behavior

The accordion automatically adapts to mobile, tablet, and desktop screen sizes.

## Accessibility

Use semantic HTML elements such as:

```html
<details>
<summary>
```

These provide built-in keyboard accessibility and screen reader support.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari