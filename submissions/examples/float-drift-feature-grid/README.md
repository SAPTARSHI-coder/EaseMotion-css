# CSS Float-Drift Feature Grid

A responsive feature grid with floating drift animations for creative portfolio layouts.

## Features

- Pure HTML & CSS
- Float drift animation
- Responsive grid
- CSS Custom Properties
- Hover elevation effect
- Accessible using prefers-reduced-motion

## Folder

```
float-drift-feature-grid/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="feature-grid">

    <div class="feature-card">
        <div class="icon">🎨</div>
        <h3>Creative Design</h3>
        <p>Modern UI.</p>
    </div>

</div>
```

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

```css
:root{
--bg:#08111f;
--card:#152238;
--primary:#56ccf2;
--text:#ffffff;
--muted:#c7d2fe;
}
```

## Accessibility

- Responsive
- CSS only
- Supports `prefers-reduced-motion`

## Browser Support

- Chrome
- Firefox
- Edge
- Safari