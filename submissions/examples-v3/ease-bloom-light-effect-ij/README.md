# ease-bloom-light-effect

Soft bloom/glow light effect triggered on `:hover` and `:focus-visible`. A radial gradient overlay fades in at the cursor position, and a pulsing box-shadow animation plays while the element is active.

## HTML Structure

```html
<div class="ease-bloom-light-effect" tabindex="0">
  <!-- content -->
</div>
```

Add `tabindex="0"` if the element should receive keyboard focus.

## CSS Variables

| Variable            | Default     | Description                                      |
|---------------------|-------------|--------------------------------------------------|
| `--bloom-color`     | `#fdcb6e`   | Color of the bloom/glow light                    |
| `--bloom-size`      | `60px`      | Radius of the bloom radial gradient              |
| `--bloom-intensity` | `0.6`       | Opacity of the bloom overlay (0–1)               |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<button class="ease-bloom-light-effect" style="--bloom-color: #00cec9; --bloom-size: 80px;">
  Click me
</button>
```

The `::before` pseudo-element renders the bloom. The `:hover` and `:focus-visible` states also apply a subtle scale and a pulsing `box-shadow` animation.
