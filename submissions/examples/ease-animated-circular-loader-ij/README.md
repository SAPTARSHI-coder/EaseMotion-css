# Animated Circular Loader

A customizable CSS-only animated circular loader built with CSS custom properties.

## Features

- Pure CSS animation using `@keyframes` and `border-radius`
- Customizable via CSS custom properties (`--loader-*`)
- Pause/resume animation via a `.paused` class
- Multiple variants: size, color, speed, border width, track color
- Start/stop control button
- Inter font

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="loader" style="--loader-duration: 0.8s; --loader-size: 60px; --loader-color: #6366f1;"></div>
```

### Pause/Resume

```html
<div class="loader paused"></div>
```

## CSS Custom Properties

| Property                 | Default   | Description            |
| ------------------------ | --------- | ---------------------- |
| `--loader-duration`      | `0.8s`    | Animation speed        |
| `--loader-size`          | `60px`    | Width and height       |
| `--loader-border-width`  | `5px`     | Border thickness       |
| `--loader-color`         | `#6366f1` | Active border color    |
| `--loader-track-color`   | `#e0e7ff` | Track border color     |

## Browser Support

All modern browsers that support CSS custom properties and `@keyframes`.
