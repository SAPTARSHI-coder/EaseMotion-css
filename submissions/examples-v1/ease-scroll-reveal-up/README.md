# Ease Scroll Reveal Up

## Overview

**Ease Scroll Reveal Up** is a lightweight scroll animation that reveals elements by sliding them upward while fading them into view. The effect is triggered automatically using the **Intersection Observer API**, providing smooth and efficient scroll-based animations without relying on continuous scroll event listeners.

## Features

* 🎯 Smooth slide-up animation on scroll
* ✨ Fade-in effect with opacity transition
* 🚀 Uses the Intersection Observer API for better performance
* 📱 Works across modern browsers
* 🎨 Supports staggered animations using `:nth-child()`
* ⚡ Lightweight and easy to integrate

## File Structure

```text
ease-scroll-reveal-up/
├── demo.html
├── style.css
├── script.js
└── README.md
```

## Usage

Add the class to any element you want to animate:

```html
<div class="card">
    Your Content
</div>
```

Include the stylesheet and JavaScript:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

The animation is triggered automatically when the element enters the viewport.

## How It Works

* Elements start with:

  * `opacity: 0`
  * `transform: translateY(60px)`
* When an element becomes visible in the viewport, JavaScript adds the `ease-visible` class.
* The CSS transition smoothly changes:

  * `opacity: 1`
  * `transform: translateY(0)`

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Intersection Observer API

## Browser Support

* ✅ Google Chrome
* ✅ Mozilla Firefox
* ✅ Microsoft Edge
* ✅ Safari
