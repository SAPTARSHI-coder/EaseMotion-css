# Floating Orbit Animated Tabs

A pure CSS interactive tabs component featuring a smooth **Floating Orbit** indicator transition, styled to complement **Dashboard Analytics** interface aesthetics.

## Features

- **Pure CSS / Zero JavaScript**: State controlled entirely via native HTML radio inputs and CSS sibling selectors (`:checked`).
- **Floating Orbit Motion**: The active tab indicator features a fluid translation combined with dual orbiting satellite particles.
- **Dashboard Analytics Theme**: Designed with crisp slate colors, vibrant primary accents, and responsive metric cards.
- **Customizable**: Exposes standard CSS custom properties for timing, easing, spin speeds, lift, and glow colors.
- **Keyboard Accessible**: Keyboard-navigable radio group with clear `:focus-visible` outline indicators.
- **Responsive**: Fully flexible grid layout supporting mobile and desktop viewports.
- **Reduced Motion Support**: Degrades gracefully under `@media (prefers-reduced-motion: reduce)` by disabling particle rotations and instantly switching tab positions.

## Usage

Include `style.css` in your HTML page:

```html
<link rel="stylesheet" href="style.css" />
```

Render the pure CSS tab structure:

```html
<div class="tabs-component">
  <input
    type="radio"
    name="analytics-tab"
    id="tab-overview"
    class="tab-radio"
    checked
  />
  <input type="radio" name="analytics-tab" id="tab-metrics" class="tab-radio" />
  <input type="radio" name="analytics-tab" id="tab-traffic" class="tab-radio" />
  <input type="radio" name="analytics-tab" id="tab-reports" class="tab-radio" />

  <div class="tab-track">
    <label for="tab-overview" class="tab-label">Overview</label>
    <label for="tab-metrics" class="tab-label">Metrics</label>
    <label for="tab-traffic" class="tab-label">Traffic</label>
    <label for="tab-reports" class="tab-label">Reports</label>

    <div class="floating-orbit-indicator" aria-hidden="true">
      <div class="orbit-pill">
        <span class="orbit-particle particle-1"></span>
        <span class="orbit-particle particle-2"></span>
      </div>
    </div>
  </div>

  <div class="tab-panels">
    <section id="panel-overview" class="tab-panel">...</section>
    <section id="panel-metrics" class="tab-panel">...</section>
    <section id="panel-traffic" class="tab-panel">...</section>
    <section id="panel-reports" class="tab-panel">...</section>
  </div>
</div>
```

## CSS Custom Properties

Customize the Floating Orbit animation by overriding CSS variables:

| Custom Property          | Default Value                       | Description                                            |
| :----------------------- | :---------------------------------- | :----------------------------------------------------- |
| `--orbit-duration`       | `450ms`                             | Transition duration when switching active tab position |
| `--orbit-easing`         | `cubic-bezier(0.34, 1.45, 0.64, 1)` | Motion curve for indicator translation                 |
| `--orbit-spin-speed`     | `2.8s`                              | Speed of orbiting satellite particles                  |
| `--orbit-particle-color` | `#60a5fa`                           | Color of satellite particles                           |
| `--orbit-glow`           | `rgba(59, 130, 246, 0.35)`          | Ambient glow box-shadow around active pill             |
| `--tab-count`            | `4`                                 | Number of tabs in the track                            |

## EaseMotion Integration

This component maps directly to EaseMotion design system tokens:

- `--ease-color-primary`
- `--ease-color-neutral-*`
- `--ease-radius-md`
- `--ease-shadow-md`

## Accessibility & Pure CSS Limitations

- Keyboard focus is handled natively via `<input type="radio">` with focus-visible styling on `.tab-track`.
- Uses native `<label>` click targets mapped to `id` attributes.
- Non-essential orbital particle animations are marked `aria-hidden="true"`.
- _Pure CSS Limitation_: Arrow-key navigation switches checked radio state natively when focused; tab panel visibility updates automatically without requiring JavaScript event listeners.
