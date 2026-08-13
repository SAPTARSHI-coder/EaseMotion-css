# Dashboard Wobble-Focus Modal

A pure CSS modal component built for responsive analytics dashboard layouts. It uses a smooth, decaying horizontal **wobble-focus** entry transition to draw attention to configuration or report panels — no JavaScript required.

## Features

- **Zero JavaScript** — modal open/close state is handled entirely via the CSS `:target` pseudo-class.
- **Wobble-Focus animation** — a decaying horizontal wobble (overshoot → settle) draws the eye without a harsh flash.
- **Keyboard accessible** — triggered and dismissed via standard anchor links, so it's fully reachable via `Tab` and `Enter`.
- **Responsive** — sidebar collapses to a stacked layout below 640px; modal scales fluidly on small viewports.
- **Reduced motion support** — animation is disabled for users with `prefers-reduced-motion: reduce`.

## Usage

1. Include `style.css` in your page.
2. Add a trigger link pointing to the modal's id:
   ```html
   <a href="#config-modal" class="trigger-btn">Open Configuration</a>
   ```
3. Add the modal markup with a matching `id`:
   ```html
   <div class="modal-overlay" id="config-modal" role="dialog" aria-modal="true">
     <div class="modal-box">
       <a href="#" class="modal-close" aria-label="Close modal">&times;</a>
       <!-- modal content -->
     </div>
   </div>
   ```
4. Close the modal with any link pointing back to `#` (or any other empty/valid fragment).

## Configurable CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--wobble-duration` | `0.8s` | Duration of the decaying wobble entry animation |
| `--dash-primary` | `#0284c7` | Primary dashboard accent color |
| `--modal-fade-speed` | `0.25s` | Speed of the overlay fade in/out |
| `--modal-radius` | `14px` | Corner radius of the modal box |
| `--modal-max-width` | `480px` | Maximum width of the modal box |

Override any of these in your own stylesheet:

```css
:root {
  --wobble-duration: 1s;
  --dash-primary: #7c3aed;
}
```

## How the animation works

The `wobble-focus` keyframe animation moves the modal box horizontally through a series of decreasing overshoots (`-6% → 4% → -2.5% → 1.5% → -1% → 0.5% → 0%`) combined with a scale-in, simulating a spring settling into focus. It's triggered only when `.modal-overlay:target` is active, keeping the effect tied purely to CSS state.

## Files

- `demo.html` — standalone interactive demo (dashboard shell + modal)
- `style.css` — all component styles, including the wobble-focus keyframes
- `README.md` — this file# Dashboard Wobble-Focus Modal

A pure CSS modal component built for responsive analytics dashboard layouts. It uses a smooth, decaying horizontal **wobble-focus** entry transition to draw attention to configuration or report panels — no JavaScript required.

## Features

- **Zero JavaScript** — modal open/close state is handled entirely via the CSS `:target` pseudo-class.
- **Wobble-Focus animation** — a decaying horizontal wobble (overshoot → settle) draws the eye without a harsh flash.
- **Keyboard accessible** — triggered and dismissed via standard anchor links, so it's fully reachable via `Tab` and `Enter`.
- **Responsive** — sidebar collapses to a stacked layout below 640px; modal scales fluidly on small viewports.
- **Reduced motion support** — animation is disabled for users with `prefers-reduced-motion: reduce`.

## Usage

1. Include `style.css` in your page.
2. Add a trigger link pointing to the modal's id:
   ```html
   <a href="#config-modal" class="trigger-btn">Open Configuration</a>
   ```
3. Add the modal markup with a matching `id`:
   ```html
   <div class="modal-overlay" id="config-modal" role="dialog" aria-modal="true">
     <div class="modal-box">
       <a href="#" class="modal-close" aria-label="Close modal">&times;</a>
       <!-- modal content -->
     </div>
   </div>
   ```
4. Close the modal with any link pointing back to `#` (or any other empty/valid fragment).

## Configurable CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--wobble-duration` | `0.8s` | Duration of the decaying wobble entry animation |
| `--dash-primary` | `#0284c7` | Primary dashboard accent color |
| `--modal-fade-speed` | `0.25s` | Speed of the overlay fade in/out |
| `--modal-radius` | `14px` | Corner radius of the modal box |
| `--modal-max-width` | `480px` | Maximum width of the modal box |

Override any of these in your own stylesheet:

```css
:root {
  --wobble-duration: 1s;
  --dash-primary: #7c3aed;
}
```

## How the animation works

The `wobble-focus` keyframe animation moves the modal box horizontally through a series of decreasing overshoots (`-6% → 4% → -2.5% → 1.5% → -1% → 0.5% → 0%`) combined with a scale-in, simulating a spring settling into focus. It's triggered only when `.modal-overlay:target` is active, keeping the effect tied purely to CSS state.

## Files

- `demo.html` — standalone interactive demo (dashboard shell + modal)
- `style.css` — all component styles, including the wobble-focus keyframes
- `README.md` — this file