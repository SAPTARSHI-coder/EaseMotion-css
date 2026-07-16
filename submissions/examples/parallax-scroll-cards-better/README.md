# Parallax Scroll Cards Component

Creates cards that move at different speeds while scrolling, producing a layered depth effect similar to modern portfolio and landing-page designs.

## Why Use It?

Parallax effects add visual depth and motion without requiring JavaScript.

This component demonstrates how different card layers can move independently to create a premium scrolling experience.

## Classes

### `.ease-parallax-grid`

Creates a responsive card layout.

```css
.ease-parallax-grid {
  display: grid;
  gap: 2rem;
}
```

### `.ease-parallax-card`

Base parallax card component.

### Speed Variants

```css
.ease-parallax-card--slow
.ease-parallax-card--normal
.ease-parallax-card--fast
```

Each variant uses a different movement distance to create depth.

## Usage

```html
<div class="ease-parallax-grid">
  <div class="ease-parallax-card ease-parallax-card--slow">
    Slow Card
  </div>

  <div class="ease-parallax-card ease-parallax-card--normal">
    Normal Card
  </div>

  <div class="ease-parallax-card ease-parallax-card--fast">
    Fast Card
  </div>
</div>
```

## Accessibility

This component respects:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

* Scroll animations are disabled
* Cards remain static
* Layout remains fully functional

## Demo

Open `demo.html` directly in a browser and scroll the page.

Included demonstrations:

* Slow parallax cards
* Normal parallax cards
* Fast parallax cards
* Responsive grid layout
* Glassmorphism card styling
* Scroll-driven animations
* Reduced-motion support
