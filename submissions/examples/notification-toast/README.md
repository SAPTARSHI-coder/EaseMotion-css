````markdown
# Notification Toast

A lightweight CSS-only notification toast component featuring a smooth slide and bounce entrance animation.

## Features

- Pure HTML and CSS
- No JavaScript required
- Slide + bounce entrance animation
- Success, information, and warning variants
- Close button styling
- Responsive design
- Keyboard focus support
- Reduced-motion support
- Customizable CSS variables
- Staggered entrance animation

## Preview

The component demonstrates three notification types:

- Success
- Information
- Warning

Each toast enters from the right side and uses a subtle bounce effect before settling into its final position.

## Customization

The animation and component dimensions can be customized using CSS custom properties.

```css
:root {
    --toast-width: 380px;
    --toast-radius: 12px;
    --toast-padding: 18px;
    --animation-duration: 0.7s;
    --animation-distance: 80px;
}
````

### Available Variables

| Variable               | Purpose                  | Default |
| ---------------------- | ------------------------ | ------- |
| `--toast-width`        | Maximum toast width      | `380px` |
| `--toast-radius`       | Corner radius            | `12px`  |
| `--toast-padding`      | Inner spacing            | `18px`  |
| `--animation-duration` | Entrance animation speed | `0.7s`  |
| `--animation-distance` | Slide distance           | `80px`  |

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add a toast:

```html
<article class="toast toast-success" role="status">
    <div class="toast-icon">✓</div>

    <div class="toast-content">
        <h2>Success</h2>
        <p>Your changes have been saved successfully.</p>
    </div>

    <button class="toast-close" aria-label="Close notification">
        &times;
    </button>
</article>
```

## Variants

Use the following classes:

```text
.toast-success
.toast-info
.toast-warning
```

## Animation

The entrance animation uses CSS `@keyframes`.

The toast:

1. Starts slightly to the right.
2. Fades into view.
3. Overshoots its final position.
4. Moves back slightly.
5. Settles into its final position.

No JavaScript is required for the animation.

## Accessibility

The component includes:

* Semantic `<article>` elements
* `role="status"` for informational notifications
* `role="alert"` for warning notifications
* Accessible close button labels
* Visible keyboard focus styles
* `prefers-reduced-motion` support

## Responsive Design

The toast automatically adapts to smaller screens using CSS media queries.

## Browser Support

The component uses standard CSS features including:

* CSS custom properties
* CSS animations
* CSS transforms
* Media queries
* Pseudo-elements

Modern browsers are recommended.

## Contribution

This component is submitted for the EaseMotion CSS project.

Files are located at:

`submissions/examples/notification-toast/`

```
```
