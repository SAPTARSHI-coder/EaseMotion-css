# Rotate-Fade Modal for Accessible Web Layouts

A responsive modal component that enters with a smooth rotate-and-fade animation using only HTML and CSS. The example is lightweight, accessible, and suitable for modern web interfaces.

---

## Features

- Pure HTML5 and CSS3
- Rotate + Fade entrance animation
- Responsive design for desktop, tablet, and mobile
- CSS custom properties for easy customization
- Accessible keyboard navigation
- Supports `prefers-reduced-motion`
- No JavaScript required

---

## Folder Structure

```
rotate-fade-modal-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the modal structure:

```html
<a href="#modal" class="open-btn">Open Modal</a>

<div id="modal" class="modal-overlay">
  <div class="modal">
    <h2>Rotate-Fade Modal</h2>
    <p>This modal opens with a smooth rotate and fade animation.</p>

    <div class="modal-actions">
      <a href="#" class="btn secondary">Cancel</a>
      <a href="#" class="btn primary">Confirm</a>
    </div>
  </div>
</div>
```

---

## CSS Custom Properties

The component can be customized using the following variables:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --background: #f4f6fb;
    --surface: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;
    --shadow: 0 18px 45px rgba(0,0,0,.15);
    --radius: 18px;
    --transition: .35s ease;
}
```

---

## Accessibility

- Keyboard accessible buttons and links
- Uses `:focus-visible` for clear focus states
- Supports `prefers-reduced-motion`
- Semantic HTML structure
- Responsive across different screen sizes

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.