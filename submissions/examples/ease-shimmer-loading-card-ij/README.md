# ease-shimmer-loading-card

A premium-grade skeleton loading card layout displaying placeholder items with a smooth, continuous shimmering glow animation.

## Usage
Open `demo.html` in your browser. Apply the `.ease-shimmer-bg` class to block components to instantly enable the sliding gradient shimmer effect on top of them.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| `--shimmer-bg` | `#e2e8f0` | Standard base skeleton background color |
| `--shimmer-glow` | `#f1f5f9` | The moving shimmer beam/shine color |
| `--shimmer-card-bg` | `#ffffff` | Background color of the container card |

## Notes
The shine motion is achieved using a looping CSS linear-gradient background animation. By defining `background-size: 200% 100%` and keyframing the `background-position` from positive to negative values, the shimmer slides seamlessly from left to right.
