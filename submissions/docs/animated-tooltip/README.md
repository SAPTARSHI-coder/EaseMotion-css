# Animated Tooltip

A lightweight and responsive animated tooltip built using only HTML and CSS.

## Features

* Pure HTML and CSS
* Smooth fade and slide animation
* No JavaScript required
* Responsive design
* Easy to customize
* Accessible tooltip-style interaction

## File Structure

```text
animated-tooltip/
├── README.md
├── index.html
└── style.css
```

## Usage

Add a wrapper containing the element that triggers the tooltip and the tooltip content.

```html
<div class="tooltip-wrapper">
  <button class="tooltip-button">Hover Me</button>
  <span class="tooltip">This is an animated tooltip</span>
</div>
```

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

## How It Works

The tooltip is initially hidden using:

```css
opacity: 0;
visibility: hidden;
```

When the user hovers over the wrapper, the tooltip becomes visible:

```css
.tooltip-wrapper:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
```

The `transition` property creates the smooth animation.

## Customization

You can customize:

* Tooltip background
* Text color
* Border radius
* Animation duration
* Tooltip position
* Button styling
* Tooltip width

For example:

```css
.tooltip {
  background: #1e293b;
  color: #ffffff;
  border-radius: 8px;
  transition: all 0.3s ease;
}
```

## Responsive Behavior

The component adapts to smaller screens using a CSS media query. The tooltip width is reduced on mobile devices to prevent overflow.

## Browser Support

The component uses standard CSS features and works in modern browsers including:

* Chrome
* Firefox
* Edge
* Safari

## License

This component is contributed to the EaseMotion-css project under the repository's existing license.
