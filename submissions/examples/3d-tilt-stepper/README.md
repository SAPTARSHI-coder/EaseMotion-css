# 3D Tilt Stepper

A responsive **3D Tilt Stepper** component built with pure HTML and CSS for the EaseMotion CSS library. Inspired by **Music Player** interfaces, this component provides an engaging multi-step navigation experience with a subtle 3D tilt animation on hover and keyboard focus.

## Features

- 🎵 Music Player inspired design
- 🎨 Pure HTML & CSS (No JavaScript)
- ✨ Smooth 3D tilt hover animation
- 📱 Fully responsive layout
- ♿ Keyboard accessible with visible focus states
- ⚡ Lightweight and easy to customize

## Folder Structure

```
submissions/examples/3d-tilt-stepper-srujana-manda/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the component:

```html
<div class="stepper">
  <div class="step completed">
    <div class="step-circle">✓</div>
    <div class="step-content">
      <h3>Login</h3>
      <p>Account verified successfully.</p>
    </div>
  </div>

  <div class="connector"></div>

  <div class="step active">
    <div class="step-circle">2</div>
    <div class="step-content">
      <h3>Select Music</h3>
      <p>Choose your favorite playlist.</p>
    </div>
  </div>

  <div class="connector"></div>

  <div class="step">
    <div class="step-circle">3</div>
    <div class="step-content">
      <h3>Confirmation</h3>
      <p>Review and finish setup.</p>
    </div>
  </div>
</div>
```

## Customization

Modify the CSS variables in `style.css` to match your theme.

```css
:root {
  --primary: #7c3aed;
  --primary-light: #ede9fe;
  --success: #22c55e;
  --bg: #f5f7fb;
}
```

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Accessibility

- Semantic HTML structure
- Keyboard focus support using `:focus-visible`
- Responsive layout
- Supports `prefers-reduced-motion`

## Author

**GitHub:** @srujana-manda

---

Created for **EaseMotion CSS** – Issue **#42481** (3D Tilt Stepper Component).