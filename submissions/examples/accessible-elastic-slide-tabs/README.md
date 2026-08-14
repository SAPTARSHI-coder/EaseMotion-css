# CSS Elastic-Slide Tabs for Accessible Web Layouts

A modern **CSS-only Elastic-Slide Tabs component** built for EaseMotion CSS.

This example provides a smooth and interactive tab navigation experience using pure HTML and CSS. It includes an elastic sliding indicator, hover animations, responsive behavior, and accessibility support without requiring JavaScript.

---

## ✨ Features

- 🎨 Pure HTML5 and CSS3 implementation
- ⚡ Elastic sliding tab indicator
- 🌀 Smooth hover bounce animation
- ✨ Animated content transitions
- 💎 Glassmorphism inspired design
- 📱 Fully responsive layout
- 🎛 CSS custom properties support
- 🚫 No JavaScript required
- ♿ `prefers-reduced-motion` accessibility support

---

## 📂 Folder Structure

```
accessible-elastic-slide-tabs/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Copy the component files into your project.

2. Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

3. Open `demo.html` in any modern browser.

4. Customize the component using CSS variables.

---

## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

```css
:root {

    --bg: #020617;

    --surface: rgba(255,255,255,0.08);

    --primary: #8b5cf6;

    --secondary: #06b6d4;

    --text: #ffffff;

    --muted: #cbd5e1;

    --border: rgba(255,255,255,0.12);

    --radius: 24px;

}
```

### Customization Examples

Change primary color:

```css
--primary: #ec4899;
```

Change secondary color:

```css
--secondary: #22c55e;
```

Change card roundness:

```css
--radius: 30px;
```

---

## 🎬 Animations

### Elastic Slide Indicator

The active tab uses a smooth sliding indicator with elastic easing.

Features:

- Spring-like movement
- Smooth transition
- Active state highlighting


### Hover Bounce Effect

Tabs have a lightweight scale animation on hover.

Features:

- Interactive feedback
- Smooth transformation
- Better user experience


### Content Entrance Animation

Tab content appears with a slide-up animation.

Features:

- Fade effect
- Smooth movement
- No JavaScript dependency

---

## 📱 Responsive Design

The component adapts automatically for:

- Desktop screens
- Laptops
- Tablets
- Mobile devices

On smaller screens:

- Tabs stack vertically
- Layout remains readable
- Animations stay lightweight

---

## ♿ Accessibility

This component supports reduced motion preferences.

Users who prefer less animation will automatically get simplified transitions using:

```css
@media(prefers-reduced-motion:reduce)
```

Additional accessibility considerations:

- Semantic HTML structure
- Keyboard-friendly radio controls
- Clear contrast between text and background
- No dependency on JavaScript

---

## 🛠 Built With

- HTML5
- CSS3
- CSS Variables
- CSS Flexbox
- CSS Transitions
- CSS Keyframe Animations

---

## 📄 Browser Support

Works on modern browsers:

- Chrome
- Edge
- Firefox
- Safari

---

## 🤝 Contribution

This component is created as part of the EaseMotion CSS open-source contribution program.

---

## 📜 License

Created for the EaseMotion CSS showcase examples.