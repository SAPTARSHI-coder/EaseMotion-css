# CSS Clip-Path Reveal on Scroll

A modern **CSS Clip-Path Reveal on Scroll** component that reveals content from left to right as it enters the viewport.

The effect is built with pure HTML5 and CSS3 using `clip-path` and the modern CSS scroll-driven animation API. No JavaScript or external animation library is required.

## ✨ Features

* Pure HTML5 and CSS3
* No JavaScript required
* Left-to-right clip-path reveal
* CSS scroll-driven animation
* Uses `animation-timeline: view()`
* Smooth reveal animation
* Responsive desktop, tablet, and mobile layouts
* Hover interactions
* CSS Custom Properties
* Reduced-motion support
* Progressive enhancement with `@supports`
* No external dependencies

## 📂 Folder Structure

```text id="c7d4km"
css-clip-path-reveal/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

1. Open `demo.html` in a modern browser.
2. Scroll down through the page.
3. As the reveal cards enter the viewport, they animate from left to right.
4. Customize the content and CSS variables in `style.css`.

The component can be used for:

* Landing pages
* Portfolio sections
* Product showcases
* Feature sections
* Case studies
* Editorial layouts
* Project presentations
* Image and content galleries

## 🔧 How It Works

The reveal starts with the element clipped almost completely:

```css id="1w5xat"
.reveal-card {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
}
```

The animation gradually removes the clipping:

```css id="c8z6z4"
@keyframes clipReveal {
    from {
        clip-path: inset(0 100% 0 0);
        opacity: 0;
    }

    to {
        clip-path: inset(0 0 0 0);
        opacity: 1;
    }
}
```

The animation is connected to the viewport using:

```css id="g5m3g2"
.reveal-card {
    animation: clipReveal linear both;

    animation-timeline: view();

    animation-range:
        entry 10% cover 35%;
}
```

This allows the animation progress to be controlled by the element's position within the viewport.

## 🧩 CSS Scroll-Driven Animation

This component uses:

```css id="bq7g0n"
animation-timeline: view();
```

The `view()` timeline ties the animation to the visibility of an element as it moves through the viewport.

The animation range:

```css id="xw6q7p"
animation-range: entry 10% cover 35%;
```

controls when the reveal begins and ends.

## 🎨 CSS Custom Properties

The component provides CSS variables for easy customization.

| Variable          | Description            |
| ----------------- | ---------------------- |
| `--bg`            | Page background        |
| `--surface`       | Card background        |
| `--surface-soft`  | Secondary background   |
| `--primary`       | Main accent color      |
| `--primary-dark`  | Dark accent color      |
| `--primary-soft`  | Soft accent background |
| `--text`          | Primary text color     |
| `--muted`         | Secondary text color   |
| `--border`        | Border color           |
| `--radius`        | Card border radius     |
| `--transition`    | Transition duration    |
| `--content-width` | Maximum content width  |
| `--shadow`        | Card shadow            |

### Example

```css id="y9o3dw"
:root {
    --primary: #2563eb;
    --primary-soft: #eff6ff;

    --radius: 22px;

    --content-width: 1100px;

    --transition: 0.4s ease;
}
```

## 📱 Responsive Design

The component adapts to different viewport sizes.

### Desktop

Reveal cards use a two-column internal layout with a numbered indicator and content area.

### Tablet

Spacing and typography are reduced while maintaining the reveal effect.

### Mobile

Cards switch to a single-column layout:

```css id="f84x9k"
@media (max-width: 600px) {
    .reveal-card {
        grid-template-columns: 1fr;
    }
}
```

This keeps the content readable on narrow screens.

## ✨ Hover Effects

Cards include a subtle hover interaction:

```css id="e2tq1n"
.reveal-card:hover {
    transform: translateY(-6px);
}
```

The numbered indicator also receives a small rotation and scale effect:

```css id="xj5f8c"
.reveal-card:hover .reveal-number {
    transform:
        scale(1.08)
        rotate(-4deg);
}
```

These interactions provide additional visual feedback without JavaScript.

## 🛡️ Progressive Enhancement

The component checks whether the browser supports CSS scroll-driven animations:

```css id="2e5g1r"
@supports (animation-timeline: view()) {
    .reveal-card {
        animation: clipReveal linear both;
        animation-timeline: view();
    }
}
```

For browsers without support, the content remains visible:

```css id="3g2b8a"
@supports not (animation-timeline: view()) {
    .reveal-card {
        clip-path: none;
        opacity: 1;
    }
}
```

This ensures that unsupported browsers do not hide important content.

## ♿ Accessibility

Accessibility considerations include:

* Semantic `<main>` and `<section>` elements
* Proper heading hierarchy
* Semantic `<article>` elements
* Descriptive content
* Decorative scroll hint
* No JavaScript dependency
* Content remains accessible when animation is unsupported
* Reduced-motion support

The animation is purely decorative and does not control access to the content.

## 🌙 Reduced Motion

Users who prefer reduced motion are supported through:

```css id="f9z0ry"
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto;
    }

    .reveal-list .reveal-card,
    .showcase-box {
        clip-path: none;
        opacity: 1;
    }
}
```

When reduced motion is enabled, all content is immediately visible without animation.

## ⚡ Performance

The component is lightweight because it uses native browser capabilities:

* No JavaScript
* No external libraries
* No animation framework
* CSS `clip-path`
* CSS scroll-driven animations
* CSS transitions
* CSS Custom Properties

## 🌐 Browser Support

The basic layout works in modern browsers.

The animated reveal specifically depends on support for:

* CSS `clip-path`
* CSS Animations
* `animation-timeline`
* `view()` timelines

Browsers without scroll-driven animation support receive the static fallback, ensuring that the content remains visible.

## 🧪 Testing Checklist

* [x] Desktop layout tested
* [x] Tablet layout tested
* [x] Mobile layout tested
* [x] Left-to-right reveal implemented
* [x] Hover interaction implemented
* [x] Reduced-motion support added
* [x] Unsupported-browser fallback added
* [x] No JavaScript required
* [x] No external dependencies

## 📄 License

This example follows the same license as the EaseMotion CSS project.
