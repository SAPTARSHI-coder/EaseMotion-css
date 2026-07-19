# Clip Path Chip for Cyberpunk

## 1. What does this do?

An asymmetric, beveled clip-path chip component inspired by Cyberpunk and sci-fi designs, featuring neon glowing borders, scanline overlays, and responsive hover-state glitch flicker animations.

## 2. How is it used?

Wrap the content in a chip container and apply theme variation classes like `cyber-cyan`, `cyber-magenta`, or `cyber-yellow`:

```html
<div class="cyber-chip-wrapper cyber-cyan">
  <span class="cyber-chip-glitch-bg"></span>
  <span class="cyber-chip-content">[ONLINE]</span>
</div>
```

## 3. Why is it useful?

It aligns perfectly with EaseMotion CSS's design rules:

- **Human-readable**: Semantic class names like `cyber-chip-wrapper` and color modifiers identify the design components.
- **Animation-first**: Implements advanced multi-step CSS keyframe sequences for realistic cyberpunk glitch transitions and scanline sweeps.
- **Composable**: Perfect for status tags, metadata badges, category tags, or custom button elements in gaming and dark-themed dashboards.
