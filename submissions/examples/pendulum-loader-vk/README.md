# CSS Pendulum Loader

A pure CSS Newton's cradle-inspired loading animation where the two end balls swing outward and return continuously around three stationary balls in the middle.

## Features

- Pure HTML and CSS
- No JavaScript
- Newton's cradle-inspired pendulum animation
- Two alternating swinging end balls
- Three stationary middle balls
- Smooth continuous motion
- Small and large size variants
- Customizable ball size and swing angle
- Responsive design
- Accessible loading status
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the loader markup:

```html
<div
    class="cradle-loader"
    role="status"
    aria-live="polite"
    aria-label="Loading, please wait"
>
    <span class="cradle-rail"></span>

    <span class="cradle-ball cradle-ball--end-left"></span>

    <span class="cradle-ball"></span>

    <span class="cradle-ball"></span>

    <span class="cradle-ball"></span>

    <span class="cradle-ball cradle-ball--end-right"></span>

    <span class="visually-hidden">
        Loading…
    </span>
</div>
```

Place the loader inside your desired container.

## Size Variants

A smaller version can be created using:

```html
<div class="cradle-loader cradle-loader--sm">
    ...
</div>
```

A larger version can be created using:

```html
<div class="cradle-loader cradle-loader--lg">
    ...
</div>
```

## Customization

Change the ball size:

```css
.cradle-loader {
    --ball-d: clamp(1.5rem, 4vw, 2.1rem);
}
```

Change the swing angle:

```css
.cradle-loader {
    --swing-angle: 42deg;
}
```

Change the animation speed:

```css
.cradle-loader {
    --duration: 1.8s;
}
```

Change the rail appearance:

```css
.cradle-loader {
    --rail-color: linear-gradient(180deg, #94a3b8, #475569);
}
```

Change the string color:

```css
.cradle-loader {
    --string-color: rgba(148, 163, 184, 0.85);
}
```

## How It Works

Each pendulum is represented by a `.cradle-ball` element containing a CSS-generated string and ball.

The pendulum uses:

```css
transform-origin: top center;
```

so the rotation occurs from the top of the string, creating a realistic hanging-pendulum motion.

The two end balls use separate keyframe animations:

```css
.cradle-ball--end-left {
    animation: cradle-swing-left var(--duration) ease-in-out infinite;
}

.cradle-ball--end-right {
    animation:
        cradle-swing-right
        var(--duration)
        ease-in-out
        infinite;
    animation-delay: calc(var(--duration) * -0.5);
}
```

The half-duration animation delay causes the two end balls to swing in alternating phases.

The three middle balls remain stationary, creating the visual effect of a Newton's cradle.

No JavaScript or external libraries are required.

## Accessibility

The loader uses:

```html
role="status"
aria-live="polite"
aria-label="Loading, please wait"
```

This communicates the loading state to assistive technologies.

The visible animation is decorative, while the visually hidden text provides additional loading information.

The visually hidden text uses:

```css
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled, the swinging animation is replaced with a subtle brightness pulse on the end balls.

```css
@media (prefers-reduced-motion: reduce) {
    .cradle-ball--end-left,
    .cradle-ball--end-right {
        animation: cradle-pulse 1.6s ease-in-out infinite;
        transform: rotate(0deg);
    }
}
```

This preserves the loading-state feedback while reducing large positional movement.

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

The demo includes:

- Default loader
- Small loader variant
- Large loader variant

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS transforms, keyframes, transform origins, pseudo-elements, gradients, custom properties, and animation delays can create a physics-inspired loading animation without JavaScript.

The component can be used for:

- Loading screens
- Data fetching states
- Progress indicators
- Dashboard interfaces
- Web applications
- Minimal UI designs
- Interactive loading states

## Files

- `demo.html` — Demo page with loader variants
- `style.css` — Pendulum styling, animation, and responsive behavior
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.