# Holographic Light Shimmer Pulse Modal

A futuristic **Holographic Light** themed modal built entirely with **HTML** and **CSS**. The component features a smooth shimmer pulse animation, glassmorphism styling, responsive layout, keyboard accessibility, and customizable CSS variables without requiring JavaScript.

---

## Features

- Pure HTML & CSS
- No JavaScript
- Responsive design
- Holographic glassmorphism interface
- Smooth shimmer pulse animation
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easy customization using CSS custom properties

---

## Folder Structure

```
holographic-light-shimmer-pulse-modal-38477/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:0.8s;
    --em-delay:0s;
    --em-easing:ease;
    --em-scale:1.03;

    --em-shimmer-color:#7ef9ff;
    --em-glow-color:#86b8ff;

}
```

You can modify these variables to change:

- Animation duration
- Animation delay
- Animation easing
- Hover scale
- Glow color
- Shimmer color

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="modal-overlay">

    <section class="holo-modal">

        <!-- Modal Content -->

    </section>

</div>
```

Simply open **demo.html** in any modern browser.

---

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

---

## Accessibility

- Keyboard focus styles using `:focus-visible`
- High contrast text
- Responsive layout
- Motion reduced automatically when the user enables **Reduce Motion** in their operating system

---

## License

Created as a submission for the **EaseMotion CSS** examples library.