# Spiral Notification Bell

A lightweight **Spiral Notification Bell** built entirely with **HTML** and **CSS** for modern Admin Panel interfaces. The component features a smooth spiral hover animation, animated notification badge, responsive layout, accessibility support, and customizable CSS variables without requiring JavaScript.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Responsive design
- Admin Panel inspired UI
- Smooth spiral bell animation
- Animated notification badge
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easily customizable with CSS variables

---

## Folder Structure

```
spiral-notification-bell-41487/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:.8s;
    --em-delay:0s;
    --em-easing:cubic-bezier(.22,.61,.36,1);

    --em-rotate:18deg;
    --em-scale:1.08;

    --bell:#374151;
    --badge:#2563eb;

}
```

You can customize:

- Animation duration
- Animation delay
- Animation easing
- Bell rotation angle
- Hover scale
- Bell color
- Notification badge color

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<button
    class="notification-bell"
    aria-label="Notifications">

    <span class="bell-icon">🔔</span>

    <span class="notification-badge">
        5
    </span>

</button>
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
- Supports `prefers-reduced-motion`

---

## License

Created as a submission for the **EaseMotion CSS** examples library.