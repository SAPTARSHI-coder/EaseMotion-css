# Glitch-Flicker Feature Grid for Responsive Dashboard Layouts

A responsive feature grid built with pure HTML and CSS that showcases a dynamic **glitch-flicker** hover animation. Each feature card briefly jitters with layered cyan and magenta border effects while remaining lightweight, accessible, and responsive.

---

## Features

- Pure HTML and CSS
- Dynamic glitch-flicker hover animation
- Responsive CSS Grid layout
- Interactive card lift and hover effects
- Layered cyan and magenta glitch borders
- CSS Custom Properties for easy customization
- Accessible with `prefers-reduced-motion` support
- No JavaScript required

---

## Folder Structure

```
glitch-flicker-feature-grid-dashboard-vk/
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
<div class="feature-grid">

    <article class="feature-card">
        <div class="icon">📊</div>
        <h3>Analytics</h3>
        <p>Monitor key metrics with interactive reports and real-time insights.</p>
    </article>

    <article class="feature-card">
        <div class="icon">🔔</div>
        <h3>Notifications</h3>
        <p>Receive instant alerts for important activities and updates.</p>
    </article>

</div>
```

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --secondary: #4f46e5;
    --background: #f5f7fb;
    --card: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    --radius: 18px;
}
```

---

## Accessibility

- Semantic HTML5 structure
- Responsive across desktop, tablet, and mobile devices
- Supports keyboard navigation
- Compatible with `prefers-reduced-motion`
- No JavaScript dependencies

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.