````markdown
# Skeleton Loader

A lightweight CSS-only skeleton loading component with a smooth shimmer animation.

## Features

- Pure HTML and CSS
- No JavaScript required
- Smooth shimmer animation
- Responsive layout
- Card and list skeleton examples
- Customizable CSS variables
- Reduced-motion support
- Lightweight and reusable

## Preview

The component demonstrates loading placeholders for:

- Image
- Title
- Text content
- Button
- Avatar
- List items

A shimmer highlight continuously moves across the placeholders to indicate that content is loading.

## Customization

The animation can be customized using CSS custom properties.

```css
:root {
    --skeleton-base: #e5e7eb;
    --skeleton-shimmer: #f8fafc;
    --shimmer-duration: 1.5s;
    --card-radius: 14px;
}
````

### Available Variables

| Variable             | Purpose                 | Default   |
| -------------------- | ----------------------- | --------- |
| `--skeleton-base`    | Base skeleton color     | `#e5e7eb` |
| `--skeleton-shimmer` | Shimmer highlight color | `#f8fafc` |
| `--shimmer-duration` | Shimmer speed           | `1.5s`    |
| `--card-radius`      | Card corner radius      | `14px`    |

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the skeleton elements:

```html
<div class="skeleton skeleton-title"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-button"></div>
```

## Accessibility

The demo includes:

* Semantic HTML structure
* `aria-label` to describe loading content
* `prefers-reduced-motion` support
* No JavaScript dependency

## Responsive Design

The skeleton card changes from a horizontal layout to a vertical layout on smaller screens.

## Browser Support

The component uses standard CSS features such as:

* CSS custom properties
* CSS animations
* CSS gradients
* Media queries
* Pseudo-elements

Modern browsers are recommended.

## Contribution

This component is submitted for EaseMotion CSS.

Files are located at:

`submissions/examples/skeleton-loader/`

```
```
