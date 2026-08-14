# Gradient Glow Progress Bar

A simple CSS progress bar with a gradient fill and subtle glow effect.

## Features

* Gradient progress indicator
* Glow effect
* Custom CSS variables
* Responsive layout
* Accessible progressbar semantics
* Reduced-motion support

## Basic Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the progress bar:

```html
<div
  class="progress-bar"
  role="progressbar"
  aria-label="Project completion"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
>
  <div class="progress-bar__fill" style="width: 75%;"></div>
</div>
```

## Class Names

### `.progress-bar`

The outer container that represents the progress track.

### `.progress-bar__fill`

The inner element that displays the completed percentage.

The component follows a BEM-style naming convention.

## Changing Progress

To display 50% progress:

```html
<div
  class="progress-bar"
  role="progressbar"
  aria-label="Project completion"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="50"
>
  <div class="progress-bar__fill" style="width: 50%;"></div>
</div>
```

The `width` and `aria-valuenow` values should always match.

## Customization

The component uses CSS custom properties.

```css
:root {
  --progress-height: 20px;
  --progress-radius: 12px;
  --progress-track: #dbeafe;
  --progress-start: #2563eb;
  --progress-end: #9333ea;
  --progress-glow: rgba(37, 99, 235, 0.5);
}
```

### Available Variables

| Variable                | Description             |
| ----------------------- | ----------------------- |
| `--progress-height`     | Progress bar height     |
| `--progress-radius`     | Corner radius           |
| `--progress-track`      | Track background        |
| `--progress-start`      | Gradient starting color |
| `--progress-end`        | Gradient ending color   |
| `--progress-glow`       | Glow color              |
| `--progress-transition` | Animation speed         |

## Modifier Classes

The basic version does not require modifier classes. For project-specific variants, modifiers can be added following the same BEM convention.

Example:

```css
.progress-bar--compact {
  --progress-height: 10px;
}

.progress-bar--large {
  --progress-height: 24px;
}
```

## Accessibility

The component uses:

* `role="progressbar"` to identify the component.
* `aria-label` to provide an accessible name.
* `aria-valuemin` to define the minimum value.
* `aria-valuemax` to define the maximum value.
* `aria-valuenow` to communicate the current progress.

Example:

```html
<div
  class="progress-bar"
  role="progressbar"
  aria-label="Upload progress"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
>
  <div class="progress-bar__fill" style="width: 75%;"></div>
</div>
```

## Keyboard Interaction

A progress bar is normally a status indicator, not an interactive control.

Therefore, keyboard interaction is not required for the basic implementation.

If the component becomes user-controlled, use an appropriate interactive pattern such as a slider and provide keyboard controls.

## Reduced Motion

The component respects the user's reduced-motion preference.

```css
@media (prefers-reduced-motion: reduce) {
  .progress-bar__fill {
    transition: none;
  }
}
```

This prevents unnecessary animation for users who prefer reduced motion.

## File Structure

```text
gradient-glow-progress-bar-basic/
├── index.html
├── style.css
└── README.md
```

## License

Part of the EaseMotion CSS project.
