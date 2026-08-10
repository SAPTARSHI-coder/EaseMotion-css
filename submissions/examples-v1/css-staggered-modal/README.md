# Pure CSS Staggered Entrance Modal

A lightweight, zero-dependency, pure CSS animated modal component designed specifically for modern responsive dashboard systems. Built for the `EaseMotion` core collection.

## Features
- **Zero JavaScript:** Relies entirely on the native modern CSS `:target` structural pseudo-class.
- **Staggered Animations:** Internal layout segments feature programmatic item entry curves via standard inline CSS Custom Variable declarations (`--stagger-index`).
- **Fully Customizable:** Easily manipulate scale metrics, easing configurations, and stagger delay durations straight from `:root`.
- **Accessible & Responsive:** Adapts flexibly down to tiny screen form factors and respects close actions implicitly.

## Configuration Properties
You can override these properties within your application scope:

| Property | Default Value | Purpose |
| :--- | :--- | :--- |
| `--modal-duration` | `0.4s` | Global entry/exit timing |
| `--modal-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshot snappy spring curve |
| `--modal-stagger-delay` | `0.06s` | Cascaded multiplication delay coefficient |
| `--modal-initial-scale` | `0.95` | Scale variance depth on initial hidden state |

## How to use
Assign sequential integers to `--stagger-index` on individual block wrappers within your modal to automatically register them to the stagger engine sequence.