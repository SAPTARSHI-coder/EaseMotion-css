# ease-carousel-slide-transition

A carousel with horizontal slide transition, navigation buttons, and dot indicators. The track translates via CSS custom property `--cst-active-index`.

## Features
- 4 slides with smooth translateX transition
- Left/right navigation buttons with hover scale effect
- Dot indicators with active state transition
- Configurable via `--cst-transition-duration`, `--cst-nav-color`, `--cst-dot-active-color`

## Usage
Set `--cst-active-index` (0-3) on the `.cst-carousel` element via `style.setProperty()` to navigate to a slide. Dot active class toggles automatically.
