# CSS Blur-Entrance Toast

A lightweight fintech dashboard toast notification built with pure HTML and CSS.

The toast uses a smooth blur-and-fade entrance animation when it appears.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Blur-Entrance animation
* Fade-in effect
* Responsive dashboard layout
* Desktop, tablet, and mobile support
* Accessible toast notification
* Reduced-motion support

## Folder Structure

```text
blur-entrance-toast/
├── demo.html
├── style.css
└── README.md
```

## Usage

Place the folder inside:

```text
submissions/examples/
```

Open `demo.html` directly in a browser.

No build tools or dependencies are required.

## Animation

The component uses the `blurEntrance` keyframe animation:

```css
@keyframes blurEntrance {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
```

The animation combines:

* Opacity
* Vertical movement
* CSS blur

## Customization

Animation duration can be changed directly in `style.css`:

```css
.toast {
  animation: blurEntrance 0.7s ease;
}
```

The toast size, spacing, border radius, and colors can also be customized.

## Responsive Design

The dashboard uses CSS Grid on desktop.

At smaller widths, the cards become a single column and the toast adjusts to fit the screen.

## Accessibility

The notification uses:

```html
<aside class="toast" role="status" aria-live="polite">
```

The close button includes an accessible label.

Animations are disabled when the user prefers reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59362 — Add CSS Blur-Entrance Toast for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
