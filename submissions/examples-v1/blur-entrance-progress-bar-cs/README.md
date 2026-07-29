# CSS Blur-Entrance Progress Bar for Responsive Dashboards

A pure HTML and CSS dashboard example featuring accessible progress bars that enter with a smooth blur-and-rise animation before their fills expand to the configured values.

## What does this do?

This example provides reusable animated progress bars for dashboards, project trackers, analytics panels, onboarding screens, and other interfaces that display measurable completion values.

The entrance animation combines:

- Opacity
- A decreasing blur
- A small vertical translation
- A subtle scale adjustment
- A left-to-right progress fill
- An optional highlight sweep

No JavaScript or external framework is required.

## Features

- Pure HTML5 and CSS
- Responsive dashboard layout
- Blur-and-rise entrance animation
- Animated progress fill
- Staggered animation delays
- Accessible progress-bar semantics
- CSS custom-property configuration
- Desktop, tablet, and mobile support
- `prefers-reduced-motion` support
- Graceful fallback when `backdrop-filter` is unavailable
- No CDN, build process, or external dependency


## Basic usage

Add the `ease-blur-enter-54184` class to the container that should use the blur entrance animation:

```html
<section class="ease-blur-enter-54184">
  Dashboard content
</section>
```

Create a progress item by setting its progress value with the
`--progress-value` custom property:

```html
<article
  class="progress-item-54184"
  style="
    --progress-value: 75%;
    --fill-delay: 500ms;
    --progress-color-start: #8b5cf6;
    --progress-color-end: #6366f1;
  "
>
  <div class="progress-meta-54184">
    <div>
      <h3>Project name</h3>
      <p>Project description</p>
    </div>

    <strong aria-hidden="true">75%</strong>
  </div>

  <div
    class="progress-track-54184"
    role="progressbar"
    aria-label="Project progress"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <span class="progress-fill-54184"></span>
  </div>
</article>
```

## CSS custom properties

### Component properties

| Property | Default | Description |
|---|---:|---|
| `--progress-value` | `0%` | Final visual width of the progress fill |
| `--fill-delay` | `0ms` | Delay before the fill animation begins |
| `--progress-color-start` | `#8b5cf6` | Starting gradient color |
| `--progress-color-end` | `#6366f1` | Ending gradient color |
| `--entrance-delay` | `0ms` | Delay before a blur entrance begins |

### Global properties

| Property | Default | Description |
|---|---:|---|
| `--entrance-duration` | `700ms` | Duration of the blur entrance |
| `--progress-duration` | `1100ms` | Duration of the progress-fill animation |
| `--motion-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Shared motion easing |
| `--card-radius` | `1.25rem` | Dashboard card border radius |
| `--dashboard-max-width` | `1120px` | Maximum dashboard width |
| `--track-color` | Translucent white | Empty progress-track color |

## Changing a progress value

Update both the CSS value and the accessibility value:

```html
<article
  class="progress-item-54184"
  style="--progress-value: 60%;"
>
  <div
    class="progress-track-54184"
    role="progressbar"
    aria-label="Testing progress"
    aria-valuenow="60"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <span class="progress-fill-54184"></span>
  </div>
</article>
```

The `--progress-value` property controls the visual fill.

The `aria-valuenow` attribute communicates the value to assistive technologies.
These values should always match.

## Adding staggered entrances

Use `--entrance-delay` to delay individual dashboard sections:

```html
<article
  class="summary-card-54184 ease-blur-enter-54184"
  style="--entrance-delay: 180ms;"
>
  Card content
</article>
```

## Accessibility

Each progress track uses:

```html
role="progressbar"
aria-valuemin="0"
aria-valuemax="100"
aria-valuenow="75"
aria-label="Project progress"
```

The percentage displayed visually is marked with `aria-hidden="true"` because
the value is already communicated through `aria-valuenow`.

Users who enable reduced motion receive the completed visual state immediately.
Blur, movement, fill, and highlight animations are disabled through:

```css
@media (prefers-reduced-motion: reduce) {
  /* Final visible states are applied without animation. */
}
```

## Responsive behavior

The example uses three responsive states:

- Desktop: three-column summary grid
- Tablet: single-column summary cards and stacked header
- Mobile: reduced spacing and vertically arranged panel headings

The progress bars continue to use the full available container width at every
viewport size.

## Performance

The entrance animation uses `opacity`, `transform`, and a short-lived `filter`.
The progress fill uses `transform: scaleX()` instead of repeatedly animating its
layout width.

The blur is limited to the entrance period and is removed when the animation
finishes.

## Why is this useful for EaseMotion CSS?

This component follows EaseMotion CSS's animation-first approach by providing
a reusable, understandable motion pattern without JavaScript, dependencies, or
a build step.

It demonstrates how entrance motion, responsive layout, accessibility, and
component customization can work together in a lightweight dashboard example.
