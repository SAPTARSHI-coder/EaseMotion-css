# CSS Float-Drift Toast

A responsive fintech notification toast built using pure HTML and CSS.

The component demonstrates a **Float-Drift** animation where the toast smoothly enters from the lower-right with a subtle floating and drifting motion.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Float-drift entrance animation
* Subtle rotation during entrance
* Fintech dashboard layout
* Toast notification styling
* Hover transitions
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties
* `prefers-reduced-motion` support
* Accessible status notification

## Folder Structure

```text id="f4q6ws"
float-drift-toast/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text id="9s0t7p"
submissions/examples/
```

Open `demo.html` in a browser.

No JavaScript or build tools are required.

## Float-Drift Animation

The toast uses the `float-drift` keyframe animation.

```css id="b4q9m7"
@keyframes float-drift {
  0% {
    opacity: 0;
    transform: translate(45px, 35px) rotate(2deg);
  }

  40% {
    opacity: 1;
    transform: translate(-8px, -8px) rotate(-1deg);
  }

  70% {
    transform: translate(4px, 4px) rotate(0.5deg);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0) rotate(0);
  }
}
```

The multiple stages create a natural floating and drifting effect rather than a simple slide-in.

## Toast Position

The notification is fixed to the lower-right corner:

```css id="3c0v3m"
.toast {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
```

On smaller screens, the toast becomes nearly full width.

## CSS Custom Properties

The main visual properties can be customized through `:root`.

| Property             | Description               |
| -------------------- | ------------------------- |
| `--background`       | Page background           |
| `--card-background`  | Dashboard card background |
| `--toast-background` | Toast background          |
| `--text`             | Primary text              |
| `--muted`            | Secondary text            |
| `--accent`           | Accent color              |
| `--success`          | Success indicator color   |
| `--border`           | Border color              |

Example:

```css id="d3h5rc"
:root {
  --success: #34d399;
}
```

## Responsive Design

**Desktop:** Toast is positioned in the bottom-right corner.

**Tablet:** Dashboard cards stack into a single column.

**Mobile:** Toast adapts to the available screen width and stays inside the viewport.

## Accessibility

The notification uses:

```html
<aside class="toast" role="status" aria-live="polite">
```

This allows assistive technologies to recognize the toast as a status message.

The close button also includes an accessible label.

Reduced-motion preferences are supported:

```css id="n4u1tq"
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, animations and transitions are disabled.

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59369 — Add CSS Float-Drift Toast for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
