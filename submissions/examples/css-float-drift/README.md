# CSS Float-Drift Feature Grid

A minimalist technology-inspired feature grid built using **HTML and pure CSS**.

The component uses subtle floating animations to create a dynamic interface while maintaining a clean and minimal visual style.

## Features

* Pure HTML and CSS
* No JavaScript required
* Floating/drifting card animations
* Responsive three-column grid
* Tablet and mobile support
* Minimal dark-tech aesthetic
* Hover interaction
* Subtle glow effects
* `prefers-reduced-motion` accessibility support
* Easy to customize

## File Structure

```text
float-drift-feature-grid/
│
├── demo.html
├── style.css
└── README.md
```

## How to Run

1. Create a folder named `float-drift-feature-grid`.
2. Create the following three files:

   * `demo.html`
   * `style.css`
   * `README.md`
3. Paste the provided code into the respective files.
4. Open `demo.html` in any modern web browser.

No installation or dependencies are required.

## How It Works

The floating effect is created using a CSS keyframe animation:

```css
@keyframes floatDrift {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}
```

Each card receives a different negative animation delay:

```css
.card-one {
    animation-delay: 0s;
}

.card-two {
    animation-delay: -1.2s;
}

.card-three {
    animation-delay: -2.4s;
}
```

This makes the cards move at different points in the animation cycle, producing a more natural drifting effect.

## Customization

### Change the animation speed

Modify:

```css
animation: floatDrift 6s ease-in-out infinite;
```

For faster movement:

```css
animation: floatDrift 4s ease-in-out infinite;
```

For slower movement:

```css
animation: floatDrift 9s ease-in-out infinite;
```

### Change the drift distance

Modify the `translateY()` value:

```css
@keyframes floatDrift {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}
```

For stronger movement, use:

```css
transform: translateY(-18px);
```

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Animations
* CSS Media Queries
* CSS Pseudo-elements

## Browser Support

The component works in modern versions of:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

## Accessibility

The component respects users who prefer reduced motion through:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, the floating animation is disabled.

## License

This component can be freely used, modified, and integrated into personal or open-source projects.

```
```
