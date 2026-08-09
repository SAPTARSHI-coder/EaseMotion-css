# CSS Gauge Progress Ring

A responsive, CSS-only half-circle gauge progress indicator built with HTML and CSS.

## Features

* Pure CSS implementation
* No JavaScript required
* Half-circle gauge design
* Customizable progress percentage
* Smooth reveal animation
* Responsive on desktop, tablet, and mobile
* Accessible `progressbar` attributes
* Supports reduced-motion preferences
* Easy to customize and reuse

## Demo

The example includes three gauge variations:

* **75%** — Project Progress
* **60%** — Performance
* **90%** — Completion

Open `demo.html` in a browser to view the component.

## Usage

The progress value can be changed using the `--progress` CSS custom property.

```html
<div
    class="gauge"
    style="--progress: 80%;"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="80"
    aria-label="Progress: 80 percent"
>
    <div class="gauge-track"></div>
    <div class="gauge-fill"></div>

    <div class="gauge-center">
        <strong>80%</strong>
        <span>Complete</span>
    </div>
</div>
```

## Customization

Change the progress value:

```css
--progress: 80%;
```

You can also customize the gauge size using:

```css
.gauge {
    --size: 240px;
}
```

The component uses CSS custom properties for easy customization.

## File Structure

```text
css-gauge-progress-ring/
├── demo.html
├── style.css
└── README.md
```

## Accessibility

The gauge uses the `progressbar` ARIA role with:

* `aria-valuemin`
* `aria-valuemax`
* `aria-valuenow`
* `aria-label`

The component also respects:

```css
@media (prefers-reduced-motion: reduce)
```

so animations are disabled for users who prefer reduced motion.

## Browser Support

The component uses modern CSS features such as:

* CSS custom properties
* `conic-gradient()`
* CSS animations
* Responsive media queries

Use a modern browser for the best experience.

## License

This example is contributed to the EaseMotion CSS project under the project's existing license.
