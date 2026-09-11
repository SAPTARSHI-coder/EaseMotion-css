# 3D Tilt Parallax

A card component with a mouse-driven 3D tilt effect and parallax depth on inner elements.

## Features

- Card tilts in 3D space following the mouse position using `rotateX` / `rotateY`
- Glare/reflection overlay moves with the mouse
- Inner elements (icon, title, description, tags) move at different speeds for parallax depth
- Smooth reset animation on mouse leave
- `perspective` set on parent for realistic 3D

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--t3d-duration` | `0.3s` | Reset transition duration on mouse leave |
| `--t3d-card-bg` | `linear-gradient(145deg, #2d1b69, #1a0a3e)` | Card background gradient |
| `--t3d-shadow` | `rgba(108,92,231,0.35)` | Card box shadow color |
| `--t3d-glare-color` | `rgba(255,255,255,0.18)` | Glare overlay color |
| `--t3d-radius` | `20px` | Card border radius |

## Usage

Open `demo.html` and move your mouse over the card to see the 3D tilt. Move away to reset.
