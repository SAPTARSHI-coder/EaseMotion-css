# Jello Progress Bar — BJ Variant

## What does it do?

The Jello Progress Bar is a responsive, dark-mode inspired progress component
with an elastic CSS-only fill animation.

## Features

- Pure CSS progress bar animation
- Jello-style elastic fill motion
- Dark-mode inspired glass panel design
- Uses EaseMotion CSS utility classes
- Uses EaseMotion design tokens with fallbacks
- Accessible `role="progressbar"` markup
- Responsive layout
- Reduced-motion support
- No JavaScript or external assets

## How is it used?

Load EaseMotion CSS and this component stylesheet:

```html
<link rel="stylesheet" href="../../../easemotion.min.css" />
<link rel="stylesheet" href="./style.css" />
```

Use the progress bar markup:

```html
<div class="jello-progress-bj" style="--progress-value: 72%">
  <div class="jello-progress-bj__meta">
    <span id="progress-label">Frontend bundle</span>
    <strong>72%</strong>
  </div>

  <div
    class="jello-progress-bj__track"
    role="progressbar"
    aria-labelledby="progress-label"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="72"
  >
    <span class="jello-progress-bj__fill"></span>
  </div>
</div>
```

Update the percentage by changing:

```css
--progress-value: 72%;
```

and matching the accessible value:

```html
aria-valuenow="72"
```

## Why is it useful?

Progress bars are common in dashboards, upload flows, onboarding screens,
analytics panels, and build-status interfaces. This variant gives EaseMotion CSS
a polished animated progress example that combines component structure,
motion, dark-mode styling, accessibility, and responsive design.

## Accessibility

- Uses `role="progressbar"`
- Includes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`
- Connects each progress bar to a visible label using `aria-labelledby`
- Shows the percentage as readable text
- Supports `prefers-reduced-motion`
- Does not require JavaScript

## Files

- `demo.html` — live demo
- `style.css` — component styles
- `README.md` — usage and documentation

## Contributor

Bhavya Jain — Issue #42585
