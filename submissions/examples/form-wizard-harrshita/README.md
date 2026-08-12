# Multi-Step Form Wizard

Animated multi-step form wizard with progress indicator for EaseMotion CSS.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-wizard">
  <!-- Step indicators -->
  <div class="ease-wizard__steps">
    <div class="ease-wizard__step ease-wizard__step--active">
      <div class="ease-wizard__step-dot">1</div>
      <span class="ease-wizard__step-label">Step One</span>
    </div>
    <div class="ease-wizard__connector"></div>
    <div class="ease-wizard__step">
      <div class="ease-wizard__step-dot">2</div>
      <span class="ease-wizard__step-label">Step Two</span>
    </div>
  </div>
  <!-- Progress bar -->
  <div class="ease-wizard__progress">
    <div class="ease-wizard__progress-bar" style="width:50%"></div>
  </div>
  <!-- Active panel -->
  <div class="ease-wizard__panel ease-wizard__panel--active">
    <!-- form fields -->
  </div>
  <!-- Navigation -->
  <div class="ease-wizard__nav">
    <button class="ease-wizard__btn ease-wizard__btn--prev">Previous</button>
    <button class="ease-wizard__btn ease-wizard__btn--next">Next</button>
  </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-wizard` | Outer container |
| `.ease-wizard__steps` | Step indicators row |
| `.ease-wizard__step` | Individual step |
| `.ease-wizard__step--active` | Current active step |
| `.ease-wizard__step--done` | Completed step (shows checkmark) |
| `.ease-wizard__connector` | Line between step dots |
| `.ease-wizard__progress` | Progress bar track |
| `.ease-wizard__progress-bar` | Animated fill bar |
| `.ease-wizard__panel` | Hidden form step panel |
| `.ease-wizard__panel--active` | Visible form step panel |
| `.ease-wizard__field` | Form field wrapper |
| `.ease-wizard__nav` | Prev/Next button row |
| `.ease-wizard__btn--prev` | Previous button style |
| `.ease-wizard__btn--next` | Next button style |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-wz-accent` | `#6c63ff` | Active step and bar color |
| `--ease-wz-done` | `#22c55e` | Completed step color |
| `--ease-wz-transition` | `0.35s ...` | Animation easing |

Closes #67718
