# EaseMotion — Animation Performance Monitor

Detect jank and dropped frames in real time. An opt-in floating FPS counter that warns when animations drop below 30 FPS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side comparison: janky (layout-triggering) vs GPU-accelerated animation, with live FPS counter |
| `style.css` | Demo layout, balls, guide table |

## Features

- **FPS counter** — floating overlay in the top-right corner, updates every second
- **Color-coded**: green (&ge;50 FPS), amber (30–49 FPS), red (&lt;30 FPS)
- **Console warnings** — logged up to 3 times when FPS drops below 30
- **Opt-in** — enabled by adding `.ease-perf-monitor` to `<html>`; no perf cost when absent
- **Before/after demo** — compare `top`+`left` (layout trigger) vs `translate` (compositor-only)

## Usage

### Enable the monitor

Add the class to `<html>`:

```html
<html class="ease-perf-monitor">
```

Include `core/animation-perf.js`:

```html
<script src="core/animation-perf.js"></script>
```

The FPS counter appears automatically. Console warnings fire when FPS &lt; 30.

### Disable

Remove the class or the script. The script exits immediately if the class is absent.

## Performance Tips

| Avoid (triggers layout/paint) | Prefer (GPU-accelerated) |
|-------------------------------|--------------------------|
| `top`, `left` | `translate` |
| `width`, `height` | `scale` |
| `margin` | `translate` |
| `border-width` | `box-shadow` or pseudo-element |
| `display: none` (animating) | `visibility: hidden` + `opacity` |
