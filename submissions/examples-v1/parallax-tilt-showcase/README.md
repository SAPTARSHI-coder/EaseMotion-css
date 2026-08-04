# Parallax Tilt Showcase

## What it does
A **3D perspective tilt card** with parallax depth layers that shift at different rates based on cursor position, plus a dynamic shine overlay.

## Animations & Techniques
- **3D tilt**: `rotateX` / `rotateY` from mouse position relative to card center.
- **Parallax layers**: `data-depth` attribute controls per-layer translate offset.
- **Dynamic shine**: Radial gradient follows cursor for holographic reflection.

## Folder structure
```
animations/parallax-tilt-showcase/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Premium portfolio/interactive card pattern — CSS `perspective` + `preserve-3d` with minimal JS for coordinates.
