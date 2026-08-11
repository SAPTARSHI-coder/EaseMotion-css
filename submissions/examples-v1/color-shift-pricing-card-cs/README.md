# Color Shift Pricing Card

A modern, responsive pricing card component featuring a subtle animated color-shift border, smooth hover interactions, and an accessible layout. The component is designed to be reusable across SaaS products, landing pages, dashboards, and pricing sections.

---

## 📂 Files

```text
color-shift-pricing-card-cs/
├── demo.html
├── style.css
└── README.md
```

---

## ✨ Features

- Responsive pricing card layout
- Subtle animated color-shift border
- Featured plan variation
- Smooth hover elevation
- CSS-only implementation
- Semantic HTML structure
- Keyboard accessible
- `prefers-reduced-motion` support
- Easily customizable using CSS variables

---

## 📦 Reusable Component

The reusable component is the pricing card itself.

```html
<article class="color-shift-card">
    ...
</article>
```

The component includes:

- plan label
- pricing
- description
- feature list
- call-to-action button

The featured variation uses:

```html
<article class="color-shift-card color-shift-card--featured">
```

---

## 🎨 Demo

The following elements exist only to demonstrate the component:

- page heading
- introductory text
- three-card pricing layout

These are not required when using the component in another project.

---

## 🎨 Customization

The component can be customized through CSS variables.

```css
:root {
    --ease-primary: #7c3aed;
    --ease-primary-soft: #8b5cf6;
    --ease-accent: #22d3ee;

    --ease-bg: #0b1020;
    --ease-surface: #111827;

    --ease-radius: 1.25rem;

    --ease-duration: 420ms;
}
```

You can adjust:

- primary colors
- accent colors
- border radius
- animation speed
- easing
- shadows

without modifying the component structure.

---

## ♿ Accessibility

This component includes:

- semantic HTML
- visible keyboard focus states
- sufficient color contrast
- screen-reader friendly pricing
- reduced-motion support

---

## 📱 Responsive

- Desktop → three columns
- Tablet → two columns
- Mobile → single column

The featured card automatically adapts to each layout.

---

## 🚀 Browser Support

Works in all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- CSS Transitions
- CSS Animations

No JavaScript or external libraries are required.

---

## 💡 Use Cases

Suitable for:

- SaaS landing pages
- Startup websites
- Product pricing sections
- Dashboard pricing
- Subscription plans
- Portfolio templates

---
