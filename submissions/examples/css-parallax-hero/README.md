# CSS Parallax Hero

A modern multi-layer parallax hero built with HTML and CSS. The example creates a layered depth effect using CSS transforms, gradients, animations, and responsive layouts without requiring JavaScript.

## ✨ Features

* Pure HTML and CSS
* No JavaScript required
* Multi-layer visual depth
* CSS-only parallax styling
* Animated background layers
* Floating decorative elements
* Responsive across desktop, tablet, and mobile
* Smooth hover interactions
* Semantic HTML structure
* Keyboard-accessible button
* `prefers-reduced-motion` support
* No external dependencies

## 📂 Folder Structure

```text
css-parallax-hero/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Create the hero structure:

```html
<section class="parallax-hero">

    <div class="parallax-layer layer-back"></div>
    <div class="parallax-layer layer-middle"></div>
    <div class="parallax-layer layer-front"></div>

    <div class="hero-content">
        <span class="eyebrow">EASEMOTION CSS</span>

        <h1>Move With The Web</h1>

        <p>
            A multi-layer CSS parallax hero.
        </p>

        <a class="hero-button" href="#content">
            Explore
        </a>
    </div>

</section>
```

## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

| Variable        | Purpose                   |
| --------------- | ------------------------- |
| `--background`  | Main page background      |
| `--surface`     | Content card background   |
| `--text`        | Primary text color        |
| `--muted`       | Secondary text color      |
| `--accent`      | Main accent color         |
| `--accent-soft` | Soft accent color         |
| `--transition`  | Hover transition duration |

### Customize the Theme

```css
:root {
    --background: #050505;
    --surface: #111111;
    --text: #ffffff;
    --muted: #999999;
    --accent: #a78bfa;
}
```

## 🌌 Layer System

The hero consists of three visual layers:

```text
layer-back
    ↓
layer-middle
    ↓
layer-front
    ↓
hero-content
```

Each layer uses a different depth value to create a visual sense of separation.

```css
.layer-back {
    transform:
        translateZ(-4px)
        scale(1.5);
}

.layer-middle {
    transform:
        translateZ(-2px)
        scale(1.25);
}

.layer-front {
    transform:
        translateZ(-1px)
        scale(1.1);
}
```

The layers can be replaced with gradients, patterns, illustrations, or other decorative CSS elements.

## ✨ Animations

The component includes lightweight CSS animations for:

* Background layer movement
* Floating glow effects
* Decorative orbs
* Scroll indicator
* Button hover interaction
* Content card hover interaction

No JavaScript animation library is required.

## 📱 Responsive Design

The hero uses responsive CSS sizing and media queries.

### Desktop

The full multi-layer composition is displayed with large typography and decorative effects.

### Tablet

The visual layers scale down while the content remains centered.

### Mobile

Typography and spacing are reduced, while the hero remains full-screen and readable.

## ♿ Accessibility

The example uses semantic HTML including:

* `<main>`
* `<section>`
* `<header>`-style content
* `<h1>`
* `<h2>`
* `<article>`
* `<a>`

Decorative layers are marked with `aria-hidden="true"` so they are ignored by assistive technologies.

The CTA has visible keyboard focus styling.

## 🛡️ Reduced Motion

Users who prefer reduced motion receive a simplified static presentation:

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

This helps prevent unnecessary motion for users who have enabled reduced-motion preferences.

## ⚡ Performance

The component is designed to remain lightweight:

* No JavaScript
* No external libraries
* No image dependencies
* CSS transforms for motion
* CSS gradients for decorative visuals
* `will-change` applied only to parallax layers

## 🧪 Testing Checklist

* [x] Desktop layout
* [x] Tablet layout
* [x] Mobile layout
* [x] Multi-layer visual effect
* [x] Hover interaction
* [x] Keyboard focus
* [x] Reduced-motion support
* [x] Semantic HTML
* [x] No JavaScript dependencies
* [x] No external assets

## 📄 License

This example follows the same license as the EaseMotion CSS project.
