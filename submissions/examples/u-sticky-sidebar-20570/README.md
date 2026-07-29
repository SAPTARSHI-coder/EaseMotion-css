# Sticky Sidebar Component

A reusable **Sticky Sidebar** component built using HTML, CSS, and JavaScript. The sidebar remains visible while the user scrolls through the page, supports independent scrolling for long navigation menus, and automatically highlights the active section using the **IntersectionObserver API**.

---

## Features

* 📌 Sticky sidebar using `position: sticky`
* 📖 Scrollable sidebar navigation
* 🎯 Active section highlighting
* ⚡ IntersectionObserver-based scroll tracking
* 🎨 Smooth hover and active transitions
* 📱 Responsive layout
* ♿ Accessibility support with `prefers-reduced-motion`
* 🎛 Easy customization with CSS variables

---

## Folder Structure

```text
u-sticky-sidebar-20570/
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
    --ease-surface:#ffffff;
    --header-height:72px;
    --sidebar-width:270px;
}
```

These variables make it easy to customize:

* Primary and secondary colors
* Background colors
* Sidebar width
* Header height
* Border radius
* Shadows
* Animation timing

---

## Component Highlights

* Sticky page header
* Sticky sidebar navigation
* Independent sidebar scrolling
* Automatic active section indicator
*
