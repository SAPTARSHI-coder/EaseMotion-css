# Skeleton Loader Shimmer

A pure CSS skeleton loader component with a shimmer animation effect, used as a placeholder while content loads.

## Features

- Pure CSS shimmer animation using `linear-gradient` and `background-position`
- Customisable colours, duration, and border radius via CSS custom properties
- Loading state toggled by a `.loading` class
- Lightweight — no JavaScript dependencies for the animation

## Usage

Include `style.css` in your project and add skeleton elements with the `.sls-skeleton` class:

```html
<div class="sls-card loading">
  <div class="sls-skeleton sls-image"></div>
  <div class="sls-content">
    <div class="sls-skeleton sls-line sls-line--title"></div>
    <div class="sls-skeleton sls-line sls-line--body"></div>
  </div>
</div>
```

Add the `.loading` class to the parent container to start the shimmer animation.

## CSS Custom Properties

| Property              | Default     | Description                  |
| --------------------- | ----------- | ---------------------------- |
| `--sls-base-color`    | `#e0e0e0`   | Background colour of skeleton |
| `--sls-shimmer-color` | `#f5f5f5`   | Highlight colour of shimmer   |
| `--sls-duration`      | `1.6s`      | Duration of the animation     |
| `--sls-border-radius` | `6px`       | Border radius of elements     |

## Demo

Open `demo.html` in a browser and click **Simulate Load** to see the skeleton placeholders replaced with actual content after a 2-second delay.
