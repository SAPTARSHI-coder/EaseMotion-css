# Cinematic Title Reveal

Closes #75008

A movie-title-style letter-by-letter reveal animation. Each character starts hidden below the line and springs up with a cubic-bezier bounce.

## Technique

Each character is wrapped in a `<span>` with `animation-delay` set per character. The keyframe translates from `translateY(30px)` to `0` with a spring easing curve. A horizontal gradient line expands from center afterward.
