# hamburger-menu

## 1. What does this do?

A pure CSS responsive hamburger navigation menu with smooth animations and light/dark variants.

The hamburger icon morphs into a close (✕) icon when activated, while a mobile navigation panel slides in from the left. The component is built entirely with HTML and CSS using the checkbox technique, requiring no JavaScript.

### Features

* Pure CSS implementation
* No JavaScript required
* Responsive mobile navigation
* Animated hamburger-to-close transition
* Smooth slide-in menu panel
* Light variant
* Dark variant
* Call-to-action button support
* Mobile-first behavior
* Easy customization

---

## 2. How is it used?

### Light Variant

```html
<nav class="hamburger-light">

    <div class="logo">
        EaseMotion
    </div>

    <input type="checkbox" id="menu-light">

    <label for="menu-light" class="hamburger-btn">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <div class="menu">

        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Blog</a>

        <a href="#" class="cta-btn">
            Get Started
        </a>

    </div>

</nav>
```

### Dark Variant

```html
<nav class="hamburger-dark">

    <div class="logo">
        EaseMotion
    </div>

    <input type="checkbox" id="menu-dark">

    <label for="menu-dark" class="hamburger-btn">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <div class="menu">

        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Blog</a>

        <a href="#" class="cta-btn">
            Get Started
        </a>

    </div>

</nav>
```

### Optional Classes

| Class              | Purpose                          |
| ------------------ | -------------------------------- |
| `.active`          | Highlights the current page      |
| `.cta-btn`         | Styles the call-to-action button |
| `.hamburger-light` | Light theme navbar               |
| `.hamburger-dark`  | Dark theme navbar                |

---

## 3. Why is it useful?

Responsive navigation is a fundamental component of modern websites, especially on mobile devices.

This component provides a complete mobile navigation solution using only HTML and CSS. The checkbox technique removes the need for JavaScript while still providing smooth interactions and visual feedback.

Benefits include:

* Lightweight and dependency-free
* Easy to integrate into existing projects
* Works across modern browsers
* Responsive by default
* Clean and reusable code structure
* Demonstrates animation-first UI design

The component can serve as a foundation for future navigation-related components and responsive menu systems.
