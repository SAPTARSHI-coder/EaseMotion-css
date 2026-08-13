# Hover Toggle

A simple, responsive CSS-only toggle interaction that changes its state visually when the user hovers over the toggle.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth hover animation
* Responsive design
* Easy to customize
* Lightweight implementation

## Folder Structure

```text
hover-toggle/
├── index.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet in your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

Then add the toggle markup:

```html
<div class="toggle-wrapper">
  <span class="label">Hover me</span>

  <div class="toggle">
    <div class="toggle-knob"></div>
  </div>
</div>
```

## How It Works

The component uses the CSS `:hover` pseudo-class to create the interaction.

When the user hovers over the toggle:

* The toggle background changes.
* The knob smoothly moves to the opposite side.
* The transition creates a smooth visual effect.

The main interaction is implemented using:

```css
.toggle:hover {
  background: #6366f1;
}

.toggle:hover .toggle-knob {
  transform: translateX(34px);
}
```

## Customization

You can customize the component by changing:

* Toggle width and height
* Knob size
* Background colors
* Animation duration
* Border radius
* Hover movement distance

For example:

```css
.toggle:hover {
  background: #6366f1;
}

.toggle:hover .toggle-knob {
  transform: translateX(34px);
}
```

## Responsive Design

The component adapts to smaller screens using a CSS media query:

```css
@media (max-width: 480px) {
  .container {
    padding: 30px 20px;
  }
}
```

## Browser Support

The component uses standard HTML and CSS features and works in modern browsers including:

* Chrome
* Firefox
* Edge
* Safari

## License

This contribution is made as part of the EaseMotion-css open-source project.
