# Elastic Slide Animation - Audio Player (Pure CSS)

A pure CSS animated Elastic Slide transition tailored for sleek Audio Player interfaces (e.g., Apple Music, Spotify). It uses a specialized `cubic-bezier` curve to create a fluid, satisfying "spring up" effect when opening the Lyrics or Up Next drawers.

## Features
- 🪀 **Elastic Overshoot**: Utilizes a specific bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) designed to overshoot the Y-axis boundary and spring back smoothly.
- 🎵 **Audio Player Aesthetic**: Pre-configured with a sleek dark mode, vibrant gradient accents, and a frosted glass backdrop filter.
- ♿ **Accessibility First**: Includes native support for the `@media (prefers-reduced-motion: reduce)` query. For users with vestibular disorders, the elastic bounce is completely disabled and replaced with a calm, static opacity crossfade.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--slide-timing` | `0.65s` | Duration of the elastic slide. Extended slightly to allow the bounce physics to resolve smoothly. |
| `--elastic-ease` | `cubic-bezier(...)` | The math powering the elastic bounce effect. |
| `--accent-gradient` | `linear-gradient(...)`| The vibrant play button and album art accent. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. The animation relies on the `transform: translateY()` property combined with the `--elastic-ease` variable triggered by the hidden CSS checkbox.