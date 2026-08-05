# Confetti Stopwatch (Gaming UI)

A pure HTML + CSS digital stopwatch themed around modern Gaming UI and esports overlays. This component functions as a complete state machine utilizing HTML `<input type="radio">` tags and CSS animations, requiring **no JavaScript**. Clicking the final "Claim Victory!" control freezes the timer and launches a vibrant multi-directional confetti explosion.

## Features

- **Pure CSS State Machine**: Manages Start, Pause, and Reset states natively using checkbox/radio selector rules.
- **Digit Tick Animation**: Animates digit panels smoothly in discrete increments using `@keyframes` with `steps(10)` or `steps(6)`.
- **CSS Confetti Particle Physics**: Emulates random velocity, gravity, rotation, and delay using inline CSS variables feeding into a single centralized particle `@keyframe` burst.
- **Glowing Esports Theme**: Features a cyberpunk glassmorphic card design with state-activated neon borders and display glows.
- **Accessibility Friendly**: Includes focus outlines using `:focus-visible`, semantic hierarchy, and keyboard triggers for controls.
- **Reduced Motion Support**: Disables motion and particle effects when `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/confetti-stopwatch-gaming/
├── demo.html    # Showcase page with Orbitron fonts and gaming overlays
├── style.css    # Layouts, state rules, digit step keyframes, and confetti physics
└── README.md    # API documentation & guidelines
```

---

## Customization API

The component exposes these semantic variables for easy customization:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-stopwatch-duration` | `0.3s` | Duration for buttons hover scale and overlay drawer openings. |
| `--ease-stopwatch-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve for panels and banners. |
| `--ease-stopwatch-primary` | `#a855f7` | Primary theme color (Neon Purple). |
| `--ease-stopwatch-accent` | `#06b6d4` | Secondary/ticking accent color (Neon Cyan). |
| `--ease-stopwatch-success` | `#10b981` | Completed state color (Neon Green). |
| `--ease-stopwatch-confetti-1` | `#ff007f` | Color token for pink confetti pieces. |
| `--ease-stopwatch-confetti-2` | `#3b82f6` | Color token for blue confetti pieces. |
| `--ease-stopwatch-confetti-3` | `#10b981` | Color token for green confetti pieces. |
| `--ease-stopwatch-confetti-4` | `#eab308` | Color token for yellow confetti pieces. |
| `--ease-stopwatch-radius` | `24px` | Border radius of the main panel. |
| `--ease-stopwatch-shadow` | `0 20px 50px ...` | Glowing box shadow configuration. |
| `--ease-stopwatch-font-size` | `3.75rem` | Digital stopwatch digits font size. |

---

## Implementation Details

### Pure CSS State Controls
State transitions are bound directly to the active checked input radio:

- **Start**: Overrides the base paused state to `animation-play-state: running`.
- **Pause**: Locks the digits on their current animation progress frame (`animation-play-state: paused`).
- **Reset**: Removes the animation altogether (`animation-name: none !important`), resetting the columns' layout translation back to `0`.
- **Victory**: Pauses the time and triggers the confetti burst keyframe.

```css
/* Start state */
#stopwatch-start:checked ~ .ease-stopwatch-container .ease-stopwatch-digit-strip {
  animation-play-state: running;
}
/* Reset state */
#stopwatch-reset:checked ~ .ease-stopwatch-container .ease-stopwatch-digit-strip {
  animation-name: none !important;
  transform: translateY(0) !important;
}
```

### Random Particle Physics
Using inline custom properties, a single keyframe declaration powers custom trajectories:

```html
<div class="ease-confetti-particle" style="--tx: -120px; --ty: -280px; --rot: 720deg; --delay: 0.05s; --color: var(--ease-stopwatch-confetti-1);"></div>
```
```css
@keyframes ease-kf-confetti-burst {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(0);
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: translate(calc(var(--tx) * 0.35), calc(var(--ty) * 0.35)) rotate(calc(var(--rot) * 0.3)) scale(1.3);
  }
  100% {
    opacity: 0;
    transform: translate(var(--tx), calc(var(--ty) + 160px)) rotate(var(--rot)) scale(0.4);
  }
}
```

---

## Accessibility Notes
Labels styling is augmented to receive focus via `tabindex="0"`. A custom inline `onkeydown` handler toggles the backing radio button when `Enter` or `Space` is pressed, enabling full screen-reader and keyboard accessibility.
