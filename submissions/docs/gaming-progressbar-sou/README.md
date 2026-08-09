# Gaming ProgressBar (Core & Docs Showcase)

A neon-lit gaming-style progress bar that showcases how multiple EaseMotion utilities — glow, shimmer, animated stripes, and pulse — compose together to build rich, game-inspired UI elements.

---

## Files

- demo.html
- style.css
- README.md

---

## What Does This Do?

A self-contained showcase demonstrating a "gaming HUD" style progress bar system built from small, composable primitives. The demo includes 5 variants:

1. **HP Bar** — red gradient with red glow (health).
2. **Mana Bar** — blue gradient with blue glow (magic).
3. **XP Bar** — yellow gradient with amber glow (experience/level).
4. **Boss Loading Bar** — pink neon indeterminate pulse (loading a boss fight).
5. **Compact Player HUD** — stacked mini-bars with icons (HP / Mana / XP).

Every bar layers 3 EaseMotion-style effects on top of each other:
- A colored **glow** halo around the fill.
- A moving **shimmer** highlight sweeping across the fill.
- Animated diagonal **stripes** overlay for the "energy" feel.

---

## How Is It Used?

Drop the classes into any HTML element. The bars are fully self-contained:

    <!-- HP Bar (82% full) -->
    <div class="gaming-bar gaming-bar--hp">
      <div class="gaming-bar__fill" style="width: 82%;">
        <span class="gaming-bar__shimmer"></span>
        <span class="gaming-bar__stripes"></span>
      </div>
    </div>

    <!-- Mana Bar (60% full) -->
    <div class="gaming-bar gaming-bar--mp">
      <div class="gaming-bar__fill" style="width: 60%;">
        <span class="gaming-bar__shimmer"></span>
        <span class="gaming-bar__stripes"></span>
      </div>
    </div>

    <!-- Boss Loading (indeterminate) -->
    <div class="gaming-bar gaming-bar--boss">
      <div class="gaming-bar__fill gaming-bar__fill--indeterminate">
        <span class="gaming-bar__shimmer"></span>
        <span class="gaming-bar__stripes"></span>
      </div>
    </div>

    <!-- Compact HUD mini-bar -->
    <div class="gaming-bar gaming-bar--sm gaming-bar--hp">
      <div class="gaming-bar__fill" style="width: 95%;">
        <span class="gaming-bar__shimmer"></span>
      </div>
    </div>

To change the fill percentage, just update the inline `width` style — or bind it dynamically from JavaScript / a framework.

---

## Class Reference

| Class                                | Purpose                                                            |
| ------------------------------------ | ------------------------------------------------------------------ |
| `.gaming-bar`                        | The outer track (dark background + inner shadow).                  |
| `.gaming-bar--sm`                    | Compact size (12px height) for HUDs.                               |
| `.gaming-bar--hp`                    | Red HP color variant + red glow.                                   |
| `.gaming-bar--mp`                    | Blue Mana color variant + blue glow.                               |
| `.gaming-bar--xp`                    | Yellow XP color variant + amber glow.                              |
| `.gaming-bar--boss`                  | Pink neon Boss color variant + pink glow.                          |
| `.gaming-bar__fill`                  | The animated fill element (width = progress %).                    |
| `.gaming-bar__fill--indeterminate`   | Boss-loading mode — pulses back and forth continuously.            |
| `.gaming-bar__shimmer`               | Moving white highlight sweeping across the fill.                   |
| `.gaming-bar__stripes`               | Animated diagonal stripes overlay for the "energy" effect.         |

---

## Composed EaseMotion Utilities

This showcase intentionally layers **multiple utilities** on the same element to demonstrate how they compose:

| Utility Concept | Implementation                                                   |
| --------------- | ---------------------------------------------------------------- |
| **glow**        | `box-shadow` with layered colored blurs on the fill.             |
| **shimmer**     | `@keyframes gpb-shimmer` — moving gradient highlight.            |
| **stripes**     | `@keyframes gpb-stripes` — animated background-position offset.  |
| **pulse**       | `@keyframes gpb-pulse-text` + indeterminate `scaleX` pulse.      |
| **smooth-fill** | `transition: width 0.6s cubic-bezier(...)` on `.gaming-bar__fill`. |

---

## Animation Details

- **Shimmer** sweeps from `-50%` to `150%` horizontally over 2.2s (linear loop).
- **Stripes** scroll continuously via `background-position` offset over 1.2s.
- **Indeterminate fill** oscillates its `scaleX` between 0.2 and 1.0 over 1.6s.
- **Pulse text** fades opacity and text-shadow between 100% and 55% over 1.2s.
- **Fill width transition** uses a 0.6s cubic-bezier easing so progress updates feel smooth and weighty.

---

## Accessibility

Respects the user's motion preferences via `@media (prefers-reduced-motion: reduce)`. When reduced motion is preferred, all shimmer/stripes/pulse/indeterminate animations are disabled, and the indeterminate fill freezes at 60% width so loading feedback is still visible.

---

## Why Does This Fit EaseMotion CSS?

- **Showcase-first:** Demonstrates the framework's philosophy of building rich UI by composing small utilities (glow + shimmer + stripes + pulse) instead of writing bespoke CSS per component.
- **Self-contained:** No JavaScript, no external assets, no CDN — opens directly in a browser.
- **Composable primitives:** Track, fill, shimmer, and stripes are independent layers — swap or omit any of them without breaking the rest.
- **Human-readable class names:** `.gaming-bar--hp`, `.gaming-bar__shimmer`, `.gaming-bar__fill--indeterminate` describe intent, not implementation.
- **Framework-friendly:** Class names are easy for the maintainer to standardize to `ease-*` naming (e.g. `ease-gaming-bar`, `ease-glow`, `ease-shimmer`, `ease-stripes`).
- **Accessibility-aware:** Ships with a `prefers-reduced-motion` fallback out of the box.

---

## Browser Support

Uses only standard CSS properties (`transform`, `@keyframes`, `linear-gradient`, `box-shadow`, `background-position`, `flex`, `prefers-reduced-motion`) supported by all modern browsers — Chrome, Firefox, Edge, Safari.

---

## Author

**soumyasekharshee265-ux**
