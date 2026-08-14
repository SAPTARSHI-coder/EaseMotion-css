# CSS Spring Physics Modal for Neumorphic Soft Layouts

A pure CSS animated modal featuring a smooth spring-inspired transition and a neumorphic soft UI design.

This component is built for the EaseMotion CSS examples library and requires **no JavaScript for animations**.

---

## ✨ Features

- Pure CSS spring-inspired modal animation
- Neumorphic soft interface design
- Responsive across desktop, tablet, and mobile
- Keyboard accessible
- CSS Custom Properties for easy customization
- Lightweight and beginner-friendly
- No external dependencies

---

## 📂 Folder Structure

```
css-spring-physics-modal/
│── demo.html
│── style.css
└── README.md
```

---

## 🚀 Usage

1. Download or copy the files.
2. Keep `demo.html` and `style.css` in the same directory.
3. Open `demo.html` in any modern browser.

No build tools or installation are required.

---

## 🎨 Customization

The component exposes several CSS custom properties.

```css
:root{
    --spring-duration:650ms;
    --spring-easing:cubic-bezier(.34,1.56,.64,1);
    --modal-scale:.82;

    --primary:#4f7cff;
    --primary-dark:#3566f2;

    --bg:#e9eef5;
    --surface:#e9eef5;

    --radius:24px;
}
```

You can easily customize:

- Animation duration
- Animation easing
- Initial scale
- Border radius
- Colors
- Shadows
- Modal width

---

## ♿ Accessibility

This example includes:

- Semantic `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- `aria-describedby`
- Visible keyboard focus indicators
- Responsive layout for small screens

---

## 📱 Responsive

The modal automatically adapts to different screen sizes using CSS media queries.

On mobile devices:

- Buttons stack vertically.
- Typography scales down.
- Modal width adjusts to the viewport.

---

## 🌟 Browser Support

Works in all modern browsers including:

- Chrome
- Firefox
- Edge
- Safari

---

## 📄 License

This example is provided for the EaseMotion CSS examples library and follows the repository's licensing terms.

---

Made with ❤️ using HTML and CSS only.