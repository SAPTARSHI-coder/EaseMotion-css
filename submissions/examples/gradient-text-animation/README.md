# Gradient Text Animation

### What does this do?
Demonstrates three animated gradient techniques using `background-clip: text` — Rainbow Cycling (multi-stop gradient that rotates position across the text), Shimmer Sweep (a narrow highlight band that moves diagonally), and Gradient Shift (two colors slowly cross-fading through intermediate stops). All effects are self-contained with no external dependencies.

### How is it used?
Open `demo.html` in any modern browser. Each heading uses a distinct CSS class — `grad-rainbow`, `grad-shimmer`, or `grad-shift` — applied to any text element. The animations loop infinitely and respect `prefers-reduced-motion` by falling back to a static gradient. Font sizes use `clamp()` for responsive scaling.

### Why is it useful?
Gradient text animations are a popular visual enhancement for hero sections, headers, and branding elements. This example provides three distinct, production-ready implementations that developers can drop into their projects, complete with accessibility fallbacks and responsive sizing. It also serves as a reference for combining `background-clip: text` with CSS animations.
