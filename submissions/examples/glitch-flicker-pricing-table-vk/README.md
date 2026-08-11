# Glitch-Flicker Pricing Table

A modern, responsive pricing table built with **pure HTML and CSS**. The component features subtle glitch-flicker text animations, smooth hover interactions, responsive layouts, and accessibility-first design without requiring JavaScript.

---

## ✨ Features

- Pure HTML5 & CSS3
- Glitch-flicker animation for pricing plan titles
- Smooth hover transitions and zoom effects
- Featured pricing plan with visual emphasis
- Responsive CSS Grid layout
- CSS Custom Properties for easy customization
- Keyboard accessible with `:focus-visible`
- Supports `prefers-reduced-motion`
- Lightweight and dependency-free

---

## 📂 Folder Structure

```text
glitch-flicker-pricing-table-vk/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` directly in your browser.
2. Hover over the pricing cards to view the zoom and glow effects.
3. Use the **Tab** key to navigate between pricing cards and buttons.

---

## 🎨 CSS Custom Properties

Customize the component by editing the variables inside `:root`.

```css
:root {
    --primary: #00e5ff;
    --secondary: #ff0080;
    --background: #0d1117;
    --surface: #161b22;
    --text: #f8fafc;
    --muted: #9ca3af;
    --border: rgba(255,255,255,0.08);
    --radius: 18px;
    --transition: 0.35s ease;
}
```

---

## 📱 Responsive Design

The pricing table uses **CSS Grid** with `auto-fit` and `minmax()` to automatically adapt to different screen sizes.

- Desktop
- Tablet
- Mobile

The featured pricing card remains visually distinct while maintaining responsiveness.

---

## ♿ Accessibility

This example follows accessibility best practices by including:

- Semantic HTML5 elements
- Keyboard navigation using `tabindex`
- Visible focus styles with `:focus-visible`
- Support for `prefers-reduced-motion`
- High-contrast text and interactive elements

---

## 🌐 Browser Support

- Microsoft Edge

---

## 📄 License

This example is contributed as part of the **EaseMotion CSS** examples collection and follows the project's licensing terms.