# Animated Neon Glow Button

**What does this do?**  
A button with a neon-glow border and text that continuously pulses. On hover the glow intensifies and the button fills solid, while scaling up slightly. Multiple color variants are controlled via the `--hue` custom property, producing distinct neon colors from the same base styles.

**How is it used?**  
Open `demo.html` in a browser to see five buttons with different hues. Change a button's color by setting a new `--hue` value (0–360) inline or in CSS. The button works as a link (`<a>`) but can be adapted to any interactive element.

**Why is it useful?**  
Neon glow effects are popular in gaming, creative, and tech-branded UIs. This pattern encapsulates a polished, attention-grabbing animation in pure CSS with no external dependencies. The custom-property-driven theming makes it trivial to generate a full palette of buttons from a single component, while `prefers-reduced-motion` ensures accessibility.
