# Float Bob Animation (#31841)

A floating/bobbing animation that gently moves an element up and down using `translateY` with smooth `ease-in-out` timing.

## Features
- Smooth vertical bob using `@keyframes`
- Controlled via `--bob` custom property (`0` = paused, `1` = running)
- Toggle button to start/stop animation

## Usage
Set `--bob: 1` on the element to play the animation, or `--bob: 0` to pause it.
