# ease-battery-charge

Closes #13760 — animated battery icon that fills with charge level,
colour-coded status, lightning bolt overlay, and live percentage counter.

## Features

| Feature            | Detail                                            |
| ------------------ | ------------------------------------------------- |
| Fill animation     | height animates 0% to 100% over 3s loop           |
| Colour coding      | Red (low) Orange (mid) Yellow (half) Green (full) |
| Lightning bolt     | Pulsing overlay during charge                     |
| Shine sweep        | Gloss effect sweeps across fill                   |
| Percentage counter | JS synced to CSS animation timing                 |
| Status indicator   | Pulsing Charging badge                            |
| Static variants    | Low / Mid / Full state examples                   |

## Files

- demo.html - live animated demo + static state examples
- style.css - all battery fill and lightning animations
- README.md - this file

## Techniques

- CSS height animation for fill level
- linear-gradient colour shift per charge level
- CSS clip/overflow hidden on battery shell
- lightning bolt pulse via scale + opacity keyframes
- prefers-reduced-motion support
