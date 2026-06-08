# ease-progress-bar

## What does it do?

A two-element progress bar component — `.ease-progress` track plus `.ease-progress-bar` fill — that animates from zero to a target width using CSS custom properties, with optional moving stripes and semantic color variants.

## How is it used?

Set the fill percentage on the wrapper, then add the required classes:

```html
<!-- Basic primary bar (CSS-only auto-reveal on load) -->
<div class="ease-progress ease-progress-auto" style="--ease-progress-value: 72%;">
  <div class="ease-progress-bar ease-progress-primary"
       role="progressbar"
       aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"
       aria-label="72 percent complete">
  </div>
</div>

<!-- Animated striped fill (Issue #254 requirement) -->
<div class="ease-progress ease-progress-auto" style="--ease-progress-value: 65%;">
  <div class="ease-progress-bar ease-progress-success ease-progress-animated"
       role="progressbar"
       aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
  </div>
</div>

<!-- JS-driven update: toggle .ease-progress-loaded -->
<div class="ease-progress ease-progress-loaded" style="--ease-progress-value: 50%;">
  <div class="ease-progress-bar ease-progress-warning"></div>
</div>
```

### Classes

| Class | Element | Purpose |
| --- | --- | --- |
| `.ease-progress` | wrapper | Track — set `--ease-progress-value` here |
| `.ease-progress-bar` | child | Fill element |
| `.ease-progress-animated` | bar | Moving diagonal stripes |
| `.ease-progress-primary` | bar | Purple gradient fill |
| `.ease-progress-success` | bar | Green gradient fill |
| `.ease-progress-danger` | bar | Red gradient fill |
| `.ease-progress-warning` | bar | Amber gradient fill |
| `.ease-progress-auto` | wrapper | CSS-only entrance animation (no JS) |
| `.ease-progress-loaded` | wrapper | Triggers fill transition (for JS updates) |
| `.ease-progress-indeterminate` | wrapper | Unknown-duration loading loop |
| `.ease-progress-segmented` | wrapper | Quarter-milestone tick marks |
| `.ease-progress-complete` | wrapper | Subtle glow pulse at 100% |

### Custom properties

| Property | Default | Description |
| --- | --- | --- |
| `--ease-progress-value` | `0%` | Target fill width |
| `--ease-progress-duration` | `900ms` | Fill animation duration |
| `--ease-progress-delay` | `120ms` | Stagger delay before fill starts |
| `--ease-progress-height` | `10px` | Track height |

## Why does it fit EaseMotion CSS?

EaseMotion CSS is animation-first and zero-dependency. This component follows that philosophy:

- **Readable class names** — `ease-progress-bar`, `ease-progress-animated`, `ease-progress-success` read like plain English.
- **One CSS variable controls progress** — `--ease-progress-value` on the wrapper; no inline width hacks.
- **CSS-only motion** — add `ease-progress-auto` and bars animate on page load without JavaScript.
- **Composable modifiers** — color, size, stripes, segmentation, and indeterminate states stack cleanly.
- **Accessible by default** — demo includes `role="progressbar"` and `aria-valuenow` patterns; `prefers-reduced-motion` disables all motion.

## Folder structure

```text
submissions/examples/ease-progress-bar/
├── demo.html   # Self-contained browser demo
├── style.css   # Component CSS
└── README.md   # This file
```

## Preview

Open `demo.html` directly in Chrome, Firefox, or Edge. No server or build step required.

## Tech stack

- HTML
- CSS (no frameworks, no external CDN links)

## Contribution notes

- All files live inside `submissions/examples/ease-progress-bar/`
- No changes to `core/` or `components/`
- Color tokens reference `core/variables.css` with local fallbacks
- Resolves [Issue #254](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/254)
