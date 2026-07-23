# Ripple Wave Spinner

A modern **Ripple Wave Spinner** built entirely with **HTML** and **CSS**, inspired by Real Estate dashboard design patterns. The component creates expanding ripple waves around a central marker to indicate loading while remaining responsive, accessible, and customizable through CSS custom properties.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Real Estate inspired design
- Smooth ripple wave animation
- Animated center pulse
- Responsive layout
- Keyboard accessible
- Supports `prefers-reduced-motion`
- Easy customization using CSS custom properties

---

## Folder Structure

```
ripple-wave-spinner-41931/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:1.8s;
    --em-delay:.35s;
    --em-easing:cubic-bezier(.22,.61,.36,1);

    --spinner-size:180px;

    --primary:#2563eb;
    --secondary:#60a5fa;
    --accent:#bfdbfe;

}
```

These variables allow customization of:

- Animation duration
- Ripple delay
- Animation easing
- Spinner size
- Primary color
- Secondary color
- Accent color

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<div
    class="spinner"
    role="status"
    aria-label="Loading">

    <span class="ripple ripple-1"></span>
    <span class="ripple ripple-2"></span>
    <span class="ripple ripple-3"></span>

    <span class="center-dot"></span>

</div>
```

Open **demo.html** directly in any modern browser to preview the spinner.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Accessibility

- Uses `role="status"` and `aria-label="Loading"`
- Responsive layout
- Supports `prefers-reduced-motion`
- Pure CSS implementation without JavaScript

---

## License

Created as a submission for the **EaseMotion CSS** examples library.