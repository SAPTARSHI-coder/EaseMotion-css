# CSS Flame Progress Bar

A visually engaging **flame-inspired progress bar** built entirely with HTML and CSS.

The component combines a glowing progress indicator, animated flame, shimmer sweep, percentage display, and minimalist dark-tech styling.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Animated flame effect
* Flame flickering animation
* Glowing progress bar
* Animated shimmer sweep
* Percentage indicator
* Progress statistics
* Responsive design
* Dark minimalist UI
* Reduced-motion accessibility support

## File Structure

```text
css-flame-progress-bar/
│
├── demo.html
├── style.css
└── README.md
```

## How to Run

1. Create a folder named `css-flame-progress-bar`.
2. Create these three files:

   * `demo.html`
   * `style.css`
   * `README.md`
3. Add the provided code to each file.
4. Open `demo.html` in your browser.

No installation or dependencies are required.

## How the Progress Bar Works

The progress percentage is controlled by the width of `.progress-fill`.

The current example is set to **78%**:

```css
.progress-fill {
    width: 78%;
}
```

To change the progress to 50%, for example:

```css
.progress-fill {
    width: 50%;
}
```

You should also update the displayed percentage in `demo.html`:

```html
<strong class="percentage">50%</strong>
```

## Flame Animation

The flame is created entirely with CSS pseudo-elements and nested spans.

The main flame uses a combination of gradients, border-radius, transforms, and shadows.

The flickering effect is controlled by:

```css
@keyframes flameFlicker {

    0% {
        transform:
            rotate(-3deg)
            scale(0.95, 1);
    }

    50% {
        transform:
            rotate(3deg)
            scale(1.03, 0.97);
    }

    100% {
        transform:
            rotate(-2deg)
            scale(0.98, 1.05);
    }
}
```

This continuously changes the flame's rotation and scale to create a natural flickering effect.

## Shimmer Effect

The progress bar also contains a moving highlight.

```css
.progress-fill::before {
    content: "";

    position: absolute;

    top: 0;
    left: -30%;

    width: 30%;
    height: 100%;

    animation: progressShimmer 2.2s linear infinite;
}
```

The shimmer can be made faster or slower by changing:

```css
animation: progressShimmer 2.2s linear infinite;
```

For example:

```css
animation: progressShimmer 1.2s linear infinite;
```

## Customization

### Change Progress

```css
.progress-fill {
    width: 90%;
}
```

### Change Flame Size

Modify:

```css
.flame {
    width: 38px;
    height: 58px;
}
```

### Change Animation Speed

Modify:

```css
animation:
    flameFlicker 0.55s ease-in-out infinite alternate;
```

A slower flame:

```css
animation:
    flameFlicker 1s ease-in-out infinite alternate;
```

A faster flame:

```css
animation:
    flameFlicker 0.3s ease-in-out infinite alternate;
```

## Technologies Used

* HTML5
* CSS3
* CSS Gradients
* CSS Animations
* CSS Pseudo-elements
* CSS Flexbox
* CSS Grid
* CSS Media Queries

## Responsive Design

On desktop screens, the progress card uses a horizontal layout with three statistics below it.

On smaller screens:

* Typography scales down.
* The progress card becomes more compact.
* Statistics become a vertical list.
* The flame scales down.
* Layout remains usable on mobile devices.

## Accessibility

The component includes support for:

```css
@media (prefers-reduced-motion: reduce)
```

When a user prefers reduced motion, the flame flicker and shimmer animations are disabled.

## Browser Support

Works in modern versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## License

Free to use, modify, and integrate into personal, educational, and open-source projects.

```
```
