# CSS Glow Pulse Animation for Cyberpunk Neon Layouts

A pure CSS infinite keyframe animation sequence designed to replicate the flickering, pulsing behavior of physical neon signs. This component is explicitly styled for immersive **Cyberpunk Neon** interface aesthetics, utilizing deep background contrasts and vibrant hex colors (Cyan, Magenta, Yellow).

## Files
- `demo.html` – Structural layout demonstrating the neon pulse effect applied to buttons and critical status indicators.
- `style.css` – The core stylesheet containing the Cyberpunk variables, layout styles, and the three distinct `@keyframes` animation blocks.

## How it works
The "Glow Pulse" effect is achieved without any JavaScript overhead by animating two crucial CSS properties simultaneously inside an infinite, alternating keyframe sequence:
1. `box-shadow`: Using a multi-layered box-shadow, the animation pulses an outer diffuse glow, an intense inner glow, and a subtle inset shadow to give the element a physical glass tube appearance.
2. `text-shadow`: The text itself pulses in sync with the border to simulate gas illumination.

## Usage
Add the desired glow utility class to any bordered element or text node.

```html
<!-- Cyan Pulsing Button -->
<button class="ease-cyber-btn ease-cyber-glow-cyan">
  INITIALIZE
</button>

<!-- Magenta Pulsing Button -->
<button class="ease-cyber-btn ease-cyber-glow-magenta">
  UPLINK
</button>

<!-- Fast Yellow Critical Pulse -->
<div class="ease-cyber-status ease-cyber-glow-yellow">
  CRITICAL
</div>
```

## Accessibility (prefers-reduced-motion)
Pulsing animations can trigger vestibular disorders. This component implements a strict `@media (prefers-reduced-motion: reduce)` media query. Rather than completely disabling the styling (which would ruin the Cyberpunk aesthetic), the animation is frozen in a static "glow" state (`animation: none`). This ensures users with motion sensitivity still receive the thematic UI experience without the disorienting flashing effect.

## Why it fits EaseMotion CSS
EaseMotion focuses on delivering premium, high-fidelity visual states that are incredibly easy to implement. By abstracting complex, multi-layered `box-shadow` interpolations into a single utility class, developers can instantly apply a highly stylized Cyberpunk aesthetic to their layouts using pure, hardware-accelerated CSS.
