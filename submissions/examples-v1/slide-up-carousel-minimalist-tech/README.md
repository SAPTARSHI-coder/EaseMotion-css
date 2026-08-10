# Slide-Up Carousel for Minimalist Tech Layouts

## Issue

Closes **#50427**

## Description

A responsive **pure CSS Slide-Up Carousel** featuring smooth upward animations with a clean Minimalist Tech design. The component requires no JavaScript and is easy to customize.

## Features

- Pure HTML & CSS
- Smooth slide-up animation
- Responsive layout
- Keyboard accessible
- Uses CSS custom properties
- No JavaScript required

## Folder

```
submissions/examples/slide-up-carousel-minimalist-tech/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<div class="carousel">
    <div class="card">
        <img src="image.jpg" alt="">
        <div class="overlay">
            <h3>Title</h3>
            <p>Description</p>
        </div>
    </div>
</div>
```

## Customization

```css
:root{
    --duration:.45s;
    --radius:14px;
    --overlay:#111827;
}
```

Modify these CSS variables to change animation speed, colors, and border radius.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT