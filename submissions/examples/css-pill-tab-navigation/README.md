# CSS Pill Tab Navigation

A pure CSS pill-shaped tab navigation component featuring rounded tabs, smooth hover interactions, and a visually distinct active state.

## Features

- Pure CSS implementation
- Pill-shaped navigation layout
- Active tab highlighting
- Smooth hover and focus effects
- Responsive design
- Light and dark mode support
- Accessibility-friendly markup
- Easy customization using CSS variables

## Usage

### HTML

```html
<nav class="pill-tabs" aria-label="Primary Navigation">
  <button class="pill-tab active">Home</button>
  <button class="pill-tab">Projects</button>
  <button class="pill-tab">Analytics</button>
  <button class="pill-tab">Settings</button>
</nav>
```

### CSS

```css
.pill-tab.active {
  background: var(--active-color);
  color: white;
}
```

## Customization

```css
:root {
  --active-color: #4f46e5;
  --surface: #ffffff;
}
```

## Accessibility

- Semantic navigation container
- Keyboard focus support
- Proper ARIA labeling
- Reduced motion support

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## File Structure

```text
css-pill-tab-navigation/
├── demo.html
├── style.css
└── README.md
```