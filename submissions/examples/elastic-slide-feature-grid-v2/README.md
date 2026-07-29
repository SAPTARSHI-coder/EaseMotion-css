# CSS Elastic-Slide Feature Grid

A responsive Feature Grid with smooth elastic slide animations designed for creative portfolio layouts.

## Features

- Pure HTML & CSS
- Elastic slide entrance animation
- Responsive grid layout
- CSS Custom Properties
- Hover elevation effect
- Accessible with `prefers-reduced-motion`

## Folder Structure

```text
elastic-slide-feature-grid/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="feature-grid">

  <article class="feature-card">
      <div class="icon">🎨</div>
      <h3>Creative Design</h3>
      <p>Modern interface.</p>
  </article>

</div>
```

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

```css
:root{
    --bg:#08111f;
    --card:#16263d;
    --primary:#4fd1ff;
    --text:#fff;
    --muted:#cbd5e1;
}
```

## Accessibility

- Responsive layout
- Pure CSS
- Supports `prefers-reduced-motion`

## Browser Support

- Chrome
- Firefox
- Edge
- Safari