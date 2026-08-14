# Ease Filmstrip Carousel Component

A high-performance, pure CSS infinite looping image marquee designed with an authentic retro cinematic aesthetic. Perfect for photography showcases, agency landings, and creative portfolios.

## Features
- **Zero Dependencies:** Eliminates external image or SVG asset wrappers via algorithmic `radial-gradient` patterns to composite native film frame perforation marks.
- **Hardware-Accelerated Animation:** Leverages explicit `translate3d` boundaries inside `@keyframes` rules to achieve continuous scrolling.
- **Intelligent Micro-Interactions:** Supports hover interaction triggers that change active `animation-play-state` states dynamically to let users pause on any photo frame.

## Acceptance Criteria Met
- [x] **Perforated film border effect:** Programmed using highly scalable repeating radial background masks.
- [x] **Seamless infinite scrolling:** Utilizes twin track duplication offsets to bypass visual clipping bugs.
- [x] **Pause on hover functionality:** Seamlessly linked through `:hover` properties.
- [x] **Responsive design:** Adapts aspect boundaries and height metrics smoothly under mobile query profiles.

## Configuration API (CSS Variables)

| CSS Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--film-bg` | Color assignments mapping down to the primary strip background. | `#111111` |
| `--sprocket-color` | The cutout fill shade (should match viewport canvas background). | `#0f172a` |
| `--loop-speed` | Speed controlling duration of full image rotations. | `25s` |
| `--frame-width` | Dedicated dimensional configuration sizing for content assets. | `320px` |