# CSS Tooltip: Pulsating Wave Variation

A modern **Pure CSS Tooltip** component featuring a **Pulsating Wave** animation. The tooltip smoothly fades and scales into view while animated pulse rings radiate outward, creating an eye-catching interaction without requiring JavaScript.

---

## ✨ Features

- Pure HTML & Vanilla CSS
- Animated pulsating wave effect
- Smooth fade and scale transitions
- Hover and keyboard focus support
- Multiple tooltip placements
  - Top
  - Bottom
  - Left
  - Right
- Hardware accelerated animations
- Dark mode friendly
- Responsive layout
- Accessible interaction using `:focus-visible`
- No external libraries or dependencies

---

## 📂 Folder Structure

```
css-tooltip-pulsating-wave/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

Open `demo.html` in any modern browser.

Or copy the tooltip markup into your own project.

```html
<div class="tooltip top">
    <button>Hover Me</button>
    <span class="tooltip-text">
        Tooltip Content
    </span>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

---

## 🎨 Included Examples

- Top Tooltip
- Bottom Tooltip
- Left Tooltip
- Right Tooltip
- Success Tooltip
- Danger Tooltip

---

## ⚙️ Customization

Modify colors inside `style.css`.

Example:

```css
.tooltip-text{
    background:#1e293b;
    color:#fff;
}

.tooltip button{
    background:#2563eb;
}
```

Adjust pulse speed:

```css
animation: pulse 2s infinite;
```

Increase or decrease the duration for faster or slower wave effects.

---

## ♿ Accessibility

- Keyboard accessible
- Supports `:focus-visible`
- High contrast colors
- Motion can be disabled using `prefers-reduced-motion`

---

## 🌐 Browser Support

- Chrome
- Edge
- Firefox
- Safari
- Opera

---

## 📌 Technologies Used

- HTML5
- CSS3
- Flexbox
- CSS Grid
- CSS Animations
- CSS Transforms
- CSS Keyframes

---

## 📄 License

This example is provided for the **EaseMotion CSS** project and follows the repository's contribution guidelines.