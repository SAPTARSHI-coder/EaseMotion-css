# Draw-Border Line Tooltip for SaaS Showcase

A pure CSS tooltip component for SaaS showcase cards. The tooltip reveals with a smooth line-drawing border animation, works on hover and keyboard focus, and exposes custom properties for timing, easing, offset, scale, and color.

## Features

- Pure HTML and CSS, no JavaScript required
- Keyboard accessible with `:focus-visible` and `:focus-within`
- Responsive layout for compact screens
- Configurable via CSS custom properties
- Reduced-motion fallback for users who prefer less animation

## Usage

```html
<span class="draw-tooltip" style="--tooltip-accent: #38bdf8">
  <button class="draw-tooltip__trigger" aria-describedby="analytics-tooltip">
    Analytics API
  </button>
  <span id="analytics-tooltip" class="draw-tooltip__content" role="tooltip">
    Real-time cohort, funnel, and usage signals for product teams.
  </span>
</span>
```

## Custom Properties

- `--tooltip-accent`: border and highlight color
- `--tooltip-duration`: draw/reveal animation duration
- `--tooltip-ease`: animation easing
- `--tooltip-offset`: distance between trigger and tooltip
- `--tooltip-scale-start`: starting scale for the reveal motion

## Accessibility Notes

Each trigger uses `aria-describedby` to reference its tooltip content. The tooltip is revealed on hover and when the trigger receives keyboard focus, so keyboard and pointer users receive the same information.
