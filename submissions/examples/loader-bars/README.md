# Loader Bars

1. What does this do? An equalizer-style bars loader where five bars bounce up and down with staggered delays and durations to look like an audio equalizer.
2. How is it used? Build a `.loader-bars` container of `.loader-bars__bar` spans; each bar shares the `lb-bounce` scaleY keyframe but gets a different `animation-delay` and `animation-duration` so they move out of phase. Adjust the accent color via `--lb-accent`.
3. Why is it useful? It provides a compact, lively loading indicator using only CSS keyframes (no JavaScript), and freezes to a half-height static state under `prefers-reduced-motion`.
