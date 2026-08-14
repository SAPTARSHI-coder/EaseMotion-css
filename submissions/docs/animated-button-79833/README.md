# Animated Button

A reusable Animated Button component that enhances user interaction with smooth hover and click animations. Suitable for landing pages, dashboards, forms, and modern web interfaces.

## Features

- Smooth CSS animations
- Hover and active states
- Responsive design
- Lightweight implementation
- Easy customization

## HTML Structure

```html
<button class="animated-btn">
  Get Started
</button>
```

## CSS Example

```css
.animated-btn {
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  background: #4f46e5;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animated-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(79, 70, 229, 0.35);
}

.animated-btn:active {
  transform: scale(0.96);
}
```

## Usage

1. Copy the HTML markup into your project.
2. Add the CSS styles.
3. Customize colors, border radius, and animation timing as needed.

## Customization

### Change Background Color

```css
.animated-btn {
  background: #10b981;
}
```

### Increase Animation Speed

```css
.animated-btn {
  transition: transform 0.2s ease;
}
```

## Accessibility

- Uses semantic `<button>` element.
- Supports keyboard navigation.
- Maintains sufficient color contrast.

## Browser Support

Works in all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## License

MIT