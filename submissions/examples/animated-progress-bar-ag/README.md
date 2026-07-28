# Animated Progress Bar

A CSS-only horizontal progress bar component supporting fill percentages, height variants, diagonal striped animations, and indeterminate loading states.

## 1. What does this do?

It provides a lightweight, accessible, zero-JS progress bar with customizable track colors, heights, animated stripes, and indeterminate bouncing states for file uploads, onboarding flows, or media controls.

## 2. How is it used?

Apply the `.ease-progress` class to a track wrapper and `.ease-progress__bar` to the inner fill element. Set progress percentages dynamically using the CSS custom property `--ease-progress-value`:

```html
<!-- Standard Progress Bar -->
<div 
  class="ease-progress" 
  role="progressbar" 
  aria-valuenow="70" 
  aria-valuemin="0" 
  aria-valuemax="100" 
  aria-label="Upload progress"
>
  <div class="ease-progress__bar" style="--ease-progress-value: 70%;"></div>
</div>
```

### Class Modifiers

- **Thin variant (4px)**: `.ease-progress--thin`
- **Thick variant (12px)**: `.ease-progress--thick`
- **Animated striped overlay**: `.ease-progress--striped`
- **Indeterminate bouncing state**: `.ease-progress--indeterminate`

### CSS Custom Properties

| Custom Property | Default Value | Description |
| --- | --- | --- |
| `--ease-progress-value` | `0%` | Fill width percentage |
| `--ease-progress-color` | `#6366f1` | Color of the progress fill bar |
| `--ease-progress-track-color` | `#e2e8f0` | Background track color |
| `--ease-progress-duration` | `1s` | Speed of stripe and indeterminate animations |
| `--ease-progress-radius` | `999px` | Border radius of the track and fill |

### Example with Modifiers & Custom Colors

```html
<div 
  class="ease-progress ease-progress--thick ease-progress--striped" 
  role="progressbar" 
  aria-valuenow="80" 
  aria-valuemin="0" 
  aria-valuemax="100"
  style="--ease-progress-color: #10b981; --ease-progress-track-color: #064e3b;"
>
  <div class="ease-progress__bar" style="--ease-progress-value: 80%;"></div>
</div>
```

### Accessibility & Motion Preferences

- Always include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label` on `.ease-progress` elements.
- Under `@media (prefers-reduced-motion: reduce)`, stripe and indeterminate keyframe animations are automatically disabled while maintaining static visual progress fill.

## 3. Why is it useful?

Progress indicators are critical UI elements for responsive feedback during file transfers and step completion. By leveraging pure CSS custom properties (`--ease-progress-value`), developers can effortlessly update progress percentages directly from inline styles or JavaScript without triggering full element re-renders, while maintaining complete CSS layout control and respecting system accessibility settings.
