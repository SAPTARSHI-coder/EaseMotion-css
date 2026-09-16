# Cyberpunk Glitch Text Reveal

## Abstract

The **Cyberpunk Glitch Text Reveal** (`.ease-glitch-reveal`) component provides a dramatic entrance animation for headings and high-impact text elements. Utilizing CSS pseudo-elements (`::before` and `::after`), skew transforms, text-shadow RGB splitting, and horizontal rectangular clip paths (`clip: rect(...)`), this component creates a futuristic chromatic glitch effect that settles smoothly into standard display typography.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a high-energy cyberpunk text entrance animation (`.ease-glitch-reveal`) featuring letter skewing, RGB color channel separation (cyan/magenta), and clipped pseudo-elements that snap into sharp focus.

### 2. How is it used?
Add the `.ease-glitch-reveal` class to any heading or hero text element, and ensure the `data-text` attribute matches the inner text content for proper pseudo-element duplication. Use the provided JavaScript trigger or class toggle (`.is-animating`) to re-play the animation on demand.

```html
<h1 class="ease-glitch-reveal" data-text="Welcome to the Future">
  Welcome to the Future
</h1>
```

### 3. Why is it useful?
Delivers an immersive futuristic UI aesthetic without relying on external JavaScript glitch libraries or heavy canvas assets, keeping page payload minimal and render performance hardware-accelerated.

---

## Animation Architecture

The animation sequence operates across three coordinated keyframes driven by high-performance CSS transforms and opacity filters:

1. **`easeGlitchMain`**: Controls the core typography scaling, horizontal skewing (`skewX`), and initial blur-to-sharp transition over a `1.2s` `cubic-bezier(0.16, 1, 0.3, 1)` timing curve.
2. **`easeGlitchBefore`**: Drives the primary cyan color channel separation (`left: 2px; text-shadow: -2px 0 var(--cyber-cyan)`), shifting rapidly through horizontal slice clips (`clip: rect(...)`) and aggressive skew variations before clipping to `rect(0, 0, 0, 0)`.
3. **`easeGlitchAfter`**: Drives the secondary magenta and yellow color channel separation (`left: -2px; text-shadow: -2px 0 var(--cyber-magenta), 0 2px var(--cyber-yellow)`), applying opposing skew angles and rectangular clip masks to simulate multi-frequency signal instability.

---

## Custom CSS Properties

| Property Name | Default Value | Description |
| :--- | :--- | :--- |
| `--cyber-bg` | `#030712` | Main page background color |
| `--cyber-surface` | `#0f172a` | Container stage surface background |
| `--cyber-text` | `#f8fafc` | Base text color |
| `--cyber-cyan` | `#06b6d4` | Primary glitch chromatic channel (cyan) |
| `--cyber-magenta` | `#ec4899` | Secondary glitch chromatic channel (magenta) |
| `--cyber-yellow` | `#eab308` | Auxiliary text-shadow split highlight (yellow) |
| `--cyber-border` | `rgba(6, 182, 212, 0.3)` | Subtle glowing border accent color |
