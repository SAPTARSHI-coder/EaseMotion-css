# ease-parallax

Scroll-driven parallax depth effect using `animation-timeline: scroll()` and translateY. Zero JavaScript required.

## Usage

```html
<!-- Scrolls up as page scrolls (default) -->
<div class="ease-parallax">Parallax element</div>

<!-- Faster movement -->
<div class="ease-parallax ease-parallax-fast">Faster parallax</div>

<!-- Custom distance -->
<div class="ease-parallax" style="--ease-parallax-distance: -120px;">Custom</div>
```

## Speed / Distance Variants

| Class | Distance |
|---|---|
| `ease-parallax-slow` | −30px |
| `ease-parallax` (default) | −80px |
| `ease-parallax-fast` | −150px |

## Direction Variants

| Class | Direction |
|---|---|
| `ease-parallax` | Up (default) |
| `ease-parallax-down` | Down |
| `ease-parallax-left` | Left |
| `ease-parallax-right` | Right |

## Special Effect Variants

| Class | Effect |
|---|---|
| `ease-parallax-fade` | Moves up + fades to 0.2 opacity |
| `ease-parallax-scale` | Moves up + scales down to 0.9 |

## Custom Distance

Override the travel distance per element using a CSS variable:

```html
<div class="ease-parallax" style="--ease-parallax-distance: -200px;">Deep parallax</div>
```

## Staggered Depth Layers

Combine slow/default/fast on sibling elements for a true multi-layer depth effect:

```html
<div class="blob ease-parallax ease-parallax-slow">Background</div>
<div class="blob ease-parallax">Midground</div>
<div class="blob ease-parallax ease-parallax-fast">Foreground</div>
```

## Browser Support

Requires `animation-timeline: scroll()` (Chrome 115+, Edge 115+). Falls back gracefully in unsupported browsers — elements render in their natural position with no animation.

## Submission

- **Author:** sudha09-git
- **Issue:** #3857
- **Files:** `style.css`, `demo.html`
