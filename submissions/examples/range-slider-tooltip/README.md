# Range Slider Tooltip

1. What does this do? A custom range slider whose thumb shows a floating tooltip that pops in (scale + fade) on hover or keyboard focus.
2. How is it used? Build a `.range-slider-tooltip` wrapper containing a `.range-slider-tooltip__input` (range) and a `.range-slider-tooltip__tooltip` (`<output>`). The track fills with the accent up to `--rst-thumb-x` (the thumb position, set by JS in a real app) and the tooltip anchors above it. The thumb scales on hover and the tooltip pops in. Adjust the accent and speed via `--rst-accent` and `--rst-speed`.
3. Why is it useful? It delivers a polished slider with a live value tooltip using only CSS for styling/animation (JS would sync the value/position), cross-browser thumb styling, and `prefers-reduced-motion` support.
