# Ease Scroll Stagger Children

A reusable scroll-triggered animation utility that animates the children of a container with staggered delays when the parent enters the viewport. The effect is powered by **IntersectionObserver** and CSS animations, making it lightweight, responsive, and easy to integrate into modern interfaces.

## Features

* 🚀 Scroll-triggered animation using **IntersectionObserver**
* ✨ Smooth staggered child animations
* 🎯 Parent receives `.ease-visible` when entering the viewport
* ⚙️ Configurable with CSS variables
* 📱 Responsive layout
* 🎨 Pure CSS animations with minimal JavaScript
* 🔄 Supports any number of child elements

## Folder Structure

```text
u-scroll-stagger-children-20516/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Wrap any group of elements inside a stagger container:

```html
<section class="ease-scroll-stagger-children">
    <div class="card">Item 1</div>
    <div class="card">Item 2</div>
    <div class="card">Item 3</div>
    <div class="card">Item 4</div>
</section>
```

When the container enters the viewport, the JavaScript automatically adds the `.ease-visible` class, causing each child to animate with staggered delays.

## CSS Variables

| Variable               | Description                    | Default |
| ---------------------- | ------------------------------ | ------- |
| `--ease-stagger-delay` | Delay between child animations | `0.15`  |
| `--ease-duration`      | Animation duration             | `0.7s`  |
| `--ease-distance`      | Initial translateY distance    | `50px`  |

Example:

```css
.ease-scroll-stagger-children {
    --ease-stagger-delay: 0.2;
    --ease-duration: 0.8s;
    --ease-distance: 60px;
}
```

## Browser Support

This example works in modern browsers supporting:

* IntersectionObserver API
* CSS Variables
* CSS Animations
* CSS Transforms
* CSS Grid
* `:nth-child()` selectors

## Accessibility

* Respects the document structure and reading order.
* Animations are triggered only once per container.
* No external libraries or frameworks are required.
* Lightweight implementation with minimal JavaScript.

## Demo

The example includes four demonstration sections:

* Feature Cards
* Pricing Cards
* Team Profiles
* Gallery Grid

Each section independently triggers staggered child animations as it enters the viewport.

## License

Submitted as an example contribution for the **EaseMotion CSS** project and distributed under the repository's license.
