````markdown
# Underline Navigation

A clean and reusable CSS-only navigation component with a smooth animated underline effect.

## Features

- Pure HTML and CSS
- No JavaScript required
- Smooth underline animation
- Hover and focus states
- Keyboard accessible
- Responsive on mobile devices
- Supports reduced-motion preferences
- Customizable using CSS variables
- Lightweight and easy to reuse

## Preview

The navigation contains four links:

- Home
- About
- Projects
- Contact

The active navigation item displays an underline. The underline smoothly appears when the user hovers over or focuses on another navigation item.

## Customization

The animation can be customized through CSS custom properties.

```css
:root {
    --underline-color: #2563eb;
    --transition-time: 0.3s;
    --underline-height: 3px;
}
````

### Available Variables

| Variable             | Purpose             | Default   |
| -------------------- | ------------------- | --------- |
| `--underline-color`  | Underline color     | `#2563eb` |
| `--transition-time`  | Animation duration  | `0.3s`    |
| `--underline-height` | Underline thickness | `3px`     |

## Usage

Copy the navigation HTML and CSS into your project.

```html
<nav class="underline-nav" aria-label="Main navigation">
    <a href="#home" class="nav-link active">Home</a>
    <a href="#about" class="nav-link">About</a>
    <a href="#projects" class="nav-link">Projects</a>
    <a href="#contact" class="nav-link">Contact</a>
</nav>
```

## Accessibility

The component includes:

* Semantic `<nav>` element
* `aria-label` for navigation identification
* Keyboard focus styling using `:focus-visible`
* Reduced-motion support using `prefers-reduced-motion`

## Browser Support

The component uses standard CSS features including:

* CSS custom properties
* CSS transitions
* Pseudo-elements
* Media queries

Modern browsers are recommended.

## Contribution

This example is submitted as part of the EaseMotion CSS project.

Files are placed inside:

`submissions/examples/underline-navigation/`

```
```
