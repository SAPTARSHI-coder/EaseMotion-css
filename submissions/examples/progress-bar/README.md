# Progress Bar Component

Animated progress bars with striped fill, gradient colors, circular/radial variant, and indeterminate loading state. Pure CSS.

## Demo

Open `demo.html` in any modern browser.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **CSS variables** — `--progress` controls fill amount
- ✅ **Striped fill** — diagonal stripe pattern
- ✅ **Animated stripes** — moving stripe animation
- ✅ **Gradient** — animated rainbow gradient
- ✅ **Contextual colors** — success, warning, error
- ✅ **Circular/radial** — SVG-based circle progress
- ✅ **Indeterminate** — infinite loading animation
- ✅ **Multi-step** — step indicator for wizards
- ✅ **Dark theme** — included `.progress-bar--dark`
- ✅ **Accessible** — proper ARIA attributes

## Usage

### Basic

```html
&lt;div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;
  &lt;div class="progress-bar__fill" style="--progress: 75%;"&gt;&lt;/div&gt;
&lt;/div&gt;