# CSS Floating Orbit Modal - Accessible Web Layout

A modern, responsive, and accessible modal component built entirely with HTML and CSS. This component features a smooth floating animation with animated orbit rings, creating a visually engaging modal experience without requiring any JavaScript.

---

## ✨ Features

- Pure HTML5 & CSS3
- CSS-only modal interaction (No JavaScript)
- Floating modal animation
- Animated orbit ring effects
- Responsive layout for desktop and mobile devices
- CSS Custom Properties for easy customization
- Accessible dialog structure using ARIA attributes
- Visible keyboard focus styles
- Supports `prefers-reduced-motion` for motion-sensitive users
- Modern UI with smooth transitions

---

## 📂 Project Structure

```text
css-floating-orbit-modal-accessible/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 How It Works

The modal is implemented using a hidden checkbox and CSS selectors, eliminating the need for JavaScript.

- Click **Open Modal** to display the modal.
- Click **Close** to hide the modal.
- Floating and orbit animations are handled entirely with CSS keyframes.

---

## 🎨 Customization

The component exposes several CSS Custom Properties for easy customization.

```css
:root {
    --bg-color: #0f172a;
    --modal-bg: #ffffff;
    --primary: #4f46e5;
    --primary-hover: #4338ca;
    --text: #1f2937;
    --radius: 18px;
    --shadow: 0 20px 45px rgba(0,0,0,.25);

    --orbit-duration: 10s;
    --float-distance: 12px;
    --transition: 0.35s ease;
}
```

You can easily customize:

- Background colors
- Button colors
- Border radius
- Floating animation distance
- Orbit animation speed
- Transition timing
- Shadow intensity

---

## ♿ Accessibility

This component includes several accessibility improvements:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- Keyboard focus styles using `:focus-visible`
- Reduced motion support via:

```css
@media (prefers-reduced-motion: reduce)
```

- High-contrast interactive buttons
- Semantic HTML structure

---

## 📱 Responsive Design

The component automatically adapts to different screen sizes using CSS media queries.

Responsive features include:

- Flexible modal width
- Scaled orbit animations
- Mobile-friendly spacing
- Responsive typography

---

## ⚙️ Technologies Used

- HTML5
- CSS3
- CSS Custom Properties
- CSS Animations
- Flexbox
- Media Queries
- CSS Transitions

---

## 📖 Usage

1. Open `demo.html` in any modern web browser.
2. Click the **Open Modal** button.
3. View the floating orbit animation.
4. Click **Close** to hide the modal.

No JavaScript, frameworks, or build tools are required.

---

## 🌐 Browser Support

This component works in all modern browsers, including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

---

## 📄 License

This component is submitted as part of the **EaseMotion-css** examples collection and follows the licensing terms of the repository.