# CSS Magnetic Pull Modal for Responsive Dashboard Layouts

A **pure CSS Magnetic Pull Modal** designed for responsive dashboard interfaces. The modal uses a smooth magnetic pull entrance animation to create an engaging user experience without requiring JavaScript.

---

## ✨ Features

- Pure HTML & CSS (No JavaScript)
- Smooth Magnetic Pull entrance animation
- Responsive dashboard-inspired layout
- Keyboard-friendly semantic HTML
- Easily customizable using CSS Custom Properties
- Modern, clean UI
- Lightweight and reusable

---

## 📂 Folder Structure

```text
submissions/examples/css-magnetic-pull-modal-responsive-dashboard/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern browser.
2. Click **Open Dashboard Modal**.
3. Close the modal by clicking the **×** button or the backdrop.

---

## 🎨 Customization

Modify the CSS variables in `style.css`:

```css
:root {
    --primary: #2563eb;
    --duration: .65s;
    --easing: cubic-bezier(.22,1,.36,1);
    --pull-distance: 90px;
    --modal-width: 500px;
}
```

You can easily change:

- Primary color
- Animation duration
- Animation easing
- Pull distance
- Modal width
- Border radius

---

## 💻 Example

```html
<label for="modal-toggle" class="open-btn">
    Open Dashboard Modal
</label>

<input type="checkbox" id="modal-toggle" hidden>

<div class="overlay">
    <div class="modal">
        <!-- Modal Content -->
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

This component follows the EaseMotion CSS philosophy by providing a human-readable, animation-first, reusable CSS component with zero JavaScript dependency. It is lightweight, responsive, customizable, and easy to integrate into modern dashboard applications.
```