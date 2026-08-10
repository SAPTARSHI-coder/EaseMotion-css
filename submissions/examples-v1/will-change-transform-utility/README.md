# Will-Change Transform Utility

Introduces the hardware-accelerated GPU graphics rendering optimization token (`.ease-will-change-transform`) under issue #15155.

## Functional Mechanics

- **The Problem:** When applying complex transitions, scaling sequences, or parallax 3D operations via JS or CSS hover triggers, the browser often calculates graphic transforms on the fly. This causes dropped frames (jank) as elements switch into memory layers abruptly.
- **The Solution:** Offloads render processing onto the GPU. The `.ease-will-change-transform` class serves as a proactive compiler tip. It prompts the client browser to offload the targeted layout node onto its own dedicated GPU composite layer ahead of time, ensuring perfectly smooth animations.

## Usage Layout Structure
```html
<div class="ease-will-change-transform">
  </div>
```

Closes #15155
