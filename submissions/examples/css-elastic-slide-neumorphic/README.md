# CSS Elastic Slide – Neumorphic Toggle

A Pure CSS elastic slide toggle featuring a soft neumorphic interface. The component uses semantic HTML, responsive layouts and customizable CSS variables while requiring zero JavaScript.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- Elastic slide animation
- Neumorphic soft UI
- Responsive layout
- Keyboard accessible
- CSS Custom Properties
- Lightweight and reusable

---

## CSS Custom Properties

Customize the component using the following variables.

```css
:root{
  --track-width:220px;
  --track-height:90px;
  --thumb-size:74px;

  --bg:#e8edf3;
  --surface:#eef2f7;

  --accent:#60a5fa;

  --duration:.7s;
}
```

### Motion

- `--duration`

### Colors

- `--bg`
- `--surface`
- `--accent`

### Layout

- `--track-width`
- `--track-height`
- `--thumb-size`

---

## Accessibility

Accessibility features include:

- Native checkbox input
- Keyboard accessible
- Visible focus styles
- Responsive layout
- Reduced motion support

```css
@media (prefers-reduced-motion: reduce)
```

---

## Browser Support

Compatible with modern evergreen browsers.

- Chrome
- Edge
- Firefox
- Safari

---

## Usage

Open `demo.html` in a modern browser.

No installation is required.

No JavaScript is required.

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

---

## Ideal Use Cases

- Settings Panels
- Dashboard Controls
- Preference Toggles
- SaaS Interfaces
- Admin Panels
- Mobile UI

---

## Folder Structure

```
css-elastic-slide-neumorphic/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- Elastic slide animation
- Neumorphic design
- Responsive
- Accessible
- Keyboard friendly
- Zero JavaScript
- Easy customization
