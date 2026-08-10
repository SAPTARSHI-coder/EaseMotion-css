# CSS Animated Night City

A lightweight animated city skyline built entirely with HTML and CSS.

The scene features a nighttime skyline with glowing windows, twinkling stars, a floating moon, and subtle building animations — all without JavaScript or external dependencies.

## ✨ Features

* 🌃 Animated CSS city skyline
* 💡 Flickering building windows
* ⭐ Twinkling stars
* 🌙 Subtle floating moon animation
* 📡 Animated rooftop antenna light
* 📱 Responsive across desktop, tablet, and mobile
* ♿ Supports `prefers-reduced-motion`
* ⚡ Pure HTML and CSS
* 🚫 No JavaScript or external libraries

## 📁 Files

```text
css-animated-night-city/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then use the city scene markup:

```html
<main class="city-scene" aria-label="Animated night city skyline">
  <div class="moon" aria-hidden="true"></div>

  <div class="stars" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="city" aria-hidden="true">
    <div class="building building--small">
      <div class="windows">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

  <div class="ground" aria-hidden="true"></div>
</main>
```

For the complete implementation, see `demo.html`.

## 🎨 Customization

The main colors are controlled through CSS custom properties:

```css
:root {
  --city-bg: #070b1a;
  --city-bg-light: #101a35;
  --building: #11182c;
  --building-light: #18223d;
  --window: #ffd76a;
  --window-soft: #8fa7d8;
  --moon: #f7f0d2;
  --ground: #050711;
}
```

These variables can be overridden to match different themes or designs.

## ⚙️ Animation

The component uses CSS keyframes for its animations:

* `window-flicker` — creates changing window illumination
* `twinkle` — animates the stars
* `moon-float` — gives the moon a subtle floating effect
* `building-breathe` — adds a gentle brightness variation
* `antenna-blink` — animates the rooftop warning light

No JavaScript is required.

## ♿ Accessibility

Decorative elements are marked with `aria-hidden="true"` so they are ignored by assistive technologies.

The component also respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📱 Responsive Design

The skyline automatically adapts to smaller screens using CSS media queries.

On mobile:

* Building widths are reduced
* Window spacing is adjusted
* Decorative buildings are simplified
* Text scales down
* The skyline occupies less vertical space

## 🌐 Browser Support

The component uses standard HTML and CSS features supported by modern browsers.

Tested with:

* Chrome
* Firefox
* Edge
* Safari

## 💡 Why EaseMotion CSS?

This example demonstrates how CSS animations can create an engaging visual scene without JavaScript or third-party animation libraries.

It follows the EaseMotion CSS philosophy of lightweight, reusable, performant, and dependency-free animations.
