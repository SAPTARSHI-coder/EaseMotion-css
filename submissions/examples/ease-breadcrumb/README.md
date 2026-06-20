# Animated Breadcrumb Navigation

A modern, responsive breadcrumb navigation component featuring a sequential slide-in trail animation for each breadcrumb item. This component provides clear navigation hierarchy while enhancing user experience with smooth motion and modern styling.

## Features

* Sequential slide-in animation for breadcrumb items
* Animated breadcrumb separators
* Distinct styling for the current page
* Smooth hover interactions
* Responsive design for desktop and mobile devices
* Accessibility-friendly markup using `aria-label="breadcrumb"`
* Pure HTML and CSS implementation
* No JavaScript dependencies
* Multiple styling possibilities (light, dark, glassmorphism, gradient)

---

## Usage

### HTML

```html
<nav class="ease-breadcrumb" aria-label="breadcrumb">

  <a href="#" class="ease-breadcrumb__item">
    Home
  </a>

  <span class="ease-breadcrumb__separator">
    >
  </span>

  <a href="#" class="ease-breadcrumb__item">
    Dashboard
  </a>

  <span class="ease-breadcrumb__separator">
    >
  </span>

  <a href="#" class="ease-breadcrumb__item">
    Analytics
  </a>

  <span class="ease-breadcrumb__separator">
    >
  </span>

  <span class="ease-breadcrumb__item current">
    Reports
  </span>

</nav>
```

### CSS

Include the provided `style.css` file in your project and apply the breadcrumb classes to your navigation structure.

---

## Animation Details

Each breadcrumb item enters with a subtle slide-in motion and staggered delay, creating a trail effect that guides the user's eye through the navigation path.

Separators fade into view alongside breadcrumb items for a cohesive animation sequence.

### Animation Effects

* Slide-in from the left
* Progressive staggered timing
* Separator fade-in
* Hover transitions
* Current page highlighting

---

## Accessibility

This component follows accessibility best practices by:

* Using semantic navigation markup
* Including `aria-label="breadcrumb"`
* Clearly distinguishing the current page
* Maintaining readable contrast levels
* Remaining fully keyboard accessible

---

## Responsive Behavior

The breadcrumb layout adapts gracefully to smaller screens by:

* Wrapping items when necessary
* Maintaining spacing consistency
* Preserving readability across device sizes

---

## Why it fits EaseMotion CSS

EaseMotion CSS emphasizes animation-first, reusable, and human-readable UI patterns.

This breadcrumb component aligns with that philosophy by:

* Providing meaningful motion instead of decorative effects
* Enhancing navigation clarity through animation
* Remaining lightweight and dependency-free
* Offering production-ready usability
* Demonstrating practical interface design patterns

---

## Files Included

```text
submissions/examples/ease-breadcrumb/
├── demo.html
├── style.css
└── README.md
```

---

## Browser Support

* Chrome
* Firefox
* Edge
* Safari

---

## License

This example is provided as part of EaseMotion CSS and may be adapted for personal or commercial projects.
