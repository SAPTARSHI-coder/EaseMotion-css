# CSS Lottie-like CSS Animation

A lightweight, Lottie-inspired animation created entirely with HTML and CSS.

This example combines multiple CSS keyframe animations, transforms, opacity changes, rotations, scaling, and floating particles to create a complex multi-step animation without JavaScript or external animation libraries.

## ✨ Features

* Pure HTML and CSS
* No JavaScript required
* No external dependencies
* Multi-step keyframe animation
* Rotating orbital rings
* Pulsing central element
* Rotating geometric shape
* Animated inner element
* Floating particles
* Responsive design
* CSS Custom Properties
* Accessible semantic HTML
* `prefers-reduced-motion` support
* Lightweight implementation

## 📂 Folder Structure

```text
css-lottie-like-animation/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Add the stylesheet to your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then place the animation markup inside your page:

```html
<div class="animation-stage" aria-hidden="true">
    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>

    <div class="animation-core">
        <div class="core-ring"></div>

        <div class="core-shape">
            <span></span>
        </div>
    </div>

    <div class="particle particle-one"></div>
    <div class="particle particle-two"></div>
    <div class="particle particle-three"></div>
    <div class="particle particle-four"></div>
</div>
```

## 🎬 Animation Sequence

The main animation combines several independent CSS animations.

### Core Pulse

The central element continuously changes its scale:

```css
@keyframes corePulse {
    0%,
    100% {
        transform: scale(0.9);
    }

    25% {
        transform: scale(1.05);
    }

    50% {
        transform: scale(0.95);
    }

    75% {
        transform: scale(1.08);
    }
}
```

### Shape Rotation

The inner geometric shape rotates while changing scale:

```css
@keyframes shapeSequence {
    0% {
        transform: rotate(45deg) scale(0.7);
    }

    50% {
        transform: rotate(180deg) scale(1.05);
    }

    100% {
        transform: rotate(405deg) scale(0.7);
    }
}
```

### Orbit Motion

Two independent orbital rings rotate in opposite directions to create layered motion.

### Particle Motion

Four particles move along different paths with independent timing, creating a more organic Lottie-like effect.

## 🎨 CSS Custom Properties

The animation can be customized through CSS variables:

| Variable          | Purpose                 |
| ----------------- | ----------------------- |
| `--bg`            | Main background         |
| `--surface`       | Surface color           |
| `--surface-soft`  | Secondary background    |
| `--text`          | Primary text            |
| `--muted`         | Secondary text          |
| `--primary`       | Main animation color    |
| `--primary-dark`  | Dark accent             |
| `--primary-soft`  | Soft accent             |
| `--border`        | Border color            |
| `--radius`        | Component radius        |
| `--content-width` | Maximum content width   |
| `--duration`      | Main animation duration |

### Change Animation Speed

For example:

```css
:root {
    --duration: 8s;
}
```

A shorter duration creates faster motion:

```css
:root {
    --duration: 4s;
}
```

## 📱 Responsive Design

The component adapts to desktop, tablet, and mobile layouts.

On smaller screens, the hero changes from a two-column layout to a single-column layout:

```css
@media (max-width: 850px) {
    .hero {
        grid-template-columns: 1fr;
    }
}
```

The animation also scales down on mobile devices.

## ♿ Accessibility

The animation itself is marked as decorative using:

```html
aria-hidden="true"
```

Important textual information remains available through semantic headings, paragraphs, and sections.

The animation does not contain interactive controls, so it does not interfere with keyboard navigation.

## 🛡️ Reduced Motion

Users who prefer reduced motion receive a static version of the component:

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

This prevents continuous motion for users who have enabled reduced-motion preferences.

## ⚡ Performance

The animation is designed to remain lightweight:

* No JavaScript
* No Lottie runtime
* No SVG animation library
* No external dependencies
* CSS transforms
* CSS opacity
* CSS keyframes
* Minimal DOM structure

## 🌐 Browser Support

The example uses widely supported CSS animation features including:

* `@keyframes`
* `transform`
* `opacity`
* `border-radius`
* CSS Custom Properties
* Media queries

Modern browsers are recommended for the best visual experience.

## 🧪 Testing Checklist

* [x] Desktop layout tested
* [x] Tablet layout tested
* [x] Mobile layout tested
* [x] Multi-step animation implemented
* [x] Orbit animation implemented
* [x] Particle animation implemented
* [x] Responsive scaling implemented
* [x] Reduced-motion support added
* [x] No JavaScript required
* [x] No external dependencies

## 📄 License

This example follows the same license as the EaseMotion CSS project.
