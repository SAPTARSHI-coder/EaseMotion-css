# Glitch Effect

### 1. What does this do?
This component creates a cyberpunk-style glitching text animation by copying the text into pseudo-elements and dynamically slicing them horizontally with random offsets.

### 2. How is it used?
Apply the `.glitch-text` class to any text element and add a `data-text` attribute matching the inner text content:

```html
<h1 class="glitch-text" data-text="HELLO">HELLO</h1>
```

**Variants:**
- **Themes**:
  - `.glitch-hover`: Pauses the glitch by default, running it only on mouse hover.
  - `.glitch-color-custom`: Switches the RGB split colors to custom green/purple neon values.
  
- **Custom Properties**:
  - `--glitch-color-1`: Color of the first channel shift (default: `#00f0ff`).
  - `--glitch-color-2`: Color of the second channel shift (default: `#ff0055`).
  - `--glitch-duration`: Duration of the glitch animation cycle (default: `1s`).

### 3. Why is it useful?
It creates a highly visual, thematic text interaction that is fully handled by raw CSS and pseudo-elements. The `data-text` attribute pattern prevents having to repeat markup or write custom HTML wrappers. It is highly performant because it relies on standard `transform` and `clip-path` properties, and includes `@media (prefers-reduced-motion: reduce)` fallbacks that turn off rapid flashing animations in favor of static, high-contrast channel shadows.
