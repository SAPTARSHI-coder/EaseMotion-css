# CSS Slide-Up Stepper

A responsive Stepper component featuring smooth slide-up entrance animations for creative portfolio and project timeline layouts.

## Features

- Pure HTML & CSS
- Slide-up entrance animation
- Responsive Grid Layout
- CSS Custom Properties
- Hover elevation effect
- Accessible with `prefers-reduced-motion`
- Easy customization

## Folder

```
slide-up-stepper/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="stepper">

    <div class="step active">
        <div class="circle">1</div>
        <h3>Research</h3>
        <p>Requirement gathering.</p>
    </div>

</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

```css
:root{
--bg:#0f172a;
--card:#1e293b;
--primary:#38bdf8;
--text:#ffffff;
--muted:#cbd5e1;
--radius:18px;
--duration:.45s;
}
```

## Accessibility

- Responsive design
- Keyboard-friendly structure
- Supports `prefers-reduced-motion`

## Browser Support

- Chrome
- Firefox
- Edge
- Safari