# CSS Slide-Right Modal for Dashboard Analytics Layouts

A **pure CSS Slide-Right Modal** designed for **Dashboard Analytics** interfaces. The component features a smooth slide-in animation from the right, a clean analytics-inspired design, responsive layout, and customizable CSS variables—all without JavaScript.

---

## ✨ Features

- 📊 Dashboard Analytics inspired design
- ➡️ Smooth Slide-Right modal animation
- 🎨 Pure HTML & CSS (no JavaScript required)
- 📱 Fully responsive
- ♿ Keyboard-accessible structure
- 🎛️ Customizable via CSS custom properties
- ⚡ Lightweight and reusable
- 🌐 Cross-browser compatible

---

## 📂 Folder Structure

```text
submissions/
└── examples/
    └── css-slide-right-modal-dashboard-analytics/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create the trigger button:

```html
<a href="#modal" class="open-btn">View Dashboard</a>
```

Create the modal:

```html
<div id="modal" class="modal">
  <div class="modal-overlay">
    <div class="modal-content">
      <!-- Dashboard content -->
    </div>
  </div>
</div>
```

---

## 🎨 Customization

Modify the CSS variables inside `style.css`:

```css
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --modal-width: 640px;
  --duration: 0.55s;
  --easing: cubic-bezier(.22,1,.36,1);
  --radius: 18px;
}
```

You can customize:

- Primary colors
- Animation duration
- Animation easing
- Modal width
- Border radius
- Shadow intensity
- Background colors

---

## 📱 Responsive Design

The modal automatically adapts for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Action buttons stack vertically on smaller screens for better usability.

---

## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## 🎯 Why it fits EaseMotion CSS

This component aligns with the EaseMotion CSS philosophy by providing:

- Pure CSS animation
- Human-readable code
- Zero JavaScript animation dependency
- Easy customization through CSS variables
- Reusable, responsive component suitable for modern dashboard interfaces

---

## 📄 License

Created for the **EaseMotion CSS** examples library as a reusable Slide-Right modal component for Dashboard Analytics layouts.