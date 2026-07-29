# Testimonial Card

A testimonial carousel with slide/rotate card transitions and staggered entrance animations.

## Features

- translateX + rotateY card sliding transition
- Staggered scale entrance for quote text and author
- Avatar with name / role fade-in
- Prev / Next navigation with dot indicators
- Auto-rotate carousel every 4 seconds

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tstc-duration` | `0.45s` | Transition duration |
| `--tstc-card-bg` | `rgba(255,255,255,0.06)` | Card background |
| `--tstc-quote-color` | `#e2e8f0` | Quote text color |
| `--tstc-name-color` | `#f1f5f9` | Author name color |
| `--tstc-radius` | `16px` | Card border-radius |

## Interactive JS

The carousel cycles automatically but pauses on manual nav click. Cards slide with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a slight bounce. Quote and author animate in with staggered delays.
