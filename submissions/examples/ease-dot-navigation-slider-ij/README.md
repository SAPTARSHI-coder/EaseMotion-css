# Dot Navigation Slider

Dot navigation indicator with active slide animation. Dots scale up and widen for active state with smooth transitions. Slides translate via `--dn-current` custom property.

## Features

- Dot indicators for slides
- Active dot scales up and widens
- Click to navigate
- Smooth slide transition with bounce cubic-bezier
- Color coded slides via `--dn-bg`

## Usage

Set `--dn-current` (0-4) on `.dn-slider`. CSS handles slide transform. Dots toggle `.dn-active` class for styling.
