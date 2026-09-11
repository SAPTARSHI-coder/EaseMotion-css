# CSS Masonry Timeline

A responsive **CSS Masonry Timeline** built with pure HTML5 and CSS3. The component displays timeline entries in an alternating layout with a central connector, animated timeline dots, responsive cards, and lightweight CSS animations.

## ✨ Features

* Pure HTML5 and CSS3
* No JavaScript required
* Alternating left/right timeline layout
* Central vertical connector
* Animated timeline connector dots
* Staggered entry animations
* Smooth card hover effects
* Responsive desktop, tablet, and mobile layouts
* Semantic `<ol>` timeline structure
* Accessible heading hierarchy
* Native `<time>` elements
* CSS Custom Properties
* `prefers-reduced-motion` support
* No external dependencies

## 📂 Folder Structure

```text
css-masonry-timeline/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

1. Open `demo.html` in a modern browser.
2. The timeline displays entries alternately on the left and right sides.
3. Hover over a timeline card to see the elevation effect.
4. Customize the timeline content, dates, labels, and colors as needed.
5. Modify the CSS Custom Properties to match your project's design.

## 🎨 CSS Custom Properties

The component uses CSS Custom Properties for easy customization.

| Variable           | Description                         |
| ------------------ | ----------------------------------- |
| `--bg`             | Page background color               |
| `--surface`        | Timeline card background            |
| `--surface-hover`  | Hover background                    |
| `--primary`        | Timeline accent and connector color |
| `--primary-soft`   | Soft accent background              |
| `--text`           | Primary text color                  |
| `--muted`          | Secondary text color                |
| `--border`         | Card border color                   |
| `--radius`         | Card border radius                  |
| `--shadow`         | Card shadow                         |
| `--transition`     | Transition duration                 |
| `--timeline-width` | Maximum timeline width              |
| `--timeline-gap`   | Space between timeline columns      |

### Example

```css
:root {
    --primary: #2563eb;
    --primary-soft: #eff6ff;
    --radius: 18px;
    --timeline-width: 1000px;
    --transition: 0.35s ease;
}
```

## 🧱 Timeline Structure

Each timeline entry uses a semantic list item:

```html
<li class="timeline-item">

    <div
        class="timeline-dot"
        aria-hidden="true"
    ></div>

    <article class="timeline-card">

        <time datetime="2026-01-15">
            January 15, 2026
        </time>

        <h2>
            Project Started
        </h2>

        <p>
            Project planning and development started.
        </p>

    </article>

</li>
```

The `<ol>` element provides a logical ordered structure for the timeline.

## 🔵 Connector and Timeline Dots

The central connector is created using the timeline's `::before` pseudo-element:

```css
.timeline::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: 50%;

    width: 2px;
}
```

Each entry has a dedicated `.timeline-dot` positioned over the connector.

The dots use a subtle pulse animation:

```css
@keyframes dotPulse {
    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}
```

## ↔️ Alternating Layout

Desktop layouts use a two-column CSS Grid.

Odd entries appear on the left:

```css
.timeline-item:nth-child(odd) {
    grid-column: 1;
}
```

Even entries appear on the right:

```css
.timeline-item:nth-child(even) {
    grid-column: 2;
}
```

This creates the alternating masonry-style timeline appearance without JavaScript.

## 📱 Responsive Design

The layout adapts to different screen sizes.

### Desktop

Timeline cards alternate between the left and right sides of the central connector.

### Tablet

Column spacing and card padding are reduced to preserve readability.

### Mobile

The timeline switches to a single-column layout with the connector positioned on the left side.

This keeps the timeline readable and easy to navigate on smaller screens.

## ♿ Accessibility

The component includes:

* Semantic `<main>` and `<section>` elements
* Ordered `<ol>` timeline structure
* Semantic `<article>` cards
* Proper heading hierarchy
* Native `<time>` elements
* Decorative timeline dots marked with `aria-hidden="true"`
* Responsive layout
* `prefers-reduced-motion` support

## ⚡ Performance

The component uses lightweight CSS features:

* CSS Grid
* CSS pseudo-elements
* CSS transitions
* CSS keyframes
* CSS Custom Properties

No JavaScript or external animation libraries are required.

## 🌙 Reduced Motion

Users who prefer reduced motion are supported through:

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

This disables decorative animations and transitions while preserving the timeline layout and content.

## 🌐 Browser Support

Designed for modern browsers supporting:

* CSS Grid
* CSS Custom Properties
* CSS Animations
* CSS Transitions
* Media Queries

Supported browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## 📄 License

This example follows the same license as the EaseMotion CSS project.
