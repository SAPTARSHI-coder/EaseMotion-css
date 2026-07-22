# CSS Rotate-Fade Stepper

Submission for Issue #54170

## What this adds

A pure CSS animated stepper component for responsive dashboard layouts.
Step icons rotate in from -90° and fade up when activated. Completed
steps show a spring-popped checkmark. Zero JavaScript required.

## HTML Structure

### Horizontal stepper (default)
```html
<div class="rfs-stepper">

  <div class="rfs-step is-done">
    <div class="rfs-step-icon">✓</div>
    <div class="rfs-step-label">
      <div class="rfs-step-label-title">Completed Step</div>
      <div class="rfs-step-label-sub">Subtitle</div>
    </div>
  </div>

  <div class="rfs-step is-active">
    <div class="rfs-step-icon">★</div>
    <div class="rfs-step-label">
      <div class="rfs-step-label-title">Active Step</div>
      <div class="rfs-step-label-sub">In progress</div>
    </div>
  </div>

  <div class="rfs-step">
    <div class="rfs-step-icon">3</div>
    <div class="rfs-step-label">
      <div class="rfs-step-label-title">Upcoming Step</div>
    </div>
  </div>

</div>
```

### Vertical stepper with content panel
```html
<div class="rfs-stepper rfs-stepper-vertical">
  <div class="rfs-step is-active">
    <div class="rfs-step-icon">★</div>
    <div class="rfs-step-label">
      <div class="rfs-step-label-title">Active Step</div>
      <div class="rfs-step-content">
        Content shown below the active step label.
      </div>
    </div>
  </div>
</div>
```

## Step State Classes

| Class on `.rfs-step` | Description |
|---|---|
| (none) | Inactive / upcoming |
| `is-active` | Current step — rotate-in + pulse ring animation |
| `is-done` | Completed — checkmark pop + green connector |

## Layout Variants

| Class on `.rfs-stepper` | Description |
|---|---|
| `rfs-stepper` | Horizontal (default) |
| `rfs-stepper-vertical` | Vertical layout with connector lines |
| `rfs-stepper-mini` | Compact size |

## Color Variants

| Class | Active / Done colors |
|---|---|
| (default) | Indigo / Green |
| `rfs-stepper--teal` | Cyan / Teal |
| `rfs-stepper--amber` | Amber / Lime |
| `rfs-stepper--rose` | Rose / Emerald |

## Size Variants

| Class | Step circle size |
|---|---|
| `rfs-stepper--sm` | 32px |
| (default) | 44px |
| `rfs-stepper--lg` | 56px |

## Speed Variants

| Class | Animation duration |
|---|---|
| `rfs-stepper--fast` | 0.25s |
| (default) | 0.5s |
| `rfs-stepper--slow` | 0.9s |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rfs-color-active` | `#4f46e5` | Active step color |
| `--rfs-color-done` | `#22c55e` | Completed step color |
| `--rfs-color-inactive` | `#cbd5e1` | Inactive step + line color |
| `--rfs-color-text` | `#0f172a` | Primary text |
| `--rfs-color-muted` | `#94a3b8` | Muted text |
| `--rfs-color-bg` | `#ffffff` | Step icon background |
| `--rfs-color-surface` | `#f8fafc` | Content panel background |
| `--rfs-step-size` | `44px` | Icon circle diameter |
| `--rfs-line-thickness` | `2px` | Connector line thickness |
| `--rfs-duration` | `0.5s` | Animation duration |
| `--rfs-ease` | spring cubic-bezier | Easing function |

## Animations Used

| Keyframe | Trigger | Effect |
|---|---|---|
| `rfs-rotate-in` | Step becomes active | Icon rotates in from -90° + scale |
| `rfs-check-pop` | Step becomes done | Checkmark springs in with overshoot |
| `rfs-fade-up` | Active label / content | Fades up from 10px below |
| `rfs-line-grow` | Connector after done step | Line scales from left to right |
| `rfs-pulse-ring` | Active step icon | Repeating focus ring pulse |

## Dashboard Card Wrapper

```html
<div class="rfs-dashboard-card">
  <div class="rfs-dashboard-card-header">
    <span class="rfs-dashboard-card-title">Card Title</span>
    <span class="rfs-dashboard-card-badge">Badge</span>
  </div>
  <!-- stepper goes here -->
</div>
```

## Accessibility

- Semantic HTML — no ARIA roles required beyond standard reading order
- `prefers-reduced-motion`: all animations and transitions disabled
- Labels and subtitles always visible (not hidden inside animations)

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| CSS keyframes | all | all | all | all |
| CSS custom properties | all | all | all | all |
| prefers-reduced-motion | all | all | all | all |
