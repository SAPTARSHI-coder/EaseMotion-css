# CSS Bento Box Grid Layout

A responsive Apple-inspired bento box grid layout built using pure HTML and CSS. The component uses an asymmetric CSS Grid structure to present feature cards in a modern, clean, and visually balanced layout.

## ✨ Features

* Pure HTML and CSS
* No JavaScript required
* CSS Grid-based asymmetric layout
* Apple-inspired bento design
* Responsive across desktop, tablet, and mobile
* Smooth hover animations
* Interactive card effects
* Semantic HTML structure
* Keyboard-accessible interactive elements
* Lightweight implementation
* No external dependencies
* `prefers-reduced-motion` support

## 📂 Folder Structure

```text
css-bento-box-grid/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then create a container using the bento grid structure demonstrated in `demo.html`.

The component can be customized by changing the grid columns, rows, card sizes, colors, spacing, and animation properties.

## 🧩 Layout

The example uses CSS Grid to create an asymmetric layout.

```css
.bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
```

Individual cards can span multiple columns or rows:

```css
.bento-card-large {
    grid-column: span 2;
    grid-row: span 2;
}
```

This allows different card sizes to be combined into a single cohesive layout.

## 🎨 Customization

The main design values can be customized using CSS variables.

```css
:root {
    --background: #f5f5f7;
    --card-background: #ffffff;
    --text: #111111;
    --muted: #6b7280;
    --accent: #007aff;
    --border: #e5e7eb;
    --radius: 24px;
    --gap: 1rem;
}
```

### Available Variables

| Variable            | Purpose               |
| ------------------- | --------------------- |
| `--background`      | Page background       |
| `--card-background` | Bento card background |
| `--text`            | Primary text color    |
| `--muted`           | Secondary text color  |
| `--accent`          | Accent color          |
| `--border`          | Card border color     |
| `--radius`          | Card corner radius    |
| `--gap`             | Grid spacing          |

## ✨ Hover Animation

Cards use lightweight CSS transitions to create a subtle interactive effect.

```css
.bento-card {
    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;
}

.bento-card:hover {
    transform: translateY(-6px);
}
```

The animation can be adjusted to create different interaction styles.

## 📱 Responsive Behavior

### Desktop

The full asymmetric bento layout is displayed using multiple columns and row spans.

### Tablet

The grid reduces the number of columns while preserving the visual hierarchy.

### Mobile

Cards become single-column blocks so that the content remains readable and easy to navigate.

Example:

```css
@media (max-width: 700px) {
    .bento-grid {
        grid-template-columns: 1fr;
    }

    .bento-card {
        grid-column: auto;
        grid-row: auto;
    }
}
```

## ♿ Accessibility

The component follows accessibility best practices:

* Semantic HTML elements
* Meaningful headings
* Keyboard-accessible interactive elements
* Visible focus states
* Descriptive labels where required
* Responsive text and spacing
* Reduced-motion support

## 🛡️ Reduced Motion

Animations are disabled for users who prefer reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
```

## ⚡ Performance

The component is lightweight because it uses:

* CSS Grid
* CSS transitions
* CSS transforms
* CSS variables
* No JavaScript
* No external libraries
* No external UI frameworks

## 🧪 Testing Checklist

* [x] Desktop responsive layout
* [x] Tablet responsive layout
* [x] Mobile responsive layout
* [x] Asymmetric grid structure
* [x] Card hover animations
* [x] Keyboard focus states
* [x] Semantic HTML
* [x] Reduced-motion support
* [x] No JavaScript dependencies
* [x] No external dependencies

## 📄 License

This example follows the same license as the EaseMotion CSS project.
