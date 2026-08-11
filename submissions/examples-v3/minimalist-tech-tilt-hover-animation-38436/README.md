# Minimalist Tech Tilt Hover Animation

A clean and modern **Tilt Hover Animation** built entirely with **HTML** and **CSS**. The component provides a smooth 3D tilt interaction for cards while remaining lightweight, responsive, keyboard accessible, and fully customizable using CSS custom properties.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Responsive layout
- Minimalist Tech inspired design
- Smooth 3D tilt hover animation
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easy customization with CSS variables

---

## Folder Structure

```
minimalist-tech-tilt-hover-animation-38436/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:.45s;
    --em-delay:0s;
    --em-easing:cubic-bezier(.22,.61,.36,1);

    --em-rotate-x:10deg;
    --em-rotate-y:-10deg;

    --em-scale:1.04;

}
```

These variables allow you to customize:

- Animation duration
- Animation delay
- Animation easing
- X-axis tilt angle
- Y-axis tilt angle
- Hover scale

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<article class="tech-card">

    <div class="icon">💻</div>

    <h2>Dashboard</h2>

    <p>Your content here.</p>

    <button>Learn More</button>

</article>
```

Open **demo.html** directly in any modern browser to preview the animation.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Accessibility

- Keyboard navigation supported
- Visible focus styles using `:focus-visible`
- Fully responsive layout
- Respects `prefers-reduced-motion`

---

## License

Created as a submission for the **EaseMotion CSS** examples library.