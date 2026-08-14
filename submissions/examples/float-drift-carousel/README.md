# CSS Float-Drift Carousel for Accessible Web Layouts

A modern pure CSS animated carousel component featuring smooth floating motion, responsive cards, and accessible interactions.

This component demonstrates how lightweight CSS animations can create engaging UI experiences without JavaScript.

---

## ✨ Features

- Pure HTML and CSS implementation
- Smooth Float-Drift animation
- Animated carousel cards
- Glassmorphism style UI
- Floating icon effects
- Responsive layout
- CSS custom properties
- Smooth hover transitions
- No JavaScript dependency
- prefers-reduced-motion support

---

## 📂 Folder Structure

```
float-drift-carousel/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Add the component files to your project.
2. Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

3. Open `demo.html` in your browser.

The carousel animation works directly using CSS.

---

## 🎨 CSS Custom Properties

The animation behavior can be customized using CSS variables.

```css
:root {

    --float-distance: 18px;

    --float-duration: 4s;

    --transition: .35s ease;

}
```

---

## ⚙️ Customization

### Change Floating Distance

Increase or decrease card movement:

```css
--float-distance: 30px;
```

---

### Change Animation Speed

Control floating speed:

```css
--float-duration: 6s;
```

---

### Change Transition Timing

Modify hover smoothness:

```css
--transition: .5s ease;
```

---

## 🎬 Animation Details

The component includes:

- Floating card movement
- Animated icons
- Hover elevation effects
- Smooth scaling interactions
- Gradient visual effects

Animations use CSS transforms for better performance.

---

## 📱 Responsive Support

Optimized for:

- Desktop
- Tablet
- Mobile devices

Responsive behavior is handled using CSS media queries.

---

## ♿ Accessibility

Includes:

- Semantic HTML structure
- Accessible links
- Reduced motion support using:

```css
@media(prefers-reduced-motion: reduce)
```

Users who prefer reduced animations automatically receive a simplified experience.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Keyframes
- Flexbox
- Media Queries

---

## 📄 License

Created as an open-source contribution for the EaseMotion CSS animation examples collection.