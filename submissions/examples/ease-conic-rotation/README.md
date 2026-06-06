# Conic Rotation Glow Border (`ease-conic-glow`)

An ultra-premium visual layout component popular in high-end AI and SaaS application landing pages. It features an organic, endlessly cycling gradient outline border complete with a matching ambient atmospheric halo bleed underneath.

## Architectural Composition

- **GPU Angle Interpolation:** Leverages the modern CSS `@property` directive syntax to cleanly register `--glow-angle` as a dedicated value type, permitting background color gradients to animate fluidly on composition channels with zero main-thread overhead.
- **Volumetric Halo Layering:** Employs a dual-pseudo layout structure. The `::before` element frames a crisp 2px border, while the `::after` node is pushed beneath with a heavy hardware-friendly blur layer (`filter: blur(28px)`) to form the glow radiance.
- **Ag-nostic Shell Delivery:** Fully com-posable. Developers can nest pricing blocks, portfolio displays, dashboard metrics grids, or primary buttons cleanly within the border without modifying document streams.

## Project Structure
- `demo.html`: Independent visual sandbox presentation workspace.
- `style.css`: Configured production utility sheet rules.

## By
[Pari Dubey](https://github.com/pari-dubey1)