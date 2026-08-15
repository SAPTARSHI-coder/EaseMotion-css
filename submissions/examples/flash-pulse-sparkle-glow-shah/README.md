# Flash Pulse Sparkle Glow

1. What does this do? Provides a core SCSS animation mixin pattern for EaseMotion. It creates a continuous pulsing animation that scales an element up slightly while intensifying its drop-shadow glow and opacity, simulating a sparkling or flashing light.
2. How is it used? Apply the `.ease-anim-flash-pulse-sparkle-glow` class to an element. It works best on icons, stars, notification dots, or SVG shapes. The maintainer will integrate this code directly into `core/animations.css`.
3. Why is it useful? Sparkle and glow effects are highly effective for drawing attention to new features, achievements, or interactive elements. This provides a highly performant, 60fps hardware-accelerated pulse to the core animation engine, using `filter: drop-shadow` for organic glowing edges instead of basic box-shadows.
