# Pure CSS Tada-Click Glassmorphism Tooltip

A lightweight, performant, and premium CSS tooltip architecture designed explicitly to match frosted surface blending, high-blur backdrop panels, and glossy UI design structures.

## Features
- **Zero JS Dependency Engine:** Runs completely on hardware-accelerated transitions utilizing native interactive state hooks (`:active`).
- **Polished Glass Aesthetics:** Employs transparent backdrops, sharp border reflections, and crisp shadows that overlay beautifully across colorful background assets.
- **Dynamic Micro-Interaction:** Scales and vibrates smoothly over a quick rotational timeline upon being clicked.
- **Accessible Core Navigation:** Built cleanly with valid ARIA roles and distinct outline indicators.

## Configuration Tokens

| Variable Token Name | Custom Assignment Targets | Default Initial Baseline |
| :--- | :--- | :--- |
| `--glass-blur` | Backdrop filter blur radius metric | `16px` |
| `--tooltip-bg` | Core semi-opaque backdrop surface layer tint | `rgba(15, 23, 42, 0.65)` |
| `--tooltip-fade-duration` | Base opacity entry transformation timing | `0.25s` |
| `--tooltip-tada-duration` | Total timeline run of the interactive shake | `0.5s` |