# ease-page-loader

## What does this do?

A fullscreen CSS overlay that covers the page on load, displays a centered loading animation, then fades out automatically — driven entirely by `animation-delay` and `animation-fill-mode: forwards`. No JavaScript required.

## How is it used?

Place the loader as the **first child of `<body>`**. It covers the viewport instantly and exits on its own after `--loader-exit-delay` (default 1.8s):

```html
<!-- Spinner variant -->
<div class="ease-page-loader">
  <div class="ease-page-loader-spinner"></div>
</div>

<!-- Dots variant -->
<div class="ease-page-loader">
  <div class="ease-page-loader-dots">
    <div class="ease-page-loader-dot"></div>
    <div class="ease-page-loader-dot"></div>
    <div class="ease-page-loader-dot"></div>
  </div>
</div>

<!-- Progress bar variant -->
<div class="ease-page-loader">
  <div class="ease-page-loader-bar-wrap">
    <div class="ease-page-loader-bar"></div>
  </div>
</div>

<!-- Dark background variant -->
<div class="ease-page-loader ease-page-loader-dark">
  <div class="ease-page-loader-spinner"></div>
</div>
```

### Custom color

```html
<div class="ease-page-loader" style="--loader-color: #22c55e;">
  <div class="ease-page-loader-spinner"></div>
</div>
```

### Custom timing

```html
<!-- Stay visible for 3 seconds instead of 1.8s -->
<div class="ease-page-loader" style="--loader-exit-delay: 3s;">
  <div class="ease-page-loader-spinner"></div>
</div>
```

## Why does it fit EaseMotion CSS?

EaseMotion CSS has inline loaders (skeleton shimmer, bouncing dots, button spinner) but **no fullscreen page-level loader** — these are fundamentally different use cases. This submission fills that gap.

The implementation follows EaseMotion's core philosophy exactly:

- **Pure CSS exit** — `animation-delay` holds the overlay; `animation-fill-mode: forwards` locks it in the final `visibility: hidden` state. Zero JavaScript timeouts
- **Reuses core keyframes** — the spinner uses `ease-kf-rotate` and the dots use `ease-kf-pulse`, both already defined in `core/animations.css` — no new keyframes added to core
- **Token-first** — `--loader-color` maps to `--ease-color-primary`; `--loader-bg` to `--ease-color-surface`; `--loader-pulse-speed` to `--ease-speed-slow`
- **Three variants** — spinner ring, pulse dots, progress bar — covering the most common page load patterns
- **`prefers-reduced-motion` safe** — animations disabled, overlay still exits at the correct time so content is never permanently hidden
- **`visibility: hidden` final state** — removes the overlay from the accessibility tree entirely after exit, not just visually

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--loader-color` | `var(--ease-color-primary)` | Accent color for spinner, dots, bar |
| `--loader-color-track` | `var(--ease-color-neutral-200)` | Spinner ring track color |
| `--loader-bg` | `var(--ease-color-surface)` | Overlay background |
| `--loader-exit-delay` | `1.8s` | Time overlay stays visible before fading |
| `--loader-exit-speed` | `400ms` | Duration of the fade-out |
| `--loader-spin-speed` | `0.8s` | Spinner rotation speed |
| `--loader-pulse-speed` | `var(--ease-speed-slow)` | Dot pulse cycle duration |
| `--loader-size` | `48px` | Spinner diameter |
| `--loader-thickness` | `4px` | Spinner border width |

## Tech Stack

- HTML
- CSS only (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser. The live loader fires on actual page load — you'll see it cover the page and exit after 1.8s, revealing the content below.

## Contribution Notes

- Class names used: `.page-loader`, `.page-loader-spinner`, `.page-loader-dots`, `.page-loader-dot`, `.page-loader-bar`, `.page-loader-dark`
- Maintainer will rename to `ease-page-loader`, `ease-page-loader-spinner`, etc. before merging
- No changes made to `core/`, `components/`, or any existing files
- Spinner reuses `ease-kf-rotate` — if integrating into core, the `animation` property just needs to reference that keyframe name directly