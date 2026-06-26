# text-anchor-mp

## What does this do?
A set of CSS utility classes for SVG `text-anchor` alignment — covering `start`, `middle`, and `end` positioning, color and size variants, animated slide-in effects, a stroke-draw animation, dark mode, and reduced motion support.

## How is it used?

Apply classes directly to SVG `<text>` elements:

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">

  <!-- Align text so its start edge is at x -->
  <text class="text-anchor-mp text-anchor-mp-start text-anchor-mp-purple text-anchor-mp-lg"
        x="20" y="60">Start aligned</text>

  <!-- Align text so its center is at x -->
  <text class="text-anchor-mp text-anchor-mp-middle text-anchor-mp-cyan text-anchor-mp-lg"
        x="200" y="60">Center aligned</text>

  <!-- Align text so its end edge is at x -->
  <text class="text-anchor-mp text-anchor-mp-end text-anchor-mp-pink text-anchor-mp-lg"
        x="380" y="60">End aligned</text>

</svg>

<!-- Animated slide-in from anchor point -->
<text class="text-anchor-mp text-anchor-mp-animate-start text-anchor-mp-green text-anchor-mp-xl"
      x="20" y="60">Slides in from left</text>

<!-- Stroke draw effect -->
<text class="text-anchor-mp text-anchor-mp-middle text-anchor-mp-draw text-anchor-mp-2xl"
      x="200" y="60">Drawn text</text>
```

### Alignment Classes

| Class | `text-anchor` | Effect |
|---|---|---|
| `text-anchor-mp-start` | `start` | Text begins at `x` |
| `text-anchor-mp-middle` | `middle` | Text is centered on `x` |
| `text-anchor-mp-end` | `end` | Text ends at `x` |

### Animation Classes

| Class | Effect |
|---|---|
| `text-anchor-mp-animate-start` | Slides in from left |
| `text-anchor-mp-animate-middle` | Slides up from below |
| `text-anchor-mp-animate-end` | Slides in from right |
| `text-anchor-mp-fade` | Fades in |
| `text-anchor-mp-draw` | Stroke draw effect |

### Modifier Classes

| Class | Effect |
|---|---|
| `text-anchor-mp-sm/md/lg/xl/2xl` | Font size scale |
| `text-anchor-mp-normal/bold` | Font weight |
| `text-anchor-mp-purple/cyan/green/pink/orange/muted` | Fill color |
| `text-anchor-mp-slow/normal/fast` | Animation speed |

### CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--ta-mp-font-size` | `1rem` | Base font size |
| `--ta-mp-font-family` | `system-ui` | Font family |
| `--ta-mp-fill` | `currentColor` | SVG fill color |
| `--ta-mp-speed` | `1.5s` | Animation duration |

## Why is it useful?
SVG `text-anchor` is the SVG equivalent of CSS `text-align`, but it works differently — aligning text relative to its `x` coordinate rather than a container. These utilities make SVG text alignment explicit, composable, and consistent with EaseMotion CSS's utility-first approach, while adding animation and dark mode support to bring SVG typography in line with the rest of the framework.
