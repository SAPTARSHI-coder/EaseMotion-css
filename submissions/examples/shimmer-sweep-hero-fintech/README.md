# CSS Shimmer-Sweep Hero Section for Fintech Dashboard Layouts

A responsive fintech hero section featuring a lightweight CSS **Shimmer-Sweep** animation.

The example creates a diagonal light sweep that travels across the hero section while the financial dashboard cards use subtle floating animations.

## Features

* Pure HTML and CSS
* No JavaScript
* No external libraries
* Smooth shimmer-sweep keyframe animation
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties for customization
* Interactive buttons
* Hover transitions
* Floating financial dashboard cards
* Semantic HTML structure
* Visible keyboard focus states
* `prefers-reduced-motion` support
* Uses transform and opacity for efficient animations

## Folder Structure

```text
shimmer-sweep-hero-fintech/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text
submissions/examples/
```

Then open `demo.html` in a browser.

No build tools or dependencies are required.

## Animation

The main shimmer effect is created using a pseudo-light element:

```css
.shimmer {
  position: absolute;
  width: var(--shimmer-sweep-width);
  height: 160%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgb(255 255 255 / 0.16),
      transparent
    );

  transform: rotate(18deg);

  animation:
    shimmer-sweep
    var(--shimmer-duration)
    cubic-bezier(0.4, 0, 0.2, 1)
    infinite;
}
```

The animation moves the light sweep across the hero using `transform`.

## CSS Custom Properties

The following variables can be customized:

| Property                | Default   | Description                |
| ----------------------- | --------- | -------------------------- |
| `--shimmer-bg`          | `#08111f` | Hero background            |
| `--shimmer-surface`     | `#101c2d` | Surface color              |
| `--shimmer-text`        | `#f8fafc` | Primary text               |
| `--shimmer-muted`       | `#9aa8ba` | Secondary text             |
| `--shimmer-accent`      | `#38bdf8` | Main accent                |
| `--shimmer-success`     | `#34d399` | Positive status color      |
| `--shimmer-radius-lg`   | `28px`    | Hero border radius         |
| `--shimmer-radius-md`   | `16px`    | Card border radius         |
| `--shimmer-duration`    | `4s`      | Shimmer animation duration |
| `--shimmer-sweep-width` | `35%`     | Width of the light sweep   |

## Customization

### Change animation speed

```css
:root {
  --shimmer-duration: 6s;
}
```

### Change accent color

```css
:root {
  --shimmer-accent: #a78bfa;
}
```

### Make the shimmer wider

```css
:root {
  --shimmer-sweep-width: 45%;
}
```

## Performance

The animation primarily uses `transform` and `opacity`, which helps keep the animation lightweight.

No JavaScript animation loop or external animation library is required.

## Accessibility

The component includes:

* Semantic HTML elements
* Descriptive heading
* Accessible navigation links
* Visible keyboard focus indicators
* Decorative elements marked with `aria-hidden`
* Reduced-motion support

Users who have enabled reduced motion receive minimal animation:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .shimmer {
    opacity: 0;
  }
}
```

## Responsive Behavior

### Desktop

The hero uses a two-column layout with:

* Text content on the left
* Financial dashboard visual on the right

### Tablet

The layout changes to a single-column structure.

### Mobile

The hero becomes fully stacked and buttons expand to the available width.

## Browser Support

The example uses commonly supported CSS features:

* CSS custom properties
* CSS Grid
* Flexbox
* CSS transitions
* CSS keyframes
* CSS gradients
* `prefers-reduced-motion`
* `backdrop-filter`

## Contribution

Created for:

**EaseMotion CSS — GSSoC 2026**

Issue:

**#59386 — Add CSS Shimmer-Sweep Hero Section for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
