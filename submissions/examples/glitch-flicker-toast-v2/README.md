# CSS Glitch-Flicker Toast

A simple responsive fintech dashboard toast notification built using pure HTML and CSS.

The component uses a short **Glitch-Flicker** animation that combines opacity changes and small horizontal movements to create a subtle glitch effect.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Glitch-flicker entrance animation
* Responsive fintech dashboard layout
* Simple hover interaction
* Keyboard-accessible close button
* Responsive desktop, tablet, and mobile layouts
* `prefers-reduced-motion` support

## Folder Structure

```text
glitch-flicker-toast/
├── demo.html
├── style.css
└── README.md
```

## Usage

Place the folder inside:

```text
submissions/examples/
```

Open `demo.html` in a browser.

No JavaScript or build tools are required.

## Animation

The toast uses the `glitchFlicker` keyframe animation:

```css
@keyframes glitchFlicker {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  30% {
    opacity: 0.2;
    transform: translateX(4px);
  }

  55% {
    opacity: 0.4;
    transform: translateX(2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

The effect is created using only:

* `opacity`
* `transform`
* `translateX()`

## CSS Customization

The toast colors, spacing, size, and animation timing can be customized directly in `style.css`.

Example:

```css
.toast {
  background: #111827;
  border-radius: 10px;
  animation: glitchFlicker 0.8s ease;
}
```

## Responsive Design

The dashboard uses CSS Grid on larger screens.

On tablets, the cards become a single column.

On mobile, the toast adjusts to the available screen width.

## Accessibility

The toast uses:

```html
<aside class="toast" role="status" aria-live="polite">
```

The close button includes an accessible label.

The animation respects the user's reduced-motion preference:

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

Issue: **#59366 — Add CSS Glitch-Flicker Toast for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
