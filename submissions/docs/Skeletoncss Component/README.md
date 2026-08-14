# EaseMotion Skeleton Component Demo

A simple demonstration of the **EaseMotion Skeleton** component showcasing various loading placeholder styles, customization options, and accessibility improvements.

## Files

```
.
├── index.html     # Demo page
├── style.css      # Skeleton component styles
└── README.md
```

## Features

- ✨ Animated shimmer loading effect
- 📝 Text skeletons
- 🖼️ Image placeholders
- 👤 Avatar placeholders
- ⭕ Circular skeletons
- 📦 Card skeletons
- 📏 Size variants (`sm`, default, `lg`)
- 📐 Width utility classes
- ♿ `prefers-reduced-motion` support
- 🎨 CSS Custom Properties for easy customization

## Getting Started

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the project directory.

```bash
cd <repository-name>
```

3. Open `index.html` in your browser.

No build tools or dependencies are required.

---

## Demo Components

### Basic Text Skeleton

```html
<div class="ease-skeleton ease-skeleton-text"></div>
```

### Avatar Skeleton

```html
<div class="ease-skeleton ease-skeleton-avatar"></div>
```

### Image Skeleton

```html
<div class="ease-skeleton ease-skeleton-image"></div>
```

### Card Skeleton

```html
<div class="ease-skeleton ease-skeleton-card"></div>
```

### Circle Skeleton

```html
<div class="ease-skeleton ease-skeleton-circle"></div>
```

---

## Customization

The component supports CSS custom properties for easy theming.

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-skeleton-base` | `#e2e8f0` | Base shimmer color |
| `--ease-skeleton-highlight` | `#f1f5f9` | Highlight shimmer color |
| `--ease-skeleton-duration` | `1.5s` | Animation duration |
| `--ease-skeleton-card-height` | `200px` | Card height |
| `--ease-skeleton-image-height` | `140px` | Image height |
| `--ease-skeleton-avatar-size` | `40px` | Avatar size |
| `--ease-radius-md` | `0.5rem` | Border radius |

Example:

```css
:root {
  --ease-skeleton-base: #d1d5db;
  --ease-skeleton-highlight: #f3f4f6;
  --ease-skeleton-duration: 2s;
}
```

---

## Accessibility

The skeleton component respects the user's motion preferences.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-skeleton {
    animation: none;
  }
}
```

This reduces unnecessary motion for users who have enabled reduced motion in their operating system.

---

## Browser Support

Works in all modern browsers supporting:

- CSS Variables
- CSS Animations
- `aspect-ratio`
- `prefers-reduced-motion`

---

## License

This project follows the same license as the parent repository.
