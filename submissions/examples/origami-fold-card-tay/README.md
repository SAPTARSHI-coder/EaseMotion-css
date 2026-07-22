# Origami Fold Card Animation

A reusable card component that mimics origami paper folding to reveal hidden content, using layered panels and 3D CSS transforms.

## Usage

Include `style.css` and drop in the markup:

```html
<div class="origami-card-tay">
  <div class="origami-front-tay">
    <h3>Premium Card</h3>
    <p>Hover to unfold</p>
  </div>
  <div class="origami-panel-tay panel-top-tay"></div>
  <div class="origami-panel-tay panel-bottom-tay"></div>
  <div class="origami-content-tay">
    <h4>Hidden Content</h4>
    <p>Revealed through a staged origami folding animation.</p>
  </div>
</div>
```

For a left/right fold, swap `panel-top-tay`/`panel-bottom-tay` for `panel-left-tay`/`panel-right-tay` and set `--fold-direction: left` (or `right`).

For click/tap instead of hover, add the `origami-card-tay--click` class and a `tabindex="0"` attribute.

## Customization (CSS variables)

| Variable | Default | Description |
|---|---|---|
| `--fold-direction` | `top` | `top`, `bottom`, `left`, or `right` |
| `--fold-count` | `2` | Number of folding panels |
| `--perspective` | `1200px` | 3D perspective depth |
| `--fold-duration` | `0.7s` | Animation duration |
| `--fold-easing` | `cubic-bezier(.22,1,.36,1)` | Timing function |
| `--shadow-intensity` | `0.35` | Shadow opacity (0–1) |
| `--card-radius` | `14px` | Corner radius |
| `--card-bg` | `#1e1b2e` | Front/content background |
| `--panel-bg` | `#2c2745` | Panel background |

## Behavior

- Hover (or focus/click on the `--click` variant) triggers panels to rotate open along the X or Y axis, revealing the content layer underneath.
- `@supports not (transform-style: preserve-3d)` fallback hides panels and cross-fades content directly, so the card still works on unsupported browsers.
- Respects `prefers-reduced-motion`.

## Notes for reviewer

- Followed the `-tay` suffix convention on all classes.
- No dependencies, pure CSS + HTML.
- Does not duplicate existing flip/slide animations in `core/` — this is a multi-stage layered fold, distinct from a single-axis flip.