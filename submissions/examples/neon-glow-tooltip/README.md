# Neon Glow Tooltip (Accessible Web Layouts)

A modern cyber/neon aesthetic tooltip that seamlessly satisfies WCAG accessible interaction patterns without requiring heavy JS dependencies.

## Key Technical Implementations
- **High Text Legibility:** Uses custom opaque slate-dark backdrops within the tooltip module to keep contrast ratios strictly readable against glowing structural borders.
- **A11y Adaptive Hooks:** Embraces `prefers-reduced-motion` media queries to immediately scale back translational motion loops for motion-sensitive users.
- **Keyboard Friendly:** Trigger blocks bind cleanly to natural native keyboard focus loops through `:focus-within` triggers.

## Configuration Parameters

You can easily adapt the aesthetic signature directly in the `style.css` custom property variables block:

| CSS Custom Variable | Default Value | Usage |
| :--- | :--- | :--- |
| `--neon-glow-color` | `#00f0ff` | The focal hexadecimal base accent color for your neon system |
| `--neon-glow-intensity` | `0px 0px 12px...` | Custom stack configuration defining shadow bloom sizes |