# Card 3D Tilt
Hover the avatars to trigger a 3D tilt effect with tooltip. Pure CSS, no JavaScript.
## Features
- Dark theme with `--dp-bg` custom property for color
- 3D perspective tilt on the card container via `perspective()` and `rotateX/Y`
- Scale transform with `translateZ` on avatar hover with glow box-shadow
- Tooltip with arrow indicator via `::before`
- `prefers-reduced-motion` support
## Usage
Set `--dp-bg` on each `.dp-item` for the avatar and glow color. The card tilts in 3D space on hover.
