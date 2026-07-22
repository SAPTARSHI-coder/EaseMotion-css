# Fade-In Popover for Accessible Web Layouts

A modern, responsive, and fully accessible CSS Popover component featuring a smooth fade-in animation. Built entirely with HTML and CSS, it provides an elegant way to display additional information without using JavaScript.

---

## Features

- Smooth fade-in animation
- Pure HTML and CSS
- No JavaScript required
- Fully responsive
- Keyboard accessible
- CSS Custom Properties for easy customization
- Lightweight and reusable
- Modern Accessible Web design

---

## Folder Structure

```text
fade-in-popover-accessible-web/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the component:

```html
<div class="container">

    <button class="popover-btn">
        Learn More
    </button>

    <div class="popover">
        ...
    </div>

</div>
```

---

## Accessibility

- Keyboard accessible
- Supports `:focus-visible`
- Supports `:focus-within`
- Semantic HTML button
- Responsive layout

---

## Customization

Customize using CSS variables:

```css
:root{

    --primary:#2563eb;

    --duration:.35s;

    --radius:16px;

    --shadow:0 15px 35px rgba(0,0,0,.15);

    --scale:.95;

}
```

---

## Browser Support

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## License

Created as a community contribution for the **EaseMotion CSS** project.