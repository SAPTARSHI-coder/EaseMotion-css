# Slide-Up Popover for Accessible Web Layouts

A responsive popover component built with pure HTML and CSS that features a smooth slide-up animation. The component is lightweight, keyboard accessible, and ideal for tooltips, contextual help, user guidance, and interactive web interfaces.

---

## Features

- Pure HTML and CSS
- Smooth slide-up animation
- Responsive layout
- Hover and keyboard accessibility
- CSS Custom Properties for easy customization
- Accessible structure
- Supports `prefers-reduced-motion`
- No JavaScript required

---

## Folder Structure

```
slide-up-popover-vk/
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
<div class="popover-container">

    <button class="popover-button">
        Hover Me

        <span class="popover">
            <strong>Quick Tip</strong>
            <span>
                This popover smoothly slides upward into view using only HTML and CSS.
            </span>
        </span>

    </button>

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
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    --radius: 16px;
}
```

---

## Accessibility

- Semantic HTML5 structure
- Keyboard accessible using `:focus-visible`
- Responsive across desktop, tablet, and mobile devices
- Supports `prefers-reduced-motion`
- No JavaScript dependencies

---

## Browser Support

Compatible with all modern browsers including

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.