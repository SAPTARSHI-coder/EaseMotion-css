# CSS 3D-Flip Stepper for Responsive Dashboard Layouts

A lightweight pure CSS animated stepper component featuring smooth 3D flip transitions, responsive layouts, and accessibility support.

This component demonstrates modern dashboard progress navigation using only HTML and CSS without JavaScript.

---

## ✨ Features

- Pure HTML and CSS implementation
- 3D perspective flip animation
- Smooth hover interactions
- Responsive dashboard layout
- Glassmorphism card design
- CSS custom properties
- Hardware accelerated transforms
- prefers-reduced-motion support
- No external dependencies

---

## 📂 Folder Structure

```
3d-flip-stepper/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Open `demo.html` in any modern browser.

The component works without JavaScript.

---

## 🎨 CSS Custom Properties

Customize the animation using CSS variables:

```css
:root {

    --flip-angle: 180deg;

    --transition-time: .6s;

}
```

---

## ⚙️ Customization

### Change Animation Speed

```css
--transition-time: 1s;
```

Controls the flip transition duration.

---

### Change Flip Perspective

The 3D effect can be adjusted using transform perspective values:

```css
perspective(900px)
```

Higher values create a deeper 3D appearance.

---

## 🎬 Animation Details

The component includes:

- 3D entrance animation
- Perspective rotation
- Hover tilt effect
- Smooth elevation shadows
- Glassmorphism styling

All animations use CSS transforms for better performance.

---

## 📱 Responsive Support

Optimized for:

- Desktop screens
- Tablets
- Mobile devices

Grid layout automatically adapts according to viewport size.

---

## ♿ Accessibility

Includes:

- Semantic HTML structure
- Reduced motion support
- CSS media query:

```css
@media(prefers-reduced-motion: reduce)
```

Users who prefer less motion receive a simplified experience.

---

## 🛠 Technologies

- HTML5
- CSS3
- CSS Variables
- CSS Keyframes
- CSS Grid
- Media Queries
- Transform API

---

## 📄 License

Created as an open-source contribution for the EaseMotion CSS animation examples collection.