# Smooth Scroll Navigation Component

A reusable smooth scroll navigation component built using HTML, CSS, and JavaScript. It provides animated navigation links that smoothly scroll to page sections while automatically highlighting the active section using the **IntersectionObserver API**.

---

## Features

* ✨ Smooth scrolling navigation
* 📌 Sticky navigation bar
* 🎯 Automatic active section highlighting
* 🎨 Animated underline and pill-style active state
* 📱 Fully responsive layout
* ⚡ IntersectionObserver-based section detection
* ♿ Accessibility support with `prefers-reduced-motion`
* 🎛 Easy customization using CSS variables

---

## Folder Structure

```text
u-scroll-to-section-20573/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Variables

```css
:root{
    --ease-primary:#2563eb;
    --ease-secondary:#1d4ed8;
    --ease-bg:#f8fafc;
    --ease-dark:#0f172a;
    --ease-radius:12px;
    --nav-height:72px;
}
```

You can customize:

* Primary color
* Secondary color
* Background color
* Border radius
* Sticky navigation height
* Shadows
* Animation timing

---

## Component Highlights

* Sticky navigation
* Smooth scrolling between sections
* Active navigation link highlighting
* Hero section with call-to-action button
* Feature list
* Services cards
* Gallery layout
* Pricing section
* Contact form
* Responsive design

---

## JavaScript

The component uses the **IntersectionObserver API** to monitor visible sections and automatically update the active navigation link as the user scrolls.

---

## Accessibility

The component supports reduced motion preferences.

```css
@media (prefers-reduced-motion: reduce){
    html{
        scroll-behavior:auto;
    }

    *{
        animation:none !important;
        transition:none !important;
    }
}
```

---

## Browser Support

* Chrome
* Edge
* Firefox
* Safari
* Opera

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* CSS Variables
* Flexbox
* CSS Grid
* IntersectionObserver API

---

## Use Cases

* Landing pages
* Documentation websites
* Portfolio websites
* Product pages
* Company websites
* Dashboard navigation
* Single-page applications
* Marketing websites

---

## Customization

The component can be easily customized by changing:

* Navigation colors
* Active link style
* Underline animation
* Section spacing
* Sticky header height
* Typography
* Layout spacing
* Scroll behavior

---

## Future Enhancements

* Mobile hamburger navigation
* Scroll progress indicator
* Multi-level navigation
* Scrollspy sidebar
* RTL language support
* Keyboard navigation improvements

---

## License

This example is created for the **EaseMotion CSS** project and demonstrates a reusable smooth scroll navigation component using HTML, CSS, and JavaScript.
