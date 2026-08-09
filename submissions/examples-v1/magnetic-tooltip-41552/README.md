# Magnetic Tooltip

A retro-inspired **Magnetic Tooltip** built entirely with **HTML** and **CSS**. The component features a smooth magnetic hover animation, responsive layout, keyboard accessibility, and customizable CSS variables while requiring **no JavaScript**.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Retro inspired interface
- Smooth magnetic tooltip animation
- Responsive design
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easy customization using CSS custom properties

---

## Folder Structure

```
magnetic-tooltip-41552/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:.55s;
    --em-delay:0s;
    --em-easing:cubic-bezier(.22,.61,.36,1);

    --em-distance:16px;
    --em-scale:1.05;

    --button:#ffb703;
    --button-hover:#fb8500;

    --tooltip:#2b2b2b;
    --tooltip-text:#ffffff;

}
```

These variables allow customization of:

- Animation duration
- Animation delay
- Animation easing
- Tooltip movement distance
- Hover scale
- Button colors
- Tooltip colors

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="tooltip-wrapper">

    <button class="retro-btn">
        Save
    </button>

    <div class="tooltip">
        Save your current progress.
    </div>

</div>
```

Open **demo.html** directly in any modern browser to preview the component.

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
- Responsive layout
- Supports `prefers-reduced-motion`

---

## License

Created as a submission for the **EaseMotion CSS** examples library.