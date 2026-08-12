# CSS Hexagonal Grid

A responsive honeycomb-style hexagonal grid built entirely with HTML and CSS.

This example demonstrates how CSS `clip-path`, Grid layout, pseudo-elements, transforms, and transitions can be combined to create a reusable geometric UI component without JavaScript.

## ✨ Features

* Pure HTML and CSS
* No JavaScript required
* No external dependencies
* Honeycomb hexagonal layout
* CSS `clip-path` based shapes
* Smooth hover effects
* Subtle scaling and lift animation
* Responsive desktop, tablet, and mobile layouts
* CSS Custom Properties
* Semantic HTML structure
* Keyboard focus support
* `prefers-reduced-motion` support
* Lightweight implementation

## 📂 Folder Structure

```text
css-hexagonal-grid/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the hexagonal grid:

```html
<div class="hex-grid">

    <article class="hex-card">
        <div class="hex-content">
            <span class="hex-number">01</span>

            <h3>Motion</h3>

            <p>
                Smooth CSS transitions and animations.
            </p>
        </div>
    </article>

</div>
```

Additional `.hex-card` elements can be added without changing the core CSS.

## 🔷 How the Hexagon Works

The hexagonal shape is created using CSS `clip-path`:

```css
.hex-card {
    clip-path:
        polygon(
            25% 6.7%,
            75% 6.7%,
            100% 50%,
            75% 93.3%,
            25% 93.3%,
            0 50%
        );
}
```

This avoids images, SVG assets, or JavaScript-generated shapes.

## 🎨 CSS Custom Properties

The component exposes several variables for customization:

| Variable          | Description             |
| ----------------- | ----------------------- |
| `--bg`            | Page background         |
| `--surface`       | Card surface color      |
| `--text`          | Primary text color      |
| `--muted`         | Secondary text color    |
| `--primary`       | Main accent color       |
| `--primary-light` | Light accent background |
| `--border`        | Accent border color     |
| `--hex-width`     | Hexagon width           |
| `--hex-height`    | Hexagon height          |
| `--gap`           | Grid spacing            |
| `--transition`    | Hover transition speed  |

### Change the Hexagon Size

```css
:root {
    --hex-width: 300px;
    --hex-height: 346px;
}
```

### Change the Accent Color

```css
:root {
    --primary: #7c3aed;
    --primary-light: #ede9fe;
}
```

### Change Hover Speed

```css
:root {
    --transition: 0.5s ease;
}
```

## 🖱️ Hover Interaction

Each hexagonal card lifts and slightly scales when hovered:

```css
.hex-card:hover {
    transform:
        translateY(-10px)
        scale(1.025);
}
```

A subtle decorative circle also expands behind the content using a pseudo-element.

## 📱 Responsive Behavior

The grid automatically changes based on viewport size:

### Desktop

Four columns are displayed.

### Tablet

The layout changes to three or two columns depending on the available width.

### Mobile

The layout switches to a single-column honeycomb arrangement.

The component uses CSS media queries rather than JavaScript for responsive behavior.

## ♿ Accessibility

The example uses semantic HTML elements including:

* `<main>`
* `<header>`
* `<section>`
* `<article>`
* `<h1>`
* `<h2>`
* `<h3>`
* `<p>`

Cards are informational and therefore do not require unnecessary keyboard controls.

Focus styling is included with `:focus-within` for future interactive content.

## 🛡️ Reduced Motion

Users who prefer reduced motion receive a static version of the component:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        transition: none !important;
        animation: none !important;
    }
}
```

This prevents motion from becoming distracting for users who have enabled reduced-motion preferences.

## ⚡ Performance

The component is designed to remain lightweight:

* No JavaScript
* No image assets
* No external libraries
* CSS Grid for layout
* CSS `clip-path` for hexagon geometry
* CSS transforms for hover motion
* CSS pseudo-elements for decorative effects

## 🌐 Browser Support

Modern browsers are recommended because the component uses CSS `clip-path` for the hexagonal shapes.

The rest of the layout relies on standard CSS features such as:

* CSS Grid
* Media Queries
* CSS Custom Properties
* Transforms
* Transitions
* Pseudo-elements

## 🧪 Testing Checklist

* [x] Desktop layout
* [x] Tablet layout
* [x] Mobile layout
* [x] Hexagonal geometry
* [x] Hover animation
* [x] Responsive grid
* [x] Keyboard focus styling
* [x] Reduced-motion support
* [x] No JavaScript
* [x] No external dependencies

## 📄 License

This example follows the same license as the EaseMotion CSS project.
