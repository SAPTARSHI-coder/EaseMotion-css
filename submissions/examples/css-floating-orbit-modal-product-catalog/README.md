# CSS Floating Orbit Modal for Product Catalog Layouts

A **pure CSS Floating Orbit Modal** designed for modern **Product Catalog** interfaces. The component features a smooth floating orbit entrance animation that highlights featured products while remaining lightweight, responsive, and JavaScript-free.

---

## ✨ Features

- Pure HTML & CSS (No JavaScript)
- Floating Orbit entrance animation
- Modern product catalog UI
- Fully responsive layout
- Keyboard-accessible structure
- CSS Custom Properties for easy customization
- Lightweight and reusable
- Clean, animation-first design

---

## 📂 Folder Structure

```text
submissions/examples/css-floating-orbit-modal-product-catalog/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern browser.
2. Click **View Featured Product**.
3. Close the modal using the **×** button or by clicking outside the modal.

---

## 🎨 Customization

Modify the CSS variables in `style.css`:

```css
:root {
    --primary: #2563eb;
    --secondary: #60a5fa;
    --duration: .8s;
    --easing: cubic-bezier(.22,1,.36,1);
    --modal-width: 520px;
    --orbit-size: 140px;
}
```

You can customize:

- Primary & secondary colors
- Animation duration
- Animation easing
- Modal width
- Orbit size
- Border radius
- Shadows
- Typography

---

## 💻 Example

```html
<label for="modal-toggle" class="open-btn">
    View Featured Product
</label>

<input type="checkbox" id="modal-toggle" hidden>

<div class="overlay">
    <div class="modal">
        <!-- Product Modal Content -->
    </div>
</div>
```

---

## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## ♿ Accessibility

- Semantic HTML structure
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- Keyboard-accessible controls
- Responsive across desktop, tablet, and mobile devices

---

## 🎯 Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by delivering a human-readable, reusable, animation-first modal using only HTML and CSS. The floating orbit motion creates an engaging visual effect without JavaScript, while CSS custom properties allow easy customization and integration into product catalog layouts.
```