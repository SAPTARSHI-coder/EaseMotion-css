# CSS 3D Flip Tabs for Accessible Web Layouts

A responsive, accessible, **pure CSS** tab component featuring a smooth **3D Flip** transition. This example demonstrates how modern animated tabs can be created without JavaScript while remaining keyboard-friendly and customizable through CSS custom properties.

---

## Features

- 🎨 Pure HTML & CSS
- 🔄 Smooth 3D Flip transition
- ♿ Keyboard accessible
- 📱 Responsive layout
- 🎛 Customizable using CSS variables
- ⚡ No JavaScript required
- 🌙 Modern Accessible Web styling
- 🧩 Easy to integrate
- 🎯 Supports `prefers-reduced-motion`

---

## Folder Structure

```text
css-3d-flip-tabs-accessible/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

Open `demo.html` directly in your browser.

No build tools or dependencies are required.

---

## HTML Usage

```html
<div class="tabs">

    <input type="radio" name="tabs" id="tab1" checked>

    <label for="tab1">
        Home
    </label>

</div>
```

---

## CSS Custom Properties

The component exposes several variables for easy customization.

```css
:root{

    --tab-active:#4f46e5;

    --tab-radius:14px;

    --flip-duration:.6s;

    --flip-easing:cubic-bezier(.25,.8,.25,1);

    --flip-scale:1;

}
```

Example:

```css
:root{

    --flip-duration:.8s;

    --flip-scale:1.03;

    --tab-active:#0f766e;

}
```

---

## Accessibility

This example follows accessibility best practices:

- Keyboard accessible navigation
- Visible focus indicators
- Semantic HTML structure
- Responsive design
- Supports `prefers-reduced-motion`
- No JavaScript dependency

---

## Responsive Behaviour

The layout automatically adapts to smaller screens.

- Desktop: Horizontal tab navigation
- Tablet: Flexible wrapping layout
- Mobile: Vertical tab buttons

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Technologies Used

- HTML5
- CSS3
- CSS 3D Transforms
- CSS Variables
- Flexbox
- CSS Grid

---

## Why It Fits EaseMotion CSS

This submission demonstrates EaseMotion CSS's animation-first philosophy by combining:

- Smooth micro-interactions
- Human-readable CSS
- Zero JavaScript
- Responsive design
- Accessible user experience
- Easily customizable animations

It serves as a reusable example that developers can directly integrate into dashboards, landing pages, settings panels, portfolios, and documentation websites.

---

## Preview

The demo includes three animated tabs:

- Home
- Features
- Contact

Each tab flips into view using a smooth 3D rotation while maintaining accessibility and responsiveness.

---

## License

Created as a contribution for the **EaseMotion CSS** examples collection.