# CSS Skew-Active Carousel for Accessible Web Layouts

A modern pure CSS animated carousel component featuring smooth skew-based interactions, active card highlighting, responsive layouts, and accessibility support.

This example demonstrates how advanced UI motion effects can be created using only HTML and CSS without any JavaScript dependency.

---

## ✨ Features

- Pure HTML and CSS implementation
- Skew hover interaction effect
- Smooth card transitions
- Active carousel card elevation
- Modern glass-style UI
- Responsive card layout
- CSS keyframe animations
- Customizable CSS variables
- No JavaScript required
- prefers-reduced-motion accessibility support

---

## 📂 Folder Structure

```
skew-active-carousel/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Clone or download this example.
2. Open `demo.html` in any modern browser.
3. The animated carousel will work without additional dependencies.

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

---

## 🎨 CSS Custom Properties

The component exposes animation controls using CSS variables.

```css
:root {

    --skew-angle: -8deg;

    --hover-scale: 1.08;

    --transition: .4s ease;

}
```

---

## ⚙️ Customization

### Change Skew Angle

Increase or decrease the card tilt:

```css
--skew-angle: -12deg;
```

---

### Change Hover Scale

Modify the active hover size:

```css
--hover-scale: 1.15;
```

---

### Change Transition Speed

Adjust interaction smoothness:

```css
--transition: .6s ease;
```

---

## 🎬 Animation Details

The component includes:

- Card entrance animation
- Skew transformation on hover
- Active card lift effect
- Icon bounce animation
- Smooth button interactions

All animations use GPU-friendly CSS transforms.

---

## 📱 Responsive Support

The layout is optimized for:

- Desktop screens
- Tablets
- Mobile devices

Responsive behavior is handled using CSS media queries.

---

## ♿ Accessibility

Accessibility features include:

- Semantic HTML structure
- Accessible buttons
- Reduced motion support using:

```css
@media(prefers-reduced-motion: reduce)
```

Users who prefer reduced animations will automatically receive a simplified experience.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Animations
- CSS Transforms
- Flexbox
- Responsive Media Queries

---

## 📄 License

Created as an open-source contribution for the EaseMotion CSS animation examples collection.