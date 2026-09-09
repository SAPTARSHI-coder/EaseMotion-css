# Animated Card

A modern and responsive animated card built using only **HTML and CSS**.

## Preview

The card smoothly lifts upward when the user hovers over it. The icon, decorative background element, and button also have subtle animations.

## Features

* Smooth hover animation
* Modern card design
* Decorative animated background
* Animated icon
* Interactive button
* Fully responsive
* No JavaScript required
* Easy to customize

## Files

```text
animated-card/
├── index.html
├── style.css
└── README.md
```

## Usage

### 1. Add the HTML

Create an `index.html` file and add the card markup:

```html
<div class="card">
  <div class="card-icon">✨</div>

  <h2>Creative Design</h2>

  <p>
    Build beautiful and interactive user interfaces with
    smooth CSS animations and modern styling.
  </p>

  <a href="#" class="card-button">Explore More</a>
</div>
```

### 2. Add the CSS

Link the stylesheet inside the HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

Then add the styles from `style.css`.

## How It Works

The card uses CSS transitions and the `:hover` pseudo-class to create the animation.

When the user hovers over the card:

* The card moves upward using `translateY()`.
* A shadow appears around the card.
* The decorative circle expands.
* The icon slightly rotates and scales.
* The button scales for an interactive effect.

## Customization

You can easily customize:

* Card background
* Border radius
* Animation duration
* Hover transform
* Shadow intensity
* Button colors
* Typography
* Card spacing

For example:

```css
.card:hover {
  transform: translateY(-12px);
}
```

Change the value to control how far the card moves upward.

## Responsive Design

The component includes a media query for smaller screens, ensuring that the card remains readable and properly sized on mobile devices.

## Browser Support

The component uses standard HTML and CSS features and works in modern browsers.

## License

This component is contributed to the EaseMotion-css project under the repository's applicable license.
