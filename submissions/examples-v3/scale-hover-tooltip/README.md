# Scale Hover Tooltip for Product Catalog

A pure HTML and CSS component that displays a modern product card with a smooth scale-hover tooltip animation. The tooltip appears when the user hovers over the card or focuses on it using the keyboard.

## Features

- Pure HTML & CSS (No JavaScript)
- Smooth scale-hover tooltip animation
- Responsive design
- Keyboard accessible using `:focus` and `:focus-within`
- CSS custom properties for easy customization
- Modern product catalog layout
- Lightweight and easy to integrate

## Files

```
scale-hover-tooltip/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over the product card to view the tooltip.
3. Use the **Tab** key to focus the card and display the tooltip via keyboard navigation.

## Customization

Modify the CSS variables in `style.css`:

```css
:root {
  --duration: 0.35s;
  --easing: ease;
  --tooltip-scale: 0.8;
  --hover-scale: 1.03;
  --tooltip-bg: #222;
  --tooltip-color: #fff;
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

This component follows the same license as the EaseMotion CSS repository.
