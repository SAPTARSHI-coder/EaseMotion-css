# Recording Pulse Dot

Recording indicator with a pulsing red dot, radiating ring ripples, and a counting timer. Toggle start/stop to control recording state.

## Features

- Pulsing dot using scale + opacity keyframes
- Radiating ring ripple animation (two rings staggered)
- Live timer counting up in MM:SS format
- Start / Stop toggle button
- Customizable via root CSS variables

## Usage

Toggle `.rpd-dot-active` on the dot for pulse, `.rpd-ring-active` on rings for ripple radiation, and control timer via JavaScript. CSS handles all animations via `@keyframes`.
