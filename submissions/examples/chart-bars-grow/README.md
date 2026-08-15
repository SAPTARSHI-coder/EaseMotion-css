# Chart Bars Grow

An animated bar chart component where columns grow upward from zero with a springy overshoot effect.

## Features

* Animated bar growth from zero
* Springy overshoot animation
* Dependency-free
* Responsive layout
* Replay animation control
* Customizable CSS variables
* Reduced-motion support
* Hand-crafted CSS

## Files

```text
chart-bars-grow/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in a browser to view the interactive chart.

Click **Replay Animation** to restart the bar growth animation.

## HTML Structure

```html
<section class="chart" aria-label="Monthly performance bar chart">
  <div class="bars">
    <div class="bar-group">
      <div
        class="bar"
        style="--bar-height: 72%; --delay: 0.05s;"
        role="img"
        aria-label="January: 72"
      >
        <span class="bar-value">72</span>
      </div>

      <span class="bar-label">Jan</span>
    </div>
  </div>
</section>
```

## CSS Structure

* `.chart` — chart container.
* `.chart-grid` — background grid and value indicators.
* `.bars` — contains all chart columns.
* `.bar-group` — groups an individual bar and its label.
* `.bar` — visual bar element.
* `.bar-value` — displays the bar value.
* `.bar-label` — displays the category label.

## Customization

The chart can be customized using CSS variables:

```css
:root {
  --chart-height: 420px;
  --bar-width: 48px;
  --bar-gap: 24px;
  --bar-color: #7c3aed;
}
```

You can customize the:

* Chart height
* Bar width
* Spacing between bars
* Bar color
* Grid appearance
* Typography

Individual bar heights and animation delays can be changed using CSS custom properties:

```html
<div
  class="bar"
  style="--bar-height: 80%; --delay: 0.2s;"
>
</div>
```

## Animation

The bars use the `bar-grow` keyframe animation.

The animation starts with the bar collapsed at zero height, briefly overshoots its target, and then settles at the final height.

```css
@keyframes bar-grow {
  0% {
    transform: scaleY(0);
  }

  70% {
    transform: scaleY(1.08);
  }

  100% {
    transform: scaleY(1);
  }
}
```

## Accessibility

Chart values should have meaningful labels so that the information is understandable to assistive technology users.

Interactive controls such as the replay button should remain keyboard accessible and have a visible focus state.

## Reduced Motion

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .bar {
    animation: none;
    transform: scaleY(1);
  }
}
```

This displays the chart without the growth animation for users who prefer reduced motion.

## Browser Support

The component uses standard HTML, CSS, and minimal JavaScript. No external libraries or dependencies are required.
