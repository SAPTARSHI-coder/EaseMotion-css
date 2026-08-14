# CSS Glitch-Flicker Feature Grid

A lightweight, responsive **Glitch-Flicker Feature Grid** designed for modern Gaming Hub layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Responsive 3-column, 2-column and 1-column layouts
* Glitch-flicker hover animation
* Animated feature-card highlight
* Smooth hover transitions
* CSS custom properties for customization
* Accessible reduced-motion support
* Lightweight and framework-free

## Files

```text
glitch-flicker-feature-grid/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then create feature cards using:

```html
<article class="feature-card">
  <span class="feature-number">01</span>

  <div class="feature-icon" aria-hidden="true">◈</div>

  <h2>Feature Name</h2>

  <p>
    Describe your gaming feature here.
  </p>

  <span class="status">ONLINE</span>
</article>
```

Place multiple `.feature-card` elements inside:

```html
<section class="feature-grid">
  <!-- feature cards -->
</section>
```

## CSS Custom Properties

The component can be customized using these variables:

```css
:root {
  --gf-bg: #08090d;
  --gf-surface: #10131a;
  --gf-surface-hover: #161b24;
  --gf-border: #272d39;
  --gf-text: #f4f7fb;
  --gf-muted: #8992a3;
  --gf-accent: #7c5cff;
  --gf-accent-light: #a995ff;
  --gf-glow: rgba(124, 92, 255, 0.35);
  --gf-radius: 18px;
  --gf-gap: 1.25rem;
  --gf-transition: 280ms ease;
}
```

## Animation

The `.glitch-flicker` effect uses CSS keyframes to create subtle opacity, position and rotation changes.

The animation is triggered when a user hovers over a feature card:

```css
.feature-card:hover .feature-icon {
  animation: glitch-flicker 700ms steps(2, end) infinite;
}
```

## Responsive Behavior

* Desktop: 3-column grid
* Tablet: 2-column grid
* Mobile: 1-column grid

## Accessibility

The component respects the user's reduced-motion preference through:

```css
@media (prefers-reduced-motion: reduce) {
  /* animations and transitions are reduced */
}
```

This prevents unnecessary motion for users who have enabled reduced motion at the operating-system or browser level.

## Browser Support

Works in modern browsers supporting:

* CSS Grid
* CSS Custom Properties
* CSS Animations
* CSS Transforms
* `prefers-reduced-motion`

## License

This example follows the license and contribution guidelines of the EaseMotion CSS repository.

```
```
