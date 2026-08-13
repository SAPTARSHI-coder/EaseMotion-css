# CSS Focus Mode Toggle (#71016)

A zero-JS Focus Mode toggle component that dims peripheral UI distractions, sidebars, and widgets while highlighting core article reading content.

## Features
- Pure CSS state cascade powered by `:has()` container query logic.
- Smooth transition effects (blur, opacity reduction, scale down) applied to peripheral components.
- Keyboard accessible switch control (`role="switch"`, `:focus-visible`).
- Fallbacks for responsive screens and `prefers-reduced-motion`.
