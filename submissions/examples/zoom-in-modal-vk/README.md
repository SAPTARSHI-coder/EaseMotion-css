# Zoom-In Modal for Accessible Web Layouts

A responsive modal component that opens with a smooth zoom-in animation using only HTML and CSS. This example is lightweight, customizable, accessible, and requires no JavaScript.

---

## Features

- Pure HTML5 and CSS3
- Smooth zoom-in entrance animation
- Responsive across desktop, tablet, and mobile
- CSS custom properties for easy customization
- Keyboard accessible
- Supports `prefers-reduced-motion`
- No JavaScript required

---

## Folder Structure

```
zoom-in-modal-vk/
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
        <h2>Welcome!</h2>

        <p>
            This modal demonstrates a smooth zoom-in animation using only
            HTML and CSS.
        </p>

        <div class="modal-actions">
            <a href="#" class="btn secondary">Cancel</a>
            <a href="#" class="btn primary">Continue</a>
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
    --shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
    --radius: 18px;
    --transition: .35s ease;
}
```

---

## Accessibility

- Keyboard accessible controls
- Uses `:focus-visible` for visible focus indicators
- Supports `prefers-reduced-motion`
- Semantic HTML structure
- Responsive layout for all screen sizes

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.