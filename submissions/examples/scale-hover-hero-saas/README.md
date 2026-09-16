# Scale-Hover Hero — SaaS Showcase

A SaaS-style hero section with scale-on-hover cards and buttons. Interactive elements scale up smoothly using an elastic cubic-bezier timing function.

## How It Works

The hero section uses a centered layout with an eyebrow badge, headline, description, and two CTA buttons. The primary button and ghost button both scale up to 1.05x on hover. The feature cards below scale to 1.03x with a subtle shadow lift.

The `cubic-bezier(0.34, 1.56, 0.64, 1)` timing gives the scale a slight overshoot — elements pop up slightly past their target size then settle, which feels snappy and responsive.

## Customization

- Change `--shh-violet` for a different brand color
- Adjust the `scale()` values for more or less dramatic hover
- The border-radius and shadow can be tuned for different densities
- Add more cards to the grid — the layout adapts automatically

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables all hover transitions
- Fully responsive from mobile to wide desktop
- Grid adapts via `auto-fit` and `minmax`
