# Scale-Hover Progress Bar for Responsive Dashboard Layouts

A responsive progress bar component built with pure HTML and CSS that features a smooth fill animation and a subtle **scale-hover** interaction. The component is lightweight, customizable, and suitable for dashboards, analytics panels, project tracking, and skill progress displays.

---

## Features

- Pure HTML and CSS
- Smooth progress fill animation
- Scale-hover effect on progress bars
- Responsive dashboard layout
- CSS Custom Properties for easy customization
- Accessible structure
- Supports `prefers-reduced-motion`
- No JavaScript required

---

## Folder Structure

```
scale-hover-progress-bar-vk/
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
<div class="progress-item">

    <div class="progress-header">
        <span>HTML & CSS</span>
        <span>95%</span>
    </div>

    <div class="progress-bar">
        <div class="progress-fill html"></div>
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
    --card: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;
    --track: #e5e7eb;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    --radius: 18px;
}
```

---

## Accessibility

- Semantic HTML5 structure
- Responsive across desktop, tablet, and mobile devices
- Keyboard-friendly layout
- Supports `prefers-reduced-motion`
- No JavaScript dependencies

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.