# Marquee Infinite

An infinite scrolling marquee with colored cards. Speed via `--mi-dur`. Card color via `--mc-hue` (HSL). Pauses on hover. Uses duplicated content for seamless loop with `@keyframes miScroll`.

## Features

- Infinite horizontal scroll with CSS @keyframes
- Speed via `--mi-dur` CSS variable
- Card color via `--mc-hue` (HSL hue)
- Pause on hover via animation-play-state
- Duplicated groups for seamless loop

## Usage

Set `--mi-dur` on `.mi-track` for speed. Each `.mi-card` uses `--mc-hue` for its HSL background color.
