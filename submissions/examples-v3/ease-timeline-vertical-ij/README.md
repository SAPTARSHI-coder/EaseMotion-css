# Vertical Timeline

A scroll-triggered vertical timeline with progress line animation and staggered item reveals.

## Features

- Items slide in from alternating sides on scroll using `translateX` + `opacity`
- Central line animates from top to bottom as items become visible
- Dots pulse with a keyframe animation when they appear
- Staggered transition delays for a cascading reveal effect
- Date labels and hover effects on timeline cards

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--tv-duration` | `0.6s` | Item fade-in and slide duration |
| `--tv-line-color` | `#6c5ce7` | Central timeline line color |
| `--tv-dot-color` | `#6c5ce7` | Timeline dot color |
| `--tv-item-bg` | `#ffffff` | Timeline card background |
| `--tv-active-color` | `#a29bfe` | Date label and accent color |
| `--tv-radius` | `12px` | Timeline card border radius |

## Usage

Open `demo.html` and scroll down. Timeline items fade and slide in as they enter the viewport.
