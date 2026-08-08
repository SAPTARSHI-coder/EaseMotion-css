# CSS Bounce-Pulse Toast

A lightweight fintech dashboard toast notification created using pure HTML and CSS.

The toast uses a simple bounce entrance combined with a subtle pulse effect on the notification icon.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Bounce-Pulse animation
* Responsive dashboard layout
* Desktop, tablet, and mobile support
* Accessible notification markup
* `prefers-reduced-motion` support
* Simple and reusable CSS

## Folder Structure

```text
bounce-pulse-toast/
├── demo.html
├── style.css
└── README.md
```

## Installation

Place this folder inside:

```text
submissions/examples/
```

Open `demo.html` directly in a browser.

No build tools or dependencies are required.

## Animation

The toast uses the `bouncePulse` keyframe animation:

```css
@keyframes bouncePulse {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }

  40% {
    opacity: 1;
    transform: translateY(-10px) scale(1.03);
  }

  60% {
    transform: translateY(5px) scale(0.98);
  }

  80% {
    transform: translateY(-3px) scale(1.01);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}
```

The icon also uses a small pulse animation.

## Customization

The toast can be customized directly in `style.css`.

For example:

```css
.toast {
  width: 350px;
  padding: 18px;
  border-radius: 10px;
}
```

The animation speed can also be changed:

```css
.toast {
  animation: bouncePulse 0.8s ease;
}
```

## Responsive Behavior

The dashboard uses CSS Grid on desktop.

At smaller screen sizes, the cards become a single column and the toast adjusts to the available screen width.

## Accessibility

The toast uses `role="status"` and `aria-live="polite"` to communicate the notification to assistive technologies.

The close button has an accessible label.

Animations are disabled when the user prefers reduced motion.

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

Issue: **#59364 — Add CSS Bounce-Pulse Toast for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
