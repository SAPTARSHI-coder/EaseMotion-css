# Gradient Glow Progress Bar – Advanced Styling

An advanced CSS progress bar with gradient colors, glow effects, animated shine, customizable variables, responsive styling, and accessibility support.

## Features

* Multi-color gradient
* Custom glow effect
* Animated shine effect
* CSS custom property customization
* BEM-style class naming
* Modifier class support
* Responsive design
* Accessibility attributes
* Reduced-motion support

## Basic HTML

```html
<div
  class="progress-bar progress-bar--large"
  role="progressbar"
  aria-label="Project completion"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
>
  <div class="progress-bar__fill" style="width: 75%;">
    <span class="progress-bar__shine" aria-hidden="true"></span>
  </div>
</div>
```

## Class Naming

The component uses a BEM-style naming convention.

### `.progress-bar`

The main progress bar container.

### `.progress-bar__fill`

Represents the completed portion of the progress bar.

### `.progress-bar__shine`

Provides the decorative animated shine effect.

### `.progress-bar--large`

A modifier that creates a larger progress bar.

## Custom CSS Variables

The component can be customized without changing the main CSS.

```css
:root {
  --progress-height: 20px;
  --progress-track: #dbeafe;
  --progress-start: #2563eb;
  --progress-middle: #7c3aed;
  --progress-end: #db2777;
  --progress-glow: rgba(37, 99, 235, 0.6);
}
```

### Available Variables

| Variable                | Purpose                 |
| ----------------------- | ----------------------- |
| `--progress-height`     | Controls bar height     |
| `--progress-radius`     | Controls corner radius  |
| `--progress-track`      | Background track color  |
| `--progress-start`      | Gradient starting color |
| `--progress-middle`     | Gradient middle color   |
| `--progress-end`        | Gradient ending color   |
| `--progress-glow`       | Glow color              |
| `--progress-transition` | Fill transition speed   |

## Changing Progress

For 50% progress:

```html
<div
  class="progress-bar"
  role="progressbar"
  aria-label="Project completion"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="50"
>
  <div class="progress-bar__fill" style="width: 50%;">
    <span class="progress-bar__shine" aria-hidden="true"></span>
  </div>
</div>
```

Always keep the visual width and `aria-valuenow` value synchronized.

## Advanced Styling

You can create different visual variants by overriding the custom properties.

```css
.progress-bar--success {
  --progress-start: #16a34a;
  --progress-middle: #22c55e;
  --progress-end: #86efac;
  --progress-glow: rgba(34, 197, 94, 0.55);
}
```

HTML:

```html
<div
  class="progress-bar progress-bar--success"
  role="progressbar"
  aria-label="Upload progress"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="80"
>
  <div class="progress-bar__fill" style="width: 80%;">
    <span class="progress-bar__shine" aria-hidden="true"></span>
  </div>
</div>
```

## Accessibility

The component uses the `progressbar` ARIA role.

```html
role="progressbar"
aria-label="Project completion"
aria-valuemin="0"
aria-valuemax="100"
aria-valuenow="75"
```

### Important Guidelines

* Provide a meaningful accessible name.
* Keep `aria-valuenow` synchronized with the visual progress.
* Use values between `aria-valuemin` and `aria-valuemax`.
* Decorative effects should use `aria-hidden="true"`.
* Do not rely only on color to communicate progress.

## Keyboard Interaction

A progress bar is normally a status indicator and is **not keyboard interactive**.

Therefore, keyboard controls are not required for this implementation.

If the component is later changed into a user-controlled slider, use an appropriate interactive pattern such as `role="slider"` with keyboard support.

## Reduced Motion

The animated shine is disabled for users who prefer reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  .progress-bar__fill {
    transition: none;
  }

  .progress-bar__shine {
    animation: none;
  }
}
```

This helps avoid unnecessary motion while preserving the progress information.

## Responsive Design

The progress bar automatically adapts to smaller screens.

```css
@media (max-width: 480px) {
  .progress-demo {
    padding: 20px;
  }

  .progress-bar--large {
    --progress-height: 20px;
  }
}
```

## File Structure

```text
gradient-glow-progress-bar-advanced/
├── index.html
├── style.css
└── README.md
```

## Usage

1. Copy `index.html`.
2. Copy `style.css`.
3. Link the stylesheet in the HTML.
4. Change the progress width.
5. Update `aria-valuenow` to match the displayed value.
6. Customize the CSS variables as required.

## License

Part of the EaseMotion CSS project.
