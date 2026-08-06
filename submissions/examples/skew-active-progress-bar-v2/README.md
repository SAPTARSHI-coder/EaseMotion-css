# Skew-Active Progress Bar

A lightweight, pure CSS animated progress bar designed for product catalog and checkout layouts.

The component uses a subtle skew transformation during the progress animation to create a dynamic active-state effect without JavaScript.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth skew-active entrance animation
* Animated highlight sweep
* Responsive on desktop, tablet, and mobile
* Accessible progressbar semantics
* `prefers-reduced-motion` support
* CSS custom properties for easy customization
* Suitable for product catalogs and checkout flows

## Files

```text
skew-active-progress-bar/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Add the progress bar:

```html
<div
  class="progress-track"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
>
  <div class="progress-fill">
    <span class="progress-shine"></span>
  </div>
</div>
```

Set the progress percentage by changing the width of `.progress-fill`:

```css
.progress-fill {
  width: 75%;
}
```

For example, for 50% progress:

```css
.progress-fill {
  width: 50%;
}
```

Remember to update `aria-valuenow` to match the visual percentage.

## CSS Custom Properties

The component provides the following custom properties:

```css
:root {
  --sab-bg: #f4f6f8;
  --sab-surface: #ffffff;
  --sab-text: #18212b;
  --sab-muted: #697586;
  --sab-border: #e2e7ec;
  --sab-accent: #111827;
  --sab-accent-light: #374151;
  --sab-radius: 18px;
  --sab-duration: 900ms;
  --sab-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Animation Customization

Change the entrance animation duration:

```css
:root {
  --sab-duration: 1200ms;
}
```

Change the animation easing:

```css
:root {
  --sab-easing: ease-out;
}
```

## Animation

The main animation is provided by the `skewActive` keyframe:

```css
@keyframes skewActive {
  0% {
    width: 0;
    transform: skewX(-18deg) scaleX(0.96);
    opacity: 0.45;
  }

  55% {
    transform: skewX(-10deg) scaleX(1.025);
    opacity: 1;
  }

  100% {
    width: 75%;
    transform: skewX(0) scaleX(1);
    opacity: 1;
  }
}
```

A secondary shine animation creates a subtle moving highlight across the active progress area.

## Responsive Behavior

The component adapts to different screen sizes:

* Desktop: four-column progress steps and three product cards
* Tablet: two-column product layout
* Mobile: single-column product layout and stacked progress steps

## Accessibility

The progress indicator uses the native ARIA `progressbar` role with:

* `aria-valuemin`
* `aria-valuemax`
* `aria-valuenow`
* `aria-label`

The animation also respects users who have enabled reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are minimized */
}
```

## Browser Support

The component uses standard CSS features including:

* CSS custom properties
* CSS transforms
* CSS animations
* CSS media queries
* ARIA attributes

It is designed for modern Chrome, Firefox, Edge, and Safari browsers.

## Why EaseMotion CSS?

This component follows the EaseMotion CSS philosophy by providing a visually expressive animation using only semantic HTML and lightweight CSS.

There are:

* No external libraries
* No JavaScript dependencies
* No frameworks
* No build step

The effect can be copied directly into an existing project and customized through CSS.

## License

This example is intended as a contribution to EaseMotion CSS and follows the repository's licensing and contribution guidelines.
