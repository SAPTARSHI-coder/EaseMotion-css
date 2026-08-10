# CSS Tooltip Reveal

A lightweight, CSS-only tooltip interaction that smoothly reveals
contextual information when an element is hovered or focused.

## ✨ Features

- Pure HTML and CSS
- No JavaScript required
- Smooth fade and slide animation
- Four tooltip positions
- CSS-generated tooltip arrow
- Hover interaction
- Keyboard focus support
- `data-tooltip` attribute for custom text
- Responsive layout
- Glassmorphism-inspired demo
- Standalone browser demo

## 📁 Folder Structure

```text
css-tooltip-reveal/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Open `demo.html` directly in a modern browser.

Make sure `style.css` is located in the same directory:

```html
<link rel="stylesheet" href="style.css">
```

Add the `tooltip` class and a `data-tooltip` attribute to an element:

```html
<button
    class="tooltip tooltip-top"
    data-tooltip="Save your changes"
    type="button"
>
    Save
</button>
```

## 📍 Tooltip Positions

Four positioning classes are demonstrated:

```text
tooltip-top
tooltip-right
tooltip-bottom
tooltip-left
```

Example:

```html
<button
    class="tooltip tooltip-right"
    data-tooltip="Share this content"
>
    Share
</button>
```

## 🎨 Customization

Tooltip text is controlled through the `data-tooltip` attribute:

```html
data-tooltip="Your custom message"
```

You can customize the appearance by changing the CSS values for:

- Background
- Border radius
- Padding
- Font size
- Animation duration
- Tooltip position
- Maximum width
- Shadow

## ⚙️ How It Works

The tooltip content is generated using the CSS `content` property:

```css
.tooltip::after {
    content: attr(data-tooltip);
}
```

The tooltip starts hidden:

```css
opacity: 0;
visibility: hidden;
```

When the element is hovered or receives keyboard focus, the tooltip
becomes visible:

```css
.tooltip:hover::after,
.tooltip:focus-visible::after {
    opacity: 1;
    visibility: visible;
}
```

The tooltip arrow is created entirely with a CSS border triangle
using the `::before` pseudo-element.

## 💡 Use Cases

This pattern can be used for:

- Icon buttons
- Navigation controls
- Action buttons
- Form controls
- Status indicators
- Dashboard actions
- Helpful UI hints

## 🛠 Technologies

- HTML5
- CSS3
- CSS Pseudo-elements
- CSS Transitions
- CSS Animations
- Flexbox
- Responsive CSS

## 📌 EaseMotion CSS

This example follows an animation-first approach using readable,
composable CSS without JavaScript or external dependencies.

## 📄 License

This example is submitted as part of the EaseMotion CSS examples collection.