# Slide-Up Stepper for Responsive Dashboard Layouts

A responsive multi-step workflow component featuring a smooth slide-up entrance animation. This example is built entirely with HTML and CSS and is ideal for onboarding flows, dashboards, checkout processes, and project timelines.

---

## Features

- Pure HTML and CSS
- Smooth slide-up animation using CSS keyframes
- Responsive layout for desktop, tablet, and mobile
- Interactive hover effects
- CSS Custom Properties for easy customization
- Accessible structure
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
slide-up-stepper-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Use the following structure.

```html
<div class="stepper">

    <div class="step active">
        <div class="step-circle">1</div>
        <h3>Planning</h3>
        <p>Gather requirements and define project scope.</p>
    </div>

    <div class="connector"></div>

    <div class="step">
        <div class="step-circle">2</div>
        <h3>Design</h3>
        <p>Create wireframes and UI layouts.</p>
    </div>

</div>
```

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --background: #f5f7fb;
    --card-bg: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;
    --line: #d1d5db;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    --radius: 18px;
}
```

---

## Accessibility

- Semantic HTML structure
- Responsive across all screen sizes
- Keyboard-friendly layout
- Supports `prefers-reduced-motion`

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.