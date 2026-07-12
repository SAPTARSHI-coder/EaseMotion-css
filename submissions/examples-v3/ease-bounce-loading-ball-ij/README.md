# Bounce Loading Ball (#31845)

A ball that bounces vertically with squash-and-stretch deformation on landing for a weighty, organic feel.

## Features
- Bounce `@keyframes` with vertical translation
- `scaleX` / `scaleY` squash on impact for physical realism
- Controlled via `--bounce` custom property (`0` = paused, `1` = running)

## Usage
Set `--bounce: 1` on `.bounce-ball` to start the bouncing ball animation.
