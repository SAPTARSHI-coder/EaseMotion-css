# Aurora Morph-Glow Toast

A modern **Aurora Morph-Glow Toast** built using **pure HTML and CSS** for the EaseMotion CSS showcase collection.

This example demonstrates a creative portfolio notification with a glassmorphism design, animated aurora glow, smooth transitions, and accessibility-friendly motion support.

---

## ✨ Features

* 🎨 Pure HTML5 and CSS3 (No JavaScript required)
* 🌌 Aurora-inspired animated background
* 🪟 Glassmorphism card using `backdrop-filter`
* ✨ Animated morph-glow gradient border
* 🎈 Smooth floating animation
* ⬆️ Elegant slide-in appearance
* 🖱️ Interactive hover effects
* 🎯 Responsive layout for desktop, tablet, and mobile
* ♿ Supports `prefers-reduced-motion`
* 🎨 Easily customizable using CSS custom properties

---

## 📂 Project Structure

```text
aurora-morph-toast/
│── demo.html
│── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in your browser.
2. The toast component is displayed automatically.
3. Hover over the toast to view the interactive glow and elevation effects.

No additional dependencies or setup are required.

---

## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

| Variable       | Description                   |
| -------------- | ----------------------------- |
| `--bg-dark`    | Page background color         |
| `--bg-card`    | Glassmorphism card background |
| `--primary`    | Primary accent color          |
| `--secondary`  | Secondary accent color        |
| `--accent`     | Highlight color               |
| `--text`       | Primary text color            |
| `--text-light` | Secondary text color          |
| `--radius`     | Card border radius            |
| `--blur`       | Glass blur strength           |
| `--shadow`     | Default card shadow           |
| `--transition` | Transition timing             |

Example:

```css
:root{
    --primary:#7c3aed;
    --secondary:#00d4ff;
    --accent:#ff5fd2;
}
```

---

## 🎬 Animations

The component includes several lightweight CSS animations:

* Aurora background animation
* Floating toast animation
* Animated gradient glow border
* Hover elevation effect
* Smooth transitions

All animations are implemented using CSS keyframes and transitions for optimal performance.

---

## 📱 Responsive Design

The layout automatically adapts to different screen sizes.

* Desktop
* Laptop
* Tablet
* Mobile

The toast switches to a vertical layout on smaller screens to improve readability and usability.

---

## ♿ Accessibility

Accessibility considerations include:

* Semantic HTML structure
* Keyboard focus styles using `:focus-visible`
* Reduced motion support with:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, animations and transitions are disabled to provide a more comfortable experience.

---

## 🛠 Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Grid
* CSS Variables
* Keyframe Animations
* Glassmorphism
* Gradient Effects

---

## 📄 License

This example follows the licensing terms of the EaseMotion CSS repository.
