
# ease-section-slide-horizontal

A reusable EaseMotion CSS animation example that demonstrates sections smoothly sliding horizontally into view as the user scrolls down the page.

This example uses the **IntersectionObserver API** to detect when elements enter the viewport and applies a horizontal slide animation from either the left or right side.

---

## Features

* Horizontal slide-in animation on scroll
* Supports both left-to-right and right-to-left entrance
* Uses the IntersectionObserver API
* Smooth opacity and transform transition
* Responsive layout
* Lightweight implementation using HTML, CSS, and JavaScript
* Easy to customize and reuse

---

## Folder Structure

```text
submissions/
└── examples/
    └── ease-section-slide-horizontal/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Usage

1. Open the following file in any modern browser:

```text
demo.html
```

2. Scroll down the page.

3. As each section enters the viewport, it smoothly slides into view from either the left or the right.

---

## Animation Flow

* Initial State

  * Hidden (`opacity: 0`)
  * Offset using `translateX(-80px)` or `translateX(80px)`

* Visible State

  * `opacity: 1`
  * `translateX(0)`

The animation is automatically triggered when the element becomes visible.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* IntersectionObserver API

---

## Browser Compatibility

Tested on:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge

Expected to work in all modern browsers that support the IntersectionObserver API.

---

## EaseMotion Concepts Demonstrated

This example showcases:

* Horizontal scroll animations
* Entrance transitions
* Left and right slide effects
* Responsive layout
* Reusable animation classes
* Modern scroll-triggered interactions

---

## Customization

You can easily customize:

* Animation duration
* Slide distance
* Animation easing
* Background colors
* Content sections
* Trigger threshold
* Animation direction

---

## Purpose

This example demonstrates how to create reusable horizontal scroll-triggered animations using the IntersectionObserver API. It is suitable for feature sections, service cards, product showcases, and other content blocks that benefit from subtle entrance animations.

---

## Author

Submitted for **EaseMotion CSS** as part of **GSSoC 2026**.
