# Spin Loading Dots (#31844)

Three dots that orbit in a circular path with staggered opacity, creating an animated loading indicator.

## Features
- CSS custom property `--i` for per-dot animation delay
- Orbital rotation with opacity fade
- Controlled via `--loading` custom property (`0` = paused, `1` = running)

## Usage
Set `--loading: 1` on `.spinner` to start the dot orbit animation.
