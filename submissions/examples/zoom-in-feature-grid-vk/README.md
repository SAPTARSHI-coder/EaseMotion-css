# Zoom-In Feature Grid

A modern, responsive feature grid built with **pure HTML and CSS**. Each feature card smoothly zooms in on hover or keyboard focus, creating an engaging and accessible user experience without using JavaScript.

---

## ✨ Features

- Pure HTML5 & CSS3
- Smooth zoom-in hover animation
- Responsive CSS Grid layout
- Keyboard accessible with `:focus-visible`
- CSS Custom Properties for easy customization
- Lightweight and performant
- Supports `prefers-reduced-motion`
- Compatible with modern browsers

---

## 📂 Folder Structure

```
zoom-in-feature-grid-vk/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in your browser.
2. Hover over a feature card to view the zoom-in animation.
3. Use the **Tab** key to navigate between cards and observe keyboard focus styles.

---

## 🎨 CSS Custom Properties

The component can be customized by modifying the variables inside `:root`.

```css
:root {
    --primary: #4f46e5;
    --secondary: #7c3aed;
    --background: #f8fafc;
    --surface: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;
    --border: #e5e7eb;
    --radius: 18px;
    --transition: 0.35s ease;
}
```

---

## 📱 Responsive Design

The layout uses **CSS Grid** with `auto-fit` and `minmax()` to automatically adapt to:

- Desktop
- Tablet
- Mobile devices

No additional media queries are required for the grid layout.

---

## ♿ Accessibility

- Semantic HTML5 elements
- Keyboard accessible cards using `tabindex="0"`
- Visible keyboard focus states with `:focus-visible`
- Supports `prefers-reduced-motion` for users who prefer reduced animations

---

## 🌐 Browser Support

- Microsoft Edge

---

## 📄 License

This example is contributed as part of the **EaseMotion CSS** examples collection and follows the project's licensing terms.