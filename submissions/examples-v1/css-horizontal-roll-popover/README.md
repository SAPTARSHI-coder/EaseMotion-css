# 🎴 Accessible CSS Horizontal Roll Popover (Pure HTML & CSS)

A modern, accessible popover component featuring a smooth **Horizontal Roll** animation built entirely with **HTML and CSS**. The component leverages native HTML elements (`<details>` and `<summary>`) to provide keyboard accessibility without requiring any JavaScript.

---

## ✨ Features

- 🎯 100% Pure HTML & CSS
- 🚫 Zero JavaScript Dependency
- 🎞️ Smooth Horizontal Roll Animation
- 📱 Fully Responsive Design
- ♿ Keyboard Accessible
- 🎨 Easy Customization with CSS Variables
- 🌟 Modern Glassmorphism UI
- 🌙 Supports `prefers-reduced-motion`

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Transforms
- CSS Keyframe Animations
- Native HTML `<details>` & `<summary>`

---

## ♿ Accessibility

This component is designed with accessibility in mind.

- Uses semantic HTML (`<details>` and `<summary>`)
- Fully keyboard accessible
- Visible focus styles for keyboard users
- Supports users who prefer reduced motion
- No JavaScript required

---

## 🎨 Customization

The animation can be customized using CSS custom properties.

```css
:root {
    --duration: 0.45s;
    --distance: 32px;
    --scale: .78;
    --easing: cubic-bezier(.18,.89,.32,1.28);
}
```

These variables allow developers to adjust the animation timing, travel distance, scaling effect, and easing curve without modifying the component logic.

---

## 📂 Project Structure

```
css-horizontal-roll-popover/
│── demo.html
│── style.css
└── README.md
```

---

## 🚀 Highlights

The popover features:

- Smooth 3D horizontal roll entrance
- Responsive floating card layout
- Glassmorphism-inspired interface
- Soft shadows and modern UI styling
- Clean and reusable component structure
- Lightweight implementation suitable for modern web projects

---

## 💡 Use Cases

This component is suitable for:

- Information popovers
- Help tooltips
- Feature highlights
- Product walkthroughs
- Interactive documentation
- Dashboard interfaces

---

## 📄 License

This submission is contributed as part of **GSSoC 2026** for the **EaseMotion CSS** repository and follows the repository's licensing terms.